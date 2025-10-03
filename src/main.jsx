import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Global CSS imports (previously linked in index.html)
import './Styles/utils/cssVariables.css'
import './Styles/utils/buttons.css'
import './Styles/utils/newsLetterTextFormating.css'
import './Styles/utils/visibilityUtilities.css'
import './Styles/utils/mobileStyles.css'
import './Styles/animations/allanimations.css'
import './Styles/animations/cursor.css'
import './Styles/footer/footerPrimary.css'
import './Styles/footer/footerPrimaryRight.css'
import './Styles/footer/footerPrimaryLeft.css'
import './Styles/footer/footerPrimaryUp.css'
import './Styles/footer/footerPrimaryBottom.css'
import './Styles/footer/bottomMenu/bottomMenuSticky.css'
import './Styles/utils/clickOnCopyEmail.css'
import './Styles/logoes/client-logo-settings.css'
import './Styles/services/services.css'
import './Styles/services/awards/awards.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
