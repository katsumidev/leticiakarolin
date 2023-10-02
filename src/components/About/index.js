import React from "react";
import { Container, Background, MainWrapper, TextContainer, FrontImg } from "./styles";
import Title from "../Title";

function About() {
  return (
    <Container>
      <MainWrapper>
        <TextContainer>
          <Title title="Sobre Mim" position="01" />
          <p>
            Wholeness Collective Therapy Group, a boutique therapy center
            located in Carlsbad Village, California, offers holistic
            psychotherapy services both virtually (for CA residents) and
            in-person. Our therapists use an eclectic approach by incorporating
            traditional psychotherapeutic modalities— psychodynamic,
            cognitive-behavioral, and narrative - with mindfulness-based
            practices, somatic (body-based) therapies and EMDR (trauma therapy).
          </p>
          <p>
            We specialize in treating trauma, co-dependency, grief, depression,
            anxiety, parenting and relationship challenges. Wholeness
            Collectives clinical director and founder, Janelle Nelson, M.A.
            hand-selects each therapist and coach. She provides direct
            supervision to ensure that each client receives comprehensive care.
            Wholeness Collective also provides training and supervision to
            associate therapists who are on their way to licensure.
          </p>
        </TextContainer>
      </MainWrapper>
      <Background>
        <FrontImg />
      </Background>
    </Container>
  );
}

export default About;
