import { SheetTrigger, SheetClose, SheetContent, Sheet } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React, { SVGProps } from 'react';
import Image from "next/image";
import Home from "@/app/home-icon.png"
import Info from "@/app/info.png"
import White from "@/app/whitelist.png"
import Discord from "@/app/discord.svg"

export default function Component() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 ml-4">
      <Sheet>
        <SheetTrigger asChild>
          <ArrowRightIcon className="h-6 w-6 animate-pulse" />
        </SheetTrigger>
        <SheetContent className="w-64 bg-black dark:bg-black shadow-lg" side="left">
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center justify-between border-b px-4">
              <Link className="flex items-center gap-2 text-indigo-400 font-semibold" href="#">
                <MountainIcon className="h-6 w-6" />
                <span>CYGOTH CLUB</span>
              </Link>
              <SheetClose asChild>
                {/* <Button className="rounded-full" size="icon" variant="ghost">
                  <XIcon className="h-5 w-5" />
                </Button> */}
              </SheetClose>
            </div>
            <nav className="flex-1 space-y-2 py-4">
              {[
                { href: "#", icon: <HomeIcon />, text: "Home" },
                { href: "/about", icon: <InfoIcon  />, text: "Info" },
                { href: "/whitelist", icon: <WhitelistIcon />, text: "Whitelist" },
                { href: "#", icon: <OpenSeaIcon />, text: "View on Opensea" }
              ].map(({ href, icon, text }) => (
                <Link
                  key={text}
                  className="flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-800 focus:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                  href={href}
                >
                  {icon}
                  {text}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-between border-t px-4 py-2">
              <div className="flex gap-2">
                <Link className="rounded-full p-2 hover:bg-indigo-800 dark:hover:bg-gray-800" href="#">
                  <XIcon2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link className="rounded-full p-2 hover:bg-indigo-800 dark:hover:bg-gray-800" href="#">
                  <WarpcastIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link className="rounded-full p-2 hover:bg-indigo-800 dark:hover:bg-gray-800" href="#">
                  <DrakulaIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </Link>
                <Link className="rounded-full p-2 hover:bg-indigo-800 dark:hover:bg-gray-800" href="#">
                  <DiscIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

interface IconProps extends SVGProps<SVGSVGElement> {}

function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BarChartIcon(props: IconProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function WarpcastIcon(props: IconProps) {
  return (
    <svg
    {...props}
    width="32"
    height="32"
    viewBox="0 0 1260 1260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_2)">
      <path
        d="M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z"
        fill="#472A91"
      />
      <path
        d="M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_2">
        <rect width="1259.61" height="1259.61" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  );
}

// function HomeIcon(props: IconProps) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   );
// }

function HomeIcon() {
  return (
    <div className="h-7 w-7 relative">  
      <Image
        src={Home}  // Update this path to your webp image's location
        alt="Home Icon"
        layout="fill"  // This will make the image fill the container
        objectFit="contain"  // Adjust according to how you want the image to fit in the container
      />
    </div>
  );
}

function InfoIcon() {
  return (
    <div className="h-7 w-7 relative">  
      <Image
        src={Info}  // Update this path to your webp image's location
        alt="Info Icon"
        layout="fill"  // This will make the image fill the container
        objectFit="contain"  // Adjust according to how you want the image to fit in the container
      />
    </div>
  );
}

function WhitelistIcon() {
  return (
    <div className="h-7 w-7 relative">  
      <Image
        src={White}  // Update this path to your webp image's location
        alt="Whitelist Icon"
        layout="fill"  // This will make the image fill the container
        objectFit="contain"  // Adjust according to how you want the image to fit in the container
      />
    </div>
  );
}

function OpenSeaIcon() {
  return (
    <div className="h-7 w-7 relative">  
      <Image
        src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg"  // Update this path to your webp image's location
        alt="Whitelist Icon"
        layout="fill"  // This will make the image fill the container
        objectFit="contain"  // Adjust according to how you want the image to fit in the container
      />
    </div>
  );
}

function MountainIcon(props: IconProps) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}





function CastIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <path d="M2 12a9 9 0 0 1 8 8" />
      <path d="M2 16a5 5 0 0 1 4 4" />
      <line x1="2" x2="2.01" y1="20" y2="20" />
    </svg>
  )
}


function DiscIcon(props: IconProps) {
  return (
    <div className="h-5 w-5 relative">  
      <Image
        src={Discord} // Update this path to your webp image's location
        alt="Whitelist Icon"
        layout="fill"  // This will make the image fill the container
        objectFit="contain"  // Adjust according to how you want the image to fit in the container
      />
    </div>
  )
}





function TwitterIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function UsersIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <g>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </g>
    </svg>
  )
}

function XIcon2(props: IconProps) {
  return (
    <div className="h-5 w-5 relative">  
    <Image
      src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg"  // Update this path to your webp image's location
      alt="twitter X Icon"
      layout="fill"  // This will make the image fill the container
      objectFit="contain"  // Adjust according to how you want the image to fit in the container
    />
  </div>
  )
}




function YoutubeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}


function DrakulaIcon(props: IconProps) {
  return (
    <svg
    {...props}
    width="77"
    height="78"
    viewBox="0 0 77 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="0.0498047" width="77" height="77" rx="18" fill="url(#paint0_linear_46_2)" />
    <path d="M28.1398 53.0498C24.0766 53.0498 17.0215 56.6242 15.5054 59.6881L15 60.1987L17.0215 77.0498H58.4624L62 59.1774C60.6523 57.3051 54.1317 53.0498 48.8602 53.0498C43.3011 53.0498 40.2688 55.603 39.2581 56.6243C36.7312 55.0923 33.6989 53.0498 28.1398 53.0498Z" fill="#E70101"/>
    <path d="M11.5 29.4909C9.39723 29.9582 4.66667 15.5497 2.5 9.04975C6.62967 1.20342 15.0797 -0.316223 20.2439 0.0498047H23V0.490916C22 11.9909 16 28.4909 11.5 29.4909Z" fill="white"/>
    <path d="M65.7805 30.4792C67.9345 30.9552 72.7805 16.6706 75 10.0498C71.1454 2.34061 64.835 0.0881197 59.6832 0.0810837L54 0.0498047V1.0498C55.0244 12.7635 61.1707 29.4606 65.7805 30.4792Z" fill="white"/>
    <path d="M39 10.8885V1.08206V0.0498047H53V10.3724C52.1667 12.2649 49.6 16.0498 46 16.0498C42.4 16.0498 39.8333 12.6089 39 10.8885Z" fill="white"/>
    <path d="M24 10.8885V1.08206V0.0498047H38V10.3724C37.1667 12.2649 34.6 16.0498 31 16.0498C27.4 16.0498 24.8333 12.6089 24 10.8885Z" fill="white"/>
    <path d="M24 66.7272V76.0175V77.0498H38V66.7272C37.1667 64.8348 34.6 61.0498 31 61.0498C27.4 61.0498 24.8333 65.0068 24 66.7272Z" fill="white"/>
    <path d="M40 66.7272V76.0175V77.0498H54V66.7272C53.1667 64.8348 50.6 61.0498 47 61.0498C43.4 61.0498 40.8333 65.0068 40 66.7272Z" fill="white"/>
    <path d="M1.5 66.5498C4 60.0498 10.5 45.3909 12.5 44.9909C14.5 44.5909 19.8333 61.3243 22.5 68.491V76.5498V77.0498H15C13.5634 76.5672 10.9995 75.5157 10.2363 75.1702C5.86352 73.3664 3.59241 70.1368 1.5 66.5498Z" fill="white"/>
    <path d="M77 66.5714C74.5 60.0848 68 45.456 66 45.0568C64 44.6577 58.6667 61.3566 56 68.5086V76.5508V77.0498H63.5C64.9366 76.5682 67.5005 75.5188 68.2637 75.1741C72.6365 73.374 74.9076 70.151 77 66.5714Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_46_2" x1="38.5" y1="0.0498047" x2="38.5" y2="77.0498" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D2010A"/>
        <stop offset="0.960609" stop-color="#3B0753"/>
      </linearGradient>
    </defs>
  </svg>
  )
}