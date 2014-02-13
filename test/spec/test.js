/* global describe, it */

(function () {
    'use strict';

    // before each it() function, do this
    beforeEach(function(){
        console.log('clearing out the tasks div!');

        // clear out the tasks div
        $('.todo-items').html('');
    });

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
            it('should not add the todo if input field is empty', function(){

              // try to create an empty todo
              $('.js-new-todo-input').val('');
              $('.js-add-todo').click();

              // jQuery shouldn't find any .todo-item divs
              expect($('.todo-item').length).to.equal(0);
            });
        });
    });
})();

 