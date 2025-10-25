import { Container } from "./styles";
import { AnimationOnScroll } from "react-animation-on-scroll";

const profileImage = "/assets/picture.jpg";

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

        
      </div>
      
      <div className="about-image">
        <AnimationOnScroll  animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Profile" title="Profile Picture" className="rounded-xl"/>
        </AnimationOnScroll >
      </div>
    </Container>
  )
}