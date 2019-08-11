import React from "react";
import OfficeCards from "./components/Cards";
import cards from "./cards.json";
import Wrapper from "./components/wrapper";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    cards
  };

  render() {
    return (
      <Wrapper>
        <Header>Clicky Game</Header>
        
      {
        this.state.cards.map(friend => (
          <OfficeCards
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))
      }
      </Wrapper>
    )
  }
}
export default App;
