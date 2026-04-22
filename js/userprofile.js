// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAptJLDaD4r0r727DsCg9uolSK4PIt0U2c",
  authDomain: "auth-7a641.firebaseapp.com",
  databaseURL: "https://auth-7a641-default-rtdb.firebaseio.com",
  projectId: "auth-7a641",
  storageBucket: "auth-7a641.appspot.com",
  messagingSenderId: "105611889462",
  appId: "1:105611889462:web:2b2fea1ff5d99e13414197"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to Firestore and Auth services
const db = firebase.firestore();

// Listen for authentication state changes
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        var userProfileRef = db.collection('users').doc(user.uid);

        // Get user data from Firestore
        userProfileRef.get().then(function(doc) {
            if (doc.exists) {
                // Display user information
                var userData = doc.data();
                document.getElementById('profile-name').innerText = userData.name;
                document.getElementById('profile-email').innerText = user.email;
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    } else {
        // User is signed out
        console.log('User is not signed in.');
        // Clear the profile information if the user signs out
        document.getElementById('profile-name').innerText = "";
        document.getElementById('profile-email').innerText = "";
    }
});

// Update Profile Button Click Event
document.getElementById('update-done-btn').addEventListener('click', function() {
    // Get user input values
    var newName = document.getElementById('name').value;
    var newProfilePic = document.getElementById('input-file').files[0]; // Assuming only one file is selected

    // Get current user
    var user = firebase.auth().currentUser;

    // Update profile name
    user.updateProfile({
        displayName: newName
    }).then(function() {
        // Update user's name in Firestore
        db.collection('users').doc(user.uid).set({
            name: newName
        }, { merge: true }) // Use merge option to update only the specified fields
        .then(function() {
            console.log('Profile updated successfully!');
            // Reload the page to reflect changes
            location.reload();
        }).catch(function(error) {
            console.error('Error updating profile:', error);
        });
    }).catch(function(error) {
        console.error('Error updating profile:', error);
    });
});

// Sign Out Button Click Event
document.getElementById('sign-out-btn').addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful, redirect to sign-up page
        window.location.href = 'index.html'; // Replace 'signup.html' with your sign-up page URL
    }).catch(function(error) {
        // An error happened.
        console.error('Sign-out error:', error);
    });
});