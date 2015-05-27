var PhysicsController = function() {
    var mPlayerRef = null;
    var mPlatformsRef = null;
    var mStarsRef = null;
    var mListeners = [];
        
    this.init = function(spriteReferences) {                
        enableWorldPhysics(spriteReferences.world);
        enablePlayerPhysics(spriteReferences.player);
        enableStarsPhysics(spriteReferences.stars);
    };
    
    this.update = function() {
        phaser.physics.arcade.collide(mPlayerRef, mPlatformsRef);  
        phaser.physics.arcade.collide(mStarsRef, mPlatformsRef);
        phaser.physics.arcade.overlap(mPlayerRef, mStarsRef, onPlayerCollideWithStar, null, this);
        
        mPlayerRef.body.velocity.x = 0;
    };
    
    this.registerListeners = function(listener) {
        mListeners.push(listener);  
    };
    
    this.onPressLeft = function() {        
        mPlayerRef.body.velocity.x = -150;
    };
    
    this.onPressRight = function() {
        mPlayerRef.body.velocity.x = 150;
    };
    
    this.onPressUp = function() {
        if(mPlayerRef.body.touching.down) {
            mPlayerRef.body.velocity.y = -350;
        }
    };
    
    // Private    
    var enableWorldPhysics = function(worldSpriteReferences) {                
        mPlatformsRef = worldSpriteReferences.platforms;
        phaser.physics.arcade.enable(mPlatformsRef);
        worldSpriteReferences.ground.body.immovable = true;
        worldSpriteReferences.ledges.forEach(function(ledge) {
            ledge.body.immovable = true;
        });        
    };
    
    var enablePlayerPhysics = function(playerReference) {
        mPlayerRef = playerReference;
        phaser.physics.arcade.enable(mPlayerRef);
        mPlayerRef.body.bounce.y = 0.2;
        mPlayerRef.body.gravity.y = 300;
        mPlayerRef.body.collideWorldBounds = true;
    };
    
    var enableStarsPhysics = function(starReference) {
        mStarsRef = starReference;
        phaser.physics.arcade.enable(mStarsRef);
        
        mStarsRef.children.forEach(function(star) {
            star.body.gravity.y = 300;
            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        });
    };
    
    var onPlayerCollideWithStar = function(player, star) {
        star.kill();
        
        mListeners.forEach(function(listener) {
            listener.onPlayerCollideWithStar();
        });
    };
    
    // Constructor
    (function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    })();
};