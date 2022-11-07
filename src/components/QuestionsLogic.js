import { Component } from 'react'
import testQuestions from "../temp-data/testQuestions.js"
import Outcome from "./outcomeComponent/Outcome.js"
import TestCard from './questionCardComponent/TestCard.js'
import Test from "./testComponent/Test.js"



class QuestionsLogic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {
                INEXVersion: {
                    Extrovert: 5,
                    Introvert: 5,
                },
            
            },
            outcomeVertion: '',

        }
        this.handleSelectedAnswer = this.handleSelectedAnswer.bind(this)
    }

    // parsing the data 
    componentDidMount() {
        const answerOptions = testQuestions.map(question => question.answers)
        this.setState({
            question: testQuestions[0].question,
            answerOptions: answerOptions[0]
        })
    }

    // determine answer by selected option
    setUserAnswer(answer) {
        const answersCount = this.state.answersCount
        let parseAnswer = answer => {
            const answer_array = answer.split(',')
            let vertionOutcome = answer_array[1]
            if (answer_array.length === 3) {
                answersCount['INEXVersion'][vertionOutcome] += 1
            } else if (answer_array.length === 4) {
                answersCount['INEXVersion'][vertionOutcome] -= 1
            }
            return answersCount
        }
        this.setState({
            answersCount: parseAnswer(answer),
            answer: answer
        })
    }

    // work on the counter here - TODO
    setNextQuestion() {
        const counter = this.state.counter + 1
        const questionId = this.state.questionId + 1
        this.setState({
            counter: counter,
            questionId: questionId,
            question: testQuestions[counter].question,
            answerOptions: testQuestions[counter].answers,
            answer: ''
        })
    }

    // set answer and set next - removing setTimeout - Remember
    handleSelectedAnswer(event) {
        this.setUserAnswer(event.currentTarget.value)
        if (this.state.questionId < testQuestions.length) {
            this.setNextQuestion()
        } else {
            this.setOutcome(this.getVertionOutcome())
        }
    }

   // Outcome here 

    getINEXVersionResults() {
        const answersCount = this.state.answersCount
        const vertionOutcome = answersCount['INEXVersion']
        const answersCountKeysINEXVersion = Object.keys(vertionOutcome)
        const answersCountValuesINEXVersion = answersCountKeysINEXVersion.map(key => vertionOutcome[key])
        const maxAnswerCountINEXVersion = Math.max.apply(null, answersCountValuesINEXVersion)
        return answersCountKeysINEXVersion.filter(key => vertionOutcome[key] === maxAnswerCountINEXVersion)
    }


 // outcome conditional display logic - TODO
    setOutcome(outcomeVertion) {
        if (outcomeVertion.length >= 1) {
            this.setState({ outcomeVertion: outcomeVertion[0] })
        }
    }

//   Render the test component
    renderTest() {
        return (
            // create Test component - TODO
            <Test
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={testQuestions.length}
                onSelectedAnswer={this.handleSelectedAnswer}
            />
        )
    }

// Render outcome function
    renderOutcome() {
        return (
            <Outcome
                outcomeVertion={this.state.outcomeVertion}
            />
        )
    }

// Render the test card here

    render() {
        return (
                <TestCard>
                   
                    {this.renderTest()}
                </TestCard>
        )
    }
}

export default QuestionsLogic