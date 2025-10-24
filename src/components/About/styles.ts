import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 10rem;
  
  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    img{
      width: 3.4rem;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--darkBlue);
    font-size: 2.5rem;
  }

  h3{
    margin-top: 2rem;
    color: var(--blue);
    font-size: 2rem;
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    line-height: 1.7;
  }

  .about-image{
    text-align: center;
    
    img{
      margin-top: 2rem;
      width: 100%;
      max-width: 500px;
      filter: grayscale(1);
      transition: filter 0.5s;
      border-radius: 1rem;
      
      &:hover{
        filter: grayscale(0);
      }
    }
  }

  @media (max-width: 1400px) {
    padding: 0 8rem;
    margin-top: 10rem;
    
    h2 {
      font-size: 2.3rem;
    }
    
    p {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 1200px) {
    padding: 0 6rem;
    gap: 3rem;
    
    .hard-skills {
      gap: 1.5rem;
    }
    
    .hability img {
      width: 3.2rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 4rem;
    margin-top: 8rem;
    
    h2 {
      font-size: 2.1rem;
    }
    
    h3 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 1.6rem;
    }
    
    .hability img {
      width: 3rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;
    padding: 0 3rem;
    margin-top: 6rem;

    .about-image {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }
    
    .hard-skills {
      justify-content: center;
    }
    
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
    margin-top: 5rem;
    
    h2 {
      font-size: 1.9rem;
      margin-bottom: 1.5rem;
    }
    
    h3 {
      font-size: 1.6rem;
      margin-top: 1.5rem;
    }
    
    p {
      font-size: 1.4rem;
    }
    
    .hard-skills {
      gap: 1.2rem;
      margin-top: 1.2rem;
    }
    
    .hability img {
      width: 2.8rem;
    }
    
    .about-image img {
      max-width: 400px;
    }
  }

  @media (max-width: 640px) {
    padding: 0 1.5rem;
    margin-top: 4rem;
    
    h2 {
      font-size: 1.75rem;
    }
    
    p {
      font-size: 1.3rem;
    }
    
    .hability img {
      width: 2.6rem;
    }
    
    .about-image img {
      max-width: 350px;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    margin-top: 3rem;
    
    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.25rem;
    }
    
    h3 {
      font-size: 1.4rem;
      margin-top: 1.25rem;
    }
    
    p {
      font-size: 1.2rem;
      letter-spacing: 0.05rem;
    }
    
    .hard-skills {
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .hability img {
      width: 2.4rem;
    }

    .about-image {
      max-width: 100%;
      margin-top: 2rem;
      
      img {
        max-width: 300px;
      }
    }
  }

  @media (max-width: 360px) {
    padding: 0 0.875rem;
    
    h2 {
      font-size: 1.5rem;
    }
    
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 1.1rem;
    }
    
    .hability img {
      width: 2.2rem;
    }
    
    .about-image img {
      max-width: 250px;
    }
  }
`