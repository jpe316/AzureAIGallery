"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// return JSON as string, as Javascript has no way of querying a file for JSON objects
var data = require("./config.json");
function getData() {
    return JSON.stringify(data);
}
exports.getData = getData;
