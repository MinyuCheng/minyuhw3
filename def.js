const org1_depts = [
  {
    name: "accounting",
    children: [
      { name: "accounting payable", children: [] },
      { name: "accounting receivable", children: [] }
    ]
  },
  {
    name: "finance",
    children: []
  }
];

const org2_depts = [
  {
    name: "accounting",
    children: [
      { name: "accounting payable", children: [] },
      {
        name: "accounting receivable",
        children: [
          { name: "cash", children: [] },
          { name: "check", children: [] }
        ]
      }
    ]
  },
  {
    name: "finance",
    children: [{ name: "investment", children: [] }]
  }
];

const org1 = document.getElementById("org1");

PrintDept(org1_depts);

function PrintDept(depts) {
  let output = "<ul>";

  output += `<li>${depts[0].name}</li>`;

  output += "<ul>";
  output += `<li>${depts[0].children[0].name}</li>`;
  output += `<li>${depts[0].children[1].name}</li>`;
  output += "</ul>";

  output += `<li>${depts[1].name}</li>`;
  output += "</ul>";

  org1.innerHTML = output;
}

const org2 = document.getElementById("org2");

PrintDept2(org2_depts);

function PrintDept2(depts) {
  let output = "<ul>";

  output += `<li>${depts[0].name}</li>`;

  output += "<ul>";
  output += `<li>${depts[0].children[0].name}</li>`;
  output += `<li>${depts[0].children[1].name}</li>`;
  output += "<ul>";
  output += `<li>${depts[0].children[1].children[0].name}</li>`;
  output += `<li>${depts[0].children[1].children[1].name}</li>`;
  output += "</ul>";

  output += "</ul>";

  output += `<li>${depts[1].name}</li>`;
  output += "<ul>";
  output += `<li>${depts[1].children[0].name}</li>`;
  output += "</ul>";

  org2.innerHTML = output;
}
