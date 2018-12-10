module.exports = function (app) {
        
    /**
     * render game screen if requested
     */
    app.get('/game', function (req, res) {
        res.render('gameScreen', {});
    });
    
    /**
     * render tutorial screen if requested
     */
    app.get('/tutorial', function (req, res) {
        res.render('tutorialScreen', {});
    });
    
    /**
     * render splash screen on everything  
     */
    app.get('/*', function (req, res) {
        res.render('splashScreen', {});
    });
}