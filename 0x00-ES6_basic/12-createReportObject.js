export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      const { length } = Object.keys(obj);
      return length;
    },
  };
  return obj;
}
