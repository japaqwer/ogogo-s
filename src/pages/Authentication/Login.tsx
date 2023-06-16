import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Box>
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
            <Stack spacing={4} mt={9}>
              <FormControl id="email">
                <FormLabel color={"rgba(0, 0, 0, 0.4)"}>Телефон</FormLabel>
                <InputGroup>
                  <InputLeftAddon
                    children="+996"
                    borderColor={"black"}
                    _hover={{ borderColor: "black" }}
                    typeof="number"
                    color={"black"}
                  />
                  <Input
                    type="numder"
                    color={"black"}
                    borderColor={"black"}
                    _hover={{ borderColor: "black" }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="password">
                <FormLabel color={"rgba(0, 0, 0, 0.4)"}>Пароль</FormLabel>

                <Input
                  type="password"
                  color={"black"}
                  borderColor={"black"}
                  _hover={{ borderColor: "black" }}
                />
              </FormControl>
              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                >
                  <Link fontSize={"15px"} color={"#009B95"}>
                    Забыли пароль?
                  </Link>
                </Stack>
                <Button
                  bg={"#009B95"}
                  color={"blax"}
                  _hover={{
                    bg: "#009B95",
                  }}
                >
                  Войти
                </Button>
                <Link
                  href="/Authentication/Register"
                  fontSize={"15px"}
                  color={"#009B95"}
                >
                  Зарегистрироваться
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
