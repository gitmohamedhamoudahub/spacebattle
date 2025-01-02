const alienDiv = document.querySelector(".alien");
const playerDiv = document.querySelector(".player");

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
        // const attackEffect = Math.max(this.fighter1.firePower - this.fighter2.accuracy, 0);
        // this.fighter2.accuracy -= attackEffect;
        updateDataBind(); 

    }
}
class Fighter {
    constructor(name,health,attackPower,defensePower) {
        this.name = name;
        this.hull = health;
        this.firePower = attackPower;
        this.accuracy = defensePower;
            }
        attack(target ,weapon) {
            this.weapon = weapon;
            this.target = target;
            const attackEffect = this.firePower ;
            console.log(`Attack with ` + weapon);
            console.log(`Attack Effect  ` + attackEffect);
            console.log(`${this.name} attacks ${target.name}, affected with ${attackEffect} `);
            let random = Math.random();
            console.log(`Random vs Accuracy  ` + random + ' - ' + this.accuracy);
            
            if (random < this.accuracy) {
                    console.log('You have been hit! ' + attackEffect);
                    target.hull -= attackEffect;
            
            }
            else
            {
                console.log('You have been missed the!' + target.name);
            }
            return target;
            } 
        defend(){
            console.log(`Defend with `);
        }        
            
    
}

function updateDataBind(){
    console.log('Update data bind' );
    alienDiv.innerHTML = `
    <div>
    <h3>${alienFighter.name} </h3>
    <hr />
    <div>Health: ${alienFighter.hull} </div>
    <div>Attack Power: ${alienFighter.firePower} </div>
    <div> Defense Power: ${alienFighter.accuracy} </div>
</div>
    `;

playerDiv.innerHTML = `
<div>    
<h3>${captainFighter.name} </h3>
<hr />
    <div> Health: ${captainFighter.hull} </div>
    <div> Attack Power: ${captainFighter.firePower} </div>
    <div> Defense Power: ${captainFighter.accuracy} </div>
</div>
`;
}

let captainFighter = new Fighter('Captain Mohamed',20,5,0.2);
let alienFighter = new Fighter('Alien Z1',15,4,0.1);

let battle = new Battle(captainFighter,alienFighter);
battle.startBattle();
battle.fight();

function attack()
{
    let txtgame = document.querySelector('.txtGame');
    txtgame.textContent += 'Attack\n ';
    
    captainFighter.attack(alienFighter,'Laser');
    updateDataBind();
}

function defend(){
    let txtgame = document.querySelector('.txtGame');
    txtgame.textContent += 'Defend\n ';
    
    alienFighter.attack(captainFighter,'Laser');
    // captainFighter.attack(alienFighter,'Laser');
    updateDataBind();
}