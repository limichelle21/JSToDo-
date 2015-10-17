var $itemTemplate = $('#templates .item');
// grabs the templates ID and item class
var $list = $('#list');

// $() is a J query selector. To specify the class, id, or tag of the element


var addItemToPage = function(itemData) {
	var $item = $itemTemplate.clone()
	//clones the itemTemplate object 
	$item.attr('data-id', itemData.id);
	//alters attribute of data-id - targets data-id, and itemData is what the object gives
	$item.find('.description').text(itemData.description);
	//finds the description, gets and alters text of description based on what object gives
	if(itemData.completed) {
		//takes itemData as what the object gives
		$item.addClass('completed' === true);
	}
	$list.append($item);
	//if itemData is not completed, adds item to the list
};


// var orange = {description:'orange', id: 9000, completed:false}
//addItemToPage(orange) - calls the addItemToPage function on orange -- adds orange with the respectve attributes


// Other J Query functions: 
// .clone() - creates copy of selected element
// .find() - helps find elemnents nested inside other elemnents
// .text() - allows to get and alter text of an element
// .attr() - to get and alter attributes in HTML - a jQuery function
// .addClass() - add a class to an element
// .append() - takes an element and attach to end of another element

//var fruit = ["apple", "berry", "pear", "banana", "orange"]
//fruit.forEach(function(fruit) {
//	console.log(fruit);
//}); 

var $loadRequest = $.ajax({
	type: 'GET',
	url: "https://listalous.herokuapp.com/lists/limichelle21/"
})

$loadRequest.done(function(dataFromServer){
	var itemsData = dataFromServer.items
	itemsData.forEach(function(item){
		addItemToPage(item);
	})
})

// alternative -- itemsData.forEach(addItemToPage);


//submit is an event 

$('#add-form').on('submit', function(event) {
  var itemDescription = event.target.itemDescription.value
  event.preventDefault()

  var creationRequest = $.ajax({
    type: 'POST',
    url: "http://listalous.herokuapp.com/lists/limichelle21/items",
    data: { description: itemDescription, completed: false }
  });

	creationRequest.done(function(itemDataFromServer){
		addItemToPage(itemDataFromServer);
   });  
    $('#create')[0].value = (" "); 

});





