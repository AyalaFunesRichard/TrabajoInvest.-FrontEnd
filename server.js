const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(_dirname + '/tesina-project'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + 'tesina-project/index.html'));
});
app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});