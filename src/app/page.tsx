import Image from "next/image"
import Link from "next/link"
import Button from "./components/Button"
import SideNav from "./components/SideNav"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-50">
      <div className="space-y-6 text-center">
        <SideNav />
        <div className="animate-text bg-gradient-to-r from-indigo-400 via-black to-indigo-400 bg-clip-text text-transparent text-xl font-king shadow-2xl">Soon, the eyes see all</div>
        <div className="flex justify-center w-full">
          <div className="relative h-72 w-72">  {/* Adjust the size as needed */}
            <Image
              alt="Animated GIF"
              className="rounded-lg object-cover"  // Tailwind CSS for styling
              layout="fill"  // Adjust layout to fill the container
              src="/eye.gif"
            />
          </div>
        </div>
        <Button link="https://discord.gg/5yydr8Hd" label="Discord Invite Link" actionLabel="Become an OG in the Discord" />
      </div>
    </div>
  )
}
