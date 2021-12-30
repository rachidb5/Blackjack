import React from 'react';
import Logo from '../Components/Logo';
import './Bg.css'
import Score from '../Components/Score';
import { useContext } from 'react';
import Context from '../Context/Context';
import Cards from '../Components/Cards';
import { Link } from 'react-router-dom';

function Game() {
  const { playerOne, 
    data, 
    data2, 
    points1,
    setPoints1,
    setPoints2, 
    points2, 
    cardsNumber1, 
    cardsNumber2, 
    setCardsNumber1,
    setCardsNumber2,
    cartas1,
    cartas2,
    setCartas1,
    setCartas2
  } = useContext(Context)
  
    function setter (data, cardsNumber, cartas, cartasValue) {
      for(let i = 0; i<= cardsNumber; i++) {
        if (data[i].value === "KING") {
          data[i].value = 13
        } else if (data[i].value === "QUEEN") {
          data[i].value = 12
        } else if (data[i].value === "JACK") {
          data[i].value = 11
        } else if (data[i].value === "ACE") {
          data[i].value = 1
        } else {
          let v = parseInt(data[i].value)
          data[i].value = v  
        }
        cartas.push(data[i]);
        cartasValue.push(data[i].value)
      }
    }
    function set1() {
      const cartas = []
      const cartasValue = []
      setCardsNumber1(cardsNumber1+1)
      setter(data, cardsNumber1, cartas, cartasValue)
      const getSum = (accumulator, number) => {
        return accumulator + number;
      };
      console.log(cartasValue.reduce(getSum))
      setPoints1(cartasValue.reduce(getSum))
      setCartas1(cartas)
    }
    function set2() {
      const cartas = []
      const cartasValue = []
      setCardsNumber2(cardsNumber2+1)
      setter(data2, cardsNumber2, cartas, cartasValue)
      const getSum = (accumulator, number) => {
        return accumulator + number;
      };
      console.log(cartasValue.reduce(getSum))
      setPoints2(cartasValue.reduce(getSum))
      setCartas2(cartas);
    }
  return (
    <div  className="bg-dark bg">
      <Link to='/'>
        <Logo />
      </Link>
      {points1 < 22 ? null : <span className="text-light">Você ultrapassou 21 pontos :(</span>}
      <div className="container">
        <Score name={ playerOne } score={points1} />
        <Cards data={ data } cardsNumber={cardsNumber1} onClick={ () => set1()} cartas={cartas1} />
      </div>
      <div className="container">
        <Score name="Dealer" score={points2} />
        <Cards data={ data2 }  cardsNumber={cardsNumber2} onClick={ () => set2()} cartas={cartas2}/>
      </div>
    </div>
  )
}

export default Game;