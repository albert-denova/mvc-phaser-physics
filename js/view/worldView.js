var WorldView = function() {
    var mPlatforms = null;
    var mGround = null;
    var mLedges = [];
    
    this.getSpritesReferences = function() {
        return {
            platforms: mPlatforms,
            ground: mGround,
            ledges: mLedges
        };
    };
    
    var addBackground = function() {
        phaser.add.sprite(0, 0, 'sky');
    };
    
    var createGround = function() {
        mGround = mPlatforms.create(0, phaser.world.height - 64, 'ground');
        mGround.scale.setTo(2,2);
    };
    
    var createLedges = function() {
        mLedges.push(mPlatforms.create(400, 400, 'ground'));
        mLedges.push(mPlatforms.create(-150, 250, 'ground'));
    };
    
    // Constructor
    (function() {        
        addBackground();  
        
        // Create ground group
        mPlatforms = phaser.add.group();
        createGround();
        createLedges();
    })();
};