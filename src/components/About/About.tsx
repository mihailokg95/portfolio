import { Container } from "./styles";

import profileImage from "../../assets/picture.jpg"
// Main tech stack icons
import reactIcon from "../../assets/react-icon.svg";
import nextJsIcon from "../../assets/NextJs.svg";
import nodeIcon from "../../assets/node-icon.svg";
import nestJsIcon from "../../assets/nestjs.svg";
import awsIcon from "../../assets/aws.svg";

// Additional technology icons (select from your existing imports or add new ones)
import typescriptIcon from "../../assets/typescript-icon.svg";
import dockerIcon from "../../assets/docker.svg";
import graphqlIcon from "../../assets/graphql.svg";
import postgresIcon from "../../assets/postgreSQL.svg";
import reduxIcon from "../../assets/redux.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";

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