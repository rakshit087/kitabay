import { Montserrat } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-primary-bg items-center justify-between p-24 ${montserrat.className}`}
    >
      <ConnectButton
        accountStatus="avatar"
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </main>
  );
}
