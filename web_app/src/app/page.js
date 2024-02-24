// import Image from "next/image";
import HeaderImage from "./components/HeaderImage";
import HeaderTitle from "./components/HeaderTitle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div> 
     <HeaderTitle />
     <HeaderImage />
     </div>
    </main>
  );
}
