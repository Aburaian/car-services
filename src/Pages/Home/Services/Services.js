import React, { useEffect, useState } from "react";
import Service from "../Home/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((json) => setServices(json));
  }, []);
  return (
    <div id="services" className="container-fulid p-4">
      <h1 className="text-primary text-center">our services</h1>
      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
