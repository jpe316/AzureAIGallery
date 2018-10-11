import config = require("./config");

// TODO: make this more flexible, generating the rows for each array in the config file?
function fetchContent(keyword: string){

    var jsonString = config.getData();
    var json = JSON.parse(jsonString);
    var elementid = keyword+'-menu';
    
    json[keyword].forEach(element => {
        window.alert(element)
        var card = document.createElement('li');
        card.className = keyword+'item item';
        card.innerHTML = '<div class="github-card" data-github="'+element["link"]+'" data-theme="medium"></div>'
        document.getElementById(elementid).appendChild(card); 
    });
};
