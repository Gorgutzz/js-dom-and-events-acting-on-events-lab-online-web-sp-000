function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return document.querySelector("input").value;
}

function addNewElementAsLi() {
  const employeeInformation = retrieveEmployeeInformation();
  const li = document.createElement("li");                        // Create a <p> node
  const ul = document.querySelector(".employee-list");
  li.appendChild(document.createTextNode(employeeInformation));
  ul.appendChild(li);
  document.querySelector("input").value = "";
}




preventRefreshOnSubmit()
