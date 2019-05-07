import { types } from '../actions/actionTypes'
import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'

export function* deleteMediumWatcher() {
    const saga = yield takeLatest(types.DELETE_MEDIUM, deleteMediumSaga )
}

export function* deleteMediumSaga(action) {
    console.log(action);
    const payload = yield call(deleteMediumRequest, action.payload);
    if(typeof payload.id !== "undefined") {
        //debugger
        //yield put({type: types.DELETE_MEDIUM_SUCCESS, payload})
        yield put({type: types.GET_MEDIA})
    } else {
        yield put({type: types.DELETE_MEDIUM_ERROR, payload})
    }
}

export function deleteMediumRequest(id) {
    return axios({
        url: `http://localhost:3000/api/media/${id}`,
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => {
        return response.data
    })
    .catch(error => {
        return error
    })
}