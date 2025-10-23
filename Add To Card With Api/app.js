// 🔹 Function: Check if user is logged in
function checkUser() {
  const currentUser = localStorage.getItem('currentUser'); // get logged user

  if (!currentUser) {
    // If user not logged in, redirect to login page
    alert('⚠️ Please login first!');
    window.location.href = 'login.html';
  } else {
    // If logged in, show welcome message
    // If logged in, show welcome message
    // If logged in, show welcome message
    // If logged in, show welcome message
    const welcomeMsg = document.getElementById('welcomeMsg');
    welcomeMsg.textContent = `Welcome, ${currentUser}! 👋`;
  }
}

// 🔹 Run check when page loads
// 🔹 Run check when page loads
// 🔹 Run check when page loads
// 🔹 Run check when page loads
checkUser();

// 🔹 Logout functionality
const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
  alert('👋 You have logged out!');
  alert('👋 You have logged out!');
  alert('👋 You have logged out!');
  alert('👋 You have logged out!');
  alert('👋 You have logged out!');
  localStorage.removeItem('currentUser'); // remove user
  window.location.href = 'login.html'; // redirect
});
