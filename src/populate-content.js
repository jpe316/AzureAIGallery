const config = require('./config');

var content = {
        prepareContent:(keyword) => {
            var jsonString = config.getData();
            var json = JSON.parse(jsonString);
            var cards = [];
            for (var i = 0; json[keyword] != undefined && i < json[keyword].length; i++)
            {
                var obj = json[keyword][i];
                var card = document.createElement('li');
                card.className = keyword + 'item item';
                card.innerHTML = '<div class="github-card" data-github="' + obj["link"] + '" data-theme="medium"></div>';
                cards.push(card);
            };
            return cards;
        },

        getContent:(keyword) => {
            var elementid = keyword + '-menu';
            var cards = prepareContent(keyword);
            cards.foreach(function (element){
                document.getElementById(elementid).appendChild(card);
            });
        }
}

module.exports = content;