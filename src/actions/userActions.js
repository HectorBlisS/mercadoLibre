export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_ADS = "GET_USER_ADS";
export const GET_USER_ADS_SUCCESS = "GET_USER_ADS_SUCCESS";

export function getCurrentUserInfo(user){
    return {
        type: GET_USER_INFO,
        user
    }
}
