export function loadMarcas(){
    return {
        type: "LOAD_MARCAS"
    }
}

export function uploadFotos(fotos){
    return {
        type: "UPLOAD_FOTOS",
        fotos
    }
}
