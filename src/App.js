import frame1 from './images/Frame-1.png';
import frame2 from './images/Frame-2.png';
import frame3 from './images/Frame-3.jpg';
import frame4 from './images/FRAME-4.jpg';
import frame5 from './images/EXP-1.png';
import frame6 from './images/EXP-2.png';
import frame7 from './images/EXP-3.png';
import frame8 from './images/EXP-4.png';
import frame9 from './images/EXP-5.png';
import frame10 from './images/EXP-6.png';
import frame11 from './images/EXP-7.png';


import './App.css';
import Typewriter from 'typewriter-effect';
import { Fade, Slide } from 'react-awesome-reveal';


function App() {
  return (
    <div>   


      <header>
        <div className="nav-bar">
          <a href="#" className="logo">Ailsa</a>
          <div className="navigation">
            <div className="nav-items">
              <div class="nav-close-btn"></div>
              <a class="active" href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experiences">Experiences</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </header>

      <section className="home flex-center" id="home">
        <div className="home-container">
          <div className="media-icons">
            <a href="https://www.linkedin.com/in/ailsa-anarghia-121066232/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ailsanarghia/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:ailsaanarghia@gmail.com?subject=Hello Ailsa&body=I'm captivated by your portfolio and would love to collaborate with you">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          <div className="info">
            <Slide><h2>Hi, I am Ailsa</h2></Slide>
            <h3>
              <Typewriter
                options={{
                  strings: ['Graphic Designer', 'Visualizer', 'UI/UX Designer', 'Illustrator', 'Branding Strategist'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3><Fade delay={1e3} cascade damping={1e-1}>
            <p>I do design, I create design, I enjoy design. Mastering to export feelings through arts.</p></Fade>
            <a href="#" className="btn">Contact Me <i className="fas fa-arrow-circle-right"></i></a>
          </div><Fade delay={1e2} cascade damping={1e-1}>
          <div className="home-img">
            <img src={frame1} alt="Profile" />
          </div></Fade>
        </div>
        <a href="#about" className="scroll-down">Scroll Down<i className="fas fa-arrow-down"></i></a>
      </section>

      <section className="about section" id="about">
        <div className="container flex-center">
          <h1 className="section-title-01">About Me</h1>
          <h2 className="section-title-02">About Me</h2>
          <div className="content flex-center">
            <div className="Frame-4">
              <img src={frame4} alt="About" />
            </div>
            <div className="about-info">
              <div className="description">
                <h3>I'm Ailsa</h3><Slide>
                <h4>A creative-minded <span>graphic designer</span> based in <span>Jakarta</span></h4></Slide><Fade delay={1e3} cascade damping={1e-1}>
                <p>I design and develop services for customers, specializing in creating stylish, sleek design, branding, and impactful experiences for all. My passion is to design through meaningful art. Let's dive deeper!</p></Fade>
              </div>
              <ul className="professional-list">
                <li className="list-item">
                  <h3>3+</h3>
                  <span>Years of<br />Experience</span>
                </li>
                <li className="list-item">
                  <h3>2K+</h3>
                  <span>Happy<br />Customers</span>
                </li>
                <li className="list-item">
                  <h3>50+</h3>
                  <span>Successful<br />Projects</span>
                </li>
              </ul>
              <a href="https://drive.google.com/file/d/1B-EeWiZO7oeFASZH3xdtfSAhAuNqOoNJ/view?usp=sharing" download className="btn">
                Download CV <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" id="experiences">
        <div className="container flex-center">
          <h1 className="section-title-01">Experiences</h1>
          <h2 className="section-title-02">Experiences</h2>
          <div className="content flex-center">
      
          <div class="page-all">
  
<div class="experience-scroll-container">
  <div class="m-scroll">
    <div class="m-scroll__title">
      <div>
        <h1>
        <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view">- Illustrations -</a> <a href="https://drive.google.com/drive/u/1/folders/11j-bYYA6bJwZom-ZX1nQdoVXXB5hyS7S"> Web Design -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> SocMed Content -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Branding -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Typography -</a><a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Photography -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Leadership </a>  &nbsp;
        </h1>
        <h1>
        <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view">- Illustrations -</a> <a href="https://drive.google.com/drive/u/1/folders/11j-bYYA6bJwZom-ZX1nQdoVXXB5hyS7S"> Web Design -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> SocMed Content -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Branding -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Typography -</a><a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Photography -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Leadership </a>  &nbsp;
        </h1>
      </div>
    </div>
  </div>

  <div class="m-scroll-3">
    <div class="m-scroll-3__title">
      <div>
        <h1>
        <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view">- Illustrations -</a> <a href="https://drive.google.com/drive/u/1/folders/11j-bYYA6bJwZom-ZX1nQdoVXXB5hyS7S"> Web Design -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> SocMed Content -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Branding -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Typography -</a><a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Photography -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Leadership </a>  &nbsp;
        </h1>
        <h1>
        <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view">- Illustrations -</a> <a href="https://drive.google.com/drive/u/1/folders/11j-bYYA6bJwZom-ZX1nQdoVXXB5hyS7S"> Web Design -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> SocMed Content -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Branding -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Typography -</a><a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Photography -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Leadership </a>  &nbsp;
        </h1>
      </div>
    </div>
  </div>

  <div class="m-scroll-1">
    <div class="m-scroll-1__title">
      <div>
        <h1>
        <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view">- Illustrations -</a> <a href="https://drive.google.com/drive/u/1/folders/11j-bYYA6bJwZom-ZX1nQdoVXXB5hyS7S"> Web Design -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> SocMed Content -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Branding -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Typography -</a><a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Photography -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Leadership </a>  &nbsp;
        </h1>
        <h1>
        <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view">- Illustrations -</a> <a href="https://drive.google.com/drive/u/1/folders/11j-bYYA6bJwZom-ZX1nQdoVXXB5hyS7S"> Web Design -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> SocMed Content -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Branding -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Typography -</a><a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Photography -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Leadership </a>  &nbsp;
        </h1>
      </div>
    </div>
  </div>
  
  <div class="m-scroll-2">
    <div class="m-scroll-2__title">
      <div>
        <h1>
        <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view">- Illustrations -</a> <a href="https://drive.google.com/drive/u/1/folders/11j-bYYA6bJwZom-ZX1nQdoVXXB5hyS7S"> Web Design -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> SocMed Content -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Branding -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Typography -</a><a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Photography -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Leadership </a>  &nbsp;
        </h1>
        <h1>
        <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view">- Illustrations -</a> <a href="https://drive.google.com/drive/u/1/folders/11j-bYYA6bJwZom-ZX1nQdoVXXB5hyS7S"> Web Design -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> SocMed Content -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Branding -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Typography -</a><a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Photography -</a> <a href="https://drive.google.com/file/d/1EZ6PrhWU0viqYvoLdcdb3wz2xXouw8Uj/view"> Leadership </a>  &nbsp;
        </h1>
      </div>
    </div>
  </div>
 </div>

    <div class="extended">
          <section className="portfolio section" id="portfolio">
            <div className="container flex-center">
              <h1 className="section-title-01-portfolio">Portfolio</h1>
              <h2 className="section-title-02-portfolio">Portfolio</h2>
            </div>

          <div class="cards-container"> 
          <div class="carousel">
      <div class="group">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
      <div aria-hidden class="group">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>

        
          </div>
          <div class="cards-container"> 
          <div class="carousel-ltr">
      <div class="group">
        <div class="card-ltr"></div>
        <div class="card-ltr"></div>
        <div class="card-ltr"></div>
        <div class="card-ltr"></div>
        <div class="card-ltr"></div>
      </div>
      <div aria-hidden class="group">
        <div class="card-ltr"></div>
        <div class="card-ltr"></div>
        <div class="card-ltr"></div>
        <div class="card-ltr"></div>
        <div class="card-ltr"></div>
      </div>
    </div>
          </div>
          </section>
    </div>
    <div class="contact-container" id="contact">
                <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col hidden">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div class="footer-col hidden">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>


    </div>
</div>
          </div>
        </div>
      </section>
    </div>


  );
}
export default App;