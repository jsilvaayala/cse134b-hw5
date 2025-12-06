import './project-card.js';

const projectsContainer = document.getElementById('projects');
const localButton = document.getElementById('load-local');
const remoteButton = document.getElementById('load-remote');

localButton.addEventListener('click', async () => {
  const response = await fetch('db.json');  
  const data = await response.json();
  displayProjects(data.projects);
});

remoteButton.addEventListener('click', async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/jsilvaayala/hw5-data/main/db.json'
  );
  const data = await response.json();
  displayProjects(data.projects);
});

function displayProjects(projects) {
  projectsContainer.innerHTML = ''; 

  projects.forEach(project => {
    const card = document.createElement('project-card');
    card.setAttribute('title', project.title);
    card.setAttribute('img', project.img);
    card.setAttribute('alt', project.alt);
    card.setAttribute('description', project.description);
    card.setAttribute('link', project.link);
    projectsContainer.appendChild(card);
  });
}