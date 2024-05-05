import Image from "next/image"
import Link from "next/link"
import Button from "./components/Buttonnp"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-50">
      <div className="space-y-6 text-center">
        <div className="animate-text bg-gradient-to-r from-indigo-400 via-black to-indigo-400 bg-clip-text text-transparent text-xl font-king shadow-2xl ">Soon, the eyes see all</div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Image
            alt="Animated GIF"
            className="rounded-lg"
            height={300}
            src="/eye.gif"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width={300}
          />
        </div>
        
        <Button link="https://discord.gg/5yydr8Hd" label="Discord Invite Link" actionLabel="Become an OG in the Discord " />
      </div>
     
    </div>
   
  )
}
