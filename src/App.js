import React from "react";
import OfficeCards from "./components/Cards";
import cards from "./cards.json";

class App extends React.Component {
  state = {
    cards
  };

  render() {
    return (
      <Wrapper>
      {
        this.state.cards.map(friend => (
          <OfficeCards
            id={friend.id}
            name={friend.name}
          />
        ))
      }
      </Wrapper>
    )
  }
}
export default App;
