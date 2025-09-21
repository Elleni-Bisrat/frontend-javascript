interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const stu1: Student = {
  firstName: "elleni",
  lastName: "bisrat",
  age: 21,
  location: "addis ababa",
};
const stu2: Student = {
  firstName: "john",
  lastName: "doe",
  age: 24,
  location: "canada",
};
const studentList: Student[] = [stu1, stu2];
function createStudentsTable(students: Student[]): HTMLTableElement {
  const table: HTMLTableElement = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "50%";

  const thead: HTMLTableSectionElement = table.createTHead();
  const headRow: HTMLTableRowElement = thead.insertRow();
  const th1: HTMLTableCellElement = document.createElement("th");
  th1.textContent = "First Name";
  th1.style.padding = "8px";
  const th2: HTMLTableCellElement = document.createElement("th");
  th2.textContent = "Location";
  th2.style.padding = "8px";
  headRow.appendChild(th1);
  headRow.appendChild(th2);
  const tbody: HTMLTableSectionElement = table.createTBody();
  students.forEach((s: Student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    cell1.textContent = s.firstName;
    cell1.style.padding = "8px";
    const cell2: HTMLTableCellElement = row.insertCell();
    cell2.textContent = s.location;
    cell2.style.padding = "8px";
  });


  (table.querySelectorAll("th, td") as NodeListOf<HTMLElement>).forEach(
    (el) => {
      el.style.border = "1px solid #ccc";
    }
  );

  return table;
}

window.addEventListener("DOMContentLoaded", (): void => {
  const root: HTMLElement | null = document.getElementById("root");
  const table: HTMLTableElement = createStudentsTable(studentList);
  if (root) {
    root.appendChild(table);
  } else {
    document.body.appendChild(table);
  }
});
