import React from "react";
import shrimp from "./OddballJSON";

class Oddball extends React.Component{
    render(){
        return(
            <>
                <ul className="project-list">
                    {
                        shrimp.map(shrimp =>{
                            return(
                                <li>
                                    <div className="image">
                                        <img src={shrimp.imageSrc} alt="" style={shrimp.border}/>
                                    </div>
                                    <div class="inner">
                                        <h4>{shrimp.name}</h4>
                                        <p>{shrimp.description}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default Oddball;