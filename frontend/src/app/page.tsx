import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

        {/* Hero */}
        <div className="relative h-screen w-full overflow-hidden">
          <Image
            src="/images/Header.jpg"
            alt="Hero"
            fill
            style={{ objectFit: "cover" }}
            className="z-10"
          />

          {/* Logo + Hamber */}
          <div className="absolute top-6 left-6 z-10">
            <Image
              src="/icons/LogoVS.png"
              alt="Vesluneir"
              width={350}
              height={80}
            />
          </div>
          <div className="absolute top-6 right-6 z-10">
            <Image
              src="/icons/Hamburger.png"
              alt="Menu"
              width={30}
              height={30}
            />
          </div>
        </div>

      {/* Nav */}
      <nav className="bottom-0 w-full text-white text-sm z-10 px-6">
        <div className="ml-auto border-t border-b border-white/30 w-[830px]">
          <div className="h-[1px] bg-white/30 mb-1 w-full"></div>
          <ul className="flex justify-end gap-6 py-4 tracking-widest font-bold text-white pr-6">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/photographers">PHOTOGRAPHERS</Link></li>
            <li><Link href="/gallery">GALLERY</Link></li>
            <li><Link href="/journal">JOURNAL</Link></li>
            <li><Link href="/login">LOGIN / SIGN UP</Link></li>
            <li><Link href="/language">
              <Image
                src="/icons/Navglobal.png"
                alt="Language"
                width={15}
                height={15}
              />
            </Link>
            </li>
            <li><Link href="/calendar">
              <Image
                src="/icons/Navcalendar.png"
                alt="calendar"
                width={15}
                height={15}
              />
            </Link>
            </li>
            <li><Link href="/chat">
              <Image
                src="/icons/Navchat.png"
                alt="chat"
                width={15}
                height={15}
              />
            </Link>
            </li>
            <li><Link href="/">
              <Image
                src="/icons/Navduck.png"
                alt="duck"
                width={15}
                height={15}
              />
            </Link>
            </li>
          </ul>
          <div className="h-[1px] bg-white/30 mt-1 w-full"></div>
        </div>
      </nav>
    </>
  );
}
