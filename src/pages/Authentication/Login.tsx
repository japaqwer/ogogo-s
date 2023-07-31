import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
// import { useHistory } from "react-router-dom";

interface State {
  email_or_phone_number: string;
  password: string;
}

const Login: React.FC = () => {
  const [state, setState] = useState<State>({
    email_or_phone_number: "",
    password: "",
  });

  // const history = useHistory()
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email_or_phone_number, password } = state;
    const url = "http://127.0.0.1:8000/api/users/login/";

    axios
      .post(url, { email_or_phone_number, password })
      .then((res) => {
        console.log("Login successful");
        // Additional actions after successful login

        // Redirect to the homepage
        router.push("/");
      })
      .catch((err) => {
        console.log("Invalid email or password");
        // Handling login errors
      });

    console.log(state);
  };

  return (
    <Box rounded={"lg"} boxShadow={"lg"} p={8}>
      <Flex
        minH={"70vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("white", "white")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={6} px={3}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "white")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} color={"black"}>
                Логин
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"} align={"center"}>
                Войдите,указав свою электронную почту
              </Text>
            </Stack>

            <form onSubmit={handleSubmit}>
              <Box mt={8}>
                <Input
                  type="email"
                  placeholder="Email"
                  id="email_or_phone_number"
                  value={state.email_or_phone_number}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Box mt={8}>
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
              </Box>
              <Flex justifyContent="space-between" mt={8}>
                <Button type="submit">Login</Button>
                <Link
                  href="/Authentication/Register"
                  fontSize={"15px"}
                  color={"#009B95"}
                >
                  Зарегистрироваться
                </Link>
              </Flex>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;
