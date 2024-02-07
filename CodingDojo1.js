function print(args) {
    console.log(args)
};
const n = 10;
function display1() {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let k = 1; k <= n - i; k++) {
            str += "   ";
        }
        for (let j = 1; j <= (i * 2) - 1; j++) {
            // const sString = 'MINDSET';
            // if (j === i && sString[j-1]) {
            //     str+= sString[j-1];
            // } else {
            str += " * ";
            // }

        }
        print(str);
    }
    // print("");
}

function display2() {
    const n = 10;
    let limit = n;
    for (let i = n; i >= 1; i--) {
        let str = "";
        limit -= 1;
        for (let k = 1; k <= n - i; k++) {
            str += "   ";
        }
        for (let j = 1; j <= (i * 2) - 1; j++) {
            str += " * ";
        }
        print(str);
    }
    print("");
}

display1();
display2();


