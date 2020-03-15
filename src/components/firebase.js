import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(firestorePlugin)
firebase.initializeApp({
    databaseURL: "https://dsc-c0508.firebaseio.com",
    projectId: "dsc-c0508",
  
})
export const db = firebase.firestore()