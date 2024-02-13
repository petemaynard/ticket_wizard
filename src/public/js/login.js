const loginFormHandler = async (event) => {
  event.preventDefault();
  
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const f_name = document.querySelector("#f_name-signup").value.trim();
  const l_name = document.querySelector("#l_name-signup").value.trim();
  const address = document.querySelector("#address-signup").value.trim();
  const city = document.querySelector("#city-signup").value.trim();
  const state = document.querySelector("#state-signup").value.trim();
  const zip = document.querySelector("#zip-signup").value.trim();

  if (f_name && l_name && username && email && password && state) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        f_name,
        l_name,
        address,
        city,
        state,
        zip,
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

if (document.querySelectorAll(".login-form")) {
  document.addEventListener("submit", loginFormHandler);
}

document.querySelector(".signup-form");
if (document.querySelector(".signup-form")) {
  document.addEventListener("submit", signupFormHandler);
}
