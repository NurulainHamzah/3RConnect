// setting up firebase with our website
  const firebaseConfig = {
    apiKey: "AIzaSyAptJLDaD4r0r727DsCg9uolSK4PIt0U2c",
    authDomain: "auth-7a641.firebaseapp.com",
    databaseURL: "https://auth-7a641-default-rtdb.firebaseio.com",
    projectId: "auth-7a641",
    storageBucket: "auth-7a641.appspot.com",
    messagingSenderId: "105611889462",
    appId: "1:105611889462:web:2b2fea1ff5d99e13414197"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = firebase.firestore();
// Get a reference to the Auth service
const auth = firebase.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value; // Get the name input value

    // Password validation criteria
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!password.match(passwordRegex)) {
        alert("Password must contain at least one number, one special character, one lowercase letter, one uppercase letter, and be at least 8 characters long.");
        return; // Stop execution if password doesn't meet criteria
    }

    // Create user with email, password, and name
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            // Save user data to Firestore
            saveUserData(user.uid, name, email);
            // Inform the user
            alert("You are Signed Up");
        })
        .catch((error) => {
            console.error("Sign-up error:", error);
            alert("Sign-up error: " + error.message);
        });
};

// Function to save user data to Firestore
const saveUserData = (userId, name, email) => {
    // Add a new document in collection "users"
    db.collection("users").doc(userId).set({
        name: name, // Save the name in the database
        email: email
    })
    .then(() => {
        console.log("User data successfully saved!");
    })
    .catch((error) => {
        console.error("Error adding user data: ", error);
    });
};

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
            console.log("You are Signed In");

            // Fetch user data from Firestore based on the user's UID
            const userUid = result.user.uid;
            db.collection("users").doc(userUid).get()
                .then((doc) => {
                    if (doc.exists) {// Update the profile information with the user's name
                        const userData = doc.data();
                        const userName = userData.fullName; // Assuming 'fullName' is the field in your database storing the user's name
                        document.getElementById('profile-name').textContent = userName;
                    
                    } else {
                        console.log("No such document!");
                    }
                })
                .catch((error) => {
                    console.log("Error getting document:", error);
                });

            // Redirect to index.html
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
};
