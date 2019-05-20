const { cursos } = require('./cursos')

const opciones = {
    course_id: {
        alias: 'c',
        demand: true
    },
    name: {
        alias: 'n',
        demand: true
    },
    cc: {
        alias: 'd',
        demand: true
    }
}

const argv = require('yargs')
    .command('course', 'Add course', opciones)
    .argv

let course = cursos.find(curso => curso.id == argv.c)

console.log('Bienvenido al curso ' + course.nombre + ' señor(a): ' + argv.n + ' con cc ' + argv.cc)