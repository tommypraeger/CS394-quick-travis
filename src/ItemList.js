import React, { useState, useEffect } from "react";
import { Delete, Table, Button, Box, Heading, Input } from "rbx";
import { deleteItem, updateItemNumber } from "./firebaseHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { updatingNotes, db } from "./firebaseHelpers";

const getTotalQuantity = neededBy => {
  if (neededBy === undefined) {
    return 0;
  }
  return Object.values(neededBy).reduce(
    (total, person) => total + person.quantity,
    0
  );
};

const ItemList = ({ items, user, selectedState, house }) => {

  // const handleNoteChange = (event, data) => {
  //   if (data && house) {
  //     updatingNotes(house, data, event.target.value);
  //   }
  // };

  const needsItem = (neededBy, name) => {
    const names = Object.values(neededBy).map(person => person.name);
    return names.indexOf(name) >= 0;
  }

  const rowSelected = item =>
    selectedState.selected.includes(item);

  if (items.length === 0) {
    return <Heading>No items to show yet. Add some to get started.</Heading>;
  }
  return (
    <Box>
      <Heading>tap to add items to cart</Heading>
      <Table fullwidth hoverable>
        <Table.Head>
          <Table.Row>
            <Table.Heading>Product</Table.Heading>
            <Table.Heading>People</Table.Heading>
            <Table.Heading colSpan="3">Quantity</Table.Heading>
            <Table.Heading></Table.Heading>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {items.map(data => (
            <Table.Row 
              key={data.productName}
              onClick={() => selectedState.toggle(data)}
              selected={rowSelected(data)}
            >
              <Table.Cell>
                {data.productName} ({data.unit}) 
                {/* <br/>
                <Input
                    size="small"
                    onBlur={e => handleNoteChange(e, data)}
                    defaultValue={data.notes}
                  /> */}
              </Table.Cell>
              <Table.Cell>
                {!!data.neededBy
                  ? Object.values(data.neededBy).map(person => (
                      <React.Fragment
                        key={`${data.productName}-${person.name}`}
                      >
                        {person.name.split(' ')[0]} ({person.quantity})
                        <br />
                      </React.Fragment>
                    ))
                  : ""}
              </Table.Cell>
              <Table.Cell className="thin-col">
                <Button
                  disabled={!data.neededBy || !needsItem(data.neededBy, user.displayName)}
                  size="small"
                  onClick={() => updateItemNumber(user, data, -1, house)}
                >
                  -
                </Button>
              </Table.Cell>
              <Table.Cell className="thin-col">
                {getTotalQuantity(data.neededBy)}
              </Table.Cell>
              <Table.Cell className="thin-col">
                <Button
                  size="small"
                  onClick={() => updateItemNumber(user, data, 1, house)}
                >
                  +
                </Button>
              </Table.Cell>
              <Table.Cell className="align-right">
                <Delete
                  as="button"
                  onClick={() => deleteItem(data.productName, house)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Box>
  );
};

export default ItemList;
