'use strict';

class team {
    constructor() {
        let teamname = 'Example teamname';
        let trainer = 'Example trainername';
        let roster = [];

        function describe() {
            let description = `<h1>${teamname}</h1> <br>
            <p>the team of ${trainer} consists of ${roster}</p>`;
        }
    }

}

export default team;