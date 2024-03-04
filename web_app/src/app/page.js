// import Image from "next/image";
import HeaderImage from "./components/HeaderImage";
import HeaderTitle from "./components/HeaderTitle";
import News from "./components/News";

export default function Home() {
  //<!--HeaderImage /-->
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div> 
           <HeaderTitle />
     </div>
     <div><News/></div>
    </main>
  );
}
