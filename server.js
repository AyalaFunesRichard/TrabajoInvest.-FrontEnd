const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(_dirname + '/dist/tesina-project'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + 'dist/tesina-project/index.html'));
});
app.listen(process.env.PORT || 3000);
