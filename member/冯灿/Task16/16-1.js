function isNumber(el) {
    if (typeof el === "number") {
        return true;
    } else {
        return false;
    }
}

function isString(el) {
    if (typeof el === "string") {
        return true;
    } else {
        return false;
    }
}

function isBoolean(el) {
    if (typeof el === "boolean") {
        return true;
    } else {
        return false;
    }
}

function isFunction(el) {
    if (typeof el === "function") {
        return true;
    } else {
        return false;
    }
}
var a = 2,
    b = "jirengu",
    c = false;
console.log(isNumber(a));
console.log(isString(a));
console.log(isString(b));
console.log(isBoolean(c));
console.log(isFunction(a));
console.log(isFunction(isNumber));
