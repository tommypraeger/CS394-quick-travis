import React from "react";
import {Title, Modal, Box, Notification, Table, Field, Control, Button, Input} from "rbx";
import { functions } from './firebaseHelpers';

const Checkout = ({modalState, selected})=>{

    const sendEmail = () => {
      const func = functions.httpsCallable('SendEmail');
      func().then(function(result) {
        // Read result of the Cloud Function.
        var sanitizedMessage = result.data.text;
      }).catch(function(error) {
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        // ...
      });
    }

    return(
        <Modal active={modalState.modalState}>
          <Modal.Background onClick = {()=> modalState.setModalState(false)}/>
          <Modal.Content>
            <Box color="white">
                  <Title>Your Purchases:</Title>
                  <Table fullwidth hoverable>
                    <Table.Head>
                      <Table.Row>
                        <Table.Heading>
                          Item
                        </Table.Heading>
                        <Table.Heading>
                          Price
                        </Table.Heading>
                      </Table.Row>
                    </Table.Head>
                    <Table.Body>
                      {selected.map(item =>
                        <Table.Row>
                          <Table.Cell>
                            {item.productName}
                          </Table.Cell>
                          <Table.Cell className="align-right thin-col-2">
                            <Input type="number"/> 
                          </Table.Cell>
                        </Table.Row>)}
                    </Table.Body>
                  </Table>
                  <Button
                    onClick={() => sendEmail()}
                  >
                    Notify Roommates
                  </Button>
            </Box>
          </Modal.Content>
        </Modal>

    )
}

const Item = ({item}) =>{
    return (
    <Box color="black">
        <Title size={5}>{item.productName} {getNames(item.neededBy)} </Title>
    </Box>)
}

const getNames = (array) =>{
    let my_string = "for"
    if (array){
        for (let i=0; i<array.length; i++){
            if (i==0){
                my_string = my_string + " " + array[i].name
            }
            else{
                my_string = my_string + ", " + array[i].name
            }
        }
        return(my_string)
    }
    else{
        return("")
    }
}

export default Checkout