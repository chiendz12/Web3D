import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.3.2/aframe/build/aframe-ar-nft.min.js"></script>
        <script src="http://localhost:3000/component/mouse-rotate-scale.js"></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
