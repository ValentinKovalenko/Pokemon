import './App.css';
import Main from './Pages/Main';
import Pokemon from "./Pages/Pokemon";
import * as action from "./action/actionPokemon";
import React, {useState} from "react";


function App() {
    const [error, setError] = useState(false)
    const [result, setResult] = useState()
    const findPokemon = (name) => {
        action.find(name).then((res) => {
            setResult(res)
            setError(false)
        }).catch((e) => {
            setResult(null)
            setError(true)
        })
    }
    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-auto mt-4 '>
                    <Main findPokemon={findPokemon}/>
                    {result ? <Pokemon result={result}/> : null}
                    {error ? <p className='text-center text-danger'><h1>Not Found</h1></p> : null}
                </div>
            </div>
        </div>
    );
}

export default App;
