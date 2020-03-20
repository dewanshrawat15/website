import Vue from 'vue'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(firestorePlugin)
firebase.initializeApp({
    databaseURL: "https://dsc-bvp-pune.firebaseio.com",
    projectId: "dsc-bvp-pune",
})
export const db = firebase.firestore()