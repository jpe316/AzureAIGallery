$('document').ready(function(){
    window.alert("ready");

});


function populateexamples()
{

};

function populatemodels(){
    var models = document.getElementById('model-menu')



};


function fetchContent(keyword){

    window.alert("fetching content for " + keyword)
    document.getElementById("datadump").innerHTML = keyword
    var jsonString = getData()
    var json = JSON.parse(jsonString)

    var result = json[keword]
    window.alert("printing 'r'")
    for(r in result)
    {
        window.alert(r)
        document.getElementById("datadump").innerHTML += keyword

    }
};