let StudentTable =`CREATE TABLE if not exists Student(
   student_id int auto_increment,
   student_full_name text not null,
   student_age int not null,
   student_grade varchar(255) not null,
   student_email varchar(255) not null,
   student_address varchar(255) not null,
   PRIMARY KEY (student_id)
)`

let teacherTable = `CREATE TABLE if not exists Teacher(
    Teacher_id int auto_increment,
    Teacher_full_name text not null,
    Teacher_age int not null,
    Teacher_email varchar(255) not null,
    Teacher_salary double not null,
    Teacher_address varchar(255) not null,
    PRIMARY KEY (Teacher_id)
 )`


 export default {StudentTable,teacherTable}
