import PropTypes from 'prop-types'

const TestCountLogic = props => {
    return (
            <div className="row">
                <div className="col">
                    <div className="questionCount">
                        Question <span>{props.counter}</span> of <span>{props.total}</span>
                    </div>
                </div>
            </div>
    )
}

TestCountLogic.PropTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default TestCountLogic