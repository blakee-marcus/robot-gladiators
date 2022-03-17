//generate random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? ");
    
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    //player choses to skip  
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if confirmed, leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //take money from player
                playerInfo.money = Math.max(0, playerInfo.money - 10);

                //return true if player wants to leave
                return true;
            }
        }
}

// fight function start
var fight = function(enemy) {
    while(playerInfo.health > 0 && enemy.health > 0) {
        
        //ask if they want to skip using fightorskip function
        if (fightOrSkip() ) {
            //if true leave fight
            break;
        }
    
    //Player attacks enemy
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);

        console.log (
            playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining."
        );

    
    //check enemy health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
        
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }


    //Enemy attacks player
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        
        console.log (
            enemy.name + " attacked " + playerInfo.name + "." + playerInfo.health + " now has " + playerInfo.health + " health remaining."
        );


    //check player health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;

        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
        }
    };
// fight function end

var startGame = function() {

    //restart playerstats
    playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        debugger;
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
        fight(pickedEnemyObj);

        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            
            if (storeConfirm) {
                shop();
            }
        }
    }
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }

  endGame();
};


var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lsot your robot in battle!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;


        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;

        case "LEAVE":
        case "leave":
                window.alert("Leaving the store.");
                break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};


var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}
//player variables
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
        
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
        
    }
};


//enemy variables
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14),
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14),
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14),
    },
    
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

startGame();