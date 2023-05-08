/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let xyzCount =init;
    return {
    increment:() => {
        xyzCount+=1;
        return xyzCount;
    },
    decrement:() => {
        xyzCount -=1;
        return xyzCount
    },
    reset: () => {
        xyzCount= init;
        return xyzCount;
    },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */