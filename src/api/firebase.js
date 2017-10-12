import * as firebase from 'firebase';
import 'firebase/firestore';

  const config = {
    apiKey: "AIzaSyCQWgp2tvE2Phv_A5Yq9RzvyMf0GDTfuBs",
    authDomain: "planeacion-hidalgo.firebaseapp.com",
    databaseURL: "https://planeacion-hidalgo.firebaseio.com",
    projectId: "planeacion-hidalgo",
    storageBucket: "planeacion-hidalgo.appspot.com",
    messagingSenderId: "679579674763"
  };
  firebase.initializeApp(config);
export const db = firebase.firestore();


const productsChild = firebase.database().ref('productos');

  export const api = {

      getProducts: () => {},
      getUserProducts: (userId) => {},
      saveProduct: (product) => {
        return productsChild
            .push(product)
            .then(r=>{
              return r.key;
            })
            .catch(e=>{
              return e;
            });
      },
      saveUserProduct: (childId, userId) => {
        const userProducts = firebase.database().ref('users/'+userId+'/productos');
        return userProducts.child(childId).set(true);
      },
      getProduct:(id)=>{},
      getUserProduct:(id,userId)=>{},
      putProduct:(id,data)=>{
          let updates = {};
          updates['/productos/'+id] = data;
          return firebase.database().ref().update(updates)
              .then(r=>{return r})
              .catch(e=>{
                  console.log(e);
                  return e
              });
      },
      putUserProduct:(id,data,userId)=>{},
      deleteProduct:(id)=>{
        firebase.database().ref("productos/"+id).set(null);
        return true;
      },
      deleteUserProduct:(id,userId)=>{}

  };

export default firebase;


//new api for sagas:

export function fetchUserInfo(user){
    const userRef = db.collection("usuarios").doc(user.uid);
    return userRef.get()
        .then(doc=>{
            console.log(doc);
            if(doc.exists){
                return doc.data();
            } else{
                console.log('hago algo?');
                const usuario = {
                    displayName:user.displayName,
                    uid:user.uid,
                    photoURL:user.photoURL,
                    email:user.email
                };
                userRef.set(usuario);
                return usuario;
            }


    })
        .catch(e=>{
            console.log('elcatch: ', e);
        });
}

export function fetchUserAds(user){
    const userAdsRef = db.collection("anuncios").where("usuario", "==", user.uid);
    return userAdsRef.get()
        .then(s=>{
            const list = [];
            s.forEach(i=>{
               // console.log(i);
                //console.log(i.id);
                //console.log(i.data())
                let item = i.data();
                item['id'] = i.id;
                list.push(item);
            });
            return list;
        })
    .catch(e=>console.log(e));
}

export function fetchMarcas(){
    const marcasRef = db.collection("vehiculoForm").doc("vehiculos");
    return marcasRef.get()
        .then(s=>{
            console.log("eldoc: ",s.data().marcas);
            return s.data().marcas;
        })
        .catch(e=>console.log(e));
}