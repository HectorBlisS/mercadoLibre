import {takeLatest, put} from 'redux-saga/effects';
import * as firebaseMethods from '../api/firebase';

function* loadingMarcas(){
    const marcas = yield firebaseMethods.fetchMarcas();
    yield put({type:"LOAD_MARCAS_SUCCESS", marcas});
}

function* uploadFiles(action){
    console.log(action);
    const links = yield firebaseMethods.uploadSeveralFiles(action.fotos);
    console.log(links);
    yield put({type:"UPLOAD_FOTOS_SUCCESS", links});
}

export function* formDataSaga(){
    //console.log("form saga corriendo");
        yield takeLatest("LOAD_MARCAS", loadingMarcas);
        yield takeLatest("UPLOAD_FOTOS", uploadFiles);
}