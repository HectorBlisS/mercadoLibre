export default function AdsReducer(state = [], action) {
    switch (action.type) {
        case "LOAD_ADS_SUCCESS":
            return action.anuncios;
        case "CREATE_ADD":
            return action.ad;
        default:
            return state;
    }
}