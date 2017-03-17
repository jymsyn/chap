angular.module('app').directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover',
            'background': '#310736';
          	'background': '-moz-linear-gradient(45deg, #310736 0%, #ff5c5c 100%)';
          	'background': '-webkit-linear-gradient(45deg, #310736 0%,#ff5c5c 100%)';
          	'background': 'linear-gradient(45deg, #310736 0%,#ff5c5c 100%)';
          	'filter': "progid:DXImageTransform.Microsoft.gradient( startColorstr='#310736', endColorstr='#ff5c5c',GradientType=1 )";
        });
    };
});​