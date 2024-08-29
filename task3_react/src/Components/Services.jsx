import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Services = () => {
  const servicesInfoData = [
    {
      image: PickMeals,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipscing elit.",
    },
    {
      image: ChooseMeals,
      title: "UI/UX Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipscing elit. ",
    },
    {
      image: DeliveryMeals,
      title: "Graphics Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipscing elit.",
    },
        {
      image: DeliveryMeals,
      title: "SEO Marketing",
      text: "Lorem ipsum dolor sit amet, consectetur adipscing elit.",
    },
  ];
  return (
    <div className="services-section-wrapper">
      <div className="services-section-top">
        <p className="primary-subheading">Services</p>
        <h1 className="primary-heading">We Provide</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipscing elit.Lectus mattis nunc
            aliquam tincidunt est non.viverra nec eu.
        </p>
      </div>
      <div className="services-section-bottom">
        {servicesInfoData.map((data) => (
          <div className="services-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;