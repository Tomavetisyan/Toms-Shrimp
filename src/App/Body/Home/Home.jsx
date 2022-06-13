import React from "react";
import './Home.css'

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="home-container">
                    <div className="header">
                        <h1>Welcome to my hobbies</h1>
                        <h2>Please feel free to explore</h2>
                    </div>
                    <div class="container">
                        <div class="Home-1"><img src={require("./HomeSRC/Home-1.jpg")} alt="" /></div>
                        <div class="Home-2"><img src={require("./HomeSRC/Home-2.jpg")} alt="" /></div>
                        <div class="Home-3"><img src={require("./HomeSRC/Home-3.jpg")} alt="" /></div>
                        <div class="Home-4"><img src={require("./HomeSRC/Home-4.jpg")} alt="" /></div>
                        <div class="home-5"><img src={require("./HomeSRC/Home-5.jpg")} alt="" /></div>
                        <div class="Home-6"><img src={require("./HomeSRC/Home-6.jpg")} alt="" /></div>
                        <div class="Home-7"><img src={require("./HomeSRC/Home-7.jpg")} alt="" /></div>
                        <div class="Home-8"><img src={require("./HomeSRC/Home-8.jpg")} alt="" /></div>
                        <div class="Home-9"><img src={require("./HomeSRC/Home-9.jpg")} alt="" /></div>
                        <div class="Home-10"><img src={require("./HomeSRC/Home-10.jpg")} alt="" /></div>
                        <div class="Home-11"><img src={require("./HomeSRC/Home-11.jpg")} alt="" /></div>
                        <div class="Home-12"><img src={require("./HomeSRC/Home-12.jpg")} alt="" /></div>
                        <div class="Home-13"><img src={require("./HomeSRC/Home-13.jpg")} alt="" /></div>
                        <div class="Home-14"><img src={require("./HomeSRC/Home-14.jpg")} alt="" /></div>
                        <div class="Home-15"><img src={require("./HomeSRC/Home-15.jpg")} alt="" /></div>
                        <div class="Home-16"><img src={require("./HomeSRC/Home-16.jpg")} alt="" /></div>
                        <div class="Home-17"><img src={require("./HomeSRC/Home-17.jpg")} alt="" /></div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Home;