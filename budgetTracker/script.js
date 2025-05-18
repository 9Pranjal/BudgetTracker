let totalBudget = 0;

function addBudget(){
  const budgetAmount = parseFloat(document.getElementById('budget-amount').value);
  
  if(budgetAmount > 0){
    totalBudget = totalBudget + budgetAmount;
    document.getElementById('total-budget').innerText = totalBudget ;

    document.getElementById('budget-amount').value='';

    budgetLeft = totalBudget - totalExpenses;
    document.getElementById('budget-left').innerText = budgetLeft;
  }
  else{
    alert("enter valid amount")
  }
}

let totalExpenses = 0;
let budgetLeft = 0;

function addExpense(){
  const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
  const expenseTitle = document.getElementById('expense-title').value; 

  if(totalBudget==''){
    alert("enter budget first")
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-title').value ='' ;
  }
  else{
    if(expenseAmount > 0){
      totalExpenses = totalExpenses + expenseAmount;
      document.getElementById('total-expenses').innerText=totalExpenses;
      document.getElementById('expense-amount').value = '';
      document.getElementById('expense-title').value ='' ;

      budgetLeft = totalBudget - totalExpenses;
      document.getElementById('budget-left').innerText = budgetLeft;

      const expenseList = document.getElementById('expense-list');
      const newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${expenseTitle}</td>
        <td>${expenseAmount}</td>
        <td><button class="removeExpense" onclick="deleteExpense(event)">Remove</button></td>
      `;
      expenseList.appendChild(newRow);      
    }
    else{
      alert("enter valid amount")
    }
  }

}

function deleteExpense(event){
  const button = event.target;
  const row = button.closest('tr');
  const amount = parseFloat(row.children[1].innerText);

  totalExpenses = totalExpenses - amount;
  budgetLeft = totalBudget - totalExpenses;

  document.getElementById('total-expenses').innerText = totalExpenses;
  document.getElementById('budget-left').innerText = budgetLeft;

  row.remove();
}

function resetAll(){
    document.getElementById("total-budget").textContent = "0.00";
    document.getElementById("total-expenses").textContent = "0.00";
    document.getElementById("budget-left").textContent = "0.00";
    document.getElementById("expense-list").innerHTML = "";
    document.getElementById("budget-amount").value = "";
    document.getElementById("expense-title").value = "";
    document.getElementById("expense-amount").value = "";
}