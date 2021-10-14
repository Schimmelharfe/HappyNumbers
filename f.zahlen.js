happy = (i) => {

    var number = 0;
    var digits = [];
    var multip = [];

    if (i < 10 || i > 20) {
        console.log("Number must be between 10 and 20, please change :)");
    } else {
        number = i;
        for (var x = 0; x < 50; x++) {
            var endErgeb;
            if (endErgeb !== 1) {
                var digit = number.toString().split('');
                digits = digit.map(Number);
                var ergeb1;
                var subtotal;
                for (var y = 0; y < digits.length; y++) {
                    subtotal = digits[y] * digits[y];
                    multip.push(subtotal);
                }
                var sum = multip.reduce((pv, cv) => pv + cv, 0);
                number = sum;
                erg = sum;
                var endErgeb = sum;
                multip.splice(0, multip.length);
            }
            if (endErgeb == 1) {
                console.log("Happy Number!");
                return;
            }
        }
        if (endErgeb > 1) {
            console.log("Not Happy, to bad, try other number :)");
        }
    }
}
happy(19);