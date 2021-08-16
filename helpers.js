/*
RAVANA
*/

function successfullMessage(msg) {
    return "✅ *RAVANA :*  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *RAVANA :*  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *RAVANA :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
