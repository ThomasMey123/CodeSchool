
(function () {
    var app = angular.module('store-products', []);

    app.directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                }

                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panel'
        };
    });

    app.directive('productTitle', function () {
        return {
            restrict: 'A', // Attribute
            templateUrl: 'product-title.html' // Url of template to be loaded into the page
        };
    });

})();
