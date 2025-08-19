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
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.3.2/aframe/build/aframe-ar-nft.min.js"></script>
        <script src="http://localhost:3000/component/mouse-rotate-scale.js"></script>
      </Head>
      <ARViewer />
    </>
  );
}
