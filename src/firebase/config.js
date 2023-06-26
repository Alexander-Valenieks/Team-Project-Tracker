import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBNNH_5xtC7zExXKLVq_PfmWuSv38-oJ3Q",
  authDomain: "teamtracker-2f231.firebaseapp.com",
  projectId: "teamtracker-2f231",
  storageBucket: "teamtracker-2f231.appspot.com",
  messagingSenderId: "1097872107370",
  appId: "1:1097872107370:web:83e41105a7a9601c2be713"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }

// // init firebase
// firebase.initializeApp(firebaseConfig)

// // init services
// const projectFirestore = firebase.firestore()
// const projectAuth = firebase.auth()
// const projectStorage = firebase.storage()

// // timestamp
// const timestamp = firebase.firestore.Timestamp

// export { projectFirestore, projectAuth, projectStorage, timestamp }