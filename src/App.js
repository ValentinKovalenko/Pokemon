import './App.css';
import Main from "./Pages/Main";
import Pokemon from "./Pages/Pokemon";
import * as action from "./action/actionPokemon";
import React, {useState} from "react";


function App() {
       const findPokemon = (name) => {
       action.find(name).then((res) => {
           console.log(res)
       })
   }
    return (
        <div className='container'>
            <div className='row justify-content-md-center bg-info'>
                <div className='col-md-auto mt-4' >
            <Main findPokemon = {findPokemon}/>
            <Pokemon />
                </div>
            </div>
        </div>
    );
}

export default App;
