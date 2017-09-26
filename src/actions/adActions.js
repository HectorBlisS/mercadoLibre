import firebase from '../api/firebase';

function createAdSuccess(anuncio) {
    return {
        type: 'CREATE_ADD',
        anuncio
    }
}

function loadAdsSuccess(anuncios) {
    return {
        type: "LOAD_ADS_SUCCESS",
        anuncios
    }
}

export function loadAds() {
    return function (dispatch, getState) {
        firebase.database().ref('productos').once('value')
            .then(r=>{
                let items = r.val();
                let arr = [];
                for(let key in items){
                    let obj = items[key];
                    obj["key"] = key;
                    arr.push(obj);
                }
                dispatch(loadAdsSuccess(arr))
            })
            .catch(e=>{
                console.log(e);
            })
    }
}

export function createAd(anuncio) {
    return function (dispatch, getState) {
        const anuncios = getState().anuncios;
        firebase.database.ref().put(anuncio)
            .then(r=>{
                console.log(r.val());
                //dispatch(createAdSuccess(anuncio));
            })
            .catch(e=>{
                console.log(e);
            })
    }
}