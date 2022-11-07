
import{ Component } from 'react'
import QuestionsLogic from './components/QuestionsLogic.js'
import WelcomeCard from './components/welcomeCard/WelcomeCard.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderTestQuestion: false
    }
    this._onStartClick = this._onStartClick.bind(this)
  }

  renderWelcome() {
    return <WelcomeCard _onStartClick={this._onStartClick} title="Take a Personality Test" />
  }

  renderTest() {
    // create Test component here - Remember fromQuestionsLogic
    return <QuestionsLogic />
  }

  render() {
    let renderTestQuestion = this.state.renderTestQuestion
    if (renderTestQuestion) {
      return this.renderTest()
    }
    return this.renderWelcome()
  }

  _onStartClick() {
    setTimeout(() => this.setState({ renderTestQuestion: !this.state.renderTestQuestion }), 1000)
  }

}

export default App
