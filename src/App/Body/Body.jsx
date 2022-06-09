import React from "react";
import './Body.css'
import Neocaridina from "./Neocaridina/Neocaridina";
import Caridina from "./Caridina/Caridina";
import Oddball from "./Oddball/Oddball";
import Crabs from "./Crabs/Crabs";

class Body extends React.Component{
    render(){
        return(
            <div className="body">
                <div className="projects">

                    {this.props.currentBody === 'Neocaridina' && <Neocaridina />}
                    {this.props.currentBody === 'Caridina' && <Caridina />}
                    {this.props.currentBody === 'Oddball' && <Oddball />}
                    {this.props.currentBody === 'Crabs' && <Crabs />}

                </div>             
            </div>
        )
    }
}

export default Body;