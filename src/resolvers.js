import { tasks } from "./sample";
import {conexion} from "./../connectmysql"

var personas = []

export const resolvers = {
    Query: {
        hello: ()=>{
            return 'Hello world with Graphql'
        },
        greet(root, {name}) {
            return 'hello '+name;
        },
        tasks(){
            console.log(tasks)
            return tasks;
        },
        personas(){
            conexion.query('SELECT * FROM users_test_felipe_ornelas', function (error, results, fields) {
            personas=[]
                if (error)
                    throw error;
                results.forEach(result => {
                    personas.push(Object(JSON.parse(JSON.stringify(result))));
                });
                console.log(personas, "rd")
            });
            return personas;
            
        },
        async personaId(root, {id}){
            
            conexion.query('SELECT * FROM users_test_felipe_ornelas WHERE id='+id+'', function (error, results, fields) {
                personas=[]
                if (error)
                    throw error;
                results.forEach(result => {
                    personas.push(Object(JSON.parse(JSON.stringify(result))));
                });
                console.log(id, "rd")
                const found = personas.find(element => element.id === id);
                console.log(found)
            });
            
            return personas
            
        }
    },
    Mutation: {
        createTask(_, {input}) {
            input._id = tasks.length;
            console.log(input);
            tasks.push(input);
            return input;
        },
        createPersona(_, {input}) {
            conexion.query('SELECT * FROM users_test_felipe_ornelas', function (error, results, fields) {
                if (error)
                    throw error;
                personas = JSON.stringify(results)
                console.log(personas, "rd")
                results.forEach(result => {
                    console.log(result);
                });
            });
            if(personas.length === undefined) {
                input.id = 0
            }else{
                input.id = personas.length;
            }
            console.log(input);
            conexion.query('INSERT INTO users_test_felipe_ornelas (id, nombre, segundo_nombre, apellido_paterno, apellido_materno, fecha_nacimiento, email, telefono) VALUES ("'+input.id+'", "'+input.nombre+'", "'+input.segundo_nombre+'", "'+input.apellido_paterno+'", "'+input.apellido_materno+'", "'+input.fecha_nacimiento+'", "'+input.email+'", "'+input.telefono+'")' , function (error, results, fields) {
                if (error)
                    throw error;
            
                
                return input;
                console.log(result);
                
            });
            return input;
        },
        updatePersona(_, {id, input}) {
            conexion.query('UPDATE users_test_felipe_ornelas SET nombre="'+input.nombre+'", segundo_nombre="'+input.segundo_nombre+'", apellido_paterno="'+input.apellido_paterno+'", apellido_materno="'+input.apellido_materno+'", fecha_nacimiento="'+input.fecha_nacimiento+'", email="'+input.email+'", telefono="'+input.email+'" WHERE id='+id, function (error, results, fields) {
                if (error)
                    throw error;
            });
            console.log(input);
            return input;
        },
        deletePersona(_, {id}) {
            conexion.query('DELETE FROM users_test_felipe_ornelas WHERE id='+id, function (error, results, fields) {
                if (error)
                    throw error;
            });
            return 'persona deleted';
        }
    } 

};