import PropTypes from 'prop-types';
import Avengers from '../../Avengers'
const CardList = () => {
  const cardsArray = Avengers.map(avenger => (
    <div>
      
      name={.name}
      url={robot.email}
      id={robot.id} 
    </div>
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
};
export default CardList