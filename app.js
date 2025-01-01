
class Battle{
    constructor(fighter1, fighter2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.round = 1;
    }
    startBattle(){
        console.log("battle Started" );
        console.log(`${this.fighter1.name} vs ${this.fighter2.name}`);
    }
    fight() {
        console.log(`Fighting In Round ${this.round}:`);
        const attackEffect = Math.max(fighter1.attackPower - fighter2.defensePower, 0);
        target.health -= attackEffect;

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
            
    
}


let captainFighter = new Fighter('Captain Mohamed',20,5,2);
let alienFighter = new Fighter('Alien Z1',15,4,1);

let battle = new Battle(captainFighter,alienFighter);
battle.startBattle();
battle.fight();
function attack()
{
    let txtgame = document.querySelector('.txtGame');
    // console.log(txtgame);
    txtgame.textContent += 'Attack\n '; 
}