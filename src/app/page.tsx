"use client";
import { Center } from "@chakra-ui/react";
import { LoginContainer } from "./components/loginContainer";

export default function Home() {
  return (
    <Center minH={'100vh'}>
      <LoginContainer />
    </Center>
  );
}
