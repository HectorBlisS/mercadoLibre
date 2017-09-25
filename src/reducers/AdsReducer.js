export default function AdsReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_ADD":
            console.log("create add");
            return action.ad;
        default:
            return state;
    }
}