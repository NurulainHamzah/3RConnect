// Your Firebase configuration
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
  
  // Get a reference to the Firestore database
  const db = firebase.firestore();

  
  
// Define the showComment function
function showComment(commentNumber) {
    var commentArea = document.getElementById("comment-area-" + commentNumber);
    if (commentArea) {
        commentArea.classList.toggle("hide");
    } else {
        console.error("Comment area with ID comment-area-" + commentNumber + " not found.");
    }
}


function submitComment(commentNumber) {
    var commentText = document.getElementById("comment-text-" + commentNumber).value;
    var commenterName = "Ainna"; // You can replace "Ainna" with the actual name of the commenter

    // Save the comment to Firebase Firestore
    db.collection("comments").add({
        name: commenterName, // Add the name of the commenter
        text: commentText,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        commentNumber: commentNumber // Add the comment number to identify which comment it is
    })
    .then(function(docRef) {
        console.log("Comment " + commentNumber + " added with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding comment " + commentNumber + ": ", error);
    });

    // Clear the comment textarea after submission
    document.getElementById("comment-text-" + commentNumber).value = "";
}



  
  // Function to handle reply submission and save to Firebase
  function submitReply(parentCommentId) {
      var replyText = document.getElementById("reply-text-" + parentCommentId).value;
  
      // Save the reply to Firebase Firestore
      db.collection("comments").doc(parentCommentId).collection("replies").add({
          text: replyText,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(function(docRef) {
          console.log("Reply added with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding reply: ", error);
      });
  
      // Clear the reply textarea after submission
      document.getElementById("reply-text-" + parentCommentId).value = "";
  }
  
  function retrieveComments() {
    db.collection("comments")
        .orderBy("timestamp", "asc") // Order comments by timestamp
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const commentData = doc.data();
                displayComment(commentData.name, commentData.text, commentData.commentNumber); // Pass both the name and text of the comment
            });
        })
        .catch((error) => {
            console.log("Error getting comments: ", error);
        });
}


function displayComment(commenterName, commentText, commentNumber) {
    const commentsContainer = document.getElementById("comments-container-" + commentNumber);
    if (!commentsContainer) {
        console.error("Comments container with ID comments-container-" + commentNumber + " not found.");
        return;
    }
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.textContent = commenterName + ": " + commentText; // Display the commenter's name along with the comment text
    commentsContainer.appendChild(commentElement);
}




// Call the function to retrieve and display comments when the page loads
window.addEventListener("load", () => {
    retrieveComments();
});



// New function to perform search
function performSearch() {
    var searchType = document.getElementById('searchType').value;
    var searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Get all posts
    var allPostsForums = document.querySelectorAll('.subforum-row');
    var allPostsPosts = document.querySelectorAll('.table-row');
    var allPostsDetails = document.querySelectorAll('.details-post-class');

    // Loop through each post and filter based on search criteria
    allPostsForums.forEach(post => {
        var title = post.querySelector('h4 a').innerText.toLowerCase();
        var description = post.querySelector('p').innerText.toLowerCase();

        // Check if the post matches the search criteria
        if (
            (searchType === 'Everything' && (title.includes(searchQuery) || description.includes(searchQuery))) ||
            (searchType === 'Titles' && title.includes(searchQuery)) ||
            (searchType === 'Descriptions' && description.includes(searchQuery))
        ) {
            // Show matching post
            post.classList.remove('hide');
        } else {
            // Hide non-matching post
            post.classList.add('hide');
        }
    });

    // Loop through each post and filter based on search criteria
    allPostsPosts.forEach(post => {
        var title = post.querySelector('.subjects a').innerText.toLowerCase();

        // Check if the post matches the search criteria
        if (
            (searchType === 'Everything' && title.includes(searchQuery)) ||
            (searchType === 'Titles' && title.includes(searchQuery))
        ) {
            // Show matching post
            post.classList.remove('hide');
        } else {
            // Hide non-matching post
            post.classList.add('hide');
        }
    });

}


const threadsContainer = document.getElementById("threadsContainer");

// Display existing threads on page load
function displayThreads() {
    // Fetch threads from Firebase
    db.collection("threads").get().then((querySnapshot) => {
        threadsContainer.innerHTML = ""; // Clear previous content
        querySnapshot.forEach((doc) => {
            const threadElement = createThreadElement(doc.id, doc.data().title, doc.data().description);
            threadsContainer.appendChild(threadElement);
        });
    });
}

// Open and close new thread modal functions...

document.getElementById("newThreadForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const threadTitle = document.getElementById("threadTitle").value;
    const threadDescription = document.getElementById("threadDescription").value; // Added this line

    // Add a new thread to Firebase
    db.collection("threads").add({
        title: threadTitle,
        description: threadDescription, // Added this line
    }).then(() => {
        // After adding, call displayThreads to refresh the displayed threads
        displayThreads();
        closeNewThreadModal();
    });
});

// function createThreadElement(threadId, threadTitle, threadDescription) {
//     const threadElement = document.createElement("div");
//     threadElement.innerHTML = `
//         <div class="row mb-4 subforum-row">
//             <div class="col-2 subforum-column center">
//                 <div class="subforum-icon">
//                     <i class="fa fa-comment"></i>
//                 </div>
//             </div>
//             <div class="col-12 subforum-column">
//                 <h5 class="card-title">${threadTitle}</h5>
//                 <p class="card-text">${threadDescription}</p>
//             </div>
//             <div class="col-2 subforum-column center">
//                 <button onclick="editThread('${threadId}', '${threadTitle}', '${threadDescription}')">Edit</button>
//             </div>
//             <div class="col-2 subforum-column center">
//                 <button onclick="deleteThread('${threadId}')">Delete</button>
//             </div>
//         </div>
//         <hr>
//     `;
    // <div class="card mb-3">
    //         <div class="row no-gutters">
    //             <div class="col-md-1 subforum-column center">
    //                 <div class="subforum-icon">
    //                     <i class="fa fa-comment"></i>
    //                 </div>
    //             </div>
    //             <div class="col-md-8 subforum-column">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${threadTitle}</h5>
    //                     <p class="card-text">${threadDescription}</p>
    //                 </div>
    //             </div>
    //             <div class="col-md-2 subforum-column center">
    //                 <button onclick="editThread('${threadId}', '${threadTitle}', '${threadDescription}')">Edit</button>
    //             </div>
    //             <div class="col-md-1 subforum-column center">
    //                 <button onclick="deleteThread('${threadId}')">Delete</button>
    //             </div>
    //         </div>
    //     </div>
    // `;
//     return threadElement;
// }

function createThreadElement(threadId, threadTitle, threadDescription) {
    const threadElement = document.createElement("div");
    threadElement.className = "card mb-3";
    threadElement.innerHTML = `
        <div class="row no-gutters">
            <div class="col-md-1 subforum-column center">
                <div class="subforum-icon">
                    <i class="fa fa-comment"></i>
                </div>
            </div>
            <div class="col-md-8 subforum-column">
                <div class="card-body">
                    <h5 class="card-title">${threadTitle}</h5>
                    <p class="card-text">${threadDescription}</p>
                </div>
            </div>
            <div class="col-md-2 subforum-column center">
                <button class="btn btn-info" onclick="editThread('${threadId}', '${threadTitle}', '${threadDescription}')">Edit</button>
            </div>
            <div class="col-md-2 subforum-column center">
                <button class="btn btn-danger" onclick="deleteThread('${threadId}')">Delete</button>
            </div>
        </div>
    `;
    return threadElement;
}


function editThread(threadId, currentTitle) {
    const newTitle = prompt("Enter a new title:", currentTitle);
    
    // Update the thread in Firebase
    db.collection("threads").doc(threadId).update({
        title: newTitle
    }).then(() => {
        // After editing, call displayThreads to refresh the displayed threads
        displayThreads();
    });
}

function deleteThread(threadId) {
    // Delete the thread from Firebase
    db.collection("threads").doc(threadId).delete().then(() => {
        // After deleting, call displayThreads to refresh the displayed threads
        displayThreads();
    });
}

// Function to display existing threads on page load
window.addEventListener("load", () => {
    displayThreads();
});


function openNewThreadModal() {
    document.getElementById("newThreadModal").style.display = "block";
}

function closeNewThreadModal() {
    document.getElementById("newThreadModal").style.display = "none";
}

document.getElementById("newThreadForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const threadTitle = document.getElementById("threadTitle").value;
    // Implement logic to add a new thread
    addNewThread(threadTitle);
    closeNewThreadModal();
});

// Function to add a new thread to the threadsContainer
function addNewThread(threadTitle, threadDescription) {
    var threadsContainer = document.getElementById("threadsContainer");
    if (threadsContainer) {
        var threadElement = document.createElement("div");
        threadElement.className = "row mb-4";
        threadElement.innerHTML = `
            // <div class="col-12 subforum-row">
            //     <div class="subforum-column center">
            //         <div class="subforum-icon">
            //             <i class="fa fa-comment"></i>
            //         </div>
            //     </div>
            //     <div class="subforum-column">
            //         <h5 class="card-title">${threadTitle}</h5>
            //         <p class="card-text">${threadDescription}</p>
            //     </div>
            //     <div class="subforum-column center">
            //         <button class="btn btn-danger" onclick="deleteThread('${threadId}')">Delete</button>
            //     </div>
            //     <div class="subforum-column center">
            //         <button class="btn btn-warning" onclick="editThread('${threadId}', '${threadTitle}', '${threadDescription}')">Edit</button>
            //     </div>
            // </div>
        `;
        threadsContainer.appendChild(threadElement);
    } else {
        console.error("Threads container not found.");
    }
}


    // Sample usage for adding a new thread (replace this with your actual logic)
    // addNewThread("New Thread Title", "This is the content of the new thread.");
// });




// Placeholder data
let comments = [];
let currentPostId = 1; // Placeholder for current post ID

function redirectToNewThread() {
    window.location.href = "new_thread.html";
}

// Function to open the modal for a new post
function redirectToNewPost() {
    document.getElementById("newPostModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("newPostModal").style.display = "none";
}

// Function to create a new post
function createNewPost() {
    // Get input values
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;

    // Validate input (you can add more validation)
    if (title.trim() === "" || content.trim() === "") {
        alert("Title and content cannot be empty.");
        return;
    }

    // Add the new post to Firestore
    db.collection("posts").add({
        title: title,
        content: content,
        author: "CurrentUser", // Replace with actual user information or integrate user authentication
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
        console.log("Post added with ID: ", docRef.id);
        
        db.collection("posts").doc(docRef.id).get().then((doc) => {
          displayNewPost(doc.id, doc.data());
        });

        // Clear input fields after successful submission
        document.getElementById("postTitle").value = "";
        document.getElementById("postContent").value = "";
    })
    .catch(function(error) {
        console.error("Error adding post: ", error);
    });
}


document.getElementById("newPostForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const postTitle = document.getElementById("postTitle").value;
    const postContent = document.getElementById("postContent").value;

    // Add the new post to Firestore
    db.collection("posts").add({
        title: postTitle,
        content: postContent,
        author: "CurrentUser", // Replace with actual user information or integrate user authentication
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function(docRef) {
        console.log("Post added with ID: ", docRef.id);

        // Fetch the newly added post from Firestore and display it on the page
        db.collection("posts").doc(docRef.id).get().then(function(doc) {
            displayNewPost(doc.id, doc.data());
        });

        // Clear the form fields
        document.getElementById("postTitle").value = "";
        document.getElementById("postContent").value = "";

        // Close the modal after adding a post
        $('#createPostModal').modal('hide');
    })
    .catch(function(error) {
        console.error("Error adding post: ", error);
    });
});

// Function to display a new post on the page
function displayNewPost(postId, data) {
    var postsContainer = document.getElementById("postsContainer");

    // Create HTML elements for the new post
    var postElement = document.createElement("div");
    postElement.className = "table-row"; // Adjust this class according to your styling

    var postHtml = `
    <div class="table-row">
            <div class="status"><i class="fa fa-fire"></i></div>
            <div class="subjects">
                <a href="#" onclick="viewPost('${postId}')">${data.title}</a>
                <br>
                <span>Started by <b><a href="#">${data.author}</a></b>.</span>
            </div>
            <div class="replies">
                0 replies <br> 0 views
            </div>
            <div class="last-reply">
                Just now <br>By <b><a href="#">${data.author}</a></b>
            </div>
            <div class="actions">
                <button onclick="editPost('${postId}')">Edit</button>
                <button onclick="deletePost('${postId}')">Delete</button>
            </div>
        </div>
    `;
// Insert the new post as the first child of the posts container
postElement.innerHTML = postHtml;
  postsContainer.insertBefore(postElement, postsContainer.firstChild);
}
// Function to open the modal for creating a new post
function openNewPostModal() {
    $('#createPostModal').modal('show');
  }

// Function to close the modal
// function closeModal() {
    // Add logic to close the modal (e.g., using Bootstrap modal functions)
    // Example: $('#myModal').modal('hide');
// }


// Function to view a post
function viewPost(postId) {
    // Implement logic to view a post
    console.log("View post with ID: ", postId);
}

// Function to edit a post
function editPost(postId) {
    // Implement logic to edit a post
    console.log("Edit post with ID: ", postId);
}

// Function to delete a post
function deletePost(postId) {
    // Implement logic to delete a post
    console.log("Delete post with ID: ", postId);
}

// Function to get the current date in a formatted way
function getCurrentDate() {
    var currentDate = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

function addNewComment() {
    const commentText = prompt("Enter your comment:");
    if (commentText) {
        const newComment = { text: commentText };
        // Assuming postId is available in the context, replace it with your actual postId logic
        const postId = currentPostId;
        
        // Add the new comment to Firebase
        db.collection("posts").doc(postId.toString()).collection("comments").add(newComment)
            .then((docRef) => {
                comments.push({ id: docRef.id, ...newComment });
                updateCommentsContainer(); // Update the comments UI
            })
            .catch((error) => {
                console.error("Error adding comment: ", error);
            });
    }
}

function editPost() {
    const updatedText = prompt("Edit your post:", "Updated post text");
    if (updatedText) {
        // Assuming postId is available in the context, replace it with your actual postId logic
        const postId = currentPostId;

        // Update the post text in Firebase
        db.collection("posts").doc(postId.toString()).update({ text: updatedText })
            .then(() => {
                updatePostContent(); // Update the post UI
            })
            .catch((error) => {
                console.error("Error updating post: ", error);
            });
    }
}

function deletePost() {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
        // Assuming postId is available in the context, replace it with your actual postId logic
        const postId = currentPostId;

        // Delete the post from Firebase
        db.collection("posts").doc(postId.toString()).delete()
            .then(() => {
                window.location.href = "topic1_posts.html"; // Redirect to posts page
            })
            .catch((error) => {
                console.error("Error deleting post: ", error);
            });
    }
}

function updateCommentsContainer() {
    // Logic to update the comments container in the UI
}

function updatePostContent() {
    // Logic to update the post content in the UI
}

// Listen for changes in comments and update UI accordingly
db.collection("posts").doc(currentPostId.toString()).collection("comments")
    .onSnapshot((snapshot) => {
        comments = [];
        snapshot.forEach((doc) => {
            comments.push({ id: doc.id, ...doc.data() });
        });
        updateCommentsContainer();
    });