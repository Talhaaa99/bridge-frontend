import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Dropdown from "../components/Dropdown";

export default function Home() {
  return (
    <div className="bg-[#F2F2F5] h-screen w-full">
      <header className="flex flex-row justify-between px-20 py-6">
        <h1 className="flex font-bold text-[32px]">Bridge</h1>
        <button className="flex flex-row border">Wallet Connect</button>
      </header>
      <form className="h-[1032px] w-[552px] bg-white m-auto rounded-[40px] p-5">
        <h2 className="text-base font-medium leading-8 tracking-wide text-[#02061D]">
          From
        </h2>
        <div className="grid grid-cols-2 gap-8 bg-[#F1F2F7] px-6 py-4 mt-2 mb-8 rounded-2xl">
          <div>
            <h2 className="text-base font-medium tracking-wide mb-4">
              Network
            </h2>
            <Dropdown />
          </div>
          <div>
            <h2 className=" text-base font-medium trakcing-wide mb-4">Token</h2>
            <Dropdown />
          </div>
        </div>
        <h2 className="text-base font-medium tracking-wide leading-8 text-[#02061D]">
          To
        </h2>
        <div className="px-6 py-4 mt-2 mb-8 bg-[#F1F2F7] rounded-2xl">
          <Dropdown />
        </div>

        <h2 className="text-base font-normal tracking-wide text-[#02061D]">
          Recieving Address
        </h2>

        <input
          className="flex flex-row bg-[#f2f2f5] px-6 py-4 mt-2 mb-8 rounded-2xl w-full border-none"
          type="text"
          placeholder="Binance Chain recieving wallet address"
        />

        <div>
          <div className="flex flex-row justify-between align-center">
            <h2 className="text-base font-normal tracking-wide text-[#02061D]">
              Amount
            </h2>
            <h2 className="text-base font-normal leading-4 tracking-wide text-[#02061D]">
              Balance: 25,000 USDT
            </h2>
          </div>

          <input
            className="flex flex-row bg-[#f2f2f5] px-6 py-4 mt-2 mb-8 rounded-2xl w-full border-none placeholder-text-[#02061D]"
            type="text"
            placeholder="Enter amount from (0 - 100,000)"
          />
        </div>
        <h2 className="text-base font-medium tracking-wide text-[#02061D] mb-4">
          Summary
        </h2>
        <div className="flex flex-row bg-[#D7263D]/10 p-4 mt-2 rounded-lg">
          <p className="text-[#D7263D]">
            To avoid your transaction from getting stuck we suggest using the
            max fee
          </p>
        </div>
        {/* info */}
        <div className="p-4 space-y-4">
          <div className="flex flex-inline  text-base justify-between align-center">
            <p className="self-center">Source:</p>
            <div className="flex flex-inline space-x-2 justify-center">
              <p className="font-bold">0x1234567890</p>
              <img src="./poly.png" className="h-8 w-8"></img>
            </div>
          </div>
          <div className="flex flex-inline text-base justify-between  items-center">
            <p className="">Destination:</p>
            <div className="flex items-start space-x-2">
              <p className="font-bold">0x1234567890</p>
              <img src="./poly.png" className=" h-8 w-8"></img>
            </div>
          </div>
          <div className="flex flex-row text-base justify-between  items-center">
            <p className="">Recieving Amount:</p>
            <p className="font-bold">998 USDC</p>
          </div>
          <div className="flex flex-row text-base justify-between  items-center">
            <p className="">Fee:</p>
            <p className="font-bold">2 USDC</p>
          </div>
          <div className="flex flex-row text-base justify-between  items-center">
            <p className="">Total:</p>
            <p className="font-bold">1000 USDC</p>
          </div>
        </div>
        <button className=" w-[512px] h-[72px] bg-[#3964FA] shadow-[#516AE44D] rounded-2xl text-white font-semibold">
          Continue
        </button>
      </form>
    </div>
  );
}
