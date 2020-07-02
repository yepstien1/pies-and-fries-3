const bob = process.env
exports.handler =async event =>{
    return {
        statusCode:200,
        body: bob.REACT_APP_GOOGLESHEET_ID

    }
}