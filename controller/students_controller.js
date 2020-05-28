const students = ['aubrey', 'steph', 'sumaya']


const getAllStudents =(req, res) => {
    res.send(students)
}

const getStudentByIndex = (req, res) => {
    const {index} = req.params
    const student = students[index];
    if(!student) {
        res.status(404);
        return res.send("No student found");
    }
    res.send(student);
}

module.exports = {getAllStudents, getStudentByIndex}