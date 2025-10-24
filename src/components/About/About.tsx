import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";

const profileImage = "/assets/picture.jpg";

// Main tech stack icons
const reactIcon = "/assets/react-icon.svg";
const nextJsIcon = "/assets/NextJs.svg";
const nodeIcon = "/assets/node-icon.svg";
const nestJsIcon = "/assets/nestjs.svg";
const awsIcon = "/assets/aws.svg";

// Additional technology icons
const typescriptIcon = "/assets/typescript-icon.svg";
const dockerIcon = "/assets/docker.svg";
const graphqlIcon = "/assets/graphql.svg";
const postgresIcon = "/assets/postgreSQL.svg";
const reduxIcon = "/assets/redux.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <AnimationOnScroll  animateIn="fadeInLeft">
          <h2>About Me</h2>
        </AnimationOnScroll >
        
        <AnimationOnScroll  animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>Hey there! I'm a passionate Full-Stack Engineer with a knack for turning complex ideas into seamless digital experiences.</p>
        </AnimationOnScroll >
        
        <AnimationOnScroll  animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>With 8+ years of experience, I've had the pleasure of working with incredible teams and clients, crafting software solutions that not only solve problems but also delight users. Whether it's a startup's MVP or an enterprise-level application, I bring creativity, precision, and a whole lot of coffee to the table!</p>
        </AnimationOnScroll >
        
        <AnimationOnScroll  animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>My superpower? Transforming technical challenges into elegant, efficient solutions that make both developers and users smile.</p>
        </AnimationOnScroll >

        <AnimationOnScroll  animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>My Core Tech Stack:</h3>
        </AnimationOnScroll >

        {/* Main Tech Stack Row */}
        <div className="hard-skills">
          {[
            { icon: reactIcon, alt: "React", title: "React" },
            { icon: nextJsIcon, alt: "Next.js", title: "Next.js" },
            { icon: nodeIcon, alt: "Node.js", title: "Node.js" },
            { icon: nestJsIcon, alt: "NestJS", title: "NestJS" },
            { icon: awsIcon, alt: "AWS", title: "Amazon Web Services" }
          ].map((tech, index) => (
            <div key={tech.title} className="hability">
              <AnimationOnScroll  animateIn="fadeInUp" delay={(index + 1) * 0.1 * 1000}>
                <img src={tech.icon} alt={tech.alt} title={tech.title} />
              </AnimationOnScroll >
            </div>
          ))}
        </div>

        <AnimationOnScroll  animateIn="fadeInLeft" delay={0.8 * 1000}>
          <h3>Additional Technologies I Love:</h3>
        </AnimationOnScroll >

        <div className="hard-skills">
          {[
            { icon: typescriptIcon, alt: "TypeScript", title: "TypeScript" },
            { icon: dockerIcon, alt: "Docker", title: "Docker" },
            { icon: graphqlIcon, alt: "GraphQL", title: "GraphQL" },
            { icon: postgresIcon, alt: "PostgreSQL", title: "PostgreSQL" },
            { icon: reduxIcon, alt: "Redux", title: "Redux" }
          ].map((tech, index) => (
            <div key={tech.title} className="hability">
              <AnimationOnScroll  animateIn="fadeInUp" delay={(index + 1) * 0.1 * 1000}>
                <img src={tech.icon} alt={tech.alt} title={tech.title} />
              </AnimationOnScroll >
            </div>
          ))}
        </div>
      </div>
      
      <div className="about-image">
        <AnimationOnScroll  animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Profile" title="Profile Picture" className="rounded-xl"/>
        </AnimationOnScroll >
      </div>
    </Container>
  )
}