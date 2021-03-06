import React from "react";
import OfficeCards from "./components/Cards";
import cards from "./cards.json";
import Wrapper from "./components/wrapper";
import Header from "./components/Header";
import './app.css'

class App extends React.Component {
  state = {
    cards,
    score: 0,
    highScore: 0,
    beenClicked:[]
  };

  handleClick= id => {
    console.log(id);
    if(this.state.beenClicked.includes(id)){
      alert("Game over")
      if(this.state.score > this.state.highScore){
        this.setState({
          highScore: this.state.score,
          score: 0,
          beenClicked:[]
        }) 
      }
    }else{
      this.state.beenClicked.push(id);
      this.setState({score: this.state.score +1})
    }
    var clone = this.state.cards
    clone.sort(()=>Math.random()-.5)
    this.setState({cards: clone})
  }


  render() {
    return (
      <Wrapper>
        <Header
        score= {this.state.score}
        highScore= {this.state.highScore}
        />
        <div className="card-container">
      {
        this.state.cards.map(friend => (
          <OfficeCards
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            handleClick= {()=>this.handleClick(friend.id)}
          />
        ))
      }
      </div>
      </Wrapper>
    )
  }
}
export default App;