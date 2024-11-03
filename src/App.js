import frame1 from './images/Frame-1.png';
import frame2 from './images/Frame-2.png';
import frame3 from './images/Frame-3.jpg';
import frame4 from './images/FRAME-4.jpg';
import './App.css';
import Typewriter from 'typewriter-effect';


function App() {
  return (
    <>
    <header>
        <div class="nav-bar">
            <a href="#" class="logo">Ailsa</a>
            <div class="navigation">
                <div class="nav-items">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div> 
    </header>
    <section class="home flex-center" id="home">
        <div class="home-container">
            <div class="media-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a> 
              <a href="https://www.instagram.com/ailsanarghia/" target="_blank"><i class="fab fa-instagram"></i></a>  
              <a href="#"><i class="fab fa-twitter"></i></a>  
            </div>
            <div class="info">
                <h2>Hi, I am Ailsa</h2>
                <h3>
                    <Typewriter
                        options={{
                            strings: ['Graphic Designer', 'Visualizer', 'UI/UX Designer', 'Illustator', 'Branding Strategist'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h3>
                <p>I do design, I create design, I enjoy design. Mastering to export feelings through arts.</p>
                <a href=""class="btn">Contact Me <i class="fas fa-arrow-circle-right"></i></a>
            </div>
            <div class="home-img">
                <img src={frame1} alt="" />
            </div>
        </div>
        <a href="#about" class="scroll-down">Scroll Down<i class="fas fa-arrow-down"></i></a>
    </section>
    
    <section class="about section" id="about">
    <div class="container flex-center">
    <h1 class="section-title-01">About Me</h1>
    <h2 class="section-title-02">About Me</h2>
    <div class="content flex-center">
        <div class="Frame-4">
            <img src={frame4} alt=""/>
        </div>
        <div class="about-info">
            <div class="description">
                <h3>I'm Ailsa</h3>
                <h4>A creative minded<span>graphic designer</span> based in <span>Jakarta</span></h4>
                <p>I design and develop services for customers specializing creating stylish, sleek design, branding and creating impactful something for all. My passion is to design digital user experience through meaningful interactions by art. Check out my portfolio</p>
            </div>
            <ul class="professional-list">
                  <li class="list-item">
                    <h3>3+</h3>
                    <span>Years of<br />Experience</span>
                </li>
                 <li class="list-item">
                    <h3>2K+</h3>
                    <span>Happy<br />Customers</span>
                </li>
                 <li class="list-item" />
                    <h3>50+</h3>
                    <span>Success<br />Projects</span>
            </ul>
            <a href="" class="btn">Download CV <i class="fas fa-download"></i></a>
        </div>
        </div>
    </div>
    </section>
    </>
  );
}

export default App;
