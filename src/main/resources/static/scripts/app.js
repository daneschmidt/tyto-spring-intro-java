//$(document).ready(function() {
//    alert('WTF TWO JQUERY STYLE');
//});
//
//alert('WTF');

console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
//    $('#submitEmployeeButton').on('click', onClickSubmit);
    getEmployees();
    console.log(employeeList);
}


// API CALLS
function getEmployees() {
    $.ajax({
        method: 'GET',
        url: '/api/employees/all'

    })
    .then(function(response) {
        render(response);

    })
    .catch(function(err) {
        console.log(err);

    })
}

function postJokeBook(jokes) {
    $.ajax({
        method: 'POST',
        url: '/api/employee/add',
        data:employeeList
    })
    .then(function(response){
        alert('New employee added!!');
        getJokeBook();
    })
    .catch(function(err){
        alert("Its busted");

    })

}

//VIEW UPDATE
function render(employeeList) {
    const $employeeOutput = $('#outputDiv');
    employeeList.empty()
    for (let i = 0 ; i < employeeList.length; i ++) {
        $employeeOutput.append(`<p>${jokes[i].whoseJoke}</p>`);
}
}