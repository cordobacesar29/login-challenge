"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { SnackBarProvider } from "./provider/SnackBarProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'#F6F6F6'}}>
        <ChakraProvider>
          <SnackBarProvider>{children}</SnackBarProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
