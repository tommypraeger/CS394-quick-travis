import React from "react";
import {
  Column,
  Container,
  Notification,
  Block,
  Content,
  Title
} from "rbx";

const SignInScreen = ({ user }) => {
  let name = user.displayName.split(" ");
  let first = name[0];

  return (
    <Container>
      <Notification color="white"></Notification>
      <Title size={2}>Welcome {first}!</Title>
      <Block />
      <Title subtitle size={3}>
        To get started:
      </Title>
      <Notification color="white"></Notification>
      <Column.Group>
        <Column size={4} offset={1}>
          <Notification color="info">
            <Notification color="light">
              <Title size={3}>Create a House</Title>
            </Notification>
            <Content textAlign="left">
              <ul>
                <li>
                  <Title size={4} subtitle>
                    {" "}
                    Create a house
                  </Title>
                </li>
                <Block />
                <li>
                  <Title size={4} subtitle>
                    {" "}
                    Select a house name and password
                  </Title>
                </li>
                <Block />
                <li>
                  <Title size={4} subtitle>
                    {" "}
                    Share your house name and password with your roomates
                  </Title>
                </li>
                <Block />
                <li>
                  <Title size={4} subtitle>
                    {" "}
                    Get shopping!
                  </Title>
                </li>
              </ul>
            </Content>
          </Notification>
        </Column>
        <Column align="centered" size={2} offset={0}></Column>
        <Column size={4} offset={0}>
          <Notification color="info">
            <Notification color="light">
              <Title size={3}> Join a House</Title>
            </Notification>
            <Content textAlign="left">
              <ul>
                <li>
                  <Title size={4} subtitle>
                    {" "}
                    Join a house
                  </Title>
                </li>
                <Block />
                <li>
                  <Title size={4} subtitle>
                    {" "}
                    Get your house name and password from your roomates
                  </Title>
                </li>
                <Block />
                <li>
                  <Title size={4} subtitle>
                    {" "}
                    Enter your house name and password
                  </Title>
                </li>
                <Block />
                <li>
                  <Title size={4} subtitle>
                    {" "}
                    Get shopping!
                  </Title>
                </li>
              </ul>
            </Content>
          </Notification>
        </Column>
      </Column.Group>
    </Container>
  );
};

export default SignInScreen;
