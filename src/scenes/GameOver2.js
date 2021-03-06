class GameOver2 extends Phaser.Scene {
    constructor() {
        super("gameOver2");
    }

    preload() {
        this.load.spritesheet("BG", "./assets/Background.png", {frameWidth: 1600, frameHeight: 800, startFrame: 0, endFrame: 7});
    }

    create () {

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Impact',
            fontSize: '40px',
            color: '#FF0000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.background = this.add.sprite(0,0, "BG").setOrigin(0);

        this.add.text(game.config.width/2, game.config.height/2, 'YOU LOST --- GAME OVER', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to restart or (M) for Menu', menuConfig).setOrigin(0.5);
        
        // keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        
        console.log("copy: ", StartingDeckCopy);

    }

    update () {
        // reset cards
        // reset everything
    
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            // reset everything
            resetDeck(StartingDeckCopy);
            cardsMade = [];
            playerHealth = 0;
            playerStrength = 0;
            yourTurn = true;
            enemyTurn = false;
            game.config.cardChoice = null;
            game.config.currentLevel = 1;
            game.config.cardChoice2 = null;
            summonedBeast = false;
            this.scene.start("playGame");
        }
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            // reset everything
            resetDeck(StartingDeckCopy);
            cardsMade = [];
            playerHealth = 0;
            playerStrength = 0;
            yourTurn = true;
            enemyTurn = false;
            game.config.cardChoice = null;
            game.config.currentLevel = 1;
            game.config.cardChoice2 = null;
            summonedBeast = false;
            this.scene.start("menuScene");
        }
    }
}