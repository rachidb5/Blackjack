import React from 'react';
import './Cards.css';

export default function Cards(props) {
    const { cartas, onClick } = props;
    // const [cardsNumber, setCardsNumber] = useState(0);
    return (
        <div>
            <div className="container">
              { cartas.map((card) => <img key={ card.code } className="m-2 cards" src={card.image} alt="Card"/>)}
              <button
              className="btn btn-danger"
              onClick={ onClick }
              >
                +1
              </button>
            </div>
        </div>
    )
}