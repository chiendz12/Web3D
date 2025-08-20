import Head from 'next/head';
import dynamic from 'next/dynamic';

const ARViewer = dynamic(() => import('../components/ARViewer'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Web3D AR.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ARViewer />
    </>
  );
}
