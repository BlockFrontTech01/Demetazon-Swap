import { useState, useCallback } from "react";
import ConnectWalletDropdown from "../components/connect-wallet-dropdown";
import PortalPopup from "../components/portal-popup";
import ListOfCoinsDropdown from "../components/list-of-coins-dropdown";
import SettingsDropdown from "../components/settings-dropdown";

const SwapDApp = () => {
  const [isConnectWalletDropdownOpen, setConnectWalletDropdownOpen] =
    useState(false);
  const [isListOfCoinsDropdownOpen, setListOfCoinsDropdownOpen] =
    useState(false);
  const [isListOfCoinsDropdown1Open, setListOfCoinsDropdown1Open] =
    useState(false);
  const [isSettingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [isConnectWalletDropdown1Open, setConnectWalletDropdown1Open] =
    useState(false);

  const openConnectWalletDropdown = useCallback(() => {
    setConnectWalletDropdownOpen(true);
  }, []);

  const closeConnectWalletDropdown = useCallback(() => {
    setConnectWalletDropdownOpen(false);
  }, []);

  const openListOfCoinsDropdown = useCallback(() => {
    setListOfCoinsDropdownOpen(true);
  }, []);

  const closeListOfCoinsDropdown = useCallback(() => {
    setListOfCoinsDropdownOpen(false);
  }, []);

  const openListOfCoinsDropdown1 = useCallback(() => {
    setListOfCoinsDropdown1Open(true);
  }, []);

  const closeListOfCoinsDropdown1 = useCallback(() => {
    setListOfCoinsDropdown1Open(false);
  }, []);

  const openSettingsDropdown = useCallback(() => {
    setSettingsDropdownOpen(true);
  }, []);

  const closeSettingsDropdown = useCallback(() => {
    setSettingsDropdownOpen(false);
  }, []);

  const openConnectWalletDropdown1 = useCallback(() => {
    setConnectWalletDropdown1Open(true);
  }, []);

  const closeConnectWalletDropdown1 = useCallback(() => {
    setConnectWalletDropdown1Open(false);
  }, []);

  return (
    <>
      <div className="relative [background:linear-gradient(180deg,_#0df6e8,_rgba(4,_44,_255,_0.98))] w-full h-[697px] overflow-hidden flex flex-row items-center justify-center py-[30px] px-0 box-border gap-[99px] text-left text-mini text-black font-inter lg:items-start lg:justify-center lg:content-center md:h-[900px] mq350small:flex-row">
        <div className="w-[1360px] h-[552px] flex flex-col items-center justify-start gap-[44px] z-[0] lg:gap-[80px] md:gap-[90px] md:pl-0 md:pr-2.5 md:box-border sm:gap-[90px]">
          <div className="w-[1360px] h-[89px] flex flex-row items-center justify-between pt-0 px-0 pb-[150px] box-border lg:self-stretch lg:w-auto lg:flex-1 lg:flex-row lg:gap-[900px] lg:items-center lg:justify-start lg:pb-[50px] lg:box-border md:gap-[190px] md:pl-0 md:pr-0 md:pb-[70px] md:box-border sm:h-20 sm:gap-[150px] sm:pb-20 sm:box-border">
            <img
              className="relative rounded-11xl w-[90px] h-[90px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/logo1@2x.png"
            />
            <button
              className="cursor-pointer [border:none] py-[9px] px-[7px] bg-yellow-200 rounded-11xl shadow-[0px_4px_0px_8px_#ff0a0a] w-[133px] overflow-hidden shrink-0 flex flex-col items-center justify-center box-border hover:bg-aquamarine-200 hover:animate-[1s_ease_0s_1_normal_none_shake-horizontal] hover:opacity-[1]"
              onClick={openConnectWalletDropdown}
            >
              <div className="relative w-[116px] h-[18px] z-[0]">
                <div className="absolute top-[0px] left-[0px] text-mini font-black font-inter text-black text-left">
                  Connect Wallet
                </div>
              </div>
            </button>
          </div>
          <div className="rounded-11xl bg-lime shadow-[0px_0px_0px_8px_#000] w-[356px] h-[339px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[200px] px-0 pb-0 box-border relative sm:pr-[300px] sm:box-border">
            <div className="my-0 mx-[!important] absolute top-[56.5px] left-[0px] w-[356px] h-[69px] flex flex-col items-start justify-start gap-[10px] z-[4]">
              <div className="rounded-11xl bg-yellow-100 w-[356px] h-[69px] overflow-hidden shrink-0 z-[0]" />
              <div className="absolute my-0 mx-[!important] top-[25px] left-[275px] font-black z-[1]">
                ETH
              </div>
              <input
                className="[border:none] font-black font-inter text-mini bg-[transparent] absolute my-0 mx-[!important] top-[25px] left-[28px] text-black text-left inline-block z-[2]"
                placeholder="0.00"
                type="text"
              />
              <img
                className="my-0 mx-[!important] absolute top-[14px] left-[215px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/eth-icon@2x.png"
              />
              <img
                className="my-0 mx-[!important] absolute top-[14px] left-[306px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover cursor-pointer z-[4]"
                alt=""
                src="/frame-22@2x.png"
                onClick={openListOfCoinsDropdown}
              />
            </div>
            <div className="my-0 mx-[!important] absolute top-[170.5px] left-[0px] w-[356px] h-[69px] flex flex-col items-start justify-start gap-[10px] z-[3]">
              <div className="rounded-11xl bg-yellow-100 w-[356px] h-[69px] overflow-hidden shrink-0 z-[0]" />
              <div className="absolute my-0 mx-[!important] top-[25px] left-[275px] font-black z-[1]">
                BTC
              </div>
              <input
                className="[border:none] font-black font-inter text-mini bg-[transparent] absolute my-0 mx-[!important] top-[25px] left-[28px] text-black text-left inline-block z-[2]"
                placeholder="0.00"
                type="text"
              />
              <img
                className="my-0 mx-[!important] absolute top-[14px] left-[215px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/btc-icon@2x.png"
              />
              <img
                className="my-0 mx-[!important] absolute top-[14px] left-[307px] rounded-11xl w-10 h-10 overflow-hidden shrink-0 object-cover cursor-pointer z-[4]"
                alt=""
                src="/frame-22@2x.png"
                onClick={openListOfCoinsDropdown1}
              />
            </div>
            <img
              className="my-0 mx-[!important] absolute top-[0.5px] left-[302px] rounded-11xl w-[45px] h-[45px] overflow-hidden shrink-0 object-cover cursor-pointer z-[2]"
              alt=""
              src="/settingd-card@2x.png"
              onClick={openSettingsDropdown}
            />
            <img
              className="my-0 mx-[!important] absolute top-[125.5px] left-[156px] rounded-11xl w-[45px] h-[45px] overflow-hidden shrink-0 object-cover z-[1]"
              alt=""
              src="/auto-renew-card@2x.png"
            />
            <button
              className="cursor-pointer [border:none] py-[9px] px-[7px] bg-yellow-200 my-0 mx-[!important] absolute top-[280.5px] left-[112px] rounded-11xl shadow-[0px_4px_0px_8px_#ff0a0a] w-[133px] overflow-hidden flex flex-col items-center justify-center box-border z-[0] hover:bg-aquamarine-300 hover:animate-[1s_linear_0s_1_normal_none_shake-horizontal] hover:opacity-[1] md:hover:bg-aquamarine-300"
              onClick={openConnectWalletDropdown1}
            >
              <div className="relative w-[116px] h-[18px] z-[0]">
                <div className="absolute top-[0px] left-[0px] text-mini font-black font-inter text-black text-left">
                  Connect Wallet
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[650px] left-[39px] flex flex-row items-center justify-center z-[1] md:pt-[190px] md:box-border">
          <img
            className="relative rounded-11xl w-[30px] h-[29.6px] object-cover sm:w-5 sm:h-5"
            alt=""
            src="/frame-61@2x.png"
          />
          <div className="relative w-[325px] h-[18px]">
            <div className="absolute top-[-0.1px] left-[8px] font-medium">
              Copy Rights 2023 Demetazon
            </div>
          </div>
        </div>
      </div>
      {isConnectWalletDropdownOpen && (
        <PortalPopup
          placement="Top left"
          onOutsideClick={closeConnectWalletDropdown}
        >
          <ConnectWalletDropdown onClose={closeConnectWalletDropdown} />
        </PortalPopup>
      )}
      {isListOfCoinsDropdownOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closeListOfCoinsDropdown}
        >
          <ListOfCoinsDropdown onClose={closeListOfCoinsDropdown} />
        </PortalPopup>
      )}
      {isListOfCoinsDropdown1Open && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closeListOfCoinsDropdown1}
        >
          <ListOfCoinsDropdown onClose={closeListOfCoinsDropdown1} />
        </PortalPopup>
      )}
      {isSettingsDropdownOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closeSettingsDropdown}
        >
          <SettingsDropdown onClose={closeSettingsDropdown} />
        </PortalPopup>
      )}
      {isConnectWalletDropdown1Open && (
        <PortalPopup
          placement="Top left"
          onOutsideClick={closeConnectWalletDropdown1}
        >
          <ConnectWalletDropdown onClose={closeConnectWalletDropdown1} />
        </PortalPopup>
      )}
    </>
  );
};

export default SwapDApp;
