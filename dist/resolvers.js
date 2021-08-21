"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _sample = require("./sample");

var _connectmysql = require("./../connectmysql");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _personas = [];
var resolvers = {
  Query: {
    hello: function hello() {
      return 'Hello world with Graphql';
    },
    greet: function greet(root, _ref) {
      var name = _ref.name;
      return 'hello ' + name;
    },
    tasks: function tasks() {
      console.log(_sample.tasks);
      return _sample.tasks;
    },
    personas: function personas() {
      _connectmysql.conexion.query('SELECT * FROM users_test_felipe_ornelas', function (error, results, fields) {
        _personas = [];
        if (error) throw error;
        results.forEach(function (result) {
          _personas.push(Object(JSON.parse(JSON.stringify(result))));
        });
        console.log(_personas, "rd");
      });

      return _personas;
    },
    personaId: function personaId(root, _ref2) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref2.id;

                _connectmysql.conexion.query('SELECT * FROM users_test_felipe_ornelas WHERE id=' + id + '', function (error, results, fields) {
                  _personas = [];
                  if (error) throw error;
                  results.forEach(function (result) {
                    _personas.push(Object(JSON.parse(JSON.stringify(result))));
                  });
                  console.log(id, "rd");

                  var found = _personas.find(function (element) {
                    return element.id === id;
                  });

                  console.log(found);
                });

                return _context.abrupt("return", _personas);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  Mutation: {
    createTask: function createTask(_, _ref3) {
      var input = _ref3.input;
      input._id = _sample.tasks.length;
      console.log(input);

      _sample.tasks.push(input);

      return input;
    },
    createPersona: function createPersona(_, _ref4) {
      var input = _ref4.input;

      _connectmysql.conexion.query('SELECT * FROM users_test_felipe_ornelas', function (error, results, fields) {
        if (error) throw error;
        _personas = JSON.stringify(results);
        console.log(_personas, "rd");
        results.forEach(function (result) {
          console.log(result);
        });
      });

      if (_personas.length === undefined) {
        input.id = 0;
      } else {
        input.id = _personas.length;
      }

      console.log(input);

      _connectmysql.conexion.query('INSERT INTO users_test_felipe_ornelas (id, nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, email, telefono) VALUES ("' + input.id + '", "' + input.nombre + '", "' + input.segundo_nombre + '", "' + input.apellido_paterno + '", "' + input.apellido_materno + '", "' + input.fecha_nacimiento + '", "' + input.email + '", "' + input.telefono + '")', function (error, results, fields) {
        if (error) throw error;
        return input;
        console.log(result);
      });

      return input;
    },
    updatePersona: function updatePersona(_, _ref5) {
      var id = _ref5.id,
          input = _ref5.input;

      _connectmysql.conexion.query('UPDATE users_test_felipe_ornelas SET nombre="' + input.nombre + '", segundo_nombre="' + input.segundo_nombre + '", apellido_paterno="' + input.apellido_paterno + '", apellido_materno="' + input.apellido_materno + '", fecha_nacimiento="' + input.fecha_nacimiento + '", email="' + input.email + '", telefono="' + input.email + '" WHERE id=' + id, function (error, results, fields) {
        if (error) throw error;
      });

      console.log(input);
      return input;
    },
    deletePersona: function deletePersona(_, _ref6) {
      var id = _ref6.id;

      _connectmysql.conexion.query('DELETE FROM users_test_felipe_ornelas WHERE id=' + id, function (error, results, fields) {
        if (error) throw error;
      });

      return 'persona deleted';
    }
  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map