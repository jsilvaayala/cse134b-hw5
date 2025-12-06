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

async function initLocalStorage() {
  if (!localStorage.getItem('projects')) {
    const localProjects = [
      {
        "id": 1,
        "title": "My Computer Graphics Project - Image 1",
        "img": "images/Project-1-Image.png",
        "description": "Rendering with shading and lighting techniques.",
        "link": "#"
      },
      {
        "id": 2,
        "title": "My Computer Graphics Project - Image 2",
        "img": "images/Project-Image-2.png",
        "description": "Using lighting and shading effects to create realistic scenes.",
        "link": "#"
      },
      {
        "id": 3,
        "title": "My Computer Graphics Project - Image 3",
        "img": "images/Project-Image-3.png",
        "description": "Advanced 3D rendering with textures and camera effects.",
        "link": "#"
      }
    ];
    localStorage.setItem('projects', JSON.stringify(localProjects));
  }
}

initLocalStorage();

localButton.addEventListener('click', () => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  if (!projects) return alert("No local projects found.");
  displayProjects(projects);
});

remoteButton.addEventListener('click', async () => {
  try {
    const response = await fetch('https://my-json-server.typicode.com/jsilvaayala/hw5-data/db');
    const data = await response.json();
    displayProjects(data.projects);
  } catch (err) {
    console.error("Error loading remote JSON:", err);
    alert("Failed to load remote projects.");
  }
});