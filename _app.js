let isGameOver = false;
let isWin = false;

class Fighter {
    constructor(name, type){
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.defensePower = defensePower;
        attack = (weapon) => {
            console.log(`Attack with` + weapon);
        }
        defend = () => {
            console.log(`Defend with`);
        }
    }
}
class SpaceShip{
    constructor(name,hull,firePower,accuracy,commander){
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
        this.commander = commander;         //Alien / Captain
       
    }

    attack = (weapon) => {
        console.log(`Fire on` + weapon);
    }
    defend = () => {
        console.log(`Defend on`);
    }
    attackBack = (weapon) => {
        console.log(`Fire back` + weapon);
    }
    retreat = () => {
    
    }
    
    //
    #randomAccuracy(min,max) {

        return Math.random() * (max - min) + min;

    }
}
class AlienFighter extends Fighter{
    constructor(name,health,attackPower,defensePower){
        super(...arguments);
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.defensePower = defensePower;
    }
}

class CaptainFighter extends Fighter{
    constructor(name,health,attackPower,defensePower){
        super(...arguments);
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.defensePower = defensePower;
    }
}

class AlienSpaceShip extends SpaceShip
{
    constructor(name,health,attackPower){
        super(...arguments);
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
        this.commander = commander;
    }
}
class Battel{
    constructor(fighter1, fighter2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.round = 1;
    }
}

class Weapon{
    constructor(name, damage){
        this.name = name;
        this.damage = damage;
    }
}