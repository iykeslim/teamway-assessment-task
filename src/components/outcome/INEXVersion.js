// defining the results for introversion and extroversion

import { Component } from 'react'
import PropTypes from 'prop-types'
import NextButn from '../buttons/NextButn.js'
import { ExtrovertDescription, IntrovertDescription } from '../test-description/Description.js'


export class INEXVersion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showIntrovertDesc: false,
            showExtrovertDesc: false,
           
        }
        this.onIntrovertDescClick = this.onIntrovertDescClick.bind(this)
        this.onExtrovertDscClick = this.onExtrovertDscClick.bind(this)
       
    }

    renderNextButn() {
        <NextButn onClick={this.props._onNextButnClick}>
            return (
                <span>Next</span>
                <div className="icon">
                    <i className="" />
                </div>
            )
        </NextButn>
      
    }

    renderIntrovertDesc() {
        return (
            <IntrovertDescription
                title={'Introversion Type Description'}
                content={` Introvert description here.`}
                onBackClick={this.onIntrovertDescClick}
            />
        )
    }
   

    renderExtrovertDesc() {
        return (
            <ExtrovertDescription
                title={'Extroversion Type Description'}
                content={`extrovert description here.`}
                onBackClick={this.onExtrovertDscClick}
            />
        )
    }

    render() {
        if (showIntrovertDesc) {
            return this.renderIntrovertDesc()
            // might change the below to just else statement - REMIND
        } else if (showExtrovertDesc) {
            return this.renderExtrovertDesc()
        }

        return (
            <div className="jumbotron">
                <h1 className="display-3 title">Test Outcome</h1>
                <hr className="my-4" />
                <h2 className="display-6 resultTxt">{this.props.outcomeVertion}</h2>
                <hr className="my-5" />
                <p className="lead">See outcome definition</p>
                <ul className="list-group">
                    <li className="list-group-item" onClick={this.onIntrovertDescClick}>
                        Introvert
                        <div className="icon">
                            <i className="" />
                        </div>
                    </li>
                    <li className="list-group-item" onClick={this.onExtrovertDscClick}>
                        Extrovert
                        <div className="icon">
                            <i className="" />
                        </div>
                    </li>
                </ul>
                {this.renderNextButn()}
            </div>
        )
    }

    onIntrovertDescClick() {
        let showIntrovertDesc = this.state.showIntrovertDesc
        this.setState({ showIntrovertDesc: !showIntrovertDesc })
    }

    onExtrovertDscClick() {
        let showExtrovertDesc = this.state.showExtrovertDesc
        this.setState({ showExtrovertDesc: !showExtrovertDesc })
    }

}

INEXVersion.PropTypes = {
    outcomeVertion: PropTypes.string.isRequired,
    outcomeItv: PropTypes.string.isRequired,
    outcomeEtv: PropTypes.string.isRequired,
}


export default INEXVersion