// var todoTemplate, description, todo;
var todoList = [
	{
		description: 'wake up',
		done: false,
		id: _.uniqueId('todo')
	},{
		description: 'eat pizza',
		done: false,
		id: _.uniqueId('todo')
	}
];

todoListArray = [];



// var newList = function(object){
// 		this.numTracker = 0;
// }
// passes info into template
var todoTemplate = _.template($('.todo-template').text());

console.log('ran template');

// puts in preloaded data to the list template
_.each(todoList, function(item){
	$('.todo-items').prepend(todoTemplate(item));
});


// adds new todo item to the list and prepends it to the top.
$('.js-add-todo').on('click', function(){

	var description = $('.js-new-todo-input').val();
	
	var todo = {
		description: description,
		done: false,
		id: _.uniqueId('todo'),
	};

	// if var todo !== ('')


	var renderedTemplate = todoTemplate(todo);
	todoList.push(todo);
	todoListArray.push(todo);
	$('.todo-items').prepend(renderedTemplate);
	+todoList.length;
	$('.todotracker > .num').text(todoList.length);

});

// delete todo item from todo-items list
$('.todo-items').on('click', '.js-delete-todo', function(){

		
	var parentId = $(this).parents('.todo-item').attr('id');
	console.log('Here is', parentId);

	todoList = _.reject(todoList, function(item, index){

		return item.id === parentId;

	});

	+todoList.length;
	$('.todotracker > .num').text(todoList.length);
	$(this).parents('.todo-item').remove();

});



	



// checks off completed item from list
$('.todo-items').on('click', '.js-check-todo', function(){

	$(this).siblings('.description').toggleClass('complete');
});





 $('.todo-items').on('click', '.js-edit-todo', function(){
	$(this).siblings('.description').find('.inputbox').removeClass('hidden');

	var text = $(this).siblings('.description').find('.description-text').text()
 	console.log('text is', text)

	
 	$(this).children('.inputbox').val(text)
 	
 });





	// Function        Function     string
// var todoTemplate = _.template($('.todo-template').text())
	
 	// String           Function         Object
// var renderedTemplate = todoTemplate({description: 'fake todo'});

 // Jquery selector             string
// $('.todo-items').prepend(renderedTemplate);
 // reading right to left. 