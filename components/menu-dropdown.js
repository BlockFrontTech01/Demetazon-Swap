import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const MenuDropdown = () => {
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

  const onLaunchDappButtonClick = useCallback(() => {
    router.push("/swap-d-app");
  }, [router]);

  const onWhitepaperButtonClick = useCallback(() => {
    router.push("/demetazon-swap-whitepaper");
  }, [router]);

  const onAboutDevButtonClick = useCallback(() => {
    window.open("https://jeff-space.onrender.com");
  }, []);

  return (
    <div
      className="rounded-11xl bg-navy w-[374px] h-[410px] overflow-hidden flex flex-col items-center justify-between pt-[200px] px-0 pb-0 box-border relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full max-h-full [&.animate]:sm:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] sm:opacity-[0]"
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] my-0 mx-[!important] absolute top-[69px] left-[104px] w-[170px] h-[33px] flex flex-col items-start justify-start z-[3]"
        onClick={onLaunchDappButtonClick}
      >
        <div className="relative rounded-11xl bg-black shadow-[0px_3px_0px_8px_#1cff08] w-[170px] h-[25px] overflow-hidden shrink-0 hover:bg-yellow-300 active:bg-crimson-100 active:animate-[1s_linear_0s_1_normal_none_shake-horizontal] active:opacity-[1]">
          <div className="absolute top-[1px] left-[18px] text-xl font-black font-inter text-white text-left">
            Launch DApp
          </div>
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] my-0 mx-[!important] absolute top-[138px] left-[104px] w-[170px] h-[33px] flex flex-col items-start justify-start z-[2]"
        onClick={onWhitepaperButtonClick}
      >
        <div className="relative rounded-11xl bg-black shadow-[0px_3px_0px_8px_#1cff08] w-[170px] h-[25px] overflow-hidden shrink-0 hover:bg-crimson-200 active:bg-aquamarine-100 active:animate-[1s_linear_0s_1_normal_none_shake-horizontal] active:opacity-[1]">
          <div className="absolute top-[1px] left-[25px] text-xl font-black font-inter text-white text-left">
            Whitepaper
          </div>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] my-0 mx-[!important] absolute top-[207px] left-[104px] w-[170px] h-[33px] flex flex-col items-start justify-start z-[1]">
        <div className="relative rounded-11xl bg-black shadow-[0px_3px_0px_8px_#1cff08] w-[170px] h-[25px] overflow-hidden shrink-0 hover:bg-red-100 active:bg-red-200 active:animate-[1s_linear_0s_1_normal_none_shake-horizontal] active:opacity-[1]">
          <div className="absolute top-[1px] left-[25px] text-xl font-black font-inter text-white text-left">
            Community
          </div>
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] my-0 mx-[!important] absolute top-[276px] left-[104px] w-[170px] h-[33px] flex flex-col items-start justify-start z-[0]"
        onClick={onAboutDevButtonClick}
      >
        <div className="relative rounded-11xl bg-black shadow-[0px_3px_0px_8px_#1cff08] w-[170px] h-[25px] overflow-hidden shrink-0 hover:bg-fuchsia active:bg-gold active:animate-[1s_linear_0s_1_normal_none_shake-horizontal] active:opacity-[1]">
          <div className="absolute top-[1px] left-[32px] text-xl font-black font-inter text-white text-left">
            About Dev
          </div>
        </div>
      </button>
    </div>
  );
};

export default MenuDropdown;
