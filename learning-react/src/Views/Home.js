import React from "react";
import HelloWorld from "../Components/HelloWorld";

function Home() {
  return (
    <div>
      <h1 className="font-medium text-pink-700 text-center">
        <p className="flex-initial text-pink-700 py-48 text-center font-bold uppercase text-xl">
        
        <span><HelloWorld name="< UserName >" className=" "/></span>
        </p>
        
         
      </h1>

      <div className="bg-pink-500 flex items-start pt-16">
          <div className="flex-1 text-white bg-pink-500 text-center bg-gray-400  ">1</div>
          <div class="flex-1 text-gray-700 bg-pink-500 text-center bg-gray-400 ">2</div>
          <div class="flex-1 text-gray-700 bg-pink-500 text-center bg-gray-400 ">3</div>
      </div>
     
    </div>
  );
}

export default Home;
