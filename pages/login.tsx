import React, { useState } from "react";
import Head from "next/head";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Login = () => {
  const [displayLogin, setDisplayLogin] = useState(false);
  const words = [
    "PictureSh",
    "A place where you can",
    "share and collect images",
    "of anything you find intersting.",
  ];
  const { text } = useTypewriter({
    words,
    loop: 1,
    onLoopDone() {
      setDisplayLogin(true);
    },
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div>
      <Head>
        <title>PictureSh - Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="black"
        overflow="hidden"
      >
        <Flex position="relative" width="100%" height="100%">
          <video
            src="/assets/background.mp4"
            loop
            controls={false}
            muted
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Flex>
        <Flex
          position="absolute"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          background="blackAlpha.500"
          width="100%"
          height="100%"
        >
          <Flex
            flexDirection="column"
            gap="1rem"
            width="80%"
            alignItems="center"
          >
            <Heading color="white" fontSize="5xl" textAlign="center">
              {text}
              <Cursor cursorStyle="_" />
            </Heading>
            {displayLogin ? (
              <div>
                <Button
                  leftIcon={<FcGoogle />}
                  variant="solid"
                  borderRadius="lg"
                >
                  Continue with google
                </Button>
              </div>
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Login;
