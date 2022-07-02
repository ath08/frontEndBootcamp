const evaluations = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70,
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60,
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 60,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 25,
  },
];

const averageScoreOfCourses = (evaluations) => {
  const result = [];
  let count = 0;

  for (let i = 0; i < evaluations.length; i++) {
    const idx = result.findIndex(
      ({ courseName }) => courseName === evaluations[i].courseName
    );
    if (idx == -1) {
      result.push(evaluations[i]);
    } else {
      count += 1;
      result[idx].score += evaluations[i].score / count;
    }
  }

  return result;
};

averageScoreOfCourses(evaluations);
/* [
{studentId: 1, studentName: 'John Doe', courseId: 1, courseName: 'JS Bootcamp', score: 141.25},
{studentId: 1, studentName: 'John Doe', courseId: 2, courseName: 'JS Level 0', score: 92},
{studentId: 1, studentName: 'John Doe', courseId: 3, courseName: 'JS Level 1', score: 67.5}
]
*/
