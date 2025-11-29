

export default function Services({servicesArr = []}) {
  return (
    <div className="services_line-container-main">
      {servicesArr.map((service, idx) => (
        <div key={idx} className="benefit-cart-top-elements services_line-container">
          <h5 className="benefit-card-max-element">{service.title}</h5>
          <h5 className="services_line-price">{service.price}</h5>
        </div>
      ))}
      
      <div className="partner-services_bottom-value">
        <h2>Total Free Value <span className="price">$3000</span></h2>
      </div>
    </div>
  );
}

