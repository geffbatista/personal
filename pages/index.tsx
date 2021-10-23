import Head from "next/head";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <Head>
        <title>Gefferson Batista - Front End Developer </title>
        <meta
          name="description"
          content="Gefferson Batista - Front End Developer"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col items-left justify-center w-full flex-1 px-8 text-left text-gray-300">
        <h1 className="text-6xl font-bold">Gefferson Batista </h1>
        <h2 className="text-2x1 font-bold">Front End Developer</h2>
      </main>
    </div>
  );
};

export default Home;
