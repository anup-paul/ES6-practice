class Student{
    constructor(Sname, sid)
    {
        this.name = Sname;
        this.id = sid;
        this.school = 'PPIMSC';
    }

}

const student1 = new Student('Anup',8324);
const student2 = new Student('Paul',1845);
const student3 = new Student('Kabir',1992);
console.log(student1, student2);
console.log(student3.name, student3.school);