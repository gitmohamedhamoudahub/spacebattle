
class Battle{
    constructor(fighter1, fighter2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.round = 1;
    }
    battleStart = function battleStart(){
        console.log("battle Started" );
        console.log(this.fighter1);
        console.log(this.fighter2);
    }
}
class Fighter {
    constructor(name,health,attackPower,defensePower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.defensePower = defensePower;
            }
        attack = function attack(weapon) {
            this.weapon = weapon;
                console.log(`Attack with ` + weapon);
            
            } 
        defend = function defend(){
            console.log(`Defend with `);
        }        
            // defend : () => {
            //     console.log(`Defend with `);
            // }
    
}

class SpaceShip{
    constructor(name,hull,firePower,accuracy,commander){
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
        this.commander = commander;         //Alien / Captain
       
    }

    attack = function(weapon) {
        console.log(`Fire on ` + weapon);
    }
    defend = () => {
        console.log(`Defend on`);
    }
    attackBack = function(weapon)  {
        console.log(`Fire back` + weapon);
        this.weapon = weapon;
    }
    retreat = function()  {
    
    }
}
let captainFighter = new Fighter('Captain Mohamed',11,12,13);
console.log("Fighter " + captainFighter.name)
captainFighter.attack('laser');

let usSpaceShip = new SpaceShip('USS Space',11,12,13,captainFighter);
usSpaceShip.attack(captainFighter.weapon); 
usSpaceShip.defend();
usSpaceShip.attackBack(captainFighter.weapon);

let alienFighter = new Fighter('Alien Z1',11,12,13);

let alienSpaceShip = new SpaceShip('Alien 1',11,12,13,alienFighter);
alienFighter.attack('Laser');
alienSpaceShip.attack(alienFighter.weapon);

let battle = new Battle(captainFighter,alienFighter);
battle.battleStart();
battle.fighter1.attack('Laser 1');