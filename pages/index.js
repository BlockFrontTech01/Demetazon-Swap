import { useState, useCallback, useEffect } from "react";
import MenuDropdown from "../components/menu-dropdown";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";

const DemetazonSwap = () => {
  const [isMenuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const router = useRouter();
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

  const openMenuDropdown = useCallback(() => {
    setMenuDropdownOpen(true);
  }, []);

  const closeMenuDropdown = useCallback(() => {
    setMenuDropdownOpen(false);
  }, []);

  const onLaunchDappButtonClick = useCallback(() => {
    router.push("/swap-d-app");
  }, [router]);

  const onWhitepaperButtonClick = useCallback(() => {
    router.push("/demetazon-swap-whitepaper");
  }, [router]);

  const onAboutDevButtonClick = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  return (
    <>
      <div className="relative [background:linear-gradient(-90deg,_#0df6e8,_#fa08ff)] w-full h-[2200px] overflow-hidden flex flex-row flex-wrap items-center justify-between py-[212px] px-0 box-border text-center text-mid text-black font-inria-serif lg:h-[2250px] md:h-[4200px] sm:h-[4390px] sm:pt-[2000px] sm:box-border">
        <div className="my-0 mx-[!important] absolute top-[134px] left-[25px] w-[1000px] h-[430px] flex flex-row items-center justify-between z-[0] text-left font-inknut-antiqua lg:w-[800px] md:w-[720px] md:flex-col md:pl-0 md:pt-[100px] md:pr-[350px] md:box-border sm:flex-col sm:pl-0 sm:pt-[100px] sm:pr-[400px] sm:box-border">
          <div
            className="w-[310px] h-[62px] flex flex-row items-center justify-between [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] sm:opacity-[0]"
            data-animate-on-scroll
          >
            <div className="relative whitespace-pre-wrap inline-block w-[310px] h-[62px] shrink-0 sm:w-[300px] sm:h-[50px]">
              <p className="m-0">
                <b>Welcome to Demetazon Swap</b>
              </p>
              <p className="m-0 text-xs font-inika">
                {" "}
                Your ultimate Cross-Chain Defi experience.
              </p>
            </div>
          </div>
          <img
            className="w-[400px] h-[400px] overflow-hidden shrink-0 object-cover [&.animate]:animate-[13s_linear_0s_infinite_alternate-reverse_forwards_scale-up] opacity-[1] [&.animate]:sm:animate-[13s_linear_0s_infinite_alternate-reverse_forwards_scale-up] sm:opacity-[1]"
            alt=""
            src="/frame-32@2x.png"
            data-animate-on-scroll
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[571px] left-[-43px] w-[1200px] h-[201px] flex flex-row items-center justify-start gap-[450px] z-[1] lg:gap-[230px] md:w-[1050px] md:flex-col md:gap-[100px] md:pl-0 md:pt-[200px] md:pr-[450px] md:box-border sm:w-[700px] sm:h-[201px] sm:flex-col sm:gap-[150px] sm:pl-0 sm:pt-[200px] sm:pr-[140px] sm:box-border">
          <div className="relative w-9 h-[21px] overflow-hidden shrink-0" />
          <div
            className="w-[741px] h-[217px] flex flex-row items-center justify-between p-2.5 box-border relative md:w-[600px] [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-bottom] md:opacity-[0]"
            data-animate-on-scroll
          >
            <b
              className="absolute my-0 mx-[!important] w-[calc(100%_-_171px)] bottom-[-8px] left-[85px] inline-block whitespace-pre-wrap h-[217px] z-[0] md:w-[350px] sm:w-[350px] [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-bottom] sm:opacity-[0]"
              data-animate-on-scroll
            >
              <p className="m-0">&nbsp;</p>
              <p className="m-0 text-sm">
                Demetazon Swap is the future of decentralize finance (DeFi) that
                transcends boundaries with cutting edge cross-chain
                interoperability protocol powered by chainlink. our platform
                combines the best features from traditional decentralize
                exchange (DEX) while introducing a revolutionary cross-chain
                bridge for seamless assets swapping between different blockchain
                ecosystems.
              </p>
            </b>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[715px] left-[16px] w-[1496px] flex flex-row items-center justify-center gap-[40px] z-[2] text-2xs text-white font-inika lg:gap-[0px] lg:pr-[300px] lg:box-border md:w-[1470px] md:flex-col md:pl-0 md:pt-[200px] md:pr-[1090px] md:box-border sm:flex-1 sm:h-auto sm:flex-col sm:gap-[0px] sm:pl-0 sm:pt-[800px] sm:pr-[1000px] sm:box-border sm:max-h-0">
          <div className="rounded-11xl w-[350px] h-[350px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-2.5 box-border relative bg-[url('/feature-card1@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div
              className="absolute my-0 mx-[!important] top-[92px] left-[85px] inline-block w-[180px] h-[165px] shrink-0 z-[0] [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] md:opacity-[0] [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] sm:opacity-[0]"
              data-animate-on-scroll
            >
              Demetazon Swap leverages chainlink’s industry-leading technology
              to bridge assets seamlessly across multiple blockchains. Whether
              you’re trading Ethereum-based tokens, Binance smart chain assets
              or assets from any other blockchain, our cross-chain
              interoperability ensures that you access a wide range of tokens
              with ease
            </div>
          </div>
          <div className="rounded-11xl w-[350px] h-[350px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-2.5 box-border relative bg-[url('/feature-card2@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div
              className="absolute my-0 mx-[!important] top-[95px] left-[95px] inline-block w-40 h-40 shrink-0 z-[0] [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] md:opacity-[0] [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] sm:opacity-[0]"
              data-animate-on-scroll
            >
              Our platform offers a deep and diverse liquidity pool that ensure
              that you can trade assets without worrying about slippage. We
              incentivize liquidity providers with generous rewards, attracting
              liquidity to the platform and ensuring that you have ample trading
              options
            </div>
          </div>
          <div className="rounded-11xl w-[350px] h-[350px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-2.5 box-border relative bg-[url('/feature-card3@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div
              className="absolute my-0 mx-[!important] top-[108px] left-[101px] inline-block w-[149px] h-[122px] shrink-0 z-[0] [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] md:opacity-[0] [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] sm:opacity-[0]"
              data-animate-on-scroll
            >
              Demetazon Swap’s intuitive user interface is design for both
              novice and experienced traders. Easily navigate through our
              platform to swap, provide liquidity or stake tokens, all with just
              a few clicks
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[1103px] left-[0px] w-[1512px] flex flex-row items-center justify-center gap-[40px] z-[3] text-2xs text-white font-inika lg:gap-[0px] lg:pr-[300px] lg:box-border md:w-[1470px] md:flex-col md:gap-[82px] md:pl-0 md:pt-[900px] md:pr-[1090px] md:box-border sm:flex-1 sm:h-auto sm:flex-col sm:gap-[0px] sm:pl-0 sm:pt-[1460px] sm:pr-[1000px] sm:box-border sm:max-h-0">
          <div className="rounded-11xl w-[350px] h-[350px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-2.5 box-border relative bg-[url('/feature-card4@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div
              className="absolute my-0 mx-[!important] top-[108px] left-[92px] inline-block w-[149px] h-[148px] shrink-0 z-[0] [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] md:opacity-[0] [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] sm:opacity-[0]"
              data-animate-on-scroll
            >
              We believe in the power of community-driven decision-making.
              Demetazon Swap’s decentralize governance model empowers users to
              propose and vote on changes to the platform, ensuring a truly
              decentralized and community-centric ecosystem .
            </div>
          </div>
          <div className="rounded-11xl w-[350px] h-[350px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-2.5 box-border relative bg-[url('/feature-card5@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div
              className="absolute my-0 mx-[!important] top-[114px] left-[101px] inline-block w-[149px] h-[122px] shrink-0 z-[0] [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] md:opacity-[0] [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] sm:opacity-[0]"
              data-animate-on-scroll
            >
              Security is paramount in DeFi. We implement industry-leading
              security protocols, audit and partner with top security firms to
              protect your assets and data. Your safety and peace of mind is our
              top priority.
            </div>
          </div>
          <div className="rounded-11xl w-[350px] h-[350px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-2.5 box-border relative bg-[url('/feature-card6@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div
              className="absolute my-0 mx-[!important] top-[114px] left-[101px] inline-block w-[149px] h-[122px] shrink-0 z-[0] [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] md:opacity-[0] [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] sm:opacity-[0]"
              data-animate-on-scroll
            >
              Earn passive income by participating in our yield farming and
              staking programs. Stake you DEM tokens to earn rewards and
              participate in the platforms governance. With Demetazon Swap, you
              can make your asset work for you
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[1581px] left-[25px] w-[947px] flex flex-row items-center justify-start gap-[144px] z-[4] md:w-[950px] md:flex-col md:gap-[0px] md:pt-[1700px] md:pb-0 md:pr-[600px] md:pl-0 md:box-border sm:flex-col sm:gap-[200px] sm:pt-[1600px] sm:pr-[600px] sm:pb-0 sm:box-border">
          <div
            className="flex flex-col items-center justify-start [&.animate]:animate-[15s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] opacity-[1] [&.animate]:md:animate-[15s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] md:opacity-[1] [&.animate]:sm:animate-[15s_linear_0s_infinite_alternate-reverse_forwards_bounce-top] sm:opacity-[1]"
            data-animate-on-scroll
          >
            <img
              className="relative w-[441px] h-[378px] object-cover"
              alt=""
              src="/vectary-texture@2x.png"
            />
          </div>
          <div className="w-[362px] h-[217px] flex flex-row items-center justify-between p-2.5 box-border relative md:w-[290px] md:flex-row md:pl-0 md:pr-0 md:box-border">
            <div className="absolute my-0 mx-[!important] w-full bottom-[0px] left-[0px] inline-block h-[217px] z-[0] sm:w-[350px]">
              <p className="m-0">
                <b>&nbsp;</b>
              </p>
              <p className="m-0 text-sm font-inknut-antiqua">
                <span>
                  <b>JOIN THE REVOLUTION</b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <b>&nbsp;</b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <b>
                    Demetazon Swap is poised to redifine the DeFi landscape by
                    offering the most advance cross-chain trading experience.
                    Join us in shaping the future of decentralize finance.
                    Explore our platform, participate in our community and
                    experience DeFi like never before
                  </b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[2165px] left-[18px] flex flex-row items-center justify-center z-[5] text-left text-mini font-inter md:pt-[1970px] md:box-border sm:pt-[2160px] sm:box-border">
          <img
            className="relative rounded-11xl w-[30px] h-[29.6px] object-cover sm:w-5 sm:h-5"
            alt=""
            src="/frame-6@2x.png"
          />
          <div className="relative w-[325px] h-[18px]">
            <div className="absolute top-[-0.1px] left-[8px] font-semibold">
              Copy Rights 2023 Demetazon
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[2067px] left-[-11px] w-96 h-[60px] flex flex-row items-center justify-start py-0 pr-0 pl-[27px] box-border gap-[48px] z-[6] lg:gap-[40px] md:gap-[10px] md:pt-[2000px] md:box-border sm:gap-[10px] sm:pl-5 sm:pt-[2200px] sm:pr-0 sm:box-border">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0 bg-[url('/frame48@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0 bg-[url('/frame81@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0 bg-[url('/frame82@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-11xl w-[60px] h-[60px] overflow-hidden shrink-0 bg-[url('/frame83@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        </div>
        <div className="my-0 mx-[!important] absolute top-[6px] left-[0px] w-[1325px] flex flex-row items-center justify-start gap-[209px] z-[7] lg:gap-[50px] md:pt-0 md:pb-0 md:box-border">
          <div className="w-[205px] h-[90px] flex flex-row items-center justify-start gap-[55px] md:gap-[280px] sm:gap-[225px]">
            <img
              className="relative w-[90px] h-[90px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/logo@2x.png"
            />
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame60@2x.png')] bg-cover bg-no-repeat bg-[top] hidden md:flex"
              onClick={openMenuDropdown}
            />
          </div>
          <div className="w-[911px] flex flex-row items-center justify-center gap-[97px] lg:gap-[50px] md:hidden">
            <button
              className="cursor-pointer [border:none] p-2.5 bg-black rounded-11xl shadow-[0px_3px_0px_8px_#08ff4d] w-[155px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border relative hover:animate-[1s_ease_0s_1_normal_none_shake-horizontal] hover:opacity-[1] lg:w-[155px] lg:h-[30px]"
              onClick={onLaunchDappButtonClick}
            >
              <div className="absolute my-0 mx-[!important] top-[3px] left-[10px] text-xl font-black font-inter text-white text-left inline-block w-[152px] shrink-0 z-[0] lg:w-[180px]">
                Launch DApp
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-2.5 bg-black rounded-11xl shadow-[0px_3px_0px_8px_#08ff4d] w-[155px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border relative hover:animate-[1s_linear_0s_1_normal_none_shake-horizontal] hover:opacity-[1]"
              onClick={onWhitepaperButtonClick}
            >
              <div className="absolute my-0 mx-[!important] top-[7px] left-[9px] w-[186px] h-[30px] z-[0]">
                <div className="absolute top-[-4px] left-[8px] text-xl font-black font-inter text-white text-left inline-block w-[138px]">
                  White Paper
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-2.5 bg-black rounded-11xl shadow-[0px_3px_0px_8px_#08ff4d] w-[155px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border relative hover:animate-[1s_linear_0s_1_normal_none_shake-horizontal] hover:opacity-[1]">
              <div className="absolute my-0 mx-[!important] top-[0px] left-[8.5px] w-[149px] h-[37px] z-[0]">
                <div className="absolute top-[4px] left-[8px] text-xl font-black font-inter text-white text-left inline-block w-[137px]">
                  Community
                </div>
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-2.5 bg-black rounded-11xl shadow-[0px_3px_0px_8px_#08ff4d] w-[155px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border relative hover:animate-[1s_ease_0s_1_normal_none_shake-horizontal] hover:opacity-[1]"
              onClick={onAboutDevButtonClick}
            >
              <div className="absolute my-0 mx-[!important] top-[7px] left-[9px] w-[186px] h-[30px] z-[0]">
                <div className="absolute top-[-3px] left-[14px] text-xl font-black font-inter text-white text-left inline-block w-[126px]">
                  About Dev
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {isMenuDropdownOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.94)"
          placement="Centered"
          onOutsideClick={closeMenuDropdown}
        >
          <MenuDropdown onClose={closeMenuDropdown} />
        </PortalPopup>
      )}
    </>
  );
};

export default DemetazonSwap;
