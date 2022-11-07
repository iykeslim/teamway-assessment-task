import PropTypes from 'prop-types'
import TestQuestion from './TestQuestion'
import TestCountLogic from './TestCountLogic'
import TestAnswer from './TestAnswer'

const TestProper = props => {
    const handleTestOutcome = key => {
        return (
            <TestAnswer
                key={key.item}
                answerItem={key.item}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onSelectedOutcome={props.onSelectedOutcome}
            />
        )
    }
    return (
    <div key={props.questionId}>
            <TestCountLogic counter={props.questionId} total={props.questionTotal} />
            <div className="w-100" />
            <TestQuestion content={props.question} />
            <div className="w-100" />
            <div className="row">
                <ul>{props.answerOptions.map(handleTestOutcome)}</ul>
            </div>
    </div>
    )
}

TestProper.PropTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onSelectedOutcome: PropTypes.func.isRequired
}

export default TestProper