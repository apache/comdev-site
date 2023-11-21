class VolunteersList extends HTMLElement {
  async connectedCallback() {
    const people = await this._fetchPublicData('public_ldap_people.json');
    const projects = await this._fetchPublicData('public_ldap_projects.json');
    const projectsById = this._indexProjectsById(projects);
    this.querySelectorAll('li').forEach(li => {
      const d = this._parseEntry(li.textContent);

      // build list of projects for this person
      let projectsHTML = '';
      const theirProjects = projectsById[d.id];
      if(theirProjects) {
        Object.keys(theirProjects).forEach(project => {
          const isPmc = theirProjects[project].pmc;
          if(projectsHTML != '') {
            projectsHTML += ', ';
          }
          projectsHTML += `<a href=https://${project}.apache.org>${isPmc ? '<strong>' : ''}${project}${isPmc ? '</strong>' : ''}</a>`;
        })
      }

      // set volunteer information
      const name = people.people[d.id]?.name ? people.people[d.id]?.name : d.id;
      li.innerHTML = `
        <a rel="nofollow" href="${d.url}">${name}</a>
        (${d.roles})
        ${d.location && d.location != 'N/A' ? ', ' + d.location : ''}
        <br/><span class='projects'><em>projects: </em>${projectsHTML}</span>
      `;
    })
  }

  async _fetchPublicData(whimsyFilename) {
    var result = {};
    const response = await fetch(`https://whimsy.apache.org/public/${whimsyFilename}`);
    if(response.status == 200) {
      const data = await response.text();
      result = JSON.parse(data);
    }
    return result;
  }

  _parseEntry(txt) {
    const fields = txt.split('#');
    var i = 0;
    return {
      id: fields[i++]?.trim(),
      roles: fields[i++]?.trim(),
      url: fields[i++]?.trim(),
      location: fields[i++]?.trim()
    }
  }

  _indexProjectsById(projects) {
    var index = {};
    Object.keys(projects.projects).forEach(project => {
      projects.projects[project].members.forEach(m => {
        if(!index[m]) {
          index[m] = {};
        }
        index[m][project] = { pmc:false };
      })
      projects.projects[project].owners.forEach(m => {
        if(!index[m]) {
          index[m] = {};
        }
        index[m][project] = { pmc:true };
      })
    })
    return index;
  }

}

customElements.define('volunteers-list', VolunteersList);