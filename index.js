function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return document.querySelector("input").value;
}

function addNewElementAsLi() {
  const ul = document.querySelector('ul.employee-list');
  const li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(li);
}

function addNewLiOnClick(){
  let submitButton = document.querySelector('input[type="submit"]');
  submitButton.addEventListener('click', function(event){
    addNewElementAsLi();
    document.querySelector('input').value = "";
  })
}


preventRefreshOnSubmit()
