import { makeExecutableSchema } from '@graphql-tools/schema';
import {resolvers} from './resolvers'


const typeDefs = `
    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
        personas: [Persona]
        personaId(id : Int): [Persona]
    }

    type Mutation {
        createTask(input: TaskInput): Task
        createPersona(input: PersonaInput): Persona
        updatePersona(id: Int, input: PersonaInput): Persona
        deletePersona(id: Int): String
    }

    type Persona {
        id: Int
        nombre: String!
        segundo_nombre: String          
        apellido_paterno: String
        apellido_materno: String
        fecha_nacimiento: String
        email: String
        telefono: String
    }

    input PersonaInput {
        nombre: String!
        segundo_nombre: String          
        apellido_paterno: String!
        apellido_materno: String!
        fecha_nacimiento: String!
        email: String!
        telefono: String!
    }

    type Task {
        _id: ID
        title: String!
        number: Int
    }
    
    input TaskInput {
        title: String!
        number: Int
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})