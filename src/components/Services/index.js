import React from "react";
import {
  FullWrapper,
  Container,
  LeftWrapper,
  RightWrapper,
  Background,
  MainImg,
  SecundaryImg,
  TertiaryImg,
} from "./styles";
import Title from "../Title";

function Services() {
  return (
    <FullWrapper>
      <Container>
        <LeftWrapper>
          <h1 className="written-title">Solução de Problemas</h1>
          <p>
            Eye Movement Desensitization and Reprocessing (EMDR) is an
            integrative psychotherapy approach that has been extensively
            researched and proven effective for the treatment of trauma. EMDR
            therapy is a set of standardized protocols that incorporates
            elements from many different treatment approaches. To learn more,
            visit www.emdria.org.
          </p>

          <p>
            EMDR therapy has been declared an effective form of trauma treatment
            by a wide range of organizations. In the United States, these
            include the American Psychiatric Association, the International
            Society for Traumatic Stress Studies, the Departments of Defense and
            Veterans Affairs and the World Health Organization.
          </p>

          <div className="line" />

          <MainImg />
        </LeftWrapper>
        <RightWrapper>
          <Title title="Meus serviços" position="02" />
          <SecundaryImg />
          <TertiaryImg />
          <h1 className="written-title">Tratamento Paleativo</h1>

          <p>
            EMDR therapy has been declared an effective form of trauma treatment
            by a wide range of organizations. In the United States, these
            include the American Psychiatric Association, the International
            Society for Traumatic Stress Studies, the Departments of Defense and
            Veterans Affairs and the World Health Organization.
          </p>

          <p>
            EMDR therapy has been declared an effective form of trauma treatment
            by a wide range of organizations. In the United States, these
            include the American Psychiatric Association, the International
            Society for Traumatic Stress Studies, the Departments of Defense and
            Veterans Affairs and the World Health Organization.
          </p>
          <div className="line" />
        </RightWrapper>
      </Container>
      <Background />
    </FullWrapper>
  );
}

export default Services;
