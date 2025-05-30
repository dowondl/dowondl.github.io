const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = document.querySelector("#greeting input").value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  greeting.innerHTML = `
    <form id="login-form">
      <input required maxlength="15" type="text" placeholder="What is your name?" />
      <button>Log In</button>
    </form>
  `;
  document.querySelector("#login-form").addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
