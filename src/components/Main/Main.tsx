import { Hero } from "../Hero/Hero";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MoveDirection, type IOptions, type RecursivePartial } from "@tsparticles/engine";
import { lazy, Suspense, useState, useEffect } from "react";

// Lazy load heavy components
const About = lazy(() => import("../About/About").then(m => ({ default: m.About })));
const Timeline = lazy(() => import("../Timeline/Timeline"));
const TechStackSection = lazy(() => import("../TechStack/TechStack"));
const Contact = lazy(() => import("../Contact/Contact"));

export function Main() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch((error) => {
        console.error("Failed to init particles:", error);
      });
  }, []);

  const options: RecursivePartial<IOptions> = {
    fullScreen: { enable: true, zIndex: -1 },
    detectRetina: true,
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
      },
      shape: {
        type: "image",
        options: {
          image: [
            { src: "/assets/react-icon.svg", width: 20, height: 20, replaceColor: false },
            { src: "/assets/node-icon.svg", width: 20, height: 20, replaceColor: false },
            { src: "/assets/typescript-icon.svg", width: 20, height: 20, replaceColor: false },
            { src: "/assets/nextjss.svg", width: 20, height: 20, replaceColor: false },
            { src: "/assets/docker.svg", width: 20, height: 20, replaceColor: false },
            { src: "/assets/aws.svg", width: 20, height: 20, replaceColor: false },
            { src: "/assets/postgreSQL.svg", width: 20, height: 20, replaceColor: false },
            { src: "/assets/mongoDB.svg", width: 20, height: 20, replaceColor: false },
          ],
        },
      },
      size: { value: 16 },
      move: {
        enable: true,
        speed: 1.5,
        direction: MoveDirection.none,
        outModes: {
          default: "out",
        },
      },
      opacity: {
        value: 0.8,
        animation: {
          enable: true,
          speed: 1,
          startValue: "random",
          sync: false,
        },
      },
    },
  };

  return (
    <main className="min-h-screen relative z-0 overflow-x-hidden">
      {init && (
        <Particles
          id="tsparticles"
          className="fixed inset-0 -z-10"
          options={options}
        />
      )}
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Timeline />
        <TechStackSection />
        <About />
        <Contact />
      </Suspense>
    </main>
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
}
