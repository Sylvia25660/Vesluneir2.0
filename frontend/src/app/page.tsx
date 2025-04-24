import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* background */}
      <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-no-repeat bg-center text-white">
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
        <nav className="bottom-0 w-full text-white text-sm z-10 px-6 py-3">
          <div className="ml-auto border-t border-b border-white/30 w-[1300px]">
            <div className="h-[1px] bg-white/30 mb-1 w-full"></div>
            <ul className="flex justify-end gap-20 py-4 tracking-widest font-bold text-white pr-6">
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

        <main>
          <section className="text-white py-28 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

              {/* 文字區：右邊 */}
              <div className="flex-1 text-left">
                <h2 className="text-[110px] leading-[1.2] font-serif">
                  Every Gaze
                </h2>
                <h2 className="text-[110px] leading-[1.2] font-serif mt-2">
                  Holds A Story
                </h2>

                <p className="mt-8 text-xs tracking-[0.08em] leading-relaxed text-white/80 max-w-md">
                  We Do Not Chase Moments. We Collect The Quiet Ones—<br />
                  The Ones That Pass Like Breath, Unnoticed, But Full Of Meaning.
                </p>
                <p className="mt-6 text-xs tracking-[0.08em] leading-relaxed text-white/80 max-w-md">
                  Fragments Of Emotion, Captured In Silence And Light—<br />
                  Memories Suspended In Stillness, Waiting To Be Seen Again.
                </p>

                <div className="mt-12 flex gap-4">
                  <button className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition">
                    Explore Photographers
                  </button>
                  <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                    Join As Photographer
                  </button>
                </div>
              </div>

              {/* 圖片區：左邊 */}
              <div className="flex-1">
                <img
                  src="/images/intro-camera.jpg"
                  alt="Photographer"
                  className="w-full max-w-lg mx-auto rounded"
                />
              </div>
            </div>
          </section>

          <section className="text-white py-28 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

              {/* 圖片區：左邊 */}
              <div className="flex-1">
                <img
                  src="/images/intro-camera.jpg"
                  alt="Photographer"
                  className="w-full max-w-lg mx-auto rounded"
                />
              </div>

              {/* 文字區：右邊 */}
              <div className="flex-1 text-left">
                <h2 className="text-[110px] leading-[1.2] font-serif">
                  Our Mission
                </h2>

                <p className="mt-8 text-xs tracking-[0.08em] leading-relaxed text-white/80 max-w-md">
                  Every photograph tells a story.<br />
                  Our mission is to elevate visual creators by giving them a space to thrive,
                </p>
                <p className="mt-6 text-xs tracking-[0.08em] leading-relaxed text-white/80 max-w-md">
                  and to make discovering great photography as seamless as scrolling.<br />
                  We believe in human connection through the lens
                </p>

                <div className="mt-12">
                  <Link
                    href="/mission"
                    className="inline-block text-sm italic tracking-wide border-b border-white/50 hover:border-white transition duration-200"
                  >
                    Read the Full Story
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-36 px-6 text-white">
            <div className="max-w-7xl mx-auto">

              {/* 標題與副標 */}
              <div className="mb-24">
                <h2 className="text-[84px] font-serif leading-tight">Wandering<br />Frames</h2>
                <p className="mt-8 text-lg italic tracking-wider text-white/80">
                  Photos Without A Plan.<br />
                  Stories Without A Script.
                </p>
              </div>

              {/* 圖片列 */}
              <div className="flex flex-nowrap justify-center gap-10">
                <img src="/images/famous1.jpg" alt="famous1" className="w-60 h-80 object-cover" />
                <img src="/images/famous2.jpg" alt="famous2" className="w-60 h-80 object-cover" />
                <img src="/images/famous3.jpg" alt="famous3" className="w-60 h-80 object-cover" />
                <img src="/images/famous4.jpg" alt="famous4" className="w-60 h-80 object-cover" />
                <img src="/images/famous5.jpg" alt="famous5" className="w-60 h-80 object-cover" />
              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
}
