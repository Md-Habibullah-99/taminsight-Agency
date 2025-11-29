

import Grab_Value from "../sub_components/Grab_Value";

export default function Services({servicesArr = []}) {
  return (
    <div className="services_mini_container">
      <div className="services_line-container-main">
        {servicesArr.map((service, idx) => (
          <div key={idx} className="benefit-cart-top-elements services_line-container">
            <h5 className="benefit-card-max-element">{service.title}</h5>
            <h5 className="services_line-price">{service.price}</h5>
          </div>
        ))}
        
      </div>
      <div className="partner-services_bottom-value">
        <div>Total Free Value <span className="price">$3000</span>
          <a href="https://www.guthib.com">
            <Grab_Value content={["Grab Your", "Offer"]} />
          </a>
        </div>
      </div>
    </div>
  );
}

