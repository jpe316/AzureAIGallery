function fetchContent(keyword){

    var jsonString = getData();
    var json = JSON.parse(jsonString);
    var elementid = keyword+'-menu';

    for(r in json[keyword])
    {
        var card = document.createElement('li');
        card.className = keyword+'item item';
        card.innerHTML = '<div class="github-card" data-github="'+json[keyword][r]["link"]+'" data-theme="medium"></div>';
        document.getElementById(elementid).appendChild(card);
    }

};