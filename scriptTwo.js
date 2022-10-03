const key1 = ["I", "IV", "V", "IX"];
const key2 = ["X", "XL", "L", "XC"];
const key3 = ["C", "CD", "D", "CM"];
const key4 = ["M"];
const keys = [key1, key2, key3, key4];

function convertToRoman(num) {
    const numArray = Array.from(String(num)).reverse();

    let arr = numArray.map((el, i) => {
        let rom = [];

        if (el <= 3) {
            for (let t = 1; t <= el; t++) {
                rom.push(keys[i][0]);
            }
        } else if (el == 4) {
            rom.push(keys[i][1]);
        } else if (el >= 5 && el < 9) {
            rom.push(keys[i][2]);
            if (el > 5) {
                let dif = el - 5;
                for (let t = 1; t <= dif; t++) {
                    rom.push(keys[i][0]);
                }
            }
        } else rom.push(keys[i][3]);

        return rom.flat().join("");
    });
    res = arr.reverse().flat().join("");
    console.log(res);
    return res;
}

convertToRoman(365);
