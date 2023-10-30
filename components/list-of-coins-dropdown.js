import { useEffect } from "react";

const ListOfCoinsDropdown = () => {
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
      className="rounded-11xl [background:linear-gradient(180deg,_#08ff4d,_#f6fb08)] w-[286px] h-[357px] overflow-hidden flex flex-col items-center justify-between pt-[200px] px-0 pb-0 box-border relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-full max-h-full text-left text-mini text-black font-inter"
      data-animate-on-scroll
    >
      <div className="absolute my-0 mx-[!important] top-[35px] left-[77px] w-[31px] h-10 z-[9]">
        <div className="absolute top-[9px] left-[0px] font-black">ETH</div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[98px] left-[77px] w-[31px] h-10 z-[8]">
        <div className="absolute top-[9px] left-[0px] font-black">BTC</div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[161px] left-[78px] w-[31px] h-10 z-[7]">
        <div className="absolute top-[9px] left-[0px] font-black">USDT</div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[224px] left-[78px] w-[31px] h-10 z-[6]">
        <div className="absolute top-[9px] left-[0px] font-black">BNB</div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[287px] left-[78px] w-[31px] h-10 z-[5]">
        <div className="absolute top-[9px] left-[0px] font-black">USDC</div>
      </div>
      <img
        className="my-0 mx-[!important] absolute top-[35px] left-[22px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover z-[4]"
        alt=""
        src="/eth-icon@2x.png"
      />
      <img
        className="my-0 mx-[!important] absolute top-[98px] left-[22px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover z-[3]"
        alt=""
        src="/btc-icon@2x.png"
      />
      <img
        className="my-0 mx-[!important] absolute top-[161px] left-[22px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover z-[2]"
        alt=""
        src="/usdt-icon@2x.png"
      />
      <img
        className="my-0 mx-[!important] absolute top-[224px] left-[22px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover z-[1]"
        alt=""
        src="/bnb-icon@2x.png"
      />
      <img
        className="my-0 mx-[!important] absolute top-[287px] left-[22px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover z-[0]"
        alt=""
        src="/usdc-icon@2x.png"
      />
    </div>
  );
};

export default ListOfCoinsDropdown;
