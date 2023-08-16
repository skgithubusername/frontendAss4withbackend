import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles.css'; 
import myImage from './images/demo-logo.png';
import bannerImage from './images/home-right.webp';
import aboutImage from './images/about-us.webp';


function Home() {
  return (
      
      <div >
 


<nav className="navbar" >
      <div className="navbar-left">
        <img src={myImage} alt="" className="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="#features">Features</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="/login">Login</a></li>
        <li className="nav-item"><a href="/Pricing">Pricing</a></li>
      </ul>
    </nav>

{/* banner/home */}

<section id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="promo-title">Rule The World</h1>
                   
                        <h5 className="promo-subtitle">
                            The Alexa blockchain and product ecosystem enable development of high-performance blockchain
                            projects. An array of original features and protocols is designed to support speed, privacy,
                            usability, and liquidity needs all in one platform.
                        </h5>
                       <a  href='/login'>    <button type="button" className="btn btn-secondary btn-lg">
                            
                            Join Us Now
                        </button></a>
  

                    </div>
                    <div className="col-md-6 text-center">
                        <img src={bannerImage} className="img-fluid" alt="error" style={{ marginTop: '5%' }} />
                    </div>
                </div>
            </div>
        </section>

{/*features */}
<section id="features" style={{marginLeft:'5%'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="box1">
              <h1>Alexa Staking</h1>
              <p className="box1p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam, fugiat voluptatem
                magnam aut consectetur in sit autem est recusandae molestias at? Alias, soluta fugiat
                exercitationem id recusandae pariatur dolorum.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box1">
              <h1>Alexa Staking</h1>
              <p className="box1p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam, fugiat voluptatem
                magnam aut consectetur in sit autem est recusandae molestias at? Alias, soluta fugiat
                exercitationem id recusandae pariatur dolorum.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box1">
              <h1>Alexa Staking</h1>
              <p className="box1p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam, fugiat voluptatem
                magnam aut consectetur in sit autem est recusandae molestias at? Alias, soluta fugiat
                exercitationem id recusandae pariatur dolorum.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box1">
              <h1>Alexa Staking</h1>
              <p className="box1p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam, fugiat voluptatem
                magnam aut consectetur in sit autem est recusandae molestias at? Alias, soluta fugiat
                exercitationem id recusandae pariatur dolorum.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box1">
              <h1>Alexa Staking</h1>
              <p className="box1p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam, fugiat voluptatem
                magnam aut consectetur in sit autem est recusandae molestias at? Alias, soluta fugiat
                exercitationem id recusandae pariatur dolorum.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box1">
              <h1>Alexa Staking</h1>
              <p className="box1p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam, fugiat voluptatem
                magnam aut consectetur in sit autem est recusandae molestias at? Alias, soluta fugiat
                exercitationem id recusandae pariatur dolorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* // About */}
<section id="about" style={{marginLeft:'5%'}}>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={aboutImage} alt="error" className="img-fluid" />
    </div>
    <div className="col-md-6">
      <h2 className="promo-subtitle2">About Alexa Chain</h2>
      <p className="promo-subtitle1">
        AlexaChain is an EVM-compatible blockchain that aims to complement the $Alexa cryptocurrency. As a proof-of-stake blockchain, AlexaChain seeks to bring scalability, security, robustness, and utility to $Alexa. Alexachain envisions that interoperable blockchain technology makes the world economy more resilient through decentralization, more accountability through transparency, and more efficiency through programmable value. The future economy consists of more than one million interconnected blockchains that exchange real-world and scarce digital assets.
      </p>
    </div>
  </div>
</div>
</section>



{/* box*/}
<section id="boxs2" style={{marginLeft:'5%'}}>
      <div className="container">
        <div className="row">
          <div className="box2">
            <h1 className="promo-subtitle2">Join our community</h1>
            <p style={{ marginTop: '5%' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus est iusto quas dignissimos nemo perferendis, doloribus eveniet mollitia sit
              earum sunt et veniam id optio inventore. Molestias obcaecati at provident?</p>
            <button type="button" className="btn2 btn-secondary btn-lg">Pinksale Live Now</button>
          </div>
        </div>
      </div>
    </section>


    {/* footer */}
    <footer >
      <div className="footer">
        <div className="contain">
          <div className="col2">
            <img src={myImage} alt="" />
            <h5 style={{ color: 'white', fontSize: 'xx-large' }}>Rule The World</h5>
          </div>
          <div className="col">
            <h2>Company</h2>
            <ul>
              <li>About us</li>
              <li>Our Mission</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="col">
            <h2>Products</h2>
            <ul>
              <li>SEO</li>
              <li>Content Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div className="col">
            <h2>Team</h2>
            <ul>
              <li>HR Team</li>
              <li>Finance Team</li>
              <li>Content Team</li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
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
    </footer>
    </div>
  )

}



export default Home
