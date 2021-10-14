happy = (i) => {

    var number = 0;
    var digits = [];
    var multip = [];

    if (i < 10 || i > 20) {
        console.log("Number must be between 10 and 20, pls change");
    } else {
        number = i;
        // console.log(number + "  < -- Number");
        for (var x = 0; x < 50; x++) {
            var endErgeb;
            if (endErgeb !== 1) {
                var digit = number.toString().split('');
                digits = digit.map(Number);
                // console.log(digits + " < -- Number splitted "); 
                var ergeb1;
                var subtotal;
                for (var y = 0; y < digits.length; y++) {
                    subtotal = digits[y] * digits[y];
                    multip.push(subtotal);
                    // console.log(multip + " < -- multiplied");
                }
                var sum = multip.reduce((pv, cv) => pv + cv, 0);
                number = sum;
                erg = sum;
                var endErgeb = sum;
                multip.splice(0, multip.length);
                // console.log(number + " <---- Number = Sum");
                // console.log(erg + " < -- erg");
            }
            if (endErgeb == 1) {
                console.log("Happy Number!");
                // console.log(absErgeb + " absErgeb ");
                return;
            }
        }
        if (endErgeb > 1) {
            console.log("Not Happy, to bad, try other number");
        }
    }
}
happy(19);