import "../styles/globals.css";
import Navbar from "../components/navbar";
import MainContainer from "../components/main-cotaniner";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    process.env.NEXT_PUBLIC_WEBSITE_URL +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <>
      <Head>
        <link rel="canocical" href={canonicalUrl} />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="flex min-h-screen justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
          <div className="flex h-full w-full max-w-screen-2xl flex-col px-6 md:px-[5vw]">
            <Navbar />
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
