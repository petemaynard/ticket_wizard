const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

const logoutBtns = document.querySelectorAll("#logout")
const logoutDropdown = logoutBtns[0];
const logoutBtn = logoutBtns[1];


logoutDropdown.addEventListener("click", logout);
logoutBtn.addEventListener("click", logout);

