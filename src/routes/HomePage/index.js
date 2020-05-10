import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from './../../actions';

import { StyledHomePage } from './StyledHomePage';

function HomePage() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loggingError = useSelector(state => state.authentication.loggingError);
    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    };
    return (
        <StyledHomePage>
            <form>
                <h1>To Hate List</h1>
                <input
                    name="username" 
                    type="text" 
                    placeholder="Username"
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                <input
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={(e)=>handleLogin(e)}>Log in</button>
                <p><small>Hint: donald - trump</small></p>
                {loggingError && <p className="error">The hate is not in you</p>}
            </form>
        </StyledHomePage>
    );
}

export { HomePage };