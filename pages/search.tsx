import type { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import Feed from "../components/Feed";
import variants from "../utils/variants";
import { getSession, useSession } from "next-auth/react";
import { UserType } from "../utils/types";
import { wrapper } from "../redux/store";
import { getsearchImages } from "../redux/actions/searchImageActions";

const Search = () => {
  const { colorMode } = useColorMode();
  const { data: session } = useSession();
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
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
      <Navbar isSearch={true} user={session?.user as UserType} />
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context: GetServerSidePropsContext) => {
    const cookie = context?.req?.cookies["next-auth.session-token"];
    await store.dispatch(getsearchImages(context.query.q as string, cookie));
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    return {
      props: {
        session,
      },
    };
  }
);