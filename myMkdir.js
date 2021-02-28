#!/usr/bin/env node
let fs = require("fs");

(function () {
    let n = process.argv[2];
    let name = process.argv[3];

    if (isNumeric(n)) {
        if (parseInt(n) > 0) {
            try {
                if (fs.existsSync(`${name}-0`)) {
                    for (i = 0; i < n; i++) {
                        fs.rmdirSync(`${name}-${i}`);
                    }
                } else {
                    for (i = 0; i < n; i++) {
                        fs.mkdirSync(`${name}-${i}`);
                    }
                }
            } catch (error) {
                console.log(
                    "Error Occured. Possibly 'n' was greater than expected"
                );
            }
        } else {
            console.log("Invalid Input");
            return;
        }
    } else {
        console.log("Invalid Input");
        return;
    }
})();

function isNumeric(num) {
    return !isNaN(num);
}
