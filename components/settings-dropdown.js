import { useEffect } from "react";

const SettingsDropdown = () => {
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
  return (
    <div
      className="rounded-11xl [background:linear-gradient(180deg,_#08ff4d,_#f6fb08)] w-[286px] h-44 overflow-hidden flex flex-col items-center justify-between pt-[200px] px-0 pb-0 box-border relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full text-left text-smi text-black font-inter"
      data-animate-on-scroll
    >
      <div className="absolute my-0 mx-[!important] top-[66px] left-[25px] font-semibold inline-block w-[84px] h-[17px] shrink-0 z-[3]">
        Max slippage
      </div>
      <div className="absolute my-0 mx-[!important] top-[98px] left-[25px] font-semibold inline-block w-[145px] h-[17px] shrink-0 z-[2]">
        Transaction deadline
      </div>
      <div className="absolute my-0 mx-[!important] top-[98px] left-[222px] font-semibold inline-block w-[58px] h-[17px] shrink-0 z-[1]">
        30 Min
      </div>
      <div className="absolute my-0 mx-[!important] top-[66px] left-[230px] font-semibold inline-block w-[42px] h-[17px] shrink-0 z-[0]">
        Auto
      </div>
    </div>
  );
};

export default SettingsDropdown;
