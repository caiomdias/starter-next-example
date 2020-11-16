import React from 'react';

import Head from 'next/head';

import ImageExample from '../assets/image.svg';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Starter Next</title>
    </Head>

    <main>
      <ImageExample />
      <h1>
        Pagina inicial
      </h1>
    </main>
  </div>
);

export default Home;
