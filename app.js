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

let usSpaceShip = new SpaceShip('USS Space',11,12,13,captainFighter.name);
usSpaceShip.attack(captainFighter.weapon); 
usSpaceShip.defend();
usSpaceShip.attackBack(captainFighter.weapon);