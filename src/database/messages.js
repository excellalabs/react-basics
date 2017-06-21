
import firebase from '../firebase';

const database = firebase.database();

export default database.ref('messages');
