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

exports.writeToJsonFile = (object, path) => {
    fs.writeFileSync(path, JSON.stringify(object), (error) => {
        if (error) {
            console.log('An error has occurred ', error);
            return;
        }
        console.log('Data written successfully to disk');
    });
}