import React, { Component } from 'react'; 
import MemoryCards from '../MemoryCards/MemoryCards'; 
import images from '../../images.json'; 
import "./GameContanier.css"; 

class GameContainer extends Component {
    state = { 
        images, 
        message: "Click one of the images to begin!", 
        score: 0, 
        topScore: 0
    }; 

    handleClick = (id, clicked) => {
        
        const orderOfImages = this.state.images; 

        if (clicked) {
            orderOfImages.forEach((image, index) => {
                orderOfImages[index].clicked = false; 
            });

            return this.setState({
                image: orderOfImages.sort(() => Math.random() - 0.5), 
                message: "You Already Clicked this One", 
                score: 0 
            })

        } else {
            orderOfImages.forEach((image, index) => {
                if (id === image.id) {
                    orderOfImages[index].clicked = true; 
                }
            }); 

            const { topScore, score } = this.state; 
            const newScore = score + 1; 
            const newTopScore = newScore > topScore ? newScore : topScore; 

            return this.setState({
                image: orderOfImages.sort(() => Math.random() -0.5), 
                message: "Congrats!", 
                score: newScore, 
                topScore: newTopScore,
            })
        }
    }; 

    render() {
        return (
            <div className="container-fuild mainCardCon">
                <div className="message text-center">
                    <p>{this.state.message}</p>
                </div>
                <div className="scores text-center">
                    <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                    </div> 
                    
                    <div className="container memoryCardsContainer">
                        <div className="row">
                            {this.state.images.map(image => (
                                <MemoryCards 
                                    key={image.id}
                                    id={image.id}
                                    name={image.name}
                                    clicked={image.clicked}
                                    image={image.image}
                                    handleClick={this.handleClick}
                                />

                            ))}
                        </div>
                    </div>
            </div>
        ); 
    }; 
}; 

export default GameContainer; 