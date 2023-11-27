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

      // set volunteer information
      const name = people.people[d.id]?.name ? people.people[d.id]?.name : d.id;
      li.innerHTML = `
        <a rel="nofollow" href="${d.url}">${name}</a>
        (${d.id})
        - ${d.roles}
        ${d.location ? '- ' + d.location : ''}
        ${d.lang ? '- languages spoken: ' + d.lang : ''}
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
      roles: nullIfEmpty(fields[i++]),
      lang: nullIfEmpty(fields[i++]),
      url: nullIfEmpty(fields[i++]),
      location: nullIfEmpty(fields[i++])
    }
  }

}

customElements.define('volunteers-list', VolunteersList);