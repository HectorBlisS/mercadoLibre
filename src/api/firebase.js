import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCQWgp2tvE2Phv_A5Yq9RzvyMf0GDTfuBs",
    authDomain: "planeacion-hidalgo.firebaseapp.com",
    databaseURL: "https://planeacion-hidalgo.firebaseio.com",
    projectId: "planeacion-hidalgo",
    storageBucket: "planeacion-hidalgo.appspot.com",
    messagingSenderId: "679579674763"
  };
  firebase.initializeApp(config);

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