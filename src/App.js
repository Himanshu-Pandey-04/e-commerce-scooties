import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='body'>
          <div className='product'>
              {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
              <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_z9gwyc2b.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player> */}
              <div className='images'>
                  <img id='circle' src='circle_anim.gif'/>
                  <img id='prod' src='scooty.png'/>
              </div>
          </div>
          <div className='info'>
              <span className='headline'>A neat headline comes here !</span>
              <span className='description'>A neat sample text to come here super soon. Till then admire the authentic and delightful User Interface Design of the Website. We are glad you came here, thanks for visiting.</span>
              <button className='details'><a href='/'>Show Details</a></button>
          </div>
      </div>
    </div>
  );
}

export default App;
