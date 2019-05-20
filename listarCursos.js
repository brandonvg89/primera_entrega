const cursos = require('./cursos')

const delay = ms => new Promise(res => setTimeout(res, ms))

showCourse = async() => {
    for (curso of cursos.cursos) {
        console.log(curso)
        await delay(2000)
    }
}

showCourse()