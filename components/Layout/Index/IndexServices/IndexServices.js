import React from "react";
import Container from "../../../UI/Container/Container";
import PageTitleBox from "../../../UI/Boxes/PageTitleBox/PageTitleBox";
import ServiceBox from "../../../UI/Boxes/ServiceBox/ServiceBox";
import { ServiceBoxItems } from "../../../UI/Boxes/ServiceBox/ServiceBoxItems";

const IndexServices = () => {
  return (
    <div>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10rem" }}>
          <PageTitleBox text="Que hacemos" />
          <ServiceBox items={ServiceBoxItems} />
        </div>
      </Container>
    </div>
  );
};

export default IndexServices;
