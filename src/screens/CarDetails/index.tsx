import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Container, Header } from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <ImageSlider
        imageUrl={[
          "https://static.wikia.nocookie.net/forzamotorsport/images/e/e6/HOR_XB1_Ferrari_F40_89.png",
        ]}
      />
    </Container>
  );
}
