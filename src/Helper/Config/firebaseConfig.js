// env in react: https://stackoverflow.com/questions/42182577/is-it-possible-to-use-dotenv-in-a-react-project
// just add REACT_APP_<key_name>

import {initializeApp} from "firebase/app";
import {getDatabase, ref} from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

export default dbRef;
