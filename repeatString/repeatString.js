const repeatString = function(string, num) {
    let repString = ''
if (num < 0){ return 'ERROR'}
else {
    for (let i = 0; i < num; i++) {
        repString = repString + string
        }
        return repString
}

}

module.exports = repeatString
