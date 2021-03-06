const port = 3098
const spdy = require('spdy');
const http = require('http');
const express = require('express')
const path = require('path')
const fs = require('fs')
const dbBuildMap = require('./models');
const autoRestful = require('./routes/autoRoute');
//const Restful = require('new-sequelize-restful');

const app = express()
app.server = http.createServer(app);

app.use('/images', express.static(path.join(__dirname, 'images')))

const db=dbBuildMap.dbBuild;
const sequelize= dbBuildMap.sequelize;
// keep server database
app.set('db', db);
// auto Restful
app.use(require('body-parser').json({
    type: 'application/*',
}));
app.all(/\/api\//, (new autoRestful(sequelize)).route());


/*app.get('*', (req, res) => {
  res
    .status(200)
    .json({
      message: 'ok'
    })
})*/
const options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
}
//console.log(options)

app.server.listen(process.env.PORT || port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});

/*spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })*/
