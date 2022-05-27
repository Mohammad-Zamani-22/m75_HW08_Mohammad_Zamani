localStorage.setItem("student", JSON.stringify({}));
localStorage.setItem("teacher", JSON.stringify({}));
localStorage.setItem("manager", JSON.stringify({}));
let dataBase = { student: {}, teacher: {}, manager: {} };
let studentID = 0;
let teacherID = 0;
let managerID = 0;
let user = {
  add: function (information, type) {
    if (type === "student") {
      let students = JSON.parse(localStorage.getItem("student"));
      students[studentID] = information;
      studentID++;
      return localStorage.setItem("student", JSON.stringify(students));
    }
    if (type === "teacher") {
      let teachers = JSON.parse(localStorage.getItem("teacher"));
      teachers[teacherID] = information;
      teacherID++;
      return localStorage.setItem("teacher", JSON.stringify(teachers));
    }
    if (type === "manager") {
      let managers = JSON.parse(localStorage.getItem("manager"));
      managers[managerID] = information;
      managerID++;
      return localStorage.setItem("manager", JSON.stringify(managers));
    }
  },
  remove: function (id, type) {
    if (type === "student") {
      let students = JSON.parse(localStorage.getItem("student"));
      for (let key in students) {
        if (key == id) {
          delete students[key];
        }
      }
      return localStorage.setItem("student", JSON.stringify(students));
    }
    if (type === "teacher") {
      let teachers = JSON.parse(localStorage.getItem("teacher"));
      for (let key in teachers) {
        if (key == id) {
          delete teachers[key];
        }
      }
      return localStorage.setItem("teacher", JSON.stringify(teachers));
    }
    if (type === "manager") {
      let managers = JSON.parse(localStorage.getItem("manager"));
      for (let key in managers) {
        if (key == id) {
          delete managers[key];
        }
      }
      return localStorage.setItem("manager", JSON.stringify(managers));
    }
  },
  find: function (information, type) {
    if (type === "student") {
      let students = JSON.parse(localStorage.getItem("student"));
      for (let key in students) {
        if (
          students[key]["name"] === information.name &&
          students[key]["family"] === information.family &&
          students[key]["nationalID"] === information.nationalID
        ) {
          return students[key];
        }
      }
      return "not found";
    }
    if (type === "teacher") {
      let teachers = JSON.parse(localStorage.getItem("teacher"));
      for (let key in teachers) {
        if (
          teachers[key]["name"] === information.name &&
          teachers[key]["family"] === information.family &&
          teachers[key]["nationalID"] === information.nationalID
        ) {
          return teachers[key];
        }
      }
      return "not found";
    }
    if (type === "manager") {
      let managers = JSON.parse(localStorage.getItem("manager"));
      for (let key in managers) {
        if (
          managers[key]["name"] === information.name &&
          managers[key]["family"] === information.family &&
          managers[key]["nationalID"] === information.nationalID
        ) {
          return managers[key];
        }
      }
      return "not found";
    }
  },
  getInfo: function (id, type) {
    if (type === "student") {
      let students = JSON.parse(localStorage.getItem("student"));
      for (let key in students) {
        if (key == id) {
          return students[key];
        }
      }
    }
    if (type === "teacher") {
      let teachers = JSON.parse(localStorage.getItem("teacher"));
      for (let key in teachers) {
        if (key == id) {
          return teachers[key];
        }
      }
    }
    if (type === "manager") {
      let managers = JSON.parse(localStorage.getItem("manager"));
      for (let key in managers) {
        if (key == id) {
          return managers[key];
        }
      }
    }
  },
  update: function (type) {
    switch (type) {
      case "student":
        dataBase["student"] = JSON.parse(localStorage.getItem("student"));
        break;
      case "teacher":
        dataBase["teacher"] = JSON.parse(localStorage.getItem("teacher"));
        break;
      case "manager":
        dataBase["manager"] = JSON.parse(localStorage.getItem("manager"));
        break;
    }
    return dataBase;
  },
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function Student(
  name,
  family,
  birthday,
  address,
  nationalID,
  gender,
  grade,
  studyYear
) {
  this.name = name;
  this.family = family;
  this.birthday = birthday;
  this.address = address;
  this.nationalID = nationalID;
  this.gender = gender;
  this.grade = grade;
  this.studyYear = studyYear;
  Object.defineProperty(this, "fullName", {
    get fullName() {
      return `${this.name} ${this.family}`;
    },
  });
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}
let student1 = new Student(
  "ali",
  "ziae",
  new Date(1992, 6, 1),
  { city: "tehran", street: "azadi", alley: "azadi" },
  000000333,
  "male",
  "student",
  3
);
user.add(student1, "student");
user.update("student");
////////////////////////////////////////////////////////////////////////////////////////////////
function Teacher(
  name,
  family,
  birthday,
  address,
  nationalID,
  gender,
  phoneNumber,
  field,
  email,
  salary
) {
  this.name = name;
  this.family = family;
  this.birthday = birthday;
  this.address = address;
  this.nationalID = nationalID;
  this.gender = gender;
  this.phoneNumber = phoneNumber;
  this.field = field;
  this.email = email;
  this.salary = salary;
  Object.defineProperty(this, "fullName", {
    get() {
      return `${this.name} ${this.family}`;
    },
  });
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}
let teacher1 = new Teacher(
  "ali",
  "ziae",
  new Date(1992, 6, 1),
  { city: "tehran", street: "azadi", alley: "azadi" },
  000000333,
  "male",
  091000000,
  "chemistry",
  "email@mail.com",
  "1000$"
);
user.add(teacher1, "teacher");
user.update("teacher");
////////////////////////////////////////////////////////////////////////////////////////////////
function Manager(
  name,
  family,
  birthday,
  address,
  nationalID,
  gender,
  phoneNumber,
  email,
  salary,
  major
) {
  this.name = name;
  this.family = family;
  this.birthday = birthday;
  this.address = address;
  this.nationalID = nationalID;
  this.gender = gender;
  this.phoneNumber = phoneNumber;
  this.major = major;
  this.email = email;
  this.salary = salary;
  Object.defineProperty(this, "fullName", {
    get() {
      return `${this.name} ${this.family}`;
    },
  });
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}
let manager1 = new Manager(
  "ali",
  "ziae",
  new Date(1992, 6, 1),
  { city: "tehran", street: "azadi", alley: "azadi" },
  000000333,
  "male",
  091000000,
  "CEO",
  "email@mail.com",
  "1000$"
);
user.add(manager1, "manager");
user.update("manager");
console.log(manager1.fullName);
