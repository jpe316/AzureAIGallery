var config = require('./config');

// TODO: make this more flexible, generating the rows for each array in the config file?
async function fetchContent(keyword: string){

    var jsonString = await config.getData();
    var json = JSON.parse(jsonString);
    var elementid = keyword+'-menu';
    
    json[keyword].forEach(element => {
        var card = document.createElement('li');
        card.className = keyword+'item item';
        card.innerHTML = '<div class="github-card" data-github="'+element["link"]+'" data-theme="medium"></div>'
        document.getElementById(elementid).appendChild(card); 
    });
};
