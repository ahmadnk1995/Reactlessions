import React, { Component } from "react";

class Hello extends Component {
  state = {
    age: 0,
    user: {
      name: "ahmad",
      LastName: "Kofahi",
    },
    socialLinks: ["facebook", "Twitter"],
  };

   //================================ Arrow Function ==================================//
  
   decrement = ()=> {
    this.setState({ age: this.state.age - 1 });
  }


  //================================ OnChange Event ==================================//
  updateName (event){
    const newName = event.target.value;
    
    this.setState ({
        
        user:{...this.state.user, name : newName}
        
    });
  
  }



  render() {
    return (
      <div>
        Hello {this.props.name} from class Component
        <p> Name : {this.state.user.name} Age : {this.state.age} </p>

        {/* //================================ Arrow Function ==================================// */}
        <button onClick={() => this.setState({ age: this.state.age + 1 })}> Increase </button>
        <button onClick={this.decrement}>  Decrease </button>
        {/* //================================ Arrow Function ==================================// */}
        
        {/* //================================ OnChange Event  ==================================// */}
        <input type="text" className="inName" value={this.state.user.name} onChange={this.updateName.bind(this)}></input>
        {/* //================================ OnChange Event  ==================================// */}


      </div>
    );
  }
}

export default Hello;
