import React from 'react';
import '../Style/cards.css'

interface CardProps {
  image: string;
  title: string;
  uniqueClassName: string;
}

const CardComponent: React.FC<CardProps> = ({ image, title, uniqueClassName }) => {
  const cardSectionStyle: React.CSSProperties = {
    // background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  return (
    <div className='ContenedorDeCards'>
      <div className={`CardsHams` }style={cardSectionStyle}>
        <div className={` ${uniqueClassName}` }>
        <div className="DatosDeLasCards">
          <div className='AgrupacionCards'>
            <div className='textoCardIni'>
            <h4>{title}</h4>
            </div>
            <div className='imgIncioHams'>
            <img src={image} alt="Image" className="ImagenHams" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
