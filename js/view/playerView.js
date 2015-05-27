var PlayerView = function() {
    var mSprite = null;
    
    this.getPlayerSprite = function() {
        return mSprite;  
    };
    
    this.onPressLeft = function() {
        mSprite.animations.play('left');
    };
    
    this.onPressRight = function() {
        mSprite.animations.play('right');
    };
        
    this.onNoDirectionPressed = function() {
        mSprite.animations.stop();
        mSprite.frame = 4; 
    };
    
    // Constructor
    (function() {
        mSprite = phaser.add.sprite(32, phaser.world.height - 150, 'dude');    
        mSprite.animations.add('left', [0, 1, 2, 3], 10, true);
        mSprite.animations.add('right', [5, 6, 7, 8], 10, true);
    })();
};