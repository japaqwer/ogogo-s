"use client"

import React, { useState } from "react";
import {
  InputGroup,
  InputRightElement,
  Checkbox,
  Text,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  Image,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
} from "formik";
// import { RootState } from "../store";
import * as Yup from "yup";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { AuthState, registrationAsync } from "./auth/auth.slice";

// Валидационная схема с использованием Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Поле "username" обязательно для заполнения'),
  email: Yup.string()
    .email("Некорректный адрес электронной почты")
    .required('Поле "Email" обязательно для заполнения'),
  password: Yup.string().required('Поле "Пароль" обязательно для заполнения'),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
};
interface AppState {
  auth: {
    isAuth: boolean;
  };
}

const RegistrationForm = () => {
  // const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);
const isAuth: boolean = useSelector((state: AppState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const handleRegistration = async (username: any, email: any, password: any) => {
    const credentials = {
      username: username,
      email: email,
      password: password,
    };
    try {
      // await dispatch(registrationAsync(credentials));
    } catch (error) {
      // Обработка ошибки входа
    }
  };

  const [isRobot, setIsRobot] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
 const handleSubmit = (
   values: any,
   { setSubmitting }: FormikHelpers<FormikValues>
 ) => {
   handleRegistration(values.username, values.email, values.password);
   console.log(values);
   setSubmitting(false);
 };

  return (
    <Box>
      {!isAuth && (
        <Grid templateColumns="1fr 1fr" gap={6}>
          <GridItem flex={1} mr={4}>
            <Image src="/login_icon.svg" alt="Image" objectFit="cover" />
          </GridItem>
          <GridItem flex={1}>
            <Text fontSize={24} mb={3}>
              Sign up
            </Text>
            <HStack spacing={4} mb={4}>
              <Button colorScheme="blue" leftIcon={<FaFacebook />}>
                Facebook
              </Button>
              <Button colorScheme="red" leftIcon={<FaGoogle />}>
                Google
              </Button>
              <Button colorScheme="teal" leftIcon={<FaGithub />}>
                GitHub
              </Button>
            </HStack>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="username">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.username && form.touched.username
                        }
                      >
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Input
                          {...field}
                          id="username"
                          placeholder="Придумайте себе username"
                        />
                        <ErrorMessage
                          name="username"
                          component={FormErrorMessage}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          placeholder="Введите ваш email"
                        />
                        <ErrorMessage
                          name="email"
                          component={FormErrorMessage}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel htmlFor="password">Пароль</FormLabel>
                        <InputGroup display={"flex"}>
                          <Input
                            {...field}
                            type={show ? "text" : "password"}
                            id="password"
                            placeholder="Введите ваш пароль"
                          />
                          <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <ErrorMessage
                          name="password"
                          component={FormErrorMessage}
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Box display={"flex"} alignItems={"center"}>
                    {/* <ReCAPTCHA
                      sitekey="6LeiJwsmAAAAAGsTE7-NTOABQx1HcbvUNZ1_KvoU"
                      onChange={(value) => setIsRobot(!!value)}
                    /> */}
                  </Box>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Войти
                  </Button>
                </Form>
              )}
            </Formik>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
};

export default RegistrationForm;
