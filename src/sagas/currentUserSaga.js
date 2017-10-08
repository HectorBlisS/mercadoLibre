import {takeLatest} from 'redux-saga/effects';
import {GET_USER_INFO} from "../actions/userActions";
import * as firebaseMethods from '../api/firebase';

function* getUserAds({user}){
    console.log(user);
    const ads = yield firebaseMethods.fetchUserAds(user);
    console.log("saga ads: ",ads);
}

export function* currenUserSaga(){
    yield takeLatest(GET_USER_INFO, getUserAds);
}