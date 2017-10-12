import {takeLatest, put} from 'redux-saga/effects';
import * as firebaseMethods from '../api/firebase';

function* loadingMarcas(){
    const marcas = yield firebaseMethods.fetchMarcas();
    yield put({type:"LOAD_MARCAS_SUCCESS", marcas});
}

export function* formDataSaga(){
    yield takeLatest("LOAD_MARCAS", loadingMarcas)
}