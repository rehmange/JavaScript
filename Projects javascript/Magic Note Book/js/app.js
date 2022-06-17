console.log("welcome to Magic Notes")
shownotes()
// adding a notes to LocalStorage
let addBtn = document.getElementById("addBtn")
addBtn.addEventListener('click', function (e) {
    let addtitle = document.getElementById('addTitle')
    console.log(addtitle.value)
    let addtext = document.getElementById('addTxt')
    let notesTitle = localStorage.getItem("notesTitle")
    let notes = localStorage.getItem("notes")
   let  noteObj = []
   let  noteObjTitle = []
    if (notes == null) {
        noteObj = []
        noteObjTitle = []
    }
    else {
        noteObj = JSON.parse(notes)
        noteObjTitle = JSON.parse(notesTitle)
    }
    noteObj.push(addtext.value)
    noteObjTitle.push(addtitle.value)
    localStorage.setItem("notes", JSON.stringify(noteObj))
    localStorage.setItem("notesTitle", JSON.stringify(noteObjTitle))
    addtext.value = ""
    addtitle.value = ""
    shownotes()
})
// Fetching notes from localStorage
function shownotes() {
    let notes = localStorage.getItem("notes")
    let notesTitle = localStorage.getItem("notesTitle")
    if (notes == null) {
        noteObj = []
        noteObjTitle = []
    }
    else {
        noteObj = JSON.parse(notes)
        noteObjTitle = JSON.parse(notesTitle)
    }
    console.log(noteObj)
    console.log(notesTitle)
    let html = ``
    noteObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${noteObjTitle[index]}</h5>
                <p class="card-text"> ${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
            `
    });
    let noteElm = document.getElementById('notes')
    // console.log(notesTitle.length)
    // noteElm.innerHTML = html
    if (notesTitle != null ) {
        noteElm.innerHTML = html
    }
    else {
        noteElm.innerHTML = '<div>Nothing to show! Use "Add a Note" section above to add notes.</div>'
    }
}




//Functoin to Delete a Note 
function deleteNote(index) {
    let notes = localStorage.getItem("notes")
    let notesTitle = localStorage.getItem("notesTitle")

    if (notes == null) {
        noteObj = []
        noteObjTitle = []
    }
    else {
        noteObj = JSON.parse(notes)
        noteObjTitle = JSON.parse(notesTitle)
    }
    noteObj.splice(index, 1)
    noteObjTitle.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(noteObj))
    localStorage.setItem("notesTitle", JSON.stringify(noteObjTitle))
    // console.log(noteObj)
    shownotes()
}
/// search functionality by description
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value
    // console.log(inputVal)
    let cardnote = document.getElementsByClassName('noteCard')
    Array.from(cardnote).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })


    // console.log("I am writing",search.value)
})

/// search functionality by Title
let searchTitle = document.getElementById('searchTitle');
searchTitle.addEventListener("input",function(){
    let inputVal = searchTitle.value
    // console.log(inputVal)
    let cardnote = document.getElementsByClassName('noteCard')
    Array.from(cardnote).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputVal)){
            console.log('iam block')
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })


    // console.log("I am writing",search.value)
})