import {takeLatest, actionChannel, call} from 'redux-saga/effects';
import {GET_USER_INFO} from "../actions/userActions";
import * as firebaseMethods from '../api/firebase';

function* getUserAds({user}){
    console.log(user);
    const ads = yield firebaseMethods.fetchUserAds(user);
    console.log("saga ads: ",ads);
}

export function* currenUserSaga(){
    const requestChan = yield actionChannel(GET_USER_INFO);
    const {user} = yield takeLatest(requestChan);
    yield call(getUserAds, user);


}