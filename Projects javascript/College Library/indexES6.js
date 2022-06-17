console.log('This is ES6 version of Project 2');
fetchData()
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
// //LocalStorage work
        let lname = localStorage.getItem('name');
        let lbook = localStorage.getItem('book');
        let ltype = localStorage.getItem('type');
        let lnameObj = []
        let lbookObj = []
        let ltypeObj = []
        if(lname==null){
            lnameObj = []
            lbookObj = []
            ltypeObj = []
        }
        else{
            lnameObj = JSON.parse(lname)
            lbookObj = JSON.parse(lbook)
            ltypeObj = JSON.parse(ltype)
        }
        lnameObj.push(book.name)
        lbookObj.push(book.author)
        ltypeObj.push(book.type)
        localStorage.setItem('name',JSON.stringify(lnameObj))
        localStorage.setItem('book',JSON.stringify(lbookObj))
        localStorage.setItem('type',JSON.stringify(ltypeObj))

        fetchData()

        // lnameObj.forEach(function (element, index) {
        //     let tableBody = document.getElementById('tableBody');
        //     let uiString = `<tr>
        //                         <td>${book.name}</td>
        //                         <td>${book.author}</td>
        //                         <td>${book.type}</td>
        //                     </tr>`;
        //         tableBody.innerHTML += uiString;
        // });
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

//Fetching data from LocalStorage
function fetchData(){
    let lname = localStorage.getItem('name');
    let lbook = localStorage.getItem('book');
    let ltype = localStorage.getItem('type');
    let lnameObj = []
    let lbookObj = []
    let ltypeObj = []
    if(lname==null){
        lnameObj = []
        lbookObj = []
        ltypeObj = []
    }
    else{
        lnameObj = JSON.parse(lname)
        lbookObj = JSON.parse(lbook)
        ltypeObj = JSON.parse(ltype)
    }
    let tableBody = document.getElementById('tableBody');
    let uiString = ``
    lnameObj.forEach(function (element, index) {
        uiString += `<tr>
                            <td>${lnameObj[index]}</td>
                            <td>${lbookObj[index]}</td>
                            <td>${[ltypeObj[index]]}</td>
                            <td><button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button></td>
                        </tr>`;
            
    });
    tableBody.innerHTML = uiString;
}

//Delete data from localstorage
function deleteNote(index) {
    console.log("I am deleting")
    let lname = localStorage.getItem('name');
    let lbook = localStorage.getItem('book');
    let ltype = localStorage.getItem('type');
    let lnameObj = []
    let lbookObj = []
    let ltypeObj = []
    if(lname==null){
        lnameObj = []
        lbookObj = []
        ltypeObj = []
    }
    else{
        lnameObj = JSON.parse(lname)
        lbookObj = JSON.parse(lbook)
        ltypeObj = JSON.parse(ltype)
    }
    lnameObj.splice(index, 1)
    lbookObj.splice(index, 1)
    ltypeObj.splice(index, 1)
    localStorage.setItem('name',JSON.stringify(lnameObj))
    localStorage.setItem('book',JSON.stringify(lbookObj))
    localStorage.setItem('type',JSON.stringify(ltypeObj))
    // console.log(noteObj)
    fetchData()
}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        // display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

   
}


// Search Functionality
let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
        let inputval = search.value
        console.log(inputval)
        let div = document.getElementsByTagName('tr')
        Array.from(div).forEach(function(element){
            td = document.getElementsByTagName('td')[0].innerText
            console.log(td)
            if(td.includes(inputval)){
                // console.log("he")
                element.style.display='table-row'
            }
            else{
                element.style.display='none'
            }
        })
})
