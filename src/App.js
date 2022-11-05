import './App.css';
import HeaderText from './components/HeaderTextConponent/HeaderText.js';
import WelcomeCard from './components/welcomeCard/WelcomeCard.js';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <HeaderText />
        <WelcomeCard />
      </div>
    </div>
  );
}

export default App;
