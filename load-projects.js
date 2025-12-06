import './project-card.js';

const projectsContainer = document.getElementById('projects');
const localButton = document.getElementById('load-local');
const remoteButton = document.getElementById('load-remote');

function displayProjects(projects) {
  projectsContainer.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('project-card');
    card.setAttribute('title', project.title);
    card.setAttribute('img', project.img);
    card.setAttribute('description', project.description);
    card.setAttribute('link', project.link);
    projectsContainer.appendChild(card);
  });
}

localButton.addEventListener('click', async () => {
  try {
    const response = await fetch('db.json'); 
    const data = await response.json();
    console.log("Local data:", data);
    displayProjects(data.projects);
  } catch (err) {
    console.error("Error loading local JSON:", err);
    alert("Failed to load local JSON. Make sure you are running a local server.");
  }
});

remoteButton.addEventListener('click', async () => {
  try {
    const response = await fetch('https://my-json-server.typicode.com/jsilvaayala/hw5-data/db');
    const data = await response.json();
    console.log("Remote data:", data);
    displayProjects(data.projects);
  } catch (err) {
    console.error("Error loading remote JSON:", err);
    alert("Failed to load remote JSON.");
  }
});