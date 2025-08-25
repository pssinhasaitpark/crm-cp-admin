function createData(id, name, dept, jobTitle, startDate, category, gender) {
    return {
      id,
      name,
      dept,
      "Job Title": jobTitle,
      "Start Date": startDate,
      category,
      gender,
    };
  }
  
  const rows = [
    createData("69865218585147854174847", "John Doe", "HR", "Manager", "2015-06-01", "Full-Time", "Male"),
    createData("89521478521478521478521", "Jane Smith", "IT", "Developer", "2018-03-15", "Contract", "Female"),
    createData("12547852147852147852147", "Alice Johnson", "Marketing", "Coordinator", "2020-09-10", "Part-Time", "Female"),
    createData("97854125785412547852147", "Bob Williams", "Sales", "Sales Rep", "2017-11-05", "Full-Time", "Male"),
    createData("65478521478521478521478", "Charlie Brown", "Finance", "Analyst", "2016-02-20", "Full-Time", "Male"),
    createData("87452147852147852147852", "Diana Prince", "IT", "QA Engineer", "2019-07-25", "Contract", "Female"),
    createData("54127854127854127854127", "Ethan Hunt", "Operations", "Supervisor", "2014-04-30", "Full-Time", "Male"),
    createData("78521478521478521478521", "Fiona Gallagher", "HR", "Recruiter", "2021-01-12", "Part-Time", "Female"),
    createData("21478521478521478521478", "George Martin", "Marketing", "Strategist", "2013-08-19", "Full-Time", "Male"),
    createData("85214785214785214785214", "Hannah Lee", "Sales", "Account Manager", "2018-12-03", "Full-Time", "Female"),
  ];
  
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "dept", label: "Dept", minWidth: 100 },
    {
      id: "Job Title",
      label: "Job Title",
      minWidth: 170,
      align: "right",
    },
    {
      id: "Start Date",
      label: "Start Date",
      minWidth: 170,
      align: "right",
    },
    {
      id: "category",
      label: "Category",
      minWidth: 170,
      align: "right",
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 170,
      align: "right",
    },
  ];
  
  export { rows, columns };
  