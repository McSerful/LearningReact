import React from "react";
import { useTransition, animated } from "react-spring";





class HelloWorld extends React.Component {
  render() {
    return (

        

      <h1 className="text-center font-extrabold board-b p-4 text-pink-700">
        {" "}
        Hello {this.props.name}{" "}
 
      </h1>
      

   

    );
  }
}

export default HelloWorld;
