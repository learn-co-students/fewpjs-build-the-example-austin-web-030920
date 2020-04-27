// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.getElementById("modal")

document.addEventListener('DOMContentLoaded', () => {
  hideErrors();

  document.body.addEventListener("click", (event) => {
    if (event.target.className == "activated-heart") {
      mimicServerCall()
        .then(() => {
          event.target.innerText = EMPTY_HEART;
          event.target.className = "like-glyph";
        })
        .catch((error) => {
          revealErrors();
          document.getElementById("modal-message").innerText = error;
          setTimeout(hideErrors, 5000)
        });
    } else if (event.target.className == "like-glyph") {
      mimicServerCall()
        .then(() => {
          event.target.innerText = FULL_HEART;
          event.target.className = "activated-heart";
        })
        .catch((error) => {
          revealErrors();
          document.getElementById("modal-message").innerText = error;
          setTimeout(hideErrors, 5000)
        });
    };
  });
});

function hideErrors() {
  errorDiv.className = "hidden"
};
function revealErrors() {
  errorDiv.className = ""
};



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
