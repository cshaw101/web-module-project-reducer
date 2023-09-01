import React, { useReducer } from 'react';
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, { initialState } from '../reducers'
import { applyNumber, changeOperation, clearDisplay } from '../actions';



function App() {


const [state, dispatch] = useReducer(reducer, initialState)

const click = (number) => {
  dispatch(applyNumber(number));
}

const handleOperator = (operator) => {
dispatch(changeOperation(operator));
}

const clear = () => {
  dispatch(clearDisplay())
}


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => click(1)}/>
              <CalcButton value={2} onClick={() => click(2)} />
              <CalcButton value={3} onClick={() => click(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => click(4)} />
              <CalcButton value={5} onClick={() => click(5)} />
              <CalcButton value={6} onClick={() => click(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => click(7)} />
              <CalcButton value={8} onClick={() => click(8)} />
              <CalcButton value={9} onClick={() => click(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperator("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperator("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperator("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
