


export default function LookingForCard({card_arr = []}) {
  return (
    <div className="looking-for-card-container">
      {
        card_arr.map((card, idx) => (
          <div key={idx} className="looking-for-card-sub-container">
            <div className="looking-for-img-container">
              <img src={card.img} alt={card.title} />
            </div>
            <h6>{card.title}</h6>
            <p>{card.description}</p>
          </div>
        ))
      }
    </div>
  )
}



