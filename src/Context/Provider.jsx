import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [player, setPlayer] = useState(1);
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [points1, setPoints1] = useState(0);
    const [points2, setPoints2] = useState(0);
    const [cardsNumber1, setCardsNumber1] = useState(0);
    const [cardsNumber2, setCardsNumber2] = useState(0);
    const [cartas1, setCartas1] = useState([]);
    const [cartas2, setCartas2] = useState([]);

    useEffect(() => {
      const fetchAPI = async () => {
        const endpoint = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';
        const a = await fetch(endpoint).then((dados) => dados.json());
        let cards = a.cards;
        /* for(let i =0; i <= cards.length; i++) {
          if (cards[i].value === "KING") {
              cards[i].value = 13
          } else if (cards[i].value === "QUEEN") {
              cards[i].value = 12
          } else if (cards[i].value === "JACK") {
              cards[i].value = 11
          } else if (cards[i].value === "ACE") {
              cards[i].value = 1
          } else {
            let v = parseInt(cards[i].value)
              cards[i].value = v
          }
        } */
        setData(cards);
      };
      const fetchAPI2 = async () => {
        const endpoint = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';
        const a = await fetch(endpoint).then((dados) => dados.json());
        const cards = a.cards;
        setData2(cards);
      };
      fetchAPI();
      fetchAPI2();
    }, []);
    const context = {
      player,
      setPlayer,
      playerOne,
      setPlayerOne,
      playerTwo,
      setPlayerTwo,
      data,
      setData,
      data2,
      setData2,
      points1,
      setPoints1,
      points2,
      setPoints2,
      cardsNumber1,
      setCardsNumber1,
      cardsNumber2,
      setCardsNumber2,
      cartas1,
      cartas2,
      setCartas1,
      setCartas2
    };
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider;