import React from 'react';
import './CovidCard.css';
import maskperson from '../Assest/Mask_person.png';

const CovidCard = () => {
  return (
    <div className='covid-main-conatiner'>
      <div className='covid-child-conatiner'>
        <img src={maskperson} alt="Mask Person" />
      </div>
    </div>
  );
};

export default CovidCard;
