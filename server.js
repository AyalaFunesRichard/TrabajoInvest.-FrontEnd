const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));
// app.use(express.static(__dirname + '/dist/tesina-project'));
app.get('/*', function (req, res) {
    // res.sendFile(path.join(__dirname + 'dist/tesina-project/index.html'));
    res.sendFile(path.join(__dirname + 'dist/index.html'));
});
app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});