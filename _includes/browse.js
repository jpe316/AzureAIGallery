function ready(fn) {
    document.getElementById('OnnxSearch').addEventListener("click", Onnxrestart);

    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function Onnxrestart() {
    document.getElementById('search_widget0').innerHTML = '';
    var keyword = document.getElementById('OnnxSearch').value
    Console.log("Searching ONnx")
    start(keyword);
}

function start(keyword) {
    appendToWidget("body", "style", "", "@import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);.gh-widget-link,.gh-widget-link:hover{text-decoration:none}.gh-widget-container{display:flex;flex-direction:row;flex-wrap:no-wrap;align-items:center;justify-content:center;color:#333;font-family:'Noto Sans',sans-serif}.gh-widget-personal-details .bio,.gh-widget-stats .count{color:#4078C0}.github-widget{border:1px solid #DDD;}.gh-widget-item{flex:1;text-align:center;padding:10px}.gh-widget-repositories .language{text-align:left}.gh-widget-repositories .language div,.gh-widget-repositories .stars div{padding:5px 0}.gh-widget-photo{flex:2}.gh-widget-photo img{border-radius:100%;max-width:90px}.gh-widget-personal-details{flex:6}.gh-widget-personal-details .full-name{font-size:1.5em;line-height:1.5em}.gh-widget-personal-details .location{font-size:.8em}.gh-widget-stats .count{font-size:1.2em;font-weight:700}.gh-widget-repositories .names{flex:2;text-align:left}.gh-widget-repositories .names div{padding:5px 0;text-overflow:ellipsis}.gh-widget-follow{flex:2}.gh-widget-active-time{flex:4;font-size:.8em}.gh-widget-heading{font-weight:400;color:#666}.gh-widget-hr{border:1px solid #DDD}.gh-widget-link{color:#4078C0}.gh-widget-follow button{width:100%;height:2em;border:none;background:#ddd}.gh-widget-topic{display:inline-block;padding:0.3em 0.9em;margin:0 0.5em 0.5em 0;background-color:#f1f8ff;border-radius:3px;float:left;font-size:12px !important;height:50px;verital-align:middle;text-align:center}");

    var widgets = document.querySelectorAll('.github-widget');
    for (var i = 0; i < widgets.length; i++) {
        var parentNode = widgets[i];
        var type = parentNode.dataset.type;
        var widget_name =  type + "_widget" + i;
        
        // get input depending on the type
        if (type === "search")
        {
            keyword = document.getElementById('keyword').value;
        }
        else 
        {
            keyword = parentNode.dataset.browsetopic;
        }

        parentNode.setAttribute("id", widget_name);
        appendToWidget("#" + widget_name, "div", "", '<div class="gh-widget-container"><div class="gh-widget-item gh-widget-photo"></div><div class="gh-widget-item gh-widget-personal-details"></div></div><div class="gh-widget-container gh-widget-stats"></div><hr class="gh-widget-hr"><div class="gh-widget-container"><div class="gh-widget-item gh-widget-heading">Top repositories for "' + keyword + '"</div></div><div class="gh-widget-repositories"></div><div class="gh-widget-container"><div class="gh-widget-item gh-widget-follow"></div><div class="gh-widget-item gh-widget-active-time"></div></div>')

        fetchRepos(keyword, "#" + widget_name);
    }
}