let jobArray = (function(){
    return {
        min: function (arr) {
            let inArr = arr.slice();

            inArr = inArr.sort(function(a,b)
            {
                 return a-b;
             });
            return inArr[0];
        },
        max: function (arr) {
            let inArr = arr.slice();

            inArr = inArr.sort(function(a,b)
            {
                return b-a;
            });
            return inArr[0];
        },
        middle: function (arr) {
            let inArr = arr.slice();
            let sum = 0;
            for(let i = 0; i < inArr.length; i++) {
                sum += inArr[i]
            }
            return sum;
        },
        clone: function (arr) {
            return arr.slice();
        }
    }
}());

