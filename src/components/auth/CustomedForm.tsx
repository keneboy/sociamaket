import {
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
interface stateProps {
  name: string;
  id: number;
}
export default function CustomedForm() {
  const state: stateProps[] = [
    {
      name: "Abuja (FCT)",
      id: 1,
    },
    {
      name: "Lagos",
      id: 2,
    },
    {
      name: "Ogun",
      id: 3,
    },
    {
      name: "Oyo",
      id: 4,
    },
    {
      name: "River State",
      id: 5,
    },
    {
      name: "Delta State",
      id: 6,
    },
    {
      name: "Niger State",
      id: 7,
    },
    {
      name: "Osun State",
      id: 8,
    },
    {
      name: "Benue State",
      id: 9,
    },
  ];
  const [form, setForm] = useState<stateProps[]>(state);
  const [active, setActive] = useState<boolean>(false);
  const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
    let filtered = state.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setForm(filtered);
  };
  return (
    <FormControl maxW={"400px"} pl="10px">
      <FormLabel>Description</FormLabel>
      <Input
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onChange={(event) => handleForm(event)}
      />
      {active && (
        <List
          listStyleType={"none"}
          p="0"
          m="0"
          maxH={"300px"}
          overflow="scroll"
          border="1px solid #ccc"
        >
          {form.map((item) => (
            <ListItem
              key={item.id}
              borderBottom="1px solid #ccc"
              py="20px"
              px="10px"
              onClick={() => console.log("clicked")}
            >
              {item.name}{" "}
            </ListItem>
          ))}
        </List>
      )}
    </FormControl>
  );
}
