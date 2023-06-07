// Use JavaScript to fetch and populate project data

// Fetch top funded projects
const topProjectsSection = document.querySelector('section:first-of-type');
fetch('https://api.example.com/projects/top')
  .then(response => response.json())
  .then(data => {
    // Populate the top projects section
    data.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.website}">Visit Website</a>
      `;
      topProjectsSection.appendChild(projectElement);
    });
  });

// Fetch other projects from the repository
const exploreProjectsSection = document.querySelector('section:nth-of-type(2)');
fetch('https://api.example.com/projects/all')
  .then(response => response.json())
  .then(data => {
    // Populate the explore projects section
    data.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.website}">Visit Website</a>
      `;
      exploreProjectsSection.appendChild(projectElement);
    });
  });
