import {
    GET_USER_INFO_SUCCESS,
    GET_USER_ADS_SUCCESS
} from '../actions/userActions';
import {combineReducers} from 'redux';


export function userAds(state=[], action){
    switch(action.type){
        case GET_USER_ADS_SUCCESS:
            return action.items;
        case "SAVE_AD_SUCCESS":
            return [action.ad, ...state];
        case "CERRAR_SESION_SUCCESS":
            return [];


        default:
            return state;
    }
}

export function userInfoReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_INFO_SUCCESS:
            return action.user;
        case "CERRAR_SESION_SUCCESS":
            return {};
        default:
            return state;
    }
}

export function userImagesReducer(state = [], action){
    switch (action.type){
        case "UPLOAD_IMAGE_SUCCESS":
            return [...state, action.url];
        default:
            return state;
    }
}

export const userReducer = combineReducers({
    profile: userInfoReducer,
    ads: userAds,
    images:  userImagesReducer
});