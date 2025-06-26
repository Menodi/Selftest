function checkStrength(password) {
  const strengthMessage = document.getElementById("strengthMessage");
  let strength = 0;

  if (password.length >= 6) strength++;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[@$!%*?&]/)) strength++;

  let result = "";
  let color = "";

  if (strength <= 2) {
    result = "Weak";
    color = "red";
  } else if (strength === 3 || strength === 4) {
    result = "Medium";
    color = "orange";
  } else {
    result = "Strong";
    color = "green";
  }

  strengthMessage.textContent = "Password Strength: " + result;
  strengthMessage.style.color = color;
  strengthMessage.style.margin = "5px 30px";
  strengthMessage.style.fontWeight = "bold";
}