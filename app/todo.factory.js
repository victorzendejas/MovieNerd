(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('TodoFactory', TodoFactory);

    TodoFactory.$inject = ['$http', '$q', 'toastr'];

    /* @ngInject */
    function TodoFactory($http, $q, toastr) {
        var service = {
            getTodo: getTodo,
            editTodo: editTodo,
            deleteTodo: deleteTodo,
            addTask: addTask

        };
        return service;

        ////////////////

        function getTodo() {

            return $http({
                    method: 'GET',
                    url: 'http://localhost:54653/api/todoes'
                })
                .then(function(response) {
                    return response.data;
                });

        }

        function addTask(todo) {

            return $http({
                    method: 'POST',
                    url: 'http://localhost:54653/api/todoes',
                    data: todo
                })
                .then(function(response) {
                    return response.data;
                });

        }

        function deleteTodo(id) {
            return $http({
                    method: 'DELETE',
                    url: ('http://localhost:54653/api/todoes' + '/' + id)

                })
                .then(function(response) {
                    return response.data;
                });

        }

        function editTodo(item) {
            return $http({
                    method: 'PUT',
                    url: ('http://localhost:54653/api/todoes' + '/' + item.toDoID),
                    data: item
                })
                .then(function(response) {
                    return response.data;
                });

        }

        ///////////////////////new function for post
        // function addTodo() {
        //     var defer = $q.defer();
        //     return $http({
        //         method: 'POST'
        //         url: ('http://localhost:54653/api/todoes', todo)
        //     }).then(function(response) {
        //         return defer.promise;
        //     });
        // }

        // function addTodo(todo) {

        //     var defer = $q.defer();    
        //     $http.post('http://localhost:54653/api/todoes', todo).then(      
        //         function(response) {

        //                      defer.resolve(response.data);

        //                      },         
        //         function(error) {

        //                      defer.reject(error);

        //                      }

        //               );      
        //     return defer.promise;

        // }
        // //
        ////////////////////////////////////////////////////////////////

        // function editTodo(id, todo) {

        //     var defer = $q.defer();

        //     $http.put('http://localhost:54653/api/todoes' + '/' + id, todo).then(      
        //         function(response) {

        //                      defer.resolve(response.data);

        //                      },        
        //         function(error) {

        //                      defer.reject(error);

        //                      }

        //               );      
        //     return defer.promise;

        // }

        // function deleteTodo(id) {

        //     var defer = $q.defer();

        //          
        //     $http.delete('http://localhost:54653/api/todoes' + '/' + id).then(

        //               
        //         function(response) {

        //                      defer.resolve(response.data);

        //                      },

        //                 
        //         function(error) {

        //                      defer.reject(error);

        //                      }

        //               );      
        //     return defer.promise;

        // }

    }

})();
