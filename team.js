let teamBudgets = [];

function addTeam() {
  let teamNameInput = document.getElementById("teamName");
  let expensesInput = document.getElementById("expenses");
  let budgetInput = document.getElementById("budget");

  let teamName = teamNameInput.value;
  let expenses = parseFloat(expensesInput.value);
  let budget = parseFloat(budgetInput.value);

  if (teamName && expenses && budget) {
    teamBudgets.push({ teamName, expenses, budget });
    updateTeamList();
    teamNameInput.value = "";
    expensesInput.value = "";
    budgetInput.value = "";
  }
}

function calculateAnnualBudget(expenses) {
  const monthsInYear = 12;
  return expenses * monthsInYear;
}

function updateTeamList() {
  let teamList = document.getElementById("teamList");
  teamList.innerHTML = "";

  for (let team of teamBudgets) {
    let listItem = document.createElement("li");
    listItem.textContent = `${team.teamName}: Budget - $${team.budget} | Expenses - $${team.expenses} | Annual Budget - $${calculateAnnualBudget(team.expenses)}`;
    teamList.appendChild(listItem);
  }
}

function showTeamForm() {
  document.getElementById("welcome-section").style.display = "none";
  document.getElementById("teamForm").style.display = "block";
}

// Display random details in the Blog section
const randomDetails = [
  "Learn about effective budget management strategies.",
  "Discover the importance of tracking team expenses.",
  "Explore case studies of successful team budget planning.",
  "Stay up-to-date with the latest industry trends in budgeting.",
  "Get expert advice on optimizing team budgets.",
];

function displayRandomDetails() {
  const blogSection = document.querySelector('#teamList');
  const randomDetail = randomDetails[Math.floor(Math.random() * randomDetails.length)];
  const detailElement = document.createElement('p');
  detailElement.textContent = randomDetail;
  blogSection.appendChild(detailElement);
}

displayRandomDetails();
