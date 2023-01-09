import { initializeApp } from 'firebase/app';
import {
    apiKey,
    appId,
    authDomain,
    databaseURL,
    measurementId,
    messagingSenderId,
    projectId,
    storageBucket,
} from './environment.js';

const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
};

export const app = initializeApp(firebaseConfig);
