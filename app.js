import React, { Component } from "react";
import LakeCard from "./components/LakeCard";
import Container from "./components/Container";
import Heading from "./components/Heading";
import lakes from "./lakes.json";
import "./app.css";

class App extends Component {
  
    lakes
  };

  removeLake = id => {
  
    const lakes = this.state.lakes.filter(lake => lake.id !== id);
    
    this.setState({ lakes });
  };



  render() {
    return (
      <Heading>
        <Title>Park List</Title>
        {this.state.lakes.map(lake => (
          <LakeCard
            removeLake={this.removeLake}
            id={lakes.id}
            key={lakes.id}
            name={lakes.name}
            image={lakes.image}
            park={lakes.park}
            location={lakes.location}
          />
        ))}
        
      </Heading>
    );
  }
}

export default App;