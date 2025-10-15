import { withBase } from '../../utils/withBase.js';

export default function FooterSecondary() {
  return (
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
  );
}
