function lol(kek) {
    if(kek) {
        console.log("kek");
    }
    else {
        console.log("lol");
    }
};

lol(true);

function caller(fn) {
    fn();
}

caller(lol);

var caroTony = function () {
    console.log("Hi Tony!");
}

module.exports = caroTony;

caller(caroTony);

caller(function () {
    console.log("Hello Tony!");
})