const sumAll = function(start, end) {
    //console.log(typeof start);
    //console.log(typeof end);
    let counter = start;
    let decounter = start;
    if (start < 0 || end < 0) {
        return "ERROR"
    } else if (typeof start !== "number" || typeof end !== "number"){
        return "ERROR"
    } else if (start > end) {
        for (let i = start - 1; i >= end; i--) {
            decounter += i;
        }
        return decounter
    } else {
        for (let i = start + 1; i <= end; i++) {
            counter += i;
        }
        return counter
        }
    }
    

module.exports = sumAll
