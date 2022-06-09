import React from "react";
import './Head.css';


class Head extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)

        this.state= {
            active: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(body){
        console.log(body);
        this.props.changeBody(body);
        this.setState({active: body});
    }

    render(){
        return(
            <div className="head">
                <div className="head-container">
                    <div className="left">
                        <i className="fa-solid fa-shrimp"></i>
                        <h1>Tommy Avetisyan</h1>
                    </div>
                    <div className="type border">
                        <h2 onClick={() => this.handleClick('Neocaridina') } className={this.state.active === 'Neocaridina' ? 'active' : ''}>Neocaridina</h2>
                        <h2 onClick={() => this.handleClick('Caridina')} className={this.state.active === 'Caridina' ? 'active' : ''}>Caridina</h2>
                        <h2 onClick={() => this.handleClick('Oddball')} className={this.state.active === 'Oddball' ? 'active' : ''}>Oddball</h2>
                        <h2 onClick={() => this.handleClick('Crabs')} className={this.state.active === 'Crabs' ? 'active' : ''}>Crabs</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Head