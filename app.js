
class Battle{
    constructor(fighter1, fighter2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.round = 1;
    }
    battleStart(){
        console.log("battle Started" );
        console.log(`${this.fighter1.name} vs ${this.fighter2.name}`);
    }
    fight() {
        console.log(`Round ${this.round}:`);
    }
}
class Fighter {
    constructor(name,health,attackPower,defensePower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.defensePower = defensePower;
            }
        attack(target,weapon) {
            this.weapon = weapon;
            this.target = target;
            const attackEffect = Math.max(this.attackPower - target.defensePower, 0);
            console.log(`Attack with ` + weapon);
            console.log(`Attack Effect  ` + attackEffect);
            target.health -= attackEffect;
            console.log(`${this.name} attacks ${target.name}, affected with ${attackEffect} `);
            
            } 
        defend(){
            console.log(`Defend with `);
        }        
            // defend : () => {
            //     console.log(`Defend with `);
            // }
    
}

// class SpaceShip{
//     constructor(name,hull,firePower,accuracy,commander){
//         this.name = name;
//         this.hull = hull;
//         this.firePower = firePower;
//         this.accuracy = accuracy;
//         this.commander = commander;         //Alien / Captain
       
//     }

//     attack(weapon) {
//         console.log(`Fire on ` + weapon);
//     }
//     defend()  {
//         console.log(`Defend on`);
//     }
//     attackBack(weapon)  {
//         console.log(`Fire back` + weapon);
//         this.weapon = weapon;
//     }
//     retreat = function()  {
    
//     }
// }


let captainFighter = new Fighter('Captain Mohamed',11,12,13);
console.log("Fighter " + captainFighter.name)

let alienFighter = new Fighter('Alien Z1',11,12,13);


let battle = new Battle(captainFighter,alienFighter);
battle.battleStart();

function attack()
{
    let txtgame = document.querySelector('.txtGame');
    // console.log(txtgame);
    txtgame.textContent += 'Attack\n '; 
}