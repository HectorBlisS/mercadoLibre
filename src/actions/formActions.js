import * as firebaseMethods from '../api/firebase';

export function loadMarcas(){
    return {
        type: "LOAD_MARCAS"
    }
}

export function uploadFotosSuccess(links){
    return {
        type: "UPLOAD_FOTOS_SUCCESS",
        links
    }
}

export function saveAdSuccess(ad){
    return {
        type: "SAVE_AD_SUCCESS",
        ad
    }
}


export function uploadFotos(fotos){
    return function(dispatch, getState){
        return firebaseMethods.uploadSeveralFiles(fotos)
            .then(metas=>{
                //console.log(metas);
                let links = metas.map(m=>{
                    return {url:m.downloadURL}
                });
                dispatch(uploadFotosSuccess(links));
                return links;
            })
            .catch(e=>console.log(e));
    }
}
export function saveAd(ad){
    return function(dispatch){
        return firebaseMethods.saveAd(ad)
            .then(ad=>{
                dispatch(saveAdSuccess(ad));
                return true;
            })
    }
}



