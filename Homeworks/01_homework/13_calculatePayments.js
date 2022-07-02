const payments = [
  {
    studentId: 1, // Unique identifier for each student

    studentName: "John Doe", // Name of the student

    payedAmount: 1600, // Amount payed with this transaction

    year: 2020, // The payment year
  },

  {
    studentId: 3, // Unique for each student

    studentName: "John Doe",

    payedAmount: 1500,

    year: 2021,
  },

  {
    studentId: 1, // Unique for each student

    studentName: "John Doe",

    payedAmount: 1400,

    year: 2022,
  },

  {
    studentId: 1, // Unique for each student

    studentName: "John Doe",

    payedAmount: 1300,

    year: 2023,
  },

  {
    studentId: 2, // Unique for each student

    studentName: "Lu Kang",

    payedAmount: 1500,

    year: 2020,
  },

  {
    studentId: 2, // Unique for each student

    studentName: "Lu Kang",

    payedAmount: 1400,

    year: 2021,
  },

  {
    studentId: 3, // Unique for each student

    studentName: "Lu Kang",

    payedAmount: 1300,

    year: 2023,
  },

  {
    studentId: 2, // Unique for each student

    studentName: "Lu Kang",

    payedAmount: 1200,

    year: 2023,
  },
];

const calculatePayments = (payments) => {
  const result = [];

  for (let i = 0; i < payments.length; i++) {
    const idx = result.findIndex(
      ({ studentId }) => studentId === payments[i].studentId
    );
    if (idx == -1) {
      result.push(payments[i]);
    } else {
      result[idx].payedAmount += payments[i].payedAmount;
    }
  }

  return result;
};

calculatePayments(payments);
/*[
{studentId: 1, studentName: 'John Doe', payedAmount: 4300, year: 2020},
{studentId: 3, studentName: 'John Doe', payedAmount: 2800, year: 2021},
{studentId: 2, studentName: 'Lu Kang', payedAmount: 4100, year: 2020}
]
*/
