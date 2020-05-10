import { userConstants } from './../store/constants';
import { userService } from './../services';
import { history } from './../helpers';

export const userActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        const user = userService.getUser(username, password);
        console.log(user)
        if(user) {
            dispatch(success(user));
            history.push('/hates');
        }else{
            dispatch(failure(null));
        }
    };

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}