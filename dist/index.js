"use strict";

var _express = _interopRequireDefault(require("express"));

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var graphqlHTTP = require('express-graphql').graphqlHTTP;

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.json({
    message: 'Hello world'
  });
});
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: _schema["default"]
}));
app.listen(3000, function () {
  return console.log('server on port 3000');
});
//# sourceMappingURL=index.js.map