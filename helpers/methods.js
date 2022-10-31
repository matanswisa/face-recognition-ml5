const fs = require('fs');
const path = require('path');


/**
 *
 * @param message
 * @param payload
 * @returns {{package, message, status: boolean}}
 */
exports.successResponse = (message, payload) => {
    return {
        status: true,
        message: message,
        package: payload
    }
}

/**
 *
 * @param message
 * @param payload
 * @returns {{message, status: boolean}}
 */
exports.failResponse = (message, payload = null) => {
    let response = {
        status: false,
        message: message
    }

    if (payload) {
        response.payload = payload
    }

    return responset
}

exports.writeToJsonFile = (jsonContent, path) => {
    fs.writeFileSync(path, jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
}

exports.readJsonFile = (path) => {
    
}