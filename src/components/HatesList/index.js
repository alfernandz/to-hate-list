import React from 'react';
import PropTypes from 'prop-types';
import clean from './../../clean.svg';
import { StyledHatesList } from './StyledHatesList';

const { v4: uuidv4 } = require('uuid');

function HatesList(props) {
  const {hates, onClean} = props;
  return (
    <StyledHatesList>
      <u>A hated is forever, hate cannot be undone.</u>
      {hates && hates.map((hate)=>(
        <p key={uuidv4()}>
          {hate}
        </p>
      ))}
      {hates && hates.length > 5 ? 
        <button onClick={()=>onClean()}>
          <img src={clean} alt="Clean your conscience" title="Clean your conscience" />
          Clean your conscience
          <img src={clean} alt="Clean your conscience" title="Clean your conscience" />
        </button> : null}
    </StyledHatesList>
  );
}

HatesList.propTypes = {
  hates: PropTypes.array,
  onClean: PropTypes.func,
};

export {HatesList};
