import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, hatesActions } from './../../actions';
import { HatesForm, HatesList } from './../../components';

import { StyledHatesPage } from './StyledHatesPage';

function HatesPage() {

  const dispatch = useDispatch();
  const hates = useSelector(state => state.hates);

  useEffect(() => {
    dispatch(hatesActions.getHates());
  }, []);

  const addHate = (name) => {
    dispatch(hatesActions.addHate(name));
  };
  const deleteHates = () => {
    dispatch(hatesActions.deleteHates());
  };
  const logout = () => {
    dispatch(userActions.logout());
  };

  return (
    <StyledHatesPage>
      <a href="/" className="logout" onClick={()=>logout()}>Log out</a>
      <HatesForm addHate={(name)=>addHate(name)} />
      <HatesList hates={hates} onClean={()=>deleteHates()} />
    </StyledHatesPage>
  );
}

export { HatesPage };