import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import Feed from "../../components/Feed";

const Search = () => {
  const { colorMode } = useColorMode();
  return (
    <motion.div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: colorMode === "light" ? "#f9f9f9" : "#030303",
      }}
    >
      <Head>
        <title>PictureSh - Search results</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isSearch={true} />
      <Flex
        paddingLeft="25px"
        paddingRight="10px"
        flexDirection="column"
        marginTop="50px"
      >
        <Heading
          fontSize="lg"
          fontWeight="bold"
          marginTop="30px"
          marginLeft="-10px"
        >
          Search results
        </Heading>
        <Feed isSearch={true} />
      </Flex>
    </motion.div>
  );
};

export default Search;
