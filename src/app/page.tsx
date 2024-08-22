import Benefits from "@/modules/benefits";
import CtaModule from "@/modules/ctaModule";
import Faqs from "@/modules/Faqs";
import Footer from "@/modules/footer";
import Hero from "@/modules/Hero";
import Testimonials from "@/modules/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-neutral-200 text-neutral-800 p-5">
        <div
          className="absolute inset-[-10px] bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('woman-phone2.webp')",
            filter: "brightness(0.25) blur(2px)",
          }}
        ></div>
        <div className="relative max-w-[1280px] mx-auto h-screen flex flex-col justify-center items-center gap-5 text-center z-10">
          <p className="text-white text-lg font-semibold  px-3 py-1 rounded-lg tracking-widest">
            PARTNERS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            Encuentra tu <span className="text-blue-500">socio ideal.</span>
            <br />
            Impulsa tu emprendimiento.
          </h1>

          <Link
            href="/register"
            className="mt-5 text-white px-5 py-3 rounded-lg text-lg font-semibold bg-blue-700 
             hover:bg-blue-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Haz Match Ahora
          </Link>
        </div>
      </main>
      <Hero />
      <Benefits />
      <Testimonials />
      <Faqs />
      <CtaModule />
      <Footer />
    </>
  );
}
