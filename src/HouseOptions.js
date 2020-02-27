import React, { useState } from "react";
import {
  createHouse,
  joinHouse,
  leaveHouse
} from "./firebaseHelpers";
import { Button, Modal, Field, Control, Input, Label, Title } from "rbx";

const CreateHouseModal = ({ modalState, user, setHouse, housesData }) => {
  const [houseName, setHouseName] = useState("");
  const [housePassword, sethousePassword] = useState("");

  const handleNameChange = event => {
    setHouseName(event.target.value);
  };

  const handlePasswordChange = event => {
    sethousePassword(event.target.value);
  };

  const handleSubmit = () => {
    if (housesData && housesData[houseName] !== undefined) {
      alert("House name exists!")
    }
    else {
      modalState.setModalState(false);
      createHouse({ user, houseName, housePassword });
      setHouse(houseName)
    }
  }

  return (
    <Modal active={modalState.modalState}>
      <Title size={3}>Create House</Title>
      <Modal.Background onClick={() => modalState.setModalState(false)} />
      <Modal.Content>
        <Field>
          <Label className="white">House Name</Label>
          <Control expanded>
            <Input size="medium" onChange={handleNameChange} />
          </Control>
          <div>
          </div>
        </Field>
        <Field>
          <Label className="white">House Password</Label>
          <Control expanded>
            <Input size="medium" type="password" onChange={handlePasswordChange} />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button
              size="medium"
              color="link"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Control>
        </Field>
      </Modal.Content>
    </Modal>
  );
};

const JoinHouseModal = ({ modalState, user, setHouse, housesData }) => {
  const [houseName, setHouseName] = useState("");
  const [housePassword, sethousePassword] = useState("");

  const handleNameChange = event => {
    setHouseName(event.target.value);
  };

  const handlePasswordChange = event => {
    sethousePassword(event.target.value);
  };

  const handleSubmit = () => {
    if (housesData) {
      let houses = Object.values(housesData);
      const house = houses.filter(x => {
        return (x.housePassword === housePassword && x.houseName === houseName);
      })[0];
      if (house !== undefined) {
        modalState.setModalState(false);
        joinHouse(user, houseName);
        setHouse(houseName);
      } else {
        alert("Incorrect password or house name")
      }
    }
  };

  return (
    <Modal active={modalState.modalState}>
      <Title size={3}>Join House</Title>
      <Modal.Background onClick={() => modalState.setModalState(false)} />
      <Modal.Content>
        <Field>
          <Label className="white">House Name</Label>
          <Control expanded>
            <Input size="medium" onChange={handleNameChange} />
          </Control>
        </Field>
        <Field>
          <Label className="white">House Password</Label>
          <Control expanded>
            <Input size="medium" type="password" onChange={handlePasswordChange} />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button size="medium" color="link" onClick={handleSubmit}>
              Join
            </Button>
          </Control>
        </Field>
      </Modal.Content>
    </Modal>
  );
};

const HouseOptions = ({ house, setHouse, user, housesData, usersData }) => {
  const [createModalState, setCreateModalState] = useState(false);
  const [joinModalState, setJoinModalState] = useState(false);

  if (user) {
    return (
      <React.Fragment>
        <CreateHouseModal
          modalState={{
            modalState: createModalState,
            setModalState: setCreateModalState
          }}
          user={user}
          setHouse={setHouse}
          housesData={housesData}
        />
        <JoinHouseModal
          modalState={{
            modalState: joinModalState,
            setModalState: setJoinModalState
          }}
          user={user}
          setHouse={setHouse}
          housesData={housesData}
          usersData={usersData}
        />
        <Button.Group align="centered">

          {house ? <div/> : <Button
            onClick={() => setCreateModalState(true)}
            disabled={house !== undefined}
          >
            Create House
          </Button>}

          {house ? <div/> : <Button
            onClick={() => setJoinModalState(true)}
            disabled={house !== undefined}
          >
            Join House
          </Button>}

          {house ? <Button
            onClick={() => {
              leaveHouse(user, setHouse);
              setHouse(undefined);
            }}
            disabled={house === undefined}
          >
            Leave House
          </Button> : <div/>}
        </Button.Group>
      </React.Fragment>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

export default HouseOptions;
