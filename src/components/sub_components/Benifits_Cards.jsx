import React from 'react';
import LottiePlayer from "../sub_components/LottiePlayer";

/**
 * benefitCard
 * Props:
 * - title: string
 * - frequency: string (optional)
 * - imgLink (optional),
 * - maxElement (optional),
 * - features: array of strings (optional)
 * - isLast: boolean (optional) if true renders the last special card layout
 */
export default function Benifit_Card({ title, frequency, imgLink, maxElement = false, features = [] }) {
  // if(maxElement){
  //   return (
  //     <div className="benefit_card benefit-card">
  //       <div className="benefit-cart-top-elements">
  //         <h4 className="benefit-card-max-element">{title}</h4>
  //         {frequency && <h6>{frequency}</h6>}
  //         {/* {percent && <h4 className="benefit-card-max-element">{percent}</h4>} */}
  //       </div>
  //       {features && features.length > 0 && (
  //         <ul role="list" className="checklist benefit-card-checkout-list">
  //           {features.map((f, i) => (
  //             <li className="featured-checklist" key={i}>
  //               <div className="checklist-icon">
  //                 <div className="icon-16">
  //                   {/* keep same svg used before (check icon) */}
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="svgsprite">
  //                     <path fillRule="evenodd" clipRule="evenodd" className="path"
  //                       d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
  //                       fill="currentColor"></path>
  //                   </svg>
  //                 </div>
  //               </div>
  //               <div dangerouslySetInnerHTML={{ __html: f }} />
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //       <div className="benefits_img-container">
  //         <img src={`${imgLink}`} alt="" />
  //       </div>
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div className="benefit_card benefit-card">
  //       <div className="benefit-cart-top-elements">
  //         <h4 className="benefit-card-max-element">{title}</h4>
  //         {frequency && <h6>{frequency}</h6>}
  //         {/* {percent && <h4 className="benefit-card-max-element">{percent}</h4>} */}
  //       </div>
  //       {features && features.length > 0 && (
  //         <ul role="list" className="checklist benefit-card-checkout-list">
  //           {features.map((f, i) => (
  //             <li className="featured-checklist" key={i}>
  //               <div className="checklist-icon">
  //                 <div className="icon-16">
  //                   {/* keep same svg used before (check icon) */}
  //                   <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="svgsprite">
  //                     <path fillRule="evenodd" clipRule="evenodd" className="path"
  //                       d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
  //                       fill="currentColor"></path>
  //                   </svg>
  //                 </div>
  //               </div>
  //               <div dangerouslySetInnerHTML={{ __html: f }} />
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //       <div className="benefits_img-container">
  //         <img src={`${imgLink}`} alt="" />
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="benefit_card benefit-card">
      <div className="benefit-cart-top-elements">
        <h4 className="benefit-card-max-element">{title}</h4>
        {frequency && <h6>{frequency}</h6>}
        {/* {percent && <h4 className="benefit-card-max-element">{percent}</h4>} */}
      </div>
      {features && features.length > 0 && (
        <ul role="list" className="checklist benefit-card-checkout-list">
          {features.map((f, i) => (
            <li className="featured-checklist" key={i}>
              <div className="checklist-icon">
                <div className="icon-16">
                  {/* keep same svg used before (check icon) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" className="svgsprite">
                    <path fillRule="evenodd" clipRule="evenodd" className="path"
                      d="M6.0729 9.7882L12.1823 3.67881C12.5572 3.30391 13.1651 3.30391 13.54 3.67881V3.67881C13.9149 4.05371 13.9149 4.66157 13.54 5.03648L6.78 11.7964C6.38948 12.1869 5.75632 12.1869 5.36579 11.7964L2.67882 9.10942C2.30392 8.73452 2.30391 8.12668 2.67881 7.75177V7.75177C3.05372 7.37685 3.66157 7.37685 4.03648 7.75176L6.0729 9.7882Z"
                      fill="white"></path>
                  </svg>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: f }} />
            </li>
          ))}
        </ul>
      )}
      <div className="benefits_img-container">
        <LottiePlayer src={imgLink}/>
      </div>
    </div>
  );
}
