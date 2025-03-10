const { getSubjects } = require("./database");

const subjects = getSubjects();

const createClassRosters = (students) => {
  const rosters = {};

  subjects.forEach((subject) => {
    rosters[subject] = [];
  });

  students.forEach((student) => {
    student.schedule.forEach((subject) => {
      rosters[subject].push(student.name);
    });
  });

  return rosters;
};

module.exports = { createClassRosters };
