// JavaScript source code
(function () {
    var app = angular.module('store', []);

    app.directive('productTitle', function() {
        return {
            restrict: 'A', // Attribute
            templateUrl: 'product-title.html' // Url of template to be loaded into the page
        };
    });

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review)
            this.review = {};
        }
    });

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        }

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }


    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Small gem',
            canPurchase: true,
            images: [
                {
                    thumb: 'Dodecahedron-thumb.JPG'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "Best product ever",
                    author: "Someone@google.de"
                },
                {
                    stars: 4,
                    body: "OK",
                    author: "Someoneelse@google.de"
                }
            ]
        },
        {
            name: 'Pentagonal gem',
            price: 5.95,
            description: 'This is an exceptional gem found in the plains of eastern siberia. It is very clean and flawless',
            canPurchase: false,
            images: [
                {
                    thumb: 'Pentahedron-thumb.JPG'
                }
            ]
        },
        {
            name: 'Circular gem',
            price: 3.95,
            description: '...',
            canPurchase: false,
        },
    ]
})();