import fetchJSON from './data-loader.js';
const projects = await fetchJSON('https://whimsy.apache.org/public/public_ldap_projects.json');
var projectsById = {};

{
  Object.keys(projects.projects).forEach(project => {
    projects.projects[project].members.forEach(m => {
      if (!projectsById[m]) {
        projectsById[m] = {};
      }
      projectsById[m][project] = { pmc: false };
    })
    projects.projects[project].owners.forEach(m => {
      if (!projectsById[m]) {
        projectsById[m] = {};
      }
      projectsById[m][project] = { pmc: true };
    })
  })
}

// some projects websites have names that
// differ from their Whimsy name
const projectToWebsite = {
  comdev: 'community'
}

// Component that replaces its content with a list of links
// to the projects that an ASF id belongs to
class PersonProjects extends HTMLElement {
  async connectedCallback() {
    let projectsHTML = '';
    const asfid = this.getAttribute('asfid');
    const theirProjects = projectsById[asfid];
    if (theirProjects) {
      Object.keys(theirProjects).forEach(project => {
        const website = projectToWebsite[project] ? projectToWebsite[project] : project;
        const isPmc = theirProjects[project].pmc;
        if (projectsHTML != '') {
          projectsHTML += ', ';
        }
        projectsHTML += `<a href=https://${website}.apache.org>${isPmc ? '<strong>' : ''}${project}${isPmc ? '</strong>' : ''}</a>`;
      })
    }

    if (projectsHTML.length > 0) {
      this.innerHTML = projectsHTML;
    }
  }
}

customElements.define('person-projects', PersonProjects);