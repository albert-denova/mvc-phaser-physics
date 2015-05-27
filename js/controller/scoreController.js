var ScoreController = function() {
    var mView = null;
    var mScore = 0;
    
    this.onPlayerCollideWithStar = function() {
        mScore += 10;  
        mView.updateScore(mScore);
    };
        
    (function() {
        mView = new ScoreView();    
        mView.updateScore(mScore);
    })();
};