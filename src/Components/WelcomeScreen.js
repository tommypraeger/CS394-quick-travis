import React from "react";
import {
  Column,
  Container,
  Image,
  Title
} from "rbx";

const WelcomeScreen = () => {
  return (
    <Container breakpoint="desktop">
      <Column size={10} offset={1}>
        <Title size={1} spaced data-cy="title">
          OneHouse
        </Title>
        <Title subtitle size={4}>
          The easiest way to shop with your family and roomates!
        </Title>

        <Image src="/data/welcome_image.png"></Image>
            

      </Column>
    </Container>
  );
};

export default WelcomeScreen;
