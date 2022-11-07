import React, { Component } from 'react'
import Colors from '../result/Colors'
import INEXVersion from './INEXVersion.js'

// outcomeVertion -> outcome for intoversion or extroversion
// showVersionOutcome -> show 

class Outcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showVertionOutcome: true,
        }
        this._onNextClick = this._onNextClick.bind(this)
    }

    renderOutcomeVertion() {
        return <INEXVersion outcomeVertion={this.props.outcomeVertion} _onNextClick={this._onNextClick} />
    }

    render() {
        let showVertionOutcome = this.state.showVertionOutcome
        if (showVertionOutcome) {
            return this.renderOutcomeVertion()
        }
    }

    _onNextClick() {
        let showVersionOutcome = this.state.showVertionOutcome
// I can do without this if statement - Remember

        if (showVersionOutcome) {
            setTimeout(() => {
                this.setState({
                                        // for false outcome
                    showVersionOutcome: !showVersionOutcome, 
                })
            }, 800)
        }
    }
}

export default Outcome