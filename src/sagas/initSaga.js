import { put, takeLatest
//all
} from 'redux-saga/effects';
import * as firebaseMethods from '../api/firebase';
import {
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO,
    //GET_USER_ADS,
    GET_USER_ADS_SUCCESS
} from '../actions/userActions';


function* fetchUser(action){
    //console.log(action);
    const user = yield firebaseMethods.fetchUserInfo(action.user);
    //console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
    yield put({type:GET_USER_INFO_SUCCESS, user});
}

function* fetchAds(action){
    //console.log("ads llamado");
    const ads = yield firebaseMethods.fetchUserAds(action.user);
    //console.log("ads: ",ads);
    yield put({type:GET_USER_ADS_SUCCESS, items:ads});
}

export function* initSaga(){
    yield takeLatest(GET_USER_INFO,fetchUser);
    yield takeLatest(GET_USER_INFO_SUCCESS, fetchAds);





}