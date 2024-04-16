import React, { useState } from "react";
import MasonryGallery from "./MasonryGallery";
import GridTab from "./GridTab";
import SimpleGallery from "./SimpleGallery";
import useProducts from "../../hooks/useProducts";

export default function MasonrySimpleContainer() {
  const [active, setActive] = useState<number>(1);
  //   consume the various product....
  const { data: products, isLoading, error } = useProducts();

  return (
    <div>
      {" "}
      <GridTab onSelectTab={(id) => setActive(id)} active={active} />
      {active === 1 && <MasonryGallery data={products?.data || []} />}
      {active === 2 && <SimpleGallery data={products?.data || []} />}
    </div>
  );
}
