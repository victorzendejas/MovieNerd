(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['TodoFactory', 'toastr'];
    /* @ngInject */
    function TodoController(TodoFactory, toastr) {
        var vm = this;
        vm.title = 'TodoController';
        vm.todos = [];

        activate();
        ///////////////////////////////////////////////////////////////
        function activate() {

            TodoFactory.getTodo().then(

                function(data) {

                    vm.todos = data;
                });

        };


        vm.addNewTask = function addNewTask() {
            var newtask = {
                name: vm.newTodo.task,
                priority: vm.selectedlist
            };

            if (vm.toDoID) {
                newtask.toDoID = vm.toDoID;
                vm.updateTask(newtask, vm.toDoID);
            } else {
                TodoFactory.addTask(newtask).then(
                    function(result) {
                        activate();
                        return result;
                    });
            }
        };
        /////////////////////////////////////////////////////////////////

        vm.deleteTask = function(removeTask) {
                TodoFactory.deleteTodo(removeTask).then(
                    function(response) {
                        activate();
                        //return result;
                    });
            },

            // vm.updateTask = function(info, id) {
            //     //vm.newTodo = { task: item.name };


            //     TodoFactory.editTodo(info, id).then(
            //         function(response) {
            //             activate();
            //             return result;
            //         });


            vm.updateTask = function(item) {

                vm.newTodo = { task: item.name };

                vm.selectedlist = item.priority;

                vm.toDoID = item.toDoID;

                TodoFactory.editTodo(item).then(
                    function(response) {
                        activate();
                        return response;
                    });



            };

    };



})();
