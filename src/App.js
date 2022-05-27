import './style.css';
import pic from './pic.jpg'

function Person(){
  return(
    <div className="title">
      <h3>Maina Kimani</h3>
      <h4>Frontend Developer</h4>
      <a href="https://mainakimani-profile.herokuapp.com" target="_blank" rel="noopener">mainakimani.com</a>
    </div>
  )
}
function Buttons(){
return (
  <div className="buttons">
    <div className="email"> 
      <i className="bi bi-envelope-fill"></i>
      <p>Email</p>
    </div>
    <div className="linkedin">
      <i className="bi bi-linkedin"></i>
      <p>Linkedin</p>
    </div>
  </div>
)
}
function Bio() {
return (
  <div>
    <div className="about">
      <h4>About</h4>
      <p>
        I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
        I try to keep up with security and best practices, and am always looking for new things to learn.
      </p>
      <h4>Interests</h4>
      <p>
        Food expert. Music scholar. Reader. <br/>
        Internet fanatic. Bacon buff. Entrepreneur. <br/>
        Travel geek. Pop culture ninja. Coffee fanatic. <br/>
      </p>
    </div>
  </div>
)
}

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="picture">
        <img src={pic} alt="Profile" />
        </div>
        <div className="content">
        <Person />
        <Buttons />
        <Bio />
        </div>
        <div className="socials">
        <div className="container">
          <i className="bi bi-twitter"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-github"></i>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
