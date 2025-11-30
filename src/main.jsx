import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Tailwind (must be imported early so Preflight/utilities are available)
import './Styles/tail.css'
// Base styles
import './index.css'
import './Styles/main.css'

// Utilities
import './Styles/utils/cssVariables.css'
import './Styles/utils/buttons.css'
import './Styles/utils/newsLetterTextFormating.css'
import './Styles/utils/visibilityUtilities.css'
import './Styles/utils/mobileStyles.css'
import './Styles/utils/clickOnCopyEmail.css'

// Animations
import './Styles/animations/allanimations.css'
import './Styles/animations/cursor.css'

// Footer
import './Styles/footer/footer.css'
import './Styles/footer/bottomMenu/bottomMenuSticky.css'

// Logo & Services
import './Styles/logoes/client-logo-settings.css'
import './Styles/services/services.css'
import './Styles/services/awards/awards.css'
import App from './App.jsx'

// Affiliate
import './Styles/affiliatePage/affiliate.css'
import './Styles/affiliatePage/affiliate_common.css'
import './Styles/affiliatePage/affiliate_hero.css'
import './Styles/affiliatePage/affiliate_model.css'
import './Styles/affiliatePage/affiliate_program.css'

// Partnership
import './Styles/partnerShip/partnershipHero.css'
import './Styles/partnerShip/benifits.css'
import './Styles/partnerShip/mini_services.css'
import './Styles/partnerShip/shared_reasponsibility.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
