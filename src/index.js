var content = require('./populate-content');
var widget = require('./widget');
var browse = require('./browse');

$(document).ready(function(){
    
    content.getContent('models');
    content.getContent('examples');
    widget.init();
    browse.init();

    
})