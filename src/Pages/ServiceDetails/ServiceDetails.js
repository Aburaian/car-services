import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>welcome to servics details: {serviceId} </h2>
    </div>
  );
};

export default ServiceDetails;
