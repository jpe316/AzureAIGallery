// return JSON as string, as Javascript has no way of querying a file for JSON objects
import * as data from './config.json';

export function getData(): string{
    return JSON.stringify(data);
}
