const alienDiv = document.querySelector(".alien");
const playerDiv = document.querySelector(".player");
const roundDiv = document.querySelector(".round");
const decimalPlaces = 1;
class Battle{
    constructor(
        fighter1, fighter2){
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
    newRound(){
        this.round +=1;
    }

    get getNewFighterPower(){
            let newFighter = new Fighter('Alien Z1-' + this.round,Fighter.getRandomValue(3,6),
            Fighter.getRandomValue(2,4)
            ,Fighter.getRandomValue(0.6,0.8));      
        return newFighter;
    }   
}

class Fighter {
    constructor(name, health = -1, attackPower = -1, defensePower = -1) {
        if(health === -1 )
            {health = this.getRandomValue(3,6);}
        if(attackPower === -1)
            {attackPower  = this.getRandomValue(2,4); }
        if(defensePower === -1)
            {defensePower = this.getRandomValue(0.6,0.8);}
        this.name = name;
        this.hull = health;
        this.defaultHull = health;  
        this.firePower = attackPower;
        this.accuracy = defensePower;
            }
        attack(target ,weapon) {
            this.weapon = weapon;
            this.target = target;
            const attackEffect = this.firePower ;
            messageLog(`Attack with ` + weapon);
            messageLog(`Attack Effect  ` + attackEffect);
            messageLog(`${this.name}  attacks  ${target.name},  affected with  ${attackEffect} `);
            
            let random = Math.random().toFixed(decimalPlaces);
            messageLog(`Random vs Accuracy  ` + random + ' - ' + this.accuracy);
            
            if (random < this.accuracy) {
                    messageLog('You have been hit! ' + attackEffect);
                    target.hull -= attackEffect.toFixed(decimalPlaces);
                    if(target.hull < 0)
                    {target.hull = 0;}
                    target.hull = target.hull.toFixed(decimalPlaces);
                    // updateDataBindings();
            }
            else
            {
                messageLog('You have been missed the! ' + target.name);
            }

            return target;
            } 

             getRandomValue(min,max) {

                return  (Math.random() * (max - min) + min).toFixed(decimalPlaces);
                
            }
        
             
            
    
}

function updateDataBind(){
    console.log('Update data bind' );
    messageLog('Alien Hull => ' + alienFighter.hull);
    roundDiv.innerHTML = `<div><div>R${battle.round}</div></div>`;
    alienDiv.innerHTML = `
    <div>
    <h3>${alienFighter.name} </h3>
    <hr />
    <div> Health: ${alienFighter.hull} <progress 
    max="${ alienFighter.defaultHull}" 
    value="${alienFighter.hull}" style="width: 100%;"></progress> </div>
    <div>Attack Power: ${alienFighter.firePower} --  Defense Power: ${alienFighter.accuracy}</div>
    <div>  </div>
</div>
    `;

playerDiv.innerHTML = `
<div>    
<h3>${captainFighter.name} </h3>
<hr />
     <div>
            Health: ${captainFighter.hull} <progress 
                max="${ captainFighter.defaultHull}"  
                value="${captainFighter.hull}" style="width: 100%;"></progress>
        </div>
    <div> Attack Power: ${captainFighter.firePower} -- Defense Power: ${captainFighter.accuracy}  </div>
    <div> </div>
</div>
`;

if(alienFighter.hull <= 0)
{
    console.log("*******END*********");
    let newRound =  confirm("You Win, would you like to play another round? \n Press cancel for retreat?");
    if(!newRound)
    {
        alert("Thank You For playing Space Battle! ");
        
    }
    else
    {
        battle.newRound();
        alienFighter = battle.getNewFighterPower;
        updateDataBind();
    }
}
}

let alienFighter = {};
let captainFighter = {};
let battle = {};
function newGame()
{
    messageLog('New Game....',true)
    captainFighter = new Fighter('Captain Mohamed',20,5,0.7);
    alienFighter = new Fighter('Alien Z1');
    battle = new Battle(captainFighter,alienFighter);
    battle.startBattle();
    battle.fight();

}
function attack()
{
    messageLog("******************************************");
    messageLog('Attack\n ');
    
    captainFighter.attack(alienFighter,' Laser ');
    updateDataBind();
}

function messageLog(message, clear = false)
{
     
    let txtgame = document.querySelector('.txtGame');
    if(clear) 
        txtgame.textContent = message;
    else    
        txtgame.textContent += ' \n ' + message;
    txtgame.scrollTop = txtgame.scrollHeight;
}

function defend(){
    
    messageLog("******************************************");
    messageLog('Defend\n ');
    
    alienFighter.attack(captainFighter,' Laser ');
    updateDataBind();
}