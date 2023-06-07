// Use JavaScript to fetch and populate user profile data

// Fetch user profile data
const profileContainer = document.getElementById('profileContainer');
fetch('https://api.example.com/profiles/user123')
  .then(response => response.json())
  .then(data => {
    // Populate the user profile section
    const profileElement = document.createElement('div');
    profileElement.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.email}</p>
      <p>Specializations: ${data.specializations.join(', ')}</p>
    `;
    profileContainer.appendChild(profileElement);
  });
