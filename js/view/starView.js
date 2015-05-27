var StarView = function() {
    var mStarGroup = null;
    var mStars = [];
    
    this.getSpritesReferences = function() {
        return mStarGroup;  
    };
    
    var createStars = function() {
        for (var i = 0; i < 12; i++) {
            mStars.push(mStarGroup.create(i * 70, 0, 'star'));
        }  
    };
    
    // Constructor
    (function() {
        mStarGroup = phaser.add.group();
        createStars();
    })();
};