import React, { } from "react";
import "rbx/index.css";
import {
  Navbar,
  Button,
  Content,
} from "rbx";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import HouseOptions from './HouseOptions';

const Banner = ({ user, house, setHouse, housesData, usersData }) => {
  return (
    <Navbar color='info'>
      <Navbar.Brand>
        <Navbar.Item as="div">
          <Content className='medium-font'>
            {!user ? "OneHouse" : user.displayName}
          </Content>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="start">
          <Navbar.Item as="div">
            <Content>{house ? house : ""}</Content>
          </Navbar.Item>
        </Navbar.Segment>
        <Navbar.Segment align="end">
          <Navbar.Item as="div">
            <HouseOptions house={house} setHouse={setHouse} user={user} housesData={housesData} usersData={usersData}/>
          </Navbar.Item>
          <Navbar.Item as="div">
            {!user ? <SignIn/> :
            <Logout user={user} house={house}/>}
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
};

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const Logout = ({ user, house }) => {
  return (
    <Button
      color="primary"
      onClick={() => firebase.auth().signOut()}
    >
      Log out
    </Button>
  );
};

const SignIn = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
);

export default Banner;
