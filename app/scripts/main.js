// var todoTemplate, description, todo;
var todoList = [
	{
		description: 'wake up',
		done: false,
		id: _.uniqueId()
	},{
		description: 'eat pizza',
		done: false,
		id: _.uniqueId()
	}
]

var todoTemplate = _.template($('.todo-template').text())

console.log('ran template')

_.each(todoList, function(item){
	$('.todo-items').prepend(todoTemplate(item))
})

$('.js-add-todo').on('click', function(){

	var description = $('.js-new-todo-input').val();
	
	var todo = {
		description: description,
		done: false,
		id: _.uniqueId()
	}

	var renderedTemplate = todoTemplate(todo);

$('.todo-items').prepend(renderedTemplate);

})


$('.todo-items').on('click', '.js-delete-todo', function(){
	$(this).parent().remove();
});








// 	// Function        Function     string
// var todoTemplate = _.template($('.todo-template').text())
	
// 	// String           Function         Object
// var renderedTemplate = todoTemplate({description: 'fake todo'});

// // Jquery selector             string
// $('.todo-items').prepend(renderedTemplate);
// // reading right to left. 