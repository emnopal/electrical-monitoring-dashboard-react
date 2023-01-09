import * as fs from "fs";
import { flattenObj } from "./flattenObj.js";

export const write = (obj) => {
    fs.writeFileSync("./tmp/electric-data.json", flattenObj(obj, true), err => {
        if (err) throw err;
        console.log('JSON data is saved.');
        return;
    });
}

