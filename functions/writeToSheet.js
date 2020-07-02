const bob = process.env
exports.handle =async event =>{
    return {
        statusCode:200,
        body: bob.REACT_APP_GOOGLESHEET_ID

    }
}