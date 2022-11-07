import PropTypes from 'prop-types'

const TestAnswer = props => {
    return (
            <li>
                <input
                    checked={props.answerType === props.answer}
                    id={props.answerType}
                    value={props.answerType}
                    name={props.answerType}
                    disabled={props.answer}
                    onChange={props.onAnswerSelected}
                    //type could be radio or button just to navigate
                    type="text"
                />
                <label className="" htmlFor={props.answerType}>
                    {props.answerItem}
                </label>
            </li>

    )
}

TestAnswer.PropTypes = {
    answerType: PropTypes.string.isRequired,
    answerItem: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

export default TestAnswer