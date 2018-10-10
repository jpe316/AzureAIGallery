"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// return JSON as string, as Javascript has no way of querying a file for JSON objects
function getData() {
    var data = JSON.stringify({
        "models": [
            {
                "link": "onnx/models"
            },
            {
                "link": "onnx/models"
            },
            {
                "link": "onnx/models"
            },
            {
                "link": "onnx/models"
            },
            {
                "link": "onnx/models"
            },
            {
                "link": "onnx/models"
            }
        ],
        "examples": [
            {
                "link": "Azure/MachineLearningSamples-PredictiveMaintenance"
            },
            {
                "link": "Azure/MachineLearningSamples-SentimentAnalysis"
            },
            {
                "link": "Azure/MachineLearningSamples-ChurnPrediction"
            },
            {
                "link": "Azure/MachineLearningSamples-BiomedicalEntityExtraction"
            },
            {
                "link": "Azure/MachineLearningSamples-QnAMatching"
            },
            {
                "link": "Azure/MachineLearningSamples-AerialImageClassification"
            }
        ]
    });
    return data;
}
exports.getData = getData;
