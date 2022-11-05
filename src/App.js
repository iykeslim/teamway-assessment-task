import './App.css';
import HeaderText from './components/HeaderTextConponent/HeaderText.js';
import TeamwayImage from './components/imagesComponent/teamwayImageComponent/TeamwayImage.js';
import WelcomeCard from './components/welcomeCard/WelcomeCard.js';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <TeamwayImage />
        <HeaderText />
        <WelcomeCard />
      </div>
    </div>
  );
}

export default App;
