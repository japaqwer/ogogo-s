import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./logo";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface AppState {
  email: string;
  password: string;
  dateOfBirth: string;
  title: string;
  name: string;
  phoneNumber: string;
  date: string;
  isActive: boolean;
}

export const Register = () => {
  const [state, setState] = useState<AppState>({
    email: "",
    password: "",
    dateOfBirth: "",
    title: "",
    name: "",
    phoneNumber: "",
    date: "",
    isActive: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "checkbox") {
      setState((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.checked,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    const data = {
      email: state.email,
      password: state.password,
      title: state.title,
      name: state.name,
      phoneNumber: state.phoneNumber,
      date: state.date,
      isActive: state.isActive,
    };
    let url = "http://127.0.0.1:8000/api/users/register/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    console.log(data);
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="fg.muted">Don't have an account?</Text>
              <Button variant="text" size="lg">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary">Sign in</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};
