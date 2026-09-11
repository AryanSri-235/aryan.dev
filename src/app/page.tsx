import { BootLoader } from "@/components/boot-loader";
import { CursorTracker } from "@/components/cursor-tracker";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/sections/about";
import { Console } from "@/components/sections/console";
import { Contact } from "@/components/sections/contact";
import { Hero, ScrollCue } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Timeline } from "@/components/sections/timeline";

const container = "mx-auto w-full max-w-[1120px] px-6";

export default function Home() {
  return (
    <>
      <CursorTracker />
      <BootLoader />
      <RevealObserver />

      <SiteHeader />

      <main id="top" className="flex-1">
        <div className={container}>
          <Hero />
          <ScrollCue />
        </div>

        <Marquee />

        <div className={container}>
          <Projects />
          <Timeline />
          <Stack />
          <Console />
          <About />
          <Contact />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
