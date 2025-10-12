
import { useEffect } from 'react';
import { withBase } from '../../utils/withBase.js';

export default function Footer() {
  useEffect(() => {
    // Update time every minute (Asia/Dhaka)
    function updateTime() {
      const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Dhaka' };
      const timeStr = new Date().toLocaleString('en-US', options);
      const timeElem = document.getElementById('time');
      if (timeElem) timeElem.textContent = timeStr;
    }

    // Map OpenWeather 'main' to local icon URL
    function getWeatherIcon(main) {
      const baseUrl = withBase('/images/footerElements/watherIcons/');
      switch (main) {
        case 'Clouds':
          return `${baseUrl}clouds.svg`;
        case 'Rain':
          return `${baseUrl}rain.svg`;
        case 'Snow':
          return `${baseUrl}snow.svg`;
        case 'Night':
          return `${baseUrl}moon.png`;
        case 'Clear':
        default:
          return `${baseUrl}clear.svg`;
      }
    }

    // Fetch and update weather (Dhaka) every 10 minutes
    function updateWeather() {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=d1e52eafe56386f1439142c04afc5b44`;
      const tempElem = document.getElementById('temperature');
      const iconElem = document.getElementById('weather-icon');
      if (!(tempElem && iconElem)) return;

      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          if (!data || !data.main || !data.weather) throw new Error('Bad weather payload');
          const tempC = (data.main.temp - 273.15).toFixed(1);
          tempElem.textContent = `${tempC}°C`;
          iconElem.src = getWeatherIcon(data.weather[0].main);
          iconElem.alt = data.weather[0].description || data.weather[0].main || 'weather';
        })
        .catch(() => {
          tempElem.textContent = 'N/A';
        });
    }

    // Initialize and schedule updates if the targets exist
    const hasTime = !!document.getElementById('time');
    const hasTemp = !!document.getElementById('temperature');
    let timeIntervalId;
    let weatherIntervalId;

    if (hasTime) {
      updateTime();
      timeIntervalId = setInterval(updateTime, 60_000);
    }
    if (hasTemp) {
      updateWeather();
      weatherIntervalId = setInterval(updateWeather, 600_000);
    }

    return () => {
      if (timeIntervalId) clearInterval(timeIntervalId);
      if (weatherIntervalId) clearInterval(weatherIntervalId);
    };
  }, []);
  return (
    <>
    <footer className="footer">
    <div className="footer-primary">
      <div className="footer-primary-up-container">
        <div className="footer-primary-up">
          <div className="footer-primary-up_title">

            <p className="footer-primary-up-title_header">Click<img
              src={withBase('/images/footerElements/footerPrimaryArrow/right-arrow-icon.png')}
              alt=""
              className="footer-primary-up-title_header_arrow" />Copy<img
                src={withBase('/images/footerElements/footerPrimaryArrow/right-arrow-icon.png')}
                alt=""
                className="footer-primary-up-title_header_arrow" />Contact</p>
          </div>
          <h2 className="title title__main">
            <a className="email-link-click-to-copy" href="mailto:taminsight@gmail.com">taminsight@gmail.com</a>
          </h2>
        </div>
      </div>

      <div className="footer-primary_Bottom_container">
        <div className="footer-primary-left">
          <div className="footer-primary-left_content">
            <a href="#home" aria-current="page" className="footer-primary-left_logo_aTag w-inline-block">

              <svg width="368" height="30" viewBox="0 0 368 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="footer-primary-left_logo">
                <g clipPath="url(#clip0_133_30)">
                  <path d="M13.1203 29.0421V9.70816H0.00418091V0.734375H37.2773V9.70816H24.1528V29.0421H13.1203Z"
                    fill="#F2F2F2" />
                  <path
                    d="M45.1236 0.734375H58.2439L73.4271 29.0421H61.0041L58.7701 24.1981H44.5975L42.3676 29.0421H29.9404L45.1236 0.734375ZM47.8003 17.2872H55.5714L51.6963 8.93564L47.8003 17.2872Z"
                    fill="#F2F2F2" />
                  <path
                    d="M74.2623 0.693359H88.08L99.1124 14.8451L110.17 0.693359H123.95V28.9969H112.926V13.8972L101.893 28.9969H96.3522L85.2989 13.8972V28.9969H74.2623V0.693359Z"
                    fill="#F2F2F2" />
                  <path
                    d="M142.52 0.693359V8.96978H131.483V0.693359H142.52ZM134.047 28.9969L134.089 24.8461H131.483V11.1955H142.52V24.867L140.014 29.0178L134.047 28.9969Z"
                    fill="#F2F2F2" />
                  <path
                    d="M174.306 0.693359H185.363V28.9969H172.94L157.736 11.7091V28.9969H146.7V0.693359H161.883L174.306 15.6803V0.693359Z"
                    fill="#F2F2F2" />
                  <path
                    d="M208.543 11.6421C216.44 12.0597 227.539 12.59 227.518 19.6889C227.518 27.7732 218.252 29.6899 208.309 29.6899C198.367 29.6899 190.157 28.4705 189.101 19.6889H200.664C201.916 21.877 204.839 22.449 208.305 22.449C211.771 22.449 215.951 21.877 215.951 19.6889C215.951 18.4361 212.519 18.2566 208.076 18.0478C200.179 17.6302 189.08 17.0999 189.101 10.0219C189.101 1.93757 198.367 0 208.309 0C218.231 0.0626369 226.466 1.17757 227.518 10.0219H215.955C214.703 7.79203 211.779 7.2617 208.309 7.2617C204.839 7.2617 200.668 7.77115 200.668 10.0219C200.668 11.2663 204.1 11.4333 208.543 11.6421Z"
                    fill="#F2F2F2" />
                  <path d="M241.494 0.693359V28.9969H230.458V0.693359H241.494Z" fill="#F2F2F2" />
                  <path
                    d="M263.981 13.4547H283.211V29.6901H277.694L277.143 25.2847C273.857 28.5293 268.867 29.686 264.064 29.686C253.412 29.6442 244.693 26.5708 244.735 15.8724V13.8096C244.693 3.09035 253.412 0.0295001 264.064 -0.00390625C273.878 -0.00390625 281.966 2.6686 283.211 11.3877H271.481C270.733 10.4132 269.665 9.73433 268.466 9.47097C267.026 9.11767 265.547 8.9479 264.064 8.9657C259.538 9.02834 255.713 9.87184 255.767 14.4819V15.1793C255.705 19.8311 259.525 20.6329 264.064 20.6955C268.424 20.6955 271.205 20.4408 272.867 18.2944H263.981V13.4547Z"
                    fill="#F2F2F2" />
                  <path
                    d="M299.271 19.3299V28.9969H288.234V0.693359H299.271V10.3603H315.844V0.693359H326.898V28.9969H315.844V19.3299H299.271Z"
                    fill="#F2F2F2" />
                  <path d="M343.843 29.0421V9.70816H330.727V0.734375H368V9.70816H354.88V29.0421H343.843Z"
                    fill="#F2F2F2" />
                </g>
                <defs>
                  <clipPath id="clip0_133_30">
                    <rect width="368" height="29.6941" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </a>
          </div>
          <div className="footer-primary-left_content">
            <a href="https://www.figma.com/deck/rBQAlmywVditVjZ3lsQj4c/Taminsight_Portfolio-2025_Branding-Agency?node-id=1-257&viewport=-159%2C-129%2C0.73&t=DImIymB1uDCa3ur9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
              target="_blank" rel="noopener noreferrer">
              <div className="company-deck">
                <div className="company-deck-button">
                  <img
                    src={withBase('/images/footerElements/footerPrimaryArrow/arrow-down.svg')}
                    alt="Download arrow"
                    className="company-deck-icon"
                    // width="30"
                    // height="30"
                  />
                </div>
                <div className="company-deck-button-element-container">
                  <div className="company-deck-button-title">Company Deck</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        <div className="footer-primary-bottom-hr"></div>
        
        <div className="footer-primary-right">

          <div className="footer-primary-right-elements footer-social__media">
            <div className="footer-primary-right-title">
              <p>Social</p>
            </div>
            <div className="social-link footer-right-content-elements">
              <a target="_blank" href="https://visualtamim.artstation.com/">Artstation</a>
            </div>
            <div className="social-link footer-right-content-elements">
              <a target="_blank" href="https://www.guthib.com">Dribbble</a>
            </div>
            <div className="social-link footer-right-content-elements">
              <a target="_blank" href="https://www.behance.net/taminsight">
                Behance</a>
            </div>
            <div className="social-link footer-right-content-elements">
              <a target="_blank" href="https://www.instagram.com/taminsight/">Instagram</a>
            </div>
            <div className="social-link footer-right-content-elements">
              <a target="_blank" href="https://twitter.com/taminsight">Twitter</a>
            </div>
          </div>

          <div className="footer-primary-right-elements footer-terms_and_policies">
            <div className="footer-primary-right-title">
              <p>Terms & Policies</p>
            </div>
            <div className="footer-right-content-elements">
              <a href="#" target="_blank">Terms</a>
            </div>
            <div className="footer-right-content-elements">
              <a href="#" target="_blank">Privacy</a>
            </div>
            <div className="footer-right-content-elements">
              <a href="#" target="_blank">Data</a>
            </div>
          </div>
          <div className="footer-primary-right-elements footer-address">
            <div className="footer-primary-right-title">
              <p>Address</p>
            </div>
            <div className="footer-right-content-elements footer-address-elements">
              <a href="#" target="_blank">Sultana house</a>
            </div>
            <div className="footer-right-content-elements footer-address-elements">
              <a href="#" target="_blank">House no: 47</a>
            </div>
            <div className="footer-right-content-elements footer-address-elements">
              <a href="#" target="_blank">Road no:5, Block:D</a>
            </div>
            <div className="footer-right-content-elements footer-address-elements">
              <a href="#" target="_blank">Mirpur, Dhaka</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer_secondary">
      <div className="global-padding">
        <div className="container-large">
          <div className="footer_secondary-grid">
            <div className="footer_grid-col">
              <div className="text-body-small weight-medium c-text-tertiary">Devoloped by Habibullah <a
                  href="https://www.github.com/md-habibullah-99/" target="_blank">(github</a> <a
                  href="https://www.linkedin.com/in/habibullah123/">Linkedin)</a> </div>
            </div>
            <div className="footer_grid-col">
              <div className="location text-small-s">
                <div className="location_col">
                  <div className="c-text-tertiary">Dhaka</div>
                </div>
                <div className="location_col">
                  <div id="temperature" className="c-text-tertiary">9°C</div>
                </div>
                <div className="location_col">
                  <div id="time" className="c-text-tertiary">12:00 PM</div>
                </div>
        <div className="location_col weather"><img id="weather-icon" loading="lazy" alt=""
          src={withBase('/images/footerElements/watherIcons/clear.svg')} className="weather_icon" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
};