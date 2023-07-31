
import React, { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Box, Button, Flex, Heading, Input, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
// import { Button } from "reactstrap";

interface State {
  email: string;
  password: string;
  name: string;
  phone_number: string;
  is_active: boolean;
}

class Register extends React.Component<{}, State> {
  state: State = {
    email: "",
    password: "",
    name: "",
    phone_number: "",
    is_active: false,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      ...this.state,
      [e.target.id]: value,
    } as Pick<State, keyof State>);
  };


  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      phone_number: this.state.phone_number,
      is_active: this.state.is_active,
    };
    let url = "http://127.0.0.1:8000/api/users/register/";
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    console.log(data);
  };

  render() {
    return (
      <Box
        rounded={"lg"}
        // bg={"white"}
        boxShadow={"lg"}
        p={8}
      >
        <Flex
          minH={"70vh"}
          align={"center"}
          justify={"center"}
          // bg={useColorModeValue("white", "white")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={6} px={3}>
            <Box
              rounded={"lg"}
              // bg={useColorModeValue("white", "white")}
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
              <form onSubmit={this.handleSubmit}>
                <Box mt={8}>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="text"
                    placeholder="Name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Box mt={8}>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    id="phone_number"
                    value={this.state.phone_number}
                    onChange={this.handleChange}
                    required
                  />
                </Box>
                <Flex justifyContent="space-between" alignItems="center" mt={8}>
                  <Button type="submit">Register</Button>
                  <Link
                    href="/Authentication/Login"
                    fontSize={"15px"}
                    color={"#009B95"}
                  >
                    Уже есть аккаунт
                  </Link>
                </Flex>
              </form>
            </Box>
          </Stack>
        </Flex>
      </Box>
    );
  }
}

export default Register;
