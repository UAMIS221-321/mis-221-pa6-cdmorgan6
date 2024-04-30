function handleOnLoad() { //shows list of books when website loads
    populateList();
}

function handleOnChange() { //method for populating list by finding books to put in list
    const selectedId = document.getElementById("selectListBox").value;
    bookList.forEach((book) => {
        if(book.id == selectedId) {
            myBook = book;
        }
    });

    populateForm();
}
function handleEditClick() { //allows user to edit book and then save it
    makeEditable();
    hideButtons();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-large btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}
function handleNewClick() { //allows user to add a new book and then save it
    makeEditable();
    hideButtons();
    blankFields();
    var buttonHtml = "<button class=\"btn btn-primary btn-lg\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtml += "<button class=\"btn btn-warning btn-large btn-cancel\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtml;
    document.getElementById("saveButton").style.display = "inline-block";
}
function handleRentClick() { //allows user to "rent" a book by removing one from the count
    myBook.numAvlb--;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}
function handleReturnClick() { //allows user to "return" a book by adding one to the count
    myBook.numAvlb++;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    putBook(myBook.id);
}
function handleDeleteClick() { //allows user to delete book from list
    deleteBook();
}
function handleCancelSave() { //cancels whatever action the user started
    populateForm();
    makeReadOnly();
    showButtons();
}
function handleEditSave(id) { //method to save an edit that the user makes
    putBook(id);
    makeReadOnly();
    showButtons();
}
function handleNewSave() { //method to save a new book to the list
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
}

function populateForm() { //puts all of the book values into their corresponding boxes
    document.getElementById("bookTitle").value = myBook.title;
    document.getElementById("bookAuthor").value = myBook.author;
    document.getElementById("bookGenre").value = myBook.genre;
    document.getElementById("bookAvlb").value = myBook.numAvlb;
    document.getElementById("bookIsbn").value = myBook.isbn;
    document.getElementById("bookLength").value = myBook.length;
    document.getElementById("bookCover").value = myBook.cover;
    var html = "<img class = \"coverArt\" src = \"" + myBook.cover + "\"></img>";
    document.getElementById("picBox").innerHTML = html;
}
function hideButtons() { //removes the possible buttons from the display
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}
function showButtons() { //puts the buttons back onto the page
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById("rentButton").style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block";
    document.getElementById("saveButton").style.display = "none";
}
function makeEditable() { //allows user to edit a field for an existing book
    document.getElementById("bookTitle").readOnly=false;
    document.getElementById("bookAuthor").readOnly=false;
    document.getElementById("bookGenre").readOnly=false;
    document.getElementById("bookAvlb").readOnly=false;
    document.getElementById("bookIsbn").readOnly=false;
    document.getElementById("bookLength").readOnly=false;
    document.getElementById("bookCover").readOnly=false;
}
function blankFields() { //puts blank fields into each box so that user can then add a new book
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookGenre").value = "";
    document.getElementById("bookAvlb").value = "";
    document.getElementById("bookIsbn").value = "";
    document.getElementById("bookLength").value = "";
    document.getElementById("bookCover").value = "";
}
function makeReadOnly() { //takes away editing power so user cannot edit the fields of a book
    document.getElementById("bookTitle").readOnly=true;
    document.getElementById("bookAuthor").readOnly=true;
    document.getElementById("bookGenre").readOnly=true;
    document.getElementById("bookAvlb").readOnly=true;
    document.getElementById("bookIsbn").readOnly=true;
    document.getElementById("bookLength").readOnly=true;
    document.getElementById("bookCover").readOnly=true;
}