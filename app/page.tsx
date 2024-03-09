import { Hero } from "@/components";
import Image from "next/image"

// 在页面上键入第一行字:
// export default function Page(){
//     return <h1>Hello Next.js!</h1>
// }
// 页面会出现很多条条道道 和globals.css中的设置有关，删掉就空白了

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}
