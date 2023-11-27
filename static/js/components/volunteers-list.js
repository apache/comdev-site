import fetchJSON from "./data-loader.js";

// Component that enriches a list of volunteers where each
// entry is formatted in Markdown like
//  * bdelacretaz # mentor, speaker # https://grep.codeconsult.ch # Switzerland
//
class VolunteersList extends HTMLElement {
  async connectedCallback() {
    const whimsyPeople = await fetchJSON('https://whimsy.apache.org/public/public_ldap_people.json');
    const localPeople = await fetchJSON('/data/people.json');
    this.querySelectorAll('li').forEach(li => {
      const d = this._parseEntry(li.textContent);

      // set volunteer information
      const name = whimsyPeople.people[d.id]?.name ? whimsyPeople.people[d.id]?.name : d.id;
      const localinfo = localPeople[d.id];
      li.innerHTML = `
        ${localinfo?.website ? '<a rel="nofollow" href="' + localinfo.website + '">' + name + '</a>' : name }
        (${d.id})
        - ${d.roles}
        ${localinfo?.region ? '- ' + localinfo.region : ''}
        ${localinfo?.speaks ? '- languages spoken: ' + localinfo.speaks : ''}
        <br/><span class='projects'><em>projects: </em><person-projects asfid="${d.id}"></person-projects></span>
      `;
    })
  }

  _parseEntry(txt) {
    const fields = txt.split('#');

    const nullIfEmpty = input => {
      if(!input) {
        return null;
      }
      const result = input.trim();
      return result.length == 0 ? null : result;
    }

    var i = 0;
    return {
      id: nullIfEmpty(fields[i++]),
      roles: nullIfEmpty(fields[i++])
    }
  }

}

customElements.define('volunteers-list', VolunteersList);