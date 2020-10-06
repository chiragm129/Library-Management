console.log("welcome to tut 33");
// quiz
// store all the dat in localStorage
// delete Option
// scroll book 


// Book constructer using protype
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructer
function Display() {

}

// add method to Display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// implement the clear function 
// after submit screen will clear
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implement the validate function 
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// to implement show function (message alert krdega)
Display.prototype.show = function (type,displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong>${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;

    setTimeout(function() {
        message.innerHTML = '';
    }, 2000);//2000ms = 2 sec                    

}


// add Submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted library form");
    let name = document.getElementById('bookname').value;
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
        // validate for means in name and author have atleast 3 char 

        display.add(book); //to add book
        display.clear(); //to clear display
        display.show('success',"your book has been successfully added. ");
    }
    else {
        // show to the error 
        display.show('danger',"sorry you can't add this book. ");
    }
    e.preventDefault(); //this is for when we click add note the page will not reload
}