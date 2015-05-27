var ScoreView = function() {
    var mText = null;
    
    this.updateScore = function(currentScore) {
        mText.text = 'Score: ' + currentScore;
    };
    
    // Constructor
    (function() {
        mText = phaser.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    })();
};