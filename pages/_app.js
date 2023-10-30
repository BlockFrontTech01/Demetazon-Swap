import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'

const projectId = 'a21cb996ff58de96454e5590295e891f'
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
createWeb3Modal({ wagmiConfig, projectId, chains })

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
    <Fragment>
      <Head>
        <title>Demetazon Swap</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
    </WagmiConfig>
  );
}

export default MyApp;
