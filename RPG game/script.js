// Made By Timothy Davis

const healthText = document.getElementById("healthText");
const goldText = document.getElementById("goldText");
const xpText = document.getElementById("xpText");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const text = document.getElementById("text");
const monsterStats = document.getElementById("monsterStats");
const monsterName = document.getElementById("monsterName");
const monsterHealthText = document.getElementById("monsterHealth");

let health = 100;
let gold = 50;
let XP = 1;
let currentWeapon = "fists";
let monster = ""
let monsterHealth = ""
let damage = ""
let cost = 25
let weakened = false;
let onFire = false;

button1.onclick = goStore;
button2.onclick = goForest;
button3.onclick = fightBoss;
button4.onclick = checkWeapon;

function goStore(){
    button1.innerText = "Buy Health (10 Gold)";
    button2.innerText = `Buy weapon (${cost} Gold)`;
    button3.innerText = "Go to Town";
    button4.innerText = "Check Weapon"
    text.innerText = "You Enter the Store. There is an odd looking merchant there.";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    button4.onclick = checkWeapon;
   }

   function buyHealth(){
        if (gold - 10 < 0) {
            text.innerText = `"You don't have enough gold for that!" The merchant says with a raspy voice.`;
        } else {
        text.innerText = "The merchant injects you with something. You feel healthier.";
        health += 10;
        healthText.innerText = health;
        gold -= 10;
        goldText.innerText = gold; 
        }
    }

    function buyWeapon(){
        if (currentWeapon === "fists" && gold - 20 >= 0){
            text.innerText = "The Merchant Hands you a pointy stick.";
            currentWeapon = "stick";
            gold -= 20;
            goldText.innerText = gold;
            cost = 50;
            button2.innerText = "Buy weapon (50 Gold)"
        } else if (currentWeapon === "stick" && gold - 50 >= 0){
            text.innerText = "The Merchant Hands you a Rusty blade.";
            currentWeapon = "Rusty blade";
            gold -= 50;
            goldText.innerText = gold;
            cost = 100;
            button2.innerText = "Buy weapon (100 Gold)"
        } else if (currentWeapon === "Rusty blade" && gold - 100 >= 0){
            text.innerText = "The Mechant Hands you a Spear.";
            currentWeapon = "Spear";
            gold -= 100;
            goldText.innerText = gold;
            cost = 150;
            button2.innerText = "Buy weapon (150 gold)" 
        } else if (currentWeapon === "Spear" && gold - 150 >= 0){
            text.innerText = "The Mechant Hands you a Sharp Sword.";
            currentWeapon = "Sword";
            gold -= 100;
            goldText.innerText = gold; 
            button2.innerHTML = "Sold out. ✖"
        } else {
            text.innerText = `"This isn't a charity! Get some more gold!" Says the Merchant.`;
        }
    }

    function checkWeapon(){
        text.innerText = `You currently have a ${currentWeapon}.`; 
    }

    function goTown(){
        text.innerText = "You reutrn to town square."
        button1.innerText = "Go to Store";
        button2.innerText = "Go to Forest";
        button3.innerText = "Fight Boss";
        button4.innerText = "Check Weapon"
        button1.onclick = goStore;
        button2.onclick = goForest;
        button3.onclick = fightBoss
        button4.onclick = checkWeapon;
        monsterStats.style.display = "none"
        button4.style.display = "inline-block";
    }

    function goForest(){
        text.innerText = "You Enter the forest. You hear some monsters nearby.";
        button1.innerText = "Fight Slime";
        button2.innerText = "Fight Zombie";
        button3.innerText = "Fight Werewolf";
        button4.innerText = "Go to Town"; 
        button1.onclick = fightSlime;
        button2.onclick = fightZombie;
        button3.onclick = fightWereWolf;
        button4.onclick = goTown;
    }

    function fightSlime(){
        monster = "slime";
        monsterStats.style.display = "block";
        monsterName.innerText = "Slime";
        monsterHealth = 20; 
        monsterHealthText.innerText = monsterHealth
        text.innerText = "You are fighting A Slime. It looks like target practice.";
        button1.innerText = "Attack";
        button2.innerText = "dodge";
        button3.innerText = "Go to Town";
        button4.style.display = "none";
        button1.onclick = attack;
        button2.onclick = dodge;
        button3.onclick = goTown;
        
    }

    function fightZombie(){
        monster = "zombie";
        monsterStats.style.display = "block";
        monsterName.innerText = "Zombie";
        monsterHealth = 50; 
        monsterHealthText.innerText = monsterHealth
        text.innerText = "You are fighting A Zombie. It looks hungry.";
        button1.innerText = "Attack";
        button2.innerText = "dodge";
        button3.innerText = "Go to Town";
        button4.style.display = "none";
        button1.onclick = attack;
        button2.onclick = dodge;
        button3.onclick = goTown; 
    }

    function fightWereWolf(){
        monster = "werewolf";
        monsterStats.style.display = "block";
        monsterName.innerText = "Werewolf";
        monsterHealth = 100; 
        monsterHealthText.innerText = monsterHealth
        text.innerText = "You are fighting A Werewolf. It has rabies. Yikes.";
        button1.innerText = "Attack";
        button2.innerText = "dodge";
        button3.innerText = "Go to Town";
        button4.style.display = "none";
        button1.onclick = attack;
        button2.onclick = dodge;
        button3.onclick = goTown; 
    }

    function fightBoss(){
        monster = "wizard";
        monsterStats.style.display = "block";
        monsterName.innerText = "Wizard";
        monsterHealth = 250; 
        monsterHealthText.innerText = monsterHealth
        text.innerText = `You are fighting the Boss. It is a Wizard. "This Is the Guy everyone's been talking about? This will be a cakewalk." Says the wizard.`
        button1.innerText = "Attack";
        button2.innerText = "dodge";
        button3.innerText = "Go to Town";
        button4.style.display = "none";
        button1.onclick = attack;
        button2.onclick = dodge;
        button3.onclick = goTown; 
    }

    function attack(){
        globalRandomNumber = Math.random();
        if (monster === "slime"){
             randomNumber = Math.round(Math.random() * 10);
            if (randomNumber >= 0  && randomNumber <= 5){
                text.innerText = `You attacked the slime with your ${currentWeapon}. The slime bit you. It did ${randomNumber} damage.`
                health -= randomNumber 
                healthText.innerText = health;
            } else if (randomNumber >= 5 && randomNumber <= 10){
                text.innerText = `You attacked the slime with your ${currentWeapon}. The slime spit at you. it did ${randomNumber} damage.`
                health -= randomNumber;
                healthText.innerText = health;
            }  if(XP > 10 && globalRandomNumber < 0.2){
                    text.innerText = `You Miss. The slime jumped on you. It did ${randomNumber} damage.`
                    monsterHealth += damage
                    monsterHealthText.innerText = monsterHealth
            }
                }
            
            
        if(monster === "zombie"){
            randomNumber = Math.round(Math.random() * (20 - 10)) + 10;
            if (randomNumber >= 10 && randomNumber <= 15){
                text.innerText = `You attacked the Zombie with your ${currentWeapon}. The Zombie bit You. It did ${randomNumber} damage.`
                health -= randomNumber;
                healthText.innerText = health;
            } else if (randomNumber >= 15 && randomNumber <= 20){
                text.innerText = `You attacked the Zombie with your ${currentWeapon}. The Zombie scratched You. It did ${randomNumber} damage.`
                health -= randomNumber;
                healthText.innerText = health;    
            }
            if(globalRandomNumber < 0.2){
                text.innerText = `You Miss. The Zombie punched you. It did ${randomNumber} damage.`
                monsterHealth += damage
                monsterHealthText.innerText = monsterHealth
        }
        }

        if(monster === "werewolf"){
            randomNumber = Math.round(Math.random() * (30 - 20)) + 20;
            if (randomNumber >= 20 && randomNumber <= 25){
                text.innerText = `You attacked the Werewolf with your ${currentWeapon}. The Werewolf bit You. It did ${randomNumber} damage.`
                health -= randomNumber;
                healthText.innerText = health;
            } else if (randomNumber >= 25 && randomNumber <= 30){
                text.innerText = `You attacked the Werewolf with your ${currentWeapon}. The Werewolf mauled You. It did ${randomNumber} damage.`
                health -= randomNumber;
                healthText.innerText = health;    
            }
            if(globalRandomNumber < 0.2){
                text.innerText = `You Miss. The Werewolf pounced on you. It did ${randomNumber} damage.`
                monsterHealth += damage
                monsterHealthText.innerText = monsterHealth
        }
    }

    if (monster === "wizard"){
        superRandomNumber = Math.random();
        randomNumber = Math.round(Math.random() * (40 - 30)) + 30;
        if (randomNumber >= 30 && randomNumber <= 40){
            text.innerText = `You attacked the Wizard with your ${currentWeapon}. The Wizard hit you with a spell. It did ${randomNumber} damage.`
            health -= randomNumber;
            healthText.innerText = health;
          } 
         if (superRandomNumber >= 0 && superRandomNumber <= 1/3){
            weakened = true;
         } else if (superRandomNumber >= 1/3 && superRandomNumber <= 2/3){
            onFire = true;
         }
    }
        if (weakened === false){
        
            if (currentWeapon === "fists"){
            damage = 3 + Math.floor(Math.random() * XP) + 1;
            monsterHealth -= damage;
            monsterHealthText.innerText = monsterHealth;
            console.log(damage);
        } else if (currentWeapon === "stick"){
            damage = 5 + Math.floor(Math.random() * XP) + 1;
            monsterHealth -= damage;
            monsterHealthText.innerText = monsterHealth;
            console.log(damage);
        } else if (currentWeapon === "Rusty blade"){
            damage = 10 + Math.floor(Math.random() * XP) + 1; 
            monsterHealth -= damage;
            monsterHealthText.innerText = monsterHealth;
            console.log(damage);
        } else if (currentWeapon === "Spear"){
            damage = 15 + Math.floor(Math.random() * XP) + 1;
            monsterHealth -= damage;
            monsterHealthText.innerText = monsterHealth;
            console.log(damage);
        } else if (currentWeapon === "Sword"){
            damage = 20 + Math.floor(Math.random() * XP) + 1;
            monsterHealth -= damage;
            monsterHealthText.innerText = monsterHealth;
            console.log(damage);
        } 
    } 

        if (monsterHealth <= 0){
            monsterHealth = 0;
            monsterHealthText.innerText = monsterHealth;
            text.innerText = `You Win! You've Gained ${randomNumber + XP} Gold`
            gold += (randomNumber + XP);
            goldText.innerText = gold;
            button1.innerText = "Go to Town";
            button2.innerText = "Go to Town";
            button3.innerText = "Go to Town";
            button1.onclick = goTown;
            button2.onclick = goTown;
            button3.onclick = goTown;
            if (monster === "slime"){
                text.innerText += ` and 1 XP.`;
                XP += 1;
                xpText.innerText = XP;
            } else if (monster === "zombie"){
                text.innerText += ` and 3 XP.`;
                XP += 3;
                xpText.innerText = XP;
            } else if (monster === "werewolf"){
                text.innerText += ` and 5 XP.`;
                XP += 5;
                xpText.innerText = XP;
            }
        } 
        if (health <= 0){
            health = 0
            healthText.innerText = health;
            button1.innerText = "RETRY?";
            button2.innerText = "RETRY?";
            button3.innerText = "RETRY?";
            button1.onclick = restart;
            button2.onclick = restart;
            button3.onclick = restart;
            if (monster === "slime"){
                text.innerHTML = "Game over. Your skin melts away from the slime's acidic touch. &#x2620"
            } else if (monster === "zombie"){
                text.innerHTML = "Game over. Your skin rots away from the zombie's painful bite. &#x2620"
            } else if (monster === "werewolf"){
                text.innerHTML = "Game over. You now have rabies. &#x2620"
            }
    }  
    if (weakened === true){
        randomNumber = Math.random();
        damage = damage / 2;
        monsterHealth -= damage;
        monsterHealthText.innerText = monsterHealth;
        text.innerText += ` You feel weaker. `
        console.log(damage);
        weakened = false;
    }
 
}   
    function dodge(){
        let dodgeRandomNumber = Math.random(); 
        if (dodgeRandomNumber > 0.5){
            text.innerText = `You Dodged the ${monster}'s attack. You've regained ${randomNumber} Health.`
            health += randomNumber;
            healthText.innerText = health;
        } else {
            text.innerText = `You Failed To dodge the ${monster}'s attack. You took ${randomNumber} Damage.`
            health -= randomNumber;
            healthText.innerText = health;
            if (health <= 0){
                health = 0
                healthText.innerText = health;
                button1.innerText = "RETRY?";
                button2.innerText = "RETRY?";
                button3.innerText = "RETRY?";
                button1.onclick = restart;
                button2.onclick = restart;
                button3.onclick = restart;
                if (monster === "slime"){
                    text.innerHTML = "Game over. Your skin melts away from the slime's acidic touch. &#x2620"
                } else if (monster === "zombie"){
                    text.innerHTML = "Game over. Your skin rots away from the zombie's painful bite. &#x2620"
                } else if (monster === "werewolf"){
                    text.innerHTML = "Game over. You now have rabies. &#x2620"
                }
        }
        }
    }

    
   
    function restart(){
        health = 100;
        gold = 50;
        XP = 1;
        cost = 25;
        currentWeapon = "fists"
        healthText.innerText = health;
        goldText.innerText = gold;
        xpText.innerText = XP;
        goTown();
    }
 
// Made By Timothy Davis
