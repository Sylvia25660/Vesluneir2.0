import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    icon: "/icons/How1profile.png", // 請換成對應的小圖示路徑
    title: "Create Your Profile",
    subtitle: "Show the world what makes you 'you'.",
    description: "Upload your work and share your unique style with the world.",
  },
  {
    icon: "/icons/How2search.png",
    title: "Get Discovered",
    subtitle: "Let the right people find your genius.",
    description: "Let brands and editors find you through tags, genres, and locations.",
  },
  {
    icon: "/icons/How3link.png",
    title: "Connect & Collaborate",
    subtitle: "Build something with someone real.",
    description: "Talk directly. Get briefed. Make things happen.",
  },
  {
    icon: "/icons/How4plant.png",
    title: "Build Your Presence",
    subtitle: "Turn attention into opportunity.",
    description: "Grow your creative profile and get matched to real opportunities.",
  },
];

const articles = [
  {
    image: "/images/journal1.jpg",
    title: "Fuji Recipes for Cinematic Street Shots",
    description: "How I used in-camera settings to get that moody, filmic look—no post-editing needed.",
    author: "Lena Okamoto",
  },
  {
    image: "/images/journal2.jpg",
    title: "The Language of Posing: Guiding Without Controlling",
    description: "How I work with models to bring out their natural presence through direction, not dictation.",
    author: "Elliot Reyes",
  },
  {
    image: "/images/journal3.jpg",
    title: "Frames from Nowhere: Photos Without a Plan",
    description: "What happens when you shoot with no script, no timeline, and no pressure.",
    author: "Nico Marek",
  },
  {
    image: "/images/journal4.jpg",
    title: "Architecting Light in Still Life Photography",
    description: "From Tabletop to Narrative: Using light to build meaning in still life.",
    author: "Margo Lin",
  },
  {
    image: "/images/journal5.jpg",
    title: "Travel Photography Isn’t a Checklist: Document, Don’t Brag",
    description: "Get off the Grid—and let your photos tell the stories you didn’t plan.",
    author: "Theo Vargas",
  },
  {
    image: "/images/journal6.jpg",
    title: "The Sound Behind the Lens: Photographing the Silent Echoes",
    description: "No sound, just resonance—how to visually capture auditory atmosphere.",
    author: "Jun Sasaki",
  },
];

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
                <video
                  src="/videos/HeadVideo.mp4"
                  className="w-full rounded object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </section>

          <section className="text-white py-28 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

              {/* 圖片區：左邊 */}
              <div className="flex-1">
                <img
                  src="/images/OueMission.jpg"
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

          <section className="text-white py-32 px-6">
            {/* 頂部圖片加標題 */}
            <div className="max-w-5xl mx-auto text-center mb-24">
              <div className="relative w-full h-96">
                <Image
                  src="/images/howitwork.jpg" // 請換成你的山的圖片路徑
                  alt="Mountain"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                  <h2 className="text-5xl font-serif mb-2">How It Works?</h2>
                  <p className="text-sm italic text-white/80">Journey to collaborations that make meaningful works happen.</p>
                </div>
              </div>
            </div>

            {/* 四個卡片區塊 */}
            <ul className="max-w-4xl mx-auto flex flex-col gap-10">
              {/* 單一卡片 */}
              {cards.map((card, idx) => (
                <li key={idx} className="bg-black/30 p-8 rounded-lg border border-white/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Image src={card.icon} alt="Icon" width={24} height={24} />
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                      </div>
                      <p className="text-sm text-white/70 mb-4">{card.subtitle}</p>
                      <p className="text-sm text-white/60">{card.description}</p>
                    </div>
                    <a href="#" className="text-sm underline hover:text-white/70">» GO</a>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="text-white py-32 px-6">
            {/* 標題區塊 */}
            <div className="max-w-5xl mx-auto text-center mb-24">
              <h2 className="text-5xl font-serif mb-4">Frame by Frame</h2>
              <p className="text-sm italic text-white/80">
                Thoughts, tips, and moments from the people shaping our visual world—one frame at a time.
              </p>
            </div>

            {/* 文章卡片區塊 */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              {articles.map((article, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 leading-tight">{article.title}</h3>
                  <p className="text-sm text-white/70 mb-2 leading-snug">{article.description}</p>
                  <p className="text-sm text-white/50 mb-6">- by {article.author}</p>
                  <a href="#" className="text-sm underline self-start hover:text-white/70">» view more</a>
                </div>
              ))}
            </div>

            {/* Go To Journal 按鈕 */}
            <div className="flex justify-center mt-20">
              <a
                href="#"
                className="border border-white/50 rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition"
              >
                Go To Journal »
              </a>
            </div>
          </section>

          <section className="text-white py-32 px-6">
            {/* 標題區塊 */}
            <div className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="text-5xl font-serif leading-tight mb-6">
                When words fail,<br />
                the image remains.
              </h2>
              <p className="text-sm italic text-white/80 max-w-xl mx-auto">
                Join us and tell silent stories through your lens. Photography is not just about technique—it’s a way of seeing the world.
              </p>
            </div>

            {/* 圖片堆疊區塊 */}
            <div className="relative max-w-6xl mx-auto h-[1000px] mb-20 z-10">
              {/* 中間最大張 */}
              <div className="absolute top-1/2 left-1/2 w-160 h-180 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/CTA2.jpg" // 換成你的中央圖片
                  alt="Main Photo"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>

              {/* 右上小圖 */}
              <div className="absolute top-18 right-30 w-60 h-80">
                <Image
                  src="/images/CTA4.jpg"
                  alt="Top Right"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>

              {/* 左下小圖 */}
              <div className="absolute bottom-50 left-15 w-65 h-50 z-10">
                <Image
                  src="/images/CTA1.jpg"
                  alt="Bottom Left"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>

              {/* 右下最小張 */}
              <div className="absolute bottom-20 right-55 w-50 h-30 z-10">
                <Image
                  src="/images/CTA3.jpg"
                  alt="Bottom Right"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            </div>

            {/* 按鈕區塊 */}
            <div className="flex justify-center gap-10">
              <a
                href="#"
                className="bg-white text-black rounded-full px-8 py-3 text-sm hover:bg-gray-300 transition"
              >
                Join Now
              </a>
              <a
                href="#"
                className="border border-white rounded-full px-8 py-3 text-sm hover:bg-white hover:text-black transition"
              >
                View Gallery
              </a>
            </div>
          </section>

          <footer className="relative text-white pt-28 pb-28 px-6">
            {/* 背景圖片 */}
            <Image
              src="/images/footer.jpg" // 請替換為你的背景圖
              alt="Footer Background"
              fill
              className="object-cover opacity-20"
            />

            {/* 遮罩 */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
              {/* 左下詩句 */}
              <div className="text-sm italic text-white/60">
                In the silence between frames,<br />
                the story breathes.
              </div>

              {/* 中間 logo & 社群 */}
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex gap-4">
                  {/* Icon images 請換成你的實際 icon 圖片路徑 */}
                  <a href="#"><Image src="/icons/FT1instagram.png" alt="Instagram" width={20} height={20} /></a>
                  <a href="#"><Image src="/icons/FT2facebook.png" alt="Facebook" width={20} height={20} /></a>
                  <a href="#"><Image src="/icons/FT3twitter-alt.png" alt="X (Twitter)" width={20} height={20} /></a>
                  <a href="#"><Image src="/icons/FT4letter.png" alt="Email" width={20} height={20} /></a>
                </div>
                <div className="relative w-48 h-12">
                  <Image
                    src="/icons/LogoVS.png"
                    alt="Vesluneir Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="text-xs text-white/70">© 2025 Vesluneir. All rights reserved.</div>
              </div>

              {/* 右側連結 */}
              <div className="flex flex-col items-end gap-2 text-sm text-white/80">
                <a href="#">About Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">FAQ</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
