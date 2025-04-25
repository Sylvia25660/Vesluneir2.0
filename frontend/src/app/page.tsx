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
                <h2 className="text-[84px] font-serif leading-tight">
                  Wandering<br />Frames
                </h2>
                <p className="mt-8 text-lg italic tracking-wider text-white/80">
                  Photos Without A Plan.<br />
                  Stories Without A Script.
                </p>
              </div>

              {/* 圖片列 */}
              <div className="flex flex-nowrap justify-center gap-10">
                {["famous1.jpg", "famous2.jpg", "famous3.jpg", "famous4.jpg", "famous5.jpg"].map((file, index) => (
                  <img
                    key={index}
                    src={`/images/${file}`}
                    alt={`famous${index + 1}`}
                    className="w-60 h-80 object-cover"
                  />
                ))}
              </div>

            </div>
          </section>

          <section className="py-32 px-6 text-white">
            <div className="max-w-7xl mx-auto text-center">
              {/* 標題與副標 */}
              <h2 className="text-5xl font-serif mb-2 tracking-wide">Stories In Focus</h2>
              <p className="text-sm text-white/70 italic mb-16">Images That Stay With You.</p>

              {/* 圖片格線 */}
              <div className="grid grid-cols-3 gap-6 justify-center items-center">
                {[
                  "/images/dayfocus1.jpg",
                  "/images/dayfocus2.jpg",
                  "/images/dayfocus3.jpg",
                  "/images/dayfocus4.jpg",
                  "/images/dayfocus5.jpg",
                  "/images/dayfocus6.jpg",
                  "/images/dayfocus7.jpg",
                  "/images/dayfocus8.jpg",
                  "/images/dayfocus9.jpg",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`photo${index + 1}`}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                ))}
              </div>

              {/* Discover more */}
              <div className="mt-10 text-right">
                <a href="#more" className="text-white/80 italic text-sm hover:underline">
                  → Discover more
                </a>
              </div>
            </div>
          </section>

          <section className="py-36 px-6 text-white">
            <div className="max-w-7xl mx-auto">

              {/* 標題區塊：mark + 標題 + 副標 → 橫向排列 */}
              <div className="flex flex-col items-center mb-24 gap-6">
                {/* 第一行：mark + 標題 */}
                <div className="flex items-start gap-4">
                  <img
                    src="/icons/mark.png"
                    alt="mark"
                    className="w-12 md:w-16 h-auto mt-1"
                  />
                  <img
                    src="/icons/commendHeader.png"
                    alt="Voices of the Creative"
                    className="w-auto max-w-[520px] h-auto"
                  />
                </div>

                {/* 第二行：副標題靠右並放大 */}
                <div className="w-full flex justify-end">
                  <img
                    src="/icons/commendMOJI2.png"
                    alt="Intro Text"
                    className="w-auto max-w-[700px] h-auto"
                  />
                </div>
              </div>

              {/* 評論列表 */}
              {[
                {
                  image: "/images/commend1.jpg",
                  quote:
                    "I used to struggle finding clients that matched my style. Since joining the platform, I’ve connected with brands that actually get my work. I’m now booked two months in advance—which never used to happen before.",
                  author: "Eli Yu, Freelance Photographer",
                },
                {
                  image: "/images/commend2.jpg",
                  quote:
                    "We needed a photographer in Kaohsiung with a cinematic aesthetic—fast. This platform helped us find one in under an hour. The shoot went so well, we booked him again the next week.",
                  author: "Hana Liu, Editor-in-Chief, Frame & Form",
                },
                {
                  image: "/images/commend3.jpg",
                  quote:
                    "Clients used to doubt my style. Now I get inquiries from overseas who discovered my portfolio here.",
                  author: "Junpei Takahashi, Fashion Photographer",
                },
                {
                  image: "/images/commend4.jpg",
                  quote:
                    "The platform helped me find a photographer that totally matched our brand tone. Smooth, quick, and beautiful results.",
                  author: "Isla Chen, Marketing Lead, Muse Studio",
                },
                {
                  image: "/images/commend5.jpg",
                  quote:
                    "Every collaboration I’ve made through this platform has turned into a long-term relationship. That says it all.",
                  author: "Liam Wong, Art Director",
                },
              ].map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="w-full max-w-6xl mx-auto flex justify-center mb-28 px-2">
                    <div
                      className={`flex flex-col md:flex-row items-stretch gap-12 w-full ${isEven ? "" : "md:flex-row-reverse"
                        }`}
                    >
                      {/* 圖片 */}
                      <img
                        src={item.image}
                        alt={`testimonial${index + 1}`}
                        className="w-80 h-64 object-cover rounded-md flex-shrink-0"
                      />

                      {/* 分隔線 */}
                      <div className="w-[2px] h-64 bg-[#F7F1EB] opacity-70 self-center"></div>

                      {/* 文字框 */}
                      <div className="flex-1 min-h-[280px] flex flex-col justify-between border border-white/20 p-8 rounded-md">
                        <p className="text-white/90 leading-relaxed text-[18px] mb-6">
                          “{item.quote}”
                        </p>
                        <div className="flex justify-between items-end">
                          <p className="italic text-white/60 text-base">— {item.author}</p>
                          <a
                            href="#work"
                            className="text-white/60 text-base italic hover:underline"
                          >
                            → view more work
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
