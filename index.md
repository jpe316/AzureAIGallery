---
layout: splash
classes: landing

---
<link rel="stylesheet" type="text/css" href="_includes/content-scroller.css"/>
<link rel="stylesheet" type="text/css" href="_includes/styles.css"/>

# Azure AI Gallery

<div id="datadump">

</div>


### The AI Gallery enables a growing community of developers and data scientists to browse curated AI examples, including:
<br/>

1. ML models
2. ML experiments
3. Example use cases for ML models in the real world

<br/>
<br/>
* * *
# Featured

## Models
<div class="menu-wrapper" id="model-wrapper">
    <ul class="menu models" id="model-menu">
        <li class="modelitem item">
            <div class="github-card" data-github="onnx/models" height="" data-theme="medium"></div>
        </li>
        <li class="modelitem item">
            <div class="github-card" data-github="onnx/models" data-height="" data-theme="medium"></div>
        </li>
        <li class="modelitem item">
            <div class="github-card" data-github="onnx/models" data-height="" data-theme="medium"></div>
        </li>
        <li class="modelitem item">
            <div class="github-card" data-github="onnx/models" data-height="" data-theme="medium"></div>
        </li>
        <li class="modelitem item">
            <div class="github-card" data-github="onnx/models" data-height="" data-theme="medium"></div>
        </li>
        <li class="modelitem item">
            <div class="github-card" data-github="onnx/models" data-height="" data-theme="medium"></div>
        </li>
    </ul>
    <div class="paddles">
        <button class="left-paddle paddle hidden" id="model-left"><</button>
        <button class="right-paddle paddle" id="model-right">></button>
    </div>
</div>

* * *


<br/>
## Examples
<div class="menu-wrapper" id="example-wrapper">
    <ul class="menu examples" id="example-menu">
        <li class="exampleitem item"><div class="github-card" data-github="Azure/MachineLearningSamples-PredictiveMaintenance" data-height="" data-theme="medium"></div></li>
        <li class="exampleitem item"><div class="github-card" data-github="Azure/MachineLearningSamples-SentimentAnalysis" data-height="" data-theme="medium"></div></li>
        <li class="exampleitem item"><div class="github-card" data-github="Azure/MachineLearningSamples-ChurnPrediction" data-height="" data-theme="medium"></div></li>
        <li class="exampleitem item"><div class="github-card" data-github="Azure/MachineLearningSamples-BiomedicalEntityExtraction" data-height="" data-theme="medium"></div></li>
        <li class="exampleitem item"><div class="github-card" data-github="Azure/MachineLearningSamples-QnAMatching" data-height="" data-theme="medium"></div></li>
        <li class="exampleitem item"><div class="github-card" data-github="Azure/MachineLearningSamples-AerialImageClassification" data-height="" data-theme="medium"></div></li>
    </ul>
    <div class="paddles">
        <button class="left-paddle paddle hidden" id="example-left"><</button>
        <button class="right-paddle paddle" id="example-right">></button>
    </div>
</div>

* * *
<br/>


# Discover
## Search Topics: 

<div class="content-container">
    <div ><input type="button searchbtn noselect" id="btnSearch" value="Search" class="button"/></div>
    <div  class="searchbar"><input type='text' id='keyword' name='keyword' value='mnist' class="searchbar" max-width="100%"></div>
</div>

<div class="github-widget" data-type="search"></div>

### Browse these Top Repos: 

<div class="content-container">
        <div ><input type="button browsebtn noselect" id="OnnxSearch" value="Onnx" class="button"/></div>
        <div ><input type="button browsebtn noselect" id="TensorflowSearch" value="Tensorflow" class="button"/></div>
</div>

## Browse Top Repos
<div id="browse_content">
    <div class="browse_result" style="display:inline-block; width:200; vertical-align: top">
        <div class="github-widget" data-type="browse" data-browseTopic="onnx"></div>
    </div>
    <div class="browse_result" style="display:inline-block; width:200; vertical-align: top">
        <div class="github-widget" data-type="browse" data-browseTopic="tensorflow"></div>
    </div>
</div>

<script src="./dist/bundle.js"></script>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="_includes/content-scroller.js"></script>
<script type="text/javascript" src="_includes/browse.js"/>
<script type="text/javascript" src="_includes/config.js"/>
<script type="text/javascript" src="_includes/populate-content.js"/>

<script>
    fetchContent("models")
</script>