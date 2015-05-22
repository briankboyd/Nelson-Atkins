//returns the images a global setting that get's set from the index route
//if the index route hasn't been called then the imageJSON variable will not be populated
//hackish but gets the json into the client so I can work with backbone
exports.images = function(req, res) {
    res.send(res.app.settings.imageJSON);
};