import {takeLatest, put} from 'redux-saga/effects';
import * as firebaseMethods from '../api/firebase';

function* loadingMarcas(){
    const marcas = yield firebaseMethods.fetchMarcas();
    yield put({type:"LOAD_MARCAS_SUCCESS", marcas});
}

export function* formDataSaga(){
    console.log("form saga corriendo");
        yield takeLatest("LOAD_MARCAS", loadingMarcas);
}