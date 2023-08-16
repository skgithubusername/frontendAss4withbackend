import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import homeImg from './images/home2.png';
import myImage from './images/demo-logo.png';
import './Pricing.css'; 
import './styles.css'; 
function Pricing() {
  return (
    <div >
{/* navbar */}
<nav className="navbar">
      <div className="navbar-left">
        <img src={myImage} alt="" className="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#features">Features</a></li>
        <li className="nav-item"><a href="/login">Login</a></li>
        <li className="nav-item"><a href="/Pricing">Pricing</a></li>
      </ul>
    </nav>


    {/* home */}

    <section id="home">
      <div className="container">
        <div className="text-center">
          <h1>Alexa Staking</h1>
          <p className="st-title">Rule The World</p>
        
        </div>
      </div>
    </section>

      <section id="second">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="stbox1">
              <h2>The platform for NFT and GameFi</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nam commodi aut quis officiis cum
                deleniti eligendi esse laborum ullam veritatis adipisci architecto dicta! Rem exercitationem pariatur
                laboriosam dolor sapiente!
              </p>
              
              <div className="stbox-mid">
              <p>Your Staked Alexa: 250 Alexa</p>
                      <p>Your Staked Alexa: 250 Alexa</p>
                      <p>Your Staked Alexa: 250 Alexa</p>
                      <p>Early unstake fee : 25%</p>
                      <p>Referral Commision upto 6%</p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nam commodi aut quis officiis cum
                deleniti eligendi esse laborum ullam veritatis adipisci architecto dicta! Rem exercitationem pariatur
                laboriosam dolor sapiente!
              </p>

            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12 stbox2">
                <h5>9,574,20.84 Alexa</h5>
                <p>Total Referral Commission</p>
                <p>
                Lorem ipsum dolor sit amet veritatis adipisci architecto dicta! Rem exercitationem pariatur
                laboriosam dolor sapiente!
              </p>
               
              </div>
              <div className="col-md-12 stbox2">
                <h5>9,574,20.84 Alexa</h5>
                <p>Total Referral Commission</p>
                <p>
                Lorem ipsum dolor sit amet veritatis adipisci architecto dicta! Rem exercitationem pariatur
                laboriosam dolor sapiente!
              </p>
               
              </div>
              <div className="col-md-12 stbox2">
                <h5>9,574,20.84 Alexa</h5>
                <p>Total Referral Commission</p>
                <p>
                Lorem ipsum dolor sit amet veritatis adipisci architecto dicta! Rem exercitationem pariatur
                laboriosam dolor sapiente!
              </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Features */}
      <section id="third" >
        <div className="container">
          <div className="row">
            <h1 >Rule The World</h1>
            <div className="col-md-4">
              <div className="stbox2">
                <h1>Level 1 - (3%)</h1>
                <h5 className="box1pf">200 Alexa</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stbox2">
                <h1>Level 1 - (3%)</h1>
                <h5 className="box1pf">200 Alexa</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stbox2">
                <h1>Level 1 - (3%)</h1>
                <h5 className="box1pf">200 Alexa</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="neon">
        <div className="containe">
          <div className="neon-card">
            <h2>Let there be light!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat architecto assumenda. Iste corrupti nostrum alias! Expedita, quod sint libero minima earum molestias error nesciunt, dignissimos ipsum inventore vero autem!</p>
          </div>
        </div>
      </section>


    {/* product */}
<section id=" product">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="promo-subtitle2">Alexa Pro Tokenomics</h1>
            <div className="promo-subtitle1">
              <p>Name: Alexa Pro</p>
              <p>Total supply: 21,000,000</p>
              <p>Decimal: 8</p>
              <p>Network: BSC Network</p>
              <p>Smart Contract:</p>
              <p>p0x76c82Eef290f8de6E230cbaddf508f16c202b52B</p>
            </div>
           
             <a className="bn" href="/">Button</a>
          </div>
          <div className="col-md-6 text-center">
            <img src={homeImg} className="img-fluid" alt="error" />
          </div>
        </div>
      </div>
    </section>
    {/* footer */}
    <div className="footer-basic">
        <hr />
        <footer>
          <div className="social">
            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-solid fa-envelope"></i></a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Home</a></li>
            <li className="list-inline-item"><a href="#">Services</a></li>
            <li className="list-inline-item"><a href="#">About</a></li>
            <li className="list-inline-item"><a href="#">Terms</a></li>
            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
          </ul>
          <p className="copyright">Copyright Ⓒ 2022-23 AlexaPro. All Rights Reserved.</p>
        </footer>
      </div>
        </div>
      

  )
}

export default Pricing
