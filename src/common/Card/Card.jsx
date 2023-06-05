import { Link } from 'react-router-dom';

const Card = ({
  cardTitle = 'Titulo',
  cardDate = '01/12/2023',
  cardText = 'Texto explicativo',
  cardBtnText,
  btnLink,
  isAdmin = false,
  onEditClick,
  onDeleteClick
}) => {
  return (
    <div className='card w-full bg-primary text-primary-content'>
      <div className='card-body'>
        <h2 className='card-title'>{cardTitle}</h2>
        <p className='text-xs text-slate-400'>{cardDate}</p>
        <p>{cardText}</p>
        <div className='card-actions justify-end'>
          {cardBtnText && (
            <Link className='btn btn-sm bg-white text-black border border-white hover:text-white' to={btnLink}>
              {cardBtnText}
            </Link>
          )}
          {isAdmin && (
            <div className="flex gap-3 mt-5">
              <button className='btn btn-sm border border-orange-500 text-white' onClick={onEditClick}>
                Editar
              </button>
              <button className='btn btn-sm border border-red-500 text-white' onClick={onDeleteClick}>
                Eliminar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
