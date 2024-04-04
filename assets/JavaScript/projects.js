const projects = document.querySelector(".projects");

async function getProject(){
    const response = await fetch("assets/JSON/projects-data.json");
    const data = await response.json();
    console.log(data);
    return data;
}

async function showProject(){
    const projectData = await getProject();
    console.log(projectData);
    for (const project of projectData.projects) {
        projects.innerHTML +=
        `
        <div class="project">
            <img src="${project.photo}" alt="" class="project-img">
            <div class="project-text">
                <h4 class="project-header-h4">${project.title}</h4>
                <span class="project-span">${project.language.join(", ")}</span>
            </div>
            <!-- mobile -->
            <div class="projects-view">
                <a href="${project.viewProjects}" class="project-view">VIEW PROJECT</a>
                <a href="${project.viewCode}" class="project-view">VIEW CODE</a>
            </div>
            <!-- mobile end -->
        </div>
        `
    }
}

showProject();