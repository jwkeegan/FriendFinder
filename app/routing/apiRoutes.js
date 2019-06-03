// Include path package in the route dependencies
var path = require("path");
var friendsData = require("../data/friends");

// Export these routing options
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(path.join(__dirname, "../data/friends.js"));
    });

    app.post("/api/friends", function(req, res) {
        var scores = req.body.scores;
        var bestMatch;
        var lowestScore = 100;

        for (var i = 0; i < friendsData.length; i++) {
            var curTotal = 0;
            for (var j = 0; j < scores.length; j++) {
                curTotal += Math.abs(scores[j] - friendsData[i].scores[j]);
            }
            if (curTotal < lowestScore) {
                bestMatch = friendsData[i];
            }
        }

        friendsData.push(req.body);

        res.send(bestMatch);

    });
}