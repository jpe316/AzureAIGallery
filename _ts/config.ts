// return JSON as string, as Javascript has no way of querying a file for JSON objects

export function getData():  Promise<string> {
    var data : string=  JSON.stringify({
            "models":
            [
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
        
            "examples":
            [
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
        }
    );

    return data;
}
