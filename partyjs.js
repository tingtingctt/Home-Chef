$("#submitGrocery").on('click', function(){
    let grocery = $("#groceryInput").val().trim();
    if(grocery){
         $("#listContainer").append(`<div class="row mt-1 mb-1"><input type="checkbox" class="ml-3 mr-3">
    <label for="vehicle3"><h3>${grocery}</h3></label><button class="btn btn-success ml-4 btn-sm">Complete</button>
    <button class="ml-4 btn btn-danger btn-sm">Delete</button></div>`)
    }

})

