import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc,getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwwdUXBxvzM8FUlIjvOzcV7ApLZKbWH2Q",
    authDomain: "crown-clothing-db-b2de3.firebaseapp.com",
    projectId: "crown-clothing-db-b2de3",
    storageBucket: "crown-clothing-db-b2de3.appspot.com",
    messagingSenderId: "1038403965993",
    appId: "1:1038403965993:web:9449615de30975f2e93838"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth:any)=>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        }catch(err:unknown){
            console.log(`Error creating user, ${err}`)
        }

    }

    //Check if user data exists
    return userDocRef

    //If !userdata


    //Return userDocRef

  }