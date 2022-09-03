import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate, setUnion } from 'mathjs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {cambiarColor } from './redux/actions'

function App() {

  const [input, setInput] = useState('');

  const color = useSelector(state => state.color)



  const agregarInput = val => {
    let saber = input
    let array = saber.split("")
    if(array[array.length-1] !== "+" || array[array.length-1] !== "-" || array[array.length-1] !== "/" || array[array.length-1] !== "*" || array[array.length-1] !== "." ||array[array.length-1] !== "%"){
    setInput(input + val);// si lo que esta en el input en el ult lugar es un nro que haga bien
    } else {
      array.pop()
      let nro = array.join("")
      setInput(nro + val)   // sino, que modifique lo ult por lo nuevo 
    }
  };

  const dispatch = useDispatch();
 
  const handleColor = () => {
    dispatch(cambiarColor())
  }

  const borrarInput = () => {
    if(input){
    let borrar = input
    let array = borrar.split("")
    array.pop()
    let nro = array.join("")
    setInput(nro)
    } 
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      setInput(0);
    }
  };

  return (
    <div className={color===true ? 'App' : 'Negro'}>
      <div class="switch-button">
    <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox" onClick={handleColor}/>
    <label for="switch-label" class="switch-button__label"></label>
      </div>
      <div className={color===true ? 'contenedor-calculadora' : 'contenedor-Negro'}>
        <Pantalla input={input}/>
        <div className='all-button'>
        <div className='fila'>
          <Boton manejarClic={borrarInput}>C</Boton>
          <Boton manejarClic={() => setInput('')}>CE</Boton>
          <Boton manejarClic={agregarInput}>%</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='footer'>
          <div className='boton'>
          <Boton manejarClic={agregarInput}>0</Boton>
          </div>
          <div className='boton'>
          <Boton manejarClic={agregarInput}>.</Boton>
          </div>
          <div className='boton'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
