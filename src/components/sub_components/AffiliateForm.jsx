
import '../../Styles/affiliatePage/affiliate_form.css'


export default function AffiliateForm (){
  return (
    <>
    <div className="hero_header ">
        
        <div data-scroll-reveal="" className="hero_content is-home">
          <h2 className="hero_heading heading-gradient">
            <div className="word">Join</div>
            <div className="word">In</div>
            <div className="word">Our</div>
            <div className="word">Affiliate</div>
            <div className="word">Program</div>
          </h2>
          
          <div className="input_container-is_form flex-1">
            <input className="" type="text" placeholder="Full Name*" />
            <input type="email" name="" id="" placeholder="Enter Your Email*"/>
            
            <select name="wearelookingfor" id="">
              <option selected>What Are We Looking?</option>
              <option value="0">1. Individual Entrepreneur </option>
              <option value="1">2. Strong Interpersonal </option>
              <option value="2">3. Marketing Agencies</option>
              <option value="3">4. Social Media Influencers</option>
            </select>
            
            <input type="text" placeholder='Enter Your Company Name/Link' />
            <input type="text" placeholder='Enter Your Job Title' />
            <textarea placeholder='Why Do You Want To Become Our Referral Partner?' />
            <div className="terms_condition_radio">
              <div className="terms_condition_inner_container">
                <input className='terms_condition_radio_main' type="checkbox" name="" id="" />
              </div>
              <p className='inline'>By Checking this box you are agreeing with our <a href="https://www.guthib.com">Terms & conditions</a> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}