import PropTypes from 'prop-types'

const TestQuestion = props => {
    return (
            <div className="row">
                <div className="col">
                    <h1>{props.item}</h1>
                </div>
            </div>
    )
}

TestQuestion.PropTypes = {
    item: PropTypes.string.isRequired
}

export default TestQuestion