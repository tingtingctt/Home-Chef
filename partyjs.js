$("#submitGrocery").on('click', function(){
    let grocery = $("#groceryInput").val().trim();
    if(grocery){
         $("#listContainer").append(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3">
    <label for="vehicle3"><h3>${grocery}</h3></label><button id="someString" class="btn btn-success ml-9 btn-sm">Complete</button>
    <button id="someString2" class="ml-3 btn btn-danger btn-sm delete">Delete</button></div>`)
    


    if (grocery.addEventListener) {
        // DOM2 standard
        grocery.addEventListener('click', removeGrocery, false);
    }
    else if (grocery.attachEvent) {
        // IE (IE9 finally supports the above, though)
        grocery.attachEvent('onclick', removeGrocery);
    }
    else {
        // Really old or non-standard browser, try DOM0
        grocery.onclick = removeGrocery;
    }
}
  
})

function removeGrocery() {
    var elem = document.getElementById('groceryinput');
    elem.parentNode.removeChild(elem);
    return false;
}

function deleteGrocery(e) {
    var id = e.target.id;
    console.log("delete an item: " + id);
} 



function pageInit() {
    // Hook up the "remove dummy" button
    /*
    var grocery = document.getElementById('someString2');
    if (grocery.addEventListener) {
        // DOM2 standard
        grocery.addEventListener('click', removeGrocery, false);
    }
    else if (grocery.attachEvent) {
        // IE (IE9 finally supports the above, though)
        grocery.attachEvent('onclick', removeGrocery);
    }
    else {
        // Really old or non-standard browser, try DOM0
        grocery.onclick = removeGrocery;
    }

*/

}

