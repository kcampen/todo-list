/* global describe, it */

(function () {
    'use strict';

    describe('In the todo app', function () {
        describe('when the add button is clicked', function () {
            it('should add a new todo div when the input is populated', function () {

            	// Add text to the .new-todo input
              $('.js-new-todo-input').val('string');
              // Click the "add" button
              $('.js-add-todo').click();
              // Store the value of the first todo div's text
              var firstTodoText = $('.todo-item').first().children('.description').text();
              expect(firstTodoText).to.contain('string');
            });
            	// should not allow empty input field to prepend todo template.
            it('should throw an error if input in empty when add button is clicked', function(){

            	expect(function(){description.()}).to.throw(Error);
            });
        });
    });
})();

 