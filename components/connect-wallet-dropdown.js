import { useCallback, useEffect } from "react";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const ConnectWalletDropdown = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const { open } = useWeb3Modal()

  return (
    <div
      className="rounded-11xl [background:linear-gradient(180deg,_#021058,_#08ff4d)] w-[239px] h-[237px] overflow-hidden [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full text-center text-mini text-white font-inter [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] md:opacity-[0]"
      data-animate-on-scroll
    >
      <b className="absolute top-[25px] left-[28px] inline-block w-[180px]">
        Connect any Wallet via Wallet connect
      </b>
      <b className="absolute top-[191px] left-[-1px] text-[9px] inline-block font-inika w-[237px] h-[31px]">
        By connecting a wallet, you agree to Demetazon Swap Terms of Service and
        privacy policy
      </b>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[94px] left-[95px] rounded-[5px] w-[50px] h-[50px] overflow-hidden bg-[url('/walletconnectbutton@2x.png')] bg-cover bg-no-repeat bg-[top]"
        onClick={() => open()}
      />
    </div>
  );
};

export default ConnectWalletDropdown;
