import Head from "next/head";

const ServerError = () => {
  return (
    <>
      <Head>
        <title>Internal server error</title>
      </Head>
      <div className="text-xl">Internal server error!</div>
    </>
  );
};
export default ServerError;
