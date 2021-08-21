"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _schema = require("@graphql-tools/schema");

var _resolvers = require("./resolvers");

var typeDefs = "\n    type Query {\n        hello: String\n        greet(name: String!): String\n        tasks: [Task]\n        personas: [Persona]\n        personaId(id : Int): [Persona]\n    }\n\n    type Mutation {\n        createTask(input: TaskInput): Task\n        createPersona(input: PersonaInput): Persona\n        updatePersona(id: Int, input: PersonaInput): Persona\n        deletePersona(id: Int): String\n    }\n\n    type Persona {\n        id: Int\n        nombre: String!\n        segundo_nombre: String          \n        apellido_paterno: String\n        apellido_materno: String\n        fecha_nacimiento: String\n        email: String\n        telefono: String\n    }\n\n    input PersonaInput {\n        nombre: String!\n        segundo_nombre: String          \n        apellido_paterno: String!\n        apellido_materno: String!\n        fecha_nacimiento: String!\n        email: String!\n        telefono: String!\n    }\n\n    type Task {\n        _id: ID\n        title: String!\n        number: Int\n    }\n    \n    input TaskInput {\n        title: String!\n        number: Int\n    }\n\n";

var _default = (0, _schema.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});

exports["default"] = _default;
//# sourceMappingURL=schema.js.map