'use strict';

class Team {
    constructor() {
        this.teamname = 'Winners';
        this.trainer = 'Freya';
        this.roster = [];
    }
    describe() {
        return `Team ${this.teamname} with trainer ${this.trainer} 
        has the following pokemon: ${[...this.roster]}`;
    }
}

export default Team;