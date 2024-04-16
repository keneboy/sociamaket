import { Image, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
type Props = {
  images: string[];
  onSelectImage: (image: string) => void;
};
export default function ProductThumbnail({ images, onSelectImage }: Props) {
  const [active, setActive] = useState<number>(0);
  return (
    <List display={"flex"} m="0" p="0" gap="10px">
      {images?.map((image, index) => (
        <ListItem
          key={index}
          onClick={() => {
            onSelectImage(image);
            setActive(index);
          }}
          border={active === index ? "3px solid green" : "1px solid transparen"}
        >
          <Image src={image} w="200px" h="200px" objectFit={"cover"} />
        </ListItem>
      ))}
    </List>
  );
}
