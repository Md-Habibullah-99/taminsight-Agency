

import LottiePlayer from "./LottiePlayer"

export default function Responsibilities_Cards({ content_arr = [] }) {
  return (
    <div className="responsibility-card-container">
      {content_arr.map((content, idx) => (
        <div key={idx} className="responsibility-card-sub-container">
          <div className="responsibility-img-container">
            <LottiePlayer src={content.imgSrc} />
          </div>
          <div className="responsibility-title-description-container">
            <h6>{content.title}</h6>
            <p>{content.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

