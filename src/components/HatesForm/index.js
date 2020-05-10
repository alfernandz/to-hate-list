import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledHatesForm } from './StyledHatesForm';

function HatesForm(props) {
  const {addHate} = props;
  const [name, setName] = useState('');
  const submitHate = (e) => {
    e.preventDefault();
    if (name) {
      addHate(name);
      setName('');
    }
  };
  return (
    <StyledHatesForm>
      <p>Add more hate</p>
      <form onSubmit={(e)=>submitHate(e)}>
        <input value={name} name="name" onChange={(e)=>setName(e.target.value)} />
        <button>Add</button>
      </form>
    </StyledHatesForm>
  );
}

HatesForm.propTypes = {
  addHate: PropTypes.func,
};

export {HatesForm};