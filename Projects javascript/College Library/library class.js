console.log("College library");

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

// My Code //////////////////////////////////////////////


class Library{
    constructor(booklist){
        this.booklist = booklist
    }

    getBookList(){
        return this.booklist
    }

   issueBook(bookname,user){
    this.booklist.forEach((element ,index) => {
        // if(element==bookname){
        //     console.log('book is avaiable')
        // }
        // console.log(element)
        if(element==bookname){
            // console.log(index)
            this.booklist.splice(index, 1);
             console.log(`The book name is ${bookname} issued to ${user} at  ${new Date()}`)
        }
    });
   }

    returnBook(bookname){
        this.booklist.push(bookname)
    }
}

ali = new Library(['chemistry','physics','math'])

console.log(ali.getBookList())
console.log(ali.issueBook('chemistry','Abdul'))
console.log(ali.getBookList())
console.log(ali.returnBook('urdu'))
console.log(ali.getBookList())


// DELETE data from object use DELETE objectname[Required name]


// Other solution with user name add in object

console.log("This is tutorial 32 - solution")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user){
        if (this.issuedBooks[bookname] ==undefined){
        this.issuedBooks[bookname] =  user;
        }
        else{
            console.log("This book is already issued!");
        }
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}



