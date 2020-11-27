import React from "react";
import "../styles/styles.css"

class Memegenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            buttomText: "",
            randomImg:"https://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange =this.handleChange.bind(this)  
        this.handeleSubmit =this.handeleSubmit.bind(this) 
    }
    handleChange(event){
        const {name, value } = event.target
        this.setState({ [name]: value })
    }

    
    handeleSubmit(event){
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })
    }

    render(){
        return(
            <div clasName="display">
                <form className="meme-form" >
                    <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top text" 
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText} 
                        placeholder="Bottom text" 
                        onChange={this.handleChange}
                    />
                </form>
                    <button className="btn btn-primary" onClick={this.handeleSubmit}>New Image</button>

                <div className="meme">
                    <img alt="" src={this.state.randomImg}/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="buttom">{this.state.bottomText}</h2>
                </div>      
            </div>
        )
    }
}

export default Memegenerator;