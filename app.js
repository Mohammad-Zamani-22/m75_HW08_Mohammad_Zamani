

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
}
}