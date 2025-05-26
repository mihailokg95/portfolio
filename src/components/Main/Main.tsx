import { Hero } from "../Hero/Hero"
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

import { useState, useEffect } from "react";
const htmlIcon = new URL("../../assets/html-icon.svg", import.meta.url).href;
const jsIcon = new URL("../../assets/js-icon.svg", import.meta.url).href;
const reactIcon = new URL("../../assets/react-icon.svg", import.meta.url).href;
const cssIcon = new URL("../../assets/css-icon.svg", import.meta.url).href;
const nodeIcon = new URL("../../assets/node-icon.svg", import.meta.url).href;
const nextIcon = new URL("../../assets/next-with-text.svg", import.meta.url).href;
const typescriptIcon = new URL("../../assets/typescript-icon.svg", import.meta.url).href;
const vscodeIcon = new URL("../../assets/vscode-icon.svg", import.meta.url).href;
const graphQLIcon = new URL("../../assets/graphql.svg", import.meta.url).href;
const nestIcon = new URL("../../assets/nestjs.svg", import.meta.url).href;
const sassIcon = new URL("../../assets/sass-icon.svg", import.meta.url).href;
const dockerIconUrl = new URL("../../assets/docker.svg", import.meta.url).href;
const awsIconUrl = new URL("../../assets/aws.svg", import.meta.url).href;
const postgresIconUrl = new URL("../../assets/postgreSQL.svg", import.meta.url).href;
// const boostrapIcon = new URL("../../assets/bootstrap-icon.svg", import.meta.url).href;
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import Timeline from "../Timeline/Timeline";

export function Main() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // or loadFull(engine) if you want all features
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles container loaded:", container);
  };

  const options = {
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    detectRetina: true,
    particles: {
      shape: {
        type: "image",
        image: [
          { src: boostrapIcon, width: 20, height: 20 },
          { src: cssIcon, width: 20, height: 20 },
          { src: htmlIcon, width: 20, height: 20 },
          { src: jsIcon, width: 20, height: 20 },
          { src: reactIcon, width: 20, height: 20 },
          { src: nextIcon, width: 20, height: 20 },
          { src: nodeIcon, width: 20, height: 20 },
          { src: typescriptIcon, width: 20, height: 20 },
          { src: graphQLIcon, width: 20, height: 20 },
          { src: nestIcon, width: 20, height: 20 },
          { src: dockerIconUrl, width: 20, height: 20 },
          { src: awsIconUrl, width: 20, height: 20 },
          { src: postgresIconUrl, width: 20, height: 20 },
          { src: vscodeIcon, width: 20, height: 20 },
          { src: sassIcon, width: 20, height: 20 },
        ],
      },
      number: {
        value: 15,
        density: {
          enable: true,
          area: 800,
        },
      },
      size: {
        value: 16,
      },
      move: {
        enable: true,
        speed: 2,
        outMode: "out",
      },
      opacity: {
        value: 1,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.2,
        },
      },
    },
  };

  return (

    <div className="min-h-screen relative z-0  overflow-x-hidden">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute top-0 left-0 w-screen h-screen -z-10"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <Hero />
      <Timeline />
      <About />
      <Contact />
    </div>
  );
}