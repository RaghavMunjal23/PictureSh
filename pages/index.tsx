import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Flex, useColorMode } from "@chakra-ui/react";
import Feed from "../components/Feed";
import variants from "../utils/variants";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  return (
    <motion.div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: colorMode === "light" ? "#f9f9f9" : "#030303",
      }}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <Head>
        <title>PictureSh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Flex paddingLeft="25px" paddingRight="10px">
        <Feed />
      </Flex>
    </motion.div>
  );
};

export default Home;
