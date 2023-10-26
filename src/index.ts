class School {
  directions: Array<unknown> = [];

  addDirection(direction:unknown):void {
    this.directions.push(direction);
  }
}

class Direction {
  levels : Array<number|string> = [];
  _name:string;

  constructor(name:string) {
    this._name = name;
  }

  get name():string {
    return this._name;
  }

  addLevel(level:number|string):void {
    this.levels.push(level);
  }
}

class Level {
  groups : Array<unknown> = [];
  name:string;
  _name:string;
  _program:string;

  constructor(name:string, program:string) {
    this.name = name;
    this._program = program;
  }

  get getName():string {
    return this._name;
  }

  get program():string {
    return this._program;
  }

  addGroup(group:unknown):void {
    this.groups.push(group);
  }
}

class Group {
  _students : Array <Student> = [];
  levelName:string;
  directionName:string;

  constructor(directionName:string, levelName:string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  get students():Array<Student> {
    return this._students;
  }

  addStudent(student:Student):void {
    this._students.push(student);
  }

  showPerformance():Array<Student> {
    const sortedStudents = this.students.sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades : {[subject: string]: number} = {};
  attendance : Array<boolean> = [];
  firstName:string;
  lastName:string;
  birthYear:number;

  constructor(firstName:string,lastName:string,birthYear:number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName():string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value:string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age():number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject:string, grade:number) {
    this.grades[subject] = grade;
  }

  markAttendance(present:boolean):void {
    this.attendance.push(present);
  }

  getPerformanceRating():number {
    const gradeValues = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

const newStudent = new Student('Andrii','Dobronos',2000)
console.log(newStudent)