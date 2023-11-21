import fetchPublicData from "./whimsy-loader.js";

// Component that enriches a list of volunteers where each
// entry is formatted in Markdown like
//  * bdelacretaz # mentor, speaker # https://grep.codeconsult.ch # Switzerland
//
class VolunteersList extends HTMLElement {
  async connectedCallback() {
    const people = await fetchPublicData('public_ldap_people.json');
    this.querySelectorAll('li').forEach(li => {
      const d = this._parseEntry(li.textContent);
      console.log(d);

      // set volunteer information
      const name = people.people[d.id]?.name ? people.people[d.id]?.name : d.id;
      li.innerHTML = `
        <a rel="nofollow" href="${d.url}">${name}</a>
        (${d.id})
        - ${d.roles}
        ${d.location && d.location != 'N/A' ? '- ' + d.location : ''}
        - speaks ${d.lang}
        <br/><span class='projects'><em>projects: </em><person-projects asfid="${d.id}"></person-projects></span>
      `;
    })
  }

  _parseEntry(txt) {
    const fields = txt.split('#');
    var i = 0;
    return {
      id: fields[i++]?.trim(),
      roles: fields[i++]?.trim(),
      lang: fields[i++]?.trim(),
      url: fields[i++]?.trim(),
      location: fields[i++]?.trim()
    }
  }

}

customElements.define('volunteers-list', VolunteersList);