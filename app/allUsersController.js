app.controller("usersController", function ($scope, $http) {

    $scope.error = "No errors occurred";
    console.log("WORKING");
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/getAllUsers'
    }).then(function successCallback(response) {
        showUsersList(response.data);
    }, function errorCallback(response) {
        $scope.error = "ERROR sending request " + response;
    });


    let showUsersList = function (response) {
        console.log(response);
        let list = document.getElementsByClassName('collection')[0];

        response.forEach(function (element) {
            list.appendChild(createListItem(element))
        })
    };

    let createListItem = function (object) {
        let listItem = document.createElement("li");
        listItem.setAttribute('class', 'collection-item avatar');
        listItem.appendChild(creteParagraph('ID', object.id));
        listItem.appendChild(creteParagraph('Login', object.login));
        listItem.appendChild(creteParagraph('Date Created', object.created));
        listItem.appendChild(creteParagraph('ROLE', new function () {
            if (object.role == null) {
                object.role = 'USER';
            }
            return object.role;
        }));

        listItem.appendChild(createEditButton());
        return listItem;
    };


    let creteParagraph = function (name, text) {
        let pId = document.createElement('p');
        pId.innerText = name + ' : ' + text;
        return pId;
    };

    let createEditButton = function () {
        let reference = document.createElement('a');
        reference.setAttribute('class', 'waves-effect waves-light btn-small');
        reference.setAttribute('href', '#edit');
        reference.innerText = 'EDIT';
        return reference;
    }


});
