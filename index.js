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
}




preventRefreshOnSubmit()
