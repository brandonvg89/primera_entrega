const { welcome_course, argv } = require('./setCourse')

console.log(argv)
if (argv._[0] == 'course') {
    console.log(welcome_course)
} else {
    console.log("Course wasn't added")
}