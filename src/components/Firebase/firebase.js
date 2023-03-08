import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyCRUeXFVkdP9hCLnKLX4dkueEL7SqKXEHE",
    authDomain: "marvel-quiz-4b7d1.firebaseapp.com",
    projectId: "marvel-quiz-4b7d1",
    storageBucket: "marvel-quiz-4b7d1.appspot.com",
    messagingSenderId: "741845969459",
    appId: "1:741845969459:web:617f20f22a3b520e101146"
};

class Firebase extends Component {
  constructor() {
   app.initializeApp(config)
  }
}


export default Firebase;



