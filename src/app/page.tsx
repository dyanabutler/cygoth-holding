import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-gray-50">
      <div className="space-y-6 text-center">
        <div className="text-3xl font-bold animate-pulse">Soon, the eyes see all</div>
        <Image
          alt="Animated GIF"
          className="rounded-lg"
          height={300}
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width={300}
        />
        <Link
          className="inline-flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          Join the Discord
        </Link>
      </div>
    </div>
  )
}
