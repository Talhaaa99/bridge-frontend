import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import truncateEthAddress from "truncate-eth-address";
import ConnectToWalletConnect from "web3modal/dist/providers/connectors/walletconnect";
import { Web3Button } from "@web3modal/react";

interface Props {
  icon?: "show" | "hide";
  label?: string;
}

type AddressType = "0x456d609DF071d620aAfAB68561a65A2A26077100";

function WalletConnect(): JSX.Element {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  console.log(address);
  if (!isConnected) {
    return (
      <Web3Button balance="hide" icon="show" label="Connect Wallet">
        {/* {" "}
        <div className="flex flex-row p-4 bg-[#3964FA] text-[#E3E9FF] space-x-2 rounded-2xl">
          <img
            src="./walletconnect.svg"
            className="bg-white rounded-full"
          ></img>
          <p className="text-base font-bold">Connect Wallet</p>
        </div> */}
      </Web3Button>
    );
  } else {
    return (
      <button onClick={() => disconnect()}>
        <div className="flex flex-row p-4 bg-[#E3E9FF] text-[#3964FA] space-x-2 rounded-2xl">
          <img
            src="./walletconnect.svg"
            className="bg-white rounded-full"
          ></img>
          <p className="text-base font-bold">{truncateEthAddress(address)}</p>
        </div>
      </button>
    );
  }
}

export default WalletConnect;
