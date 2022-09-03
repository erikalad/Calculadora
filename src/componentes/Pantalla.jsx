import React from 'react';
import '../hojas-de-estilo/Boton.css';
import {cambiarColor } from './../redux/actions'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Boton(props) {

  const color = useSelector(state => state.color)
  const dispatch = useDispatch()
  React.useEffect(() =>  dispatch(cambiarColor()),[])

  return (

    <div
      className={color=== true ? "boton-contenedor" : "boton-dark"}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
