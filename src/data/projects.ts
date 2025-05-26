import type { Project } from '../@types/projects';
import dioptra from "../assets/dioptraai.png";
import lightspeeed from "../assets/lightspeed.png";
import komuna from "../assets/Komuna.png";
import creaition from "../assets/creaition.png";
import freecords from "../assets/freecords.png";
import onedrop from "../assets/1drop.png";

export const projects: Project[] = [
    {
        id: 5,
        title: "Dioptra AI",
        description: "Dioptra AI is a cutting-edge platform that leverages artificial intelligence to provide personalized insights and recommendations for users, enhancing their decision-making processes.",
        technologies: [
            {
                color: "red",
                icon: "Code",
                name: "NextJS"
            },
            {
                color: "blue",
                icon: "Code",
                name: "TypeScript"
            },
            {
                color: "teal",
                icon: "Code",
                name: "Tailwind"
            },
            {
                color: "purple",
                icon: "Code",
                name: "PropelAuth"
            },
            {
                color: "orange",
                icon: "Code",
                name: "Drizzle ORM"
            },
            {
                color: "yellow",
                icon: "Code",
                name: "PostgreSQL"
            }
        ],
        image: dioptra,
        link: "https://dioptra.ai/",
        video: "https://www.youtube.com/watch?v=ZatJYavc4ug",
        color: "cyan",
        year: "2024"
    },
     {
        id: 6,
        title: "Komuna market",
        description: "Komuna is a market and platform for exclusive and special products. here, in one place, you can find unique products from small producers, local brands, top craftsmen and authentic family businesses. The commune is a place of real contact, a space for all those who want something special",
        technologies: [
            { color: "red", icon: "Code", name: "NextJS" },
            { color: "teal", icon: "Code", name: "Tailwind" },
            { color: "purple", icon: "Code", name: "Moleculer" },
            { color: "yellow", icon: "Code", name: "MongoDB" },
            { color: "orange", icon: "Code", name: "Redis" }
        ],
        image: komuna,
        color: "cyan",
        year: "2024",
        link: "https://komunamarket.rs/"
    },
    {
        id: 1,
        title: "Lightspeed systems",
        description: "Lightspeed Alert is a proactive school safety solution that monitors online activity, flags concerning behaviors, and enables intervention before a tragedy occurs.",
        technologies: [
            { color: "blue", icon: "Code", name: "React" },
            { color: "purple", icon: "Code", name: "Redux" },
            { color: "orange", icon: "Code", name: "AWS" },
            { color: "teal", icon: "Code", name: "GoLang" },
            { color: "cyan", icon: "Code", name: "TypeScript" }
        ],
        image: lightspeeed,
        link: "https://www.lightspeedsystems.com/products/alert/",
        color: "cyan",
        year: "2023",
        video: "https://www.youtube.com/watch?app=desktop&v=Vpva6TDpfCE&t=1s"
    },
    {
        id: 2,
        title: "Cre[AI]tion",
        description: `Building a digital designer's muse – a platform that inspires through design created by artificial intelligence.`,
        technologies: [
            { color: "blue", icon: "Code", name: "TypeScript" },
            { color: "red", icon: "Code", name: "Angular" },
            { color: "purple", icon: "Code", name: "Nest.js" },
            { color: "yellow", icon: "Code", name: "PostgreSQL" },
            { color: "teal", icon: "Code", name: "RxJS" },
            { color: "orange", icon: "Code", name: "NgRx" }
        ],
        link: "https://www.creaition.io/",
        image: creaition,
        color: "red",
        year: "2022",
        video: "https://www.youtube.com/watch?v=XpWmxgy11Yw"
    },
    {
        id: 3,
        title: "1Drop",
        description: "1DROP easily measures biomarkers from a tiny drop of blood immediately in front of the patient.",
        technologies: [
            { color: "red", icon: "Code", name: "Angular" },
            { color: "blue", icon: "Code", name: "Angular Material" },
            { color: "purple", icon: "Code", name: "ElectronJs" },
            { color: "orange", icon: "Code", name: "NestJs" },
            { color: "yellow", icon: "Code", name: "PostgreSQL" }
        ],
        video: "https://www.youtube.com/watch?v=nj1ZFfR_x7Y",
        image: onedrop,
        color: "cyan",
        link: "https://www.1dropdx.com/",
        year: "2021"
    },
    {
        id: 4,
        title: "Freecords",
        description: "Freecords is a streaming platform focused on music discovery and the showcasing of new and emerging artists. It offers a unique experience for users to explore and enjoy music from various genres and artists.",
        technologies: [
            { color: "blue", icon: "Code", name: "React" },
            { color: "cyan", icon: "Code", name: "TypeScript" },
            { color: "purple", icon: "Code", name: "Styled Components" },
            { color: "orange", icon: "Code", name: "MobX" },
            { color: "teal", icon: "Code", name: "Material UI" }
        ],
        link: "https://www.freecords.com/",
        image: freecords,
        color: "red",
        year: "2021"
    },
];