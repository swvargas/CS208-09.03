function isStrongPassword(password) {
  const hasMinLength = password.length >= 8;
  const noPasswordWord = !password.toLowerCase().includes("password");
  const hasUppercase = /[A-Z]/.test(password);

  return hasMinLength && noPasswordWord && hasUppercase;
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const password = document.getElementById("password").value;

  if (isStrongPassword(password)) {
    alert("Password is strong");
  } else {
    alert("Password is weak");
  }
});

