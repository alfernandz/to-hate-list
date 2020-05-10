import { hatesConstants } from './../store/constants';
import { hatesService } from './../services';

export const hatesActions = {
    getHates,
    addHate,
    deleteHates,
};

function getHates() {
    return dispatch => {
        const hates = hatesService.getHates();
        if(hates) {
            dispatch(success(hates));
        }else{
            dispatch(failure(null));
        }
    };

    function success(hates) { return { type: hatesConstants.GET_SUCCESS, hates } }
    function failure(error) { return { type: hatesConstants.GET_FAILURE, error } }
}

function addHate(hate) {
    return dispatch => {
        const hates = hatesService.setHate(hate);
        dispatch(success(hates));
    };

    function success(hates) { return { type: hatesConstants.SET_SUCCESS, hates } }
}

function deleteHates() {
    return dispatch => {
        hatesService.deleteHates();
        dispatch(success(null));
    };

    function success(hates) { return { type: hatesConstants.SET_SUCCESS, hates } }
}
