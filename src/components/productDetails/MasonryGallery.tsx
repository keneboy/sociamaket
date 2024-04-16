import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import photos from "./photos";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
type imageProps = {
  src: string;
  width: number;
  height: number;
};

/* popout the browser and maximize to see more columns! -> */
import { product } from "../../hooks/useProducts";

type Props = {
  data: product[];
};
const MasonryGallery = ({ data }: Props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry columnsCount={3} gutter="10px">
        {photos.map((photo: imageProps, i: number) => (
          <img
            key={i}
            src={photo["src"]}
            style={{ width: "100%", display: "block" }}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
export default MasonryGallery;
