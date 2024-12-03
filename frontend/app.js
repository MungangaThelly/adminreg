const apiUrl = "http://localhost:5000"; // Adjust to your backend URL
let jwtToken = null; // Store JWT token for authenticated requests

// Register form submit
document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  const response = await fetch(`${apiUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  alert(data.message);
});

// Login form submit
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  if (data.token) {
    jwtToken = data.token;  // Store the token
    localStorage.setItem("jwtToken", jwtToken); // Optionally, store the token in localStorage
    alert("Login successful!");
    showProtectedRoute();
  } else {
    alert("Invalid credentials");
  }
});

// Fetch secret data from protected route
document.getElementById("fetch-protected-data").addEventListener("click", async () => {
  const response = await fetch(`${apiUrl}/protected`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${jwtToken}`
    }
  });

  const data = await response.json();

  if (data.secretData) {
    document.getElementById("protected-data").textContent = data.secretData;
  } else {
    alert("Access denied: " + data.message);
  }
});

// Check if user is authenticated and show protected route
function showProtectedRoute() {
  document.getElementById("auth-forms").style.display = "none";
  document.getElementById("user-info").style.display = "block";
}

// On page load, check for token in localStorage
window.onload = () => {
  const storedToken = localStorage.getItem("jwtToken");
  if (storedToken) {
    jwtToken = storedToken;
    showProtectedRoute();
  }
};
