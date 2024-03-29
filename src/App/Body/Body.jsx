import React from "react";
import './Body.css'
import Neocaridina from "./Neocaridina/Neocaridina";
import Caridina from "./Caridina/Caridina";
import Oddball from "./Oddball/Oddball";
import Crabs from "./Crabs/Crabs";
import Home from "./Home/Home";
import Isopod from "./Isopods/Isopod";

class Body extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentBody: localStorage.getItem('body') || this.props.currentBody
          };

    }

    componentDidUpdate() {
        if( this.state.currentBody && this.props.currentBody !==this.state.currentBody){
            localStorage.setItem('body', this.props.currentBody)
            this.setState({currentBody: localStorage.getItem('body')})
        }
        
    
    }
    componentDidMount(){
        console.log(this.state.currentBody);
    }

    render(){
        return(
            <div className="body">
                
                <div className="projects"> 
                    {this.state.currentBody === 'Home' && <Home />}
                    {this.state.currentBody === 'Neocaridina' && <Neocaridina />}
                    {this.state.currentBody === 'Caridina' && <Caridina />}
                    {this.state.currentBody === 'Oddball' && <Oddball />}
                    {this.state.currentBody === 'Crabs' && <Crabs />}
                    {this.state.currentBody === 'Isopods' && <Isopod />}

                </div>             
            </div>
        )
    }
}

export default Body;