(function(){
    angular
        .module('todoApp', []);

    angular
        .module('todoApp')
        .controller('TodoCtrl', TodoCtrl);

    function TodoCtrl() {
        var todoVm = this;
        //variables
        todoVm.text = ''
        todoVm.hide = false;
        todoVm.anyDone = false;
        
        //arrays
        todoVm.todos = [
            {text: 'learn angular', done: false},
            {text: 'write the content for the next module', done: false},
            {text: 'buy cheese', done: true}
        ];
        checkTodos();

        todoVm.filters = [
            {label: 'All', showTodo: function(todo) {return true}},
            {label: 'Active', showTodo: function(todo) {return !todo.done;}},
            {label: 'Complete', showTodo: function(todo) {return todo.done;}}
        ]
        todoVm.selectedFilter = todoVm.filters[0];

        //function bindings
        todoVm.addTodo = addTodo;
        todoVm.removeTodo = removeTodo;
        todoVm.checkTodos = checkTodos;

        //function to add todos to the array
        function addTodo(){
            if(todoVm.text != ''){
                //create new todo object based on input text
                var newTodo = {
                    text:todoVm.text, done:false
                }
                todoVm.todos.push(newTodo); //adds the new todo to the todos array, angular automatically updates the view to match
                todoVm.text = ''; //clears the input field
            }
        }

        //function to completed todos from the array.
        function removeTodo(){
            //backwards so splicing doesnt screw up the order when deleting multiples
            for(var i = todoVm.todos.length - 1;i >= 0;i--){
                if(todoVm.todos[i].done == true){
                    todoVm.todos.splice(i,1)
                }
            }
            checkTodos();
        }

        //function that checks if any todos are completed
        function checkTodos(){
            //if all todos are active, this variable stays true and disables the 'clear complete' button
            todoVm.anyDone = true;
            for(var i = 0;i< todoVm.todos.length;i++){
                if(todoVm.todos[i].done == true){
                    todoVm.anyDone = false; //if any todo is complete, button is disabled.
                }
            }
        }
    }
})();
