const fibonacci = function(num) {
    if (num <= 0) {
        return "OOPS";
    } else {
        let third = 1;
        let second = 1;
        let first = 0;
        for (let i = 0; i < num; i++){
            let firstAdd = first + second;
            let secondAdd = second + third;
            let start = firstAdd + secondAdd;
            
        }
}
}
module.exports = fibonacci
