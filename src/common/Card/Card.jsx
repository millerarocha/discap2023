import { Link } from 'react-router-dom';

const Card = ({
  cardTitle = 'Titulo',
  cardDate = '01/12/2023',
  cardText = 'Texto explicativo',
  cardBtnText,
}) => {
  return (
    <div className='card w-full bg-primary text-primary-content'>
      <div className='card-body'>
        <h2 className='card-title'>{cardTitle}</h2>
        <p className='text-xs text-slate-400'>{cardDate}</p>
        <p>{cardText}</p>
        <div className='card-actions justify-end'>
          {cardBtnText && (
            <Link className='btn btn-sm bg-white text-black border border-white hover:text-white'>
              {cardBtnText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
