module.exports = function toReadable (number) {
    oneToTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    //1-20
    twentyToNinety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number >= 0 && number <= 19) return oneToTwenty[number];
    
    else if (number >= 20 && number <= 99) {
        var readable1 = "";
        newNumber = String(number);
        newNumber19 = Number(newNumber[0] + newNumber[1]);
        for (i = 1; i < 10; i++) {
                if (newNumber[0] == i) readable1 += twentyToNinety[i-2];
        }
        if (newNumber19 >= 1 && newNumber19 <= 19) readable1 += " " + oneToTwenty[newNumber19];
        else {
            if (newNumber[1] == 0) readable1 += ""; else {
                for (i = 1; i < 10; i++) {
                    if (newNumber[1] == i) readable1 += " " + oneToTwenty[i];
            }
        }
        
        
    }
        return readable1;
    }
    else {
        var readable2 = "";
        newNumber2 = String(number);
        newNumber20 = Number(newNumber2[1] + newNumber2[2]);
        for (i = 1; i < 10; i++) {
            if (newNumber2[0] == i) readable2 += oneToTwenty[i] + " hundred";
        }
        if (newNumber20 >= 1 && newNumber20 <= 19) readable2 += " " + oneToTwenty[newNumber20];
        else {
            if (newNumber2[1] == 0) readable2 += ""; else {
                for (i = 1; i < 10; i++) {
                    if (newNumber2[1] == i) readable2 += " " + twentyToNinety[i-2];
                }
            }
            if (newNumber2[2] == 0) readable2 += "";
            else {
                for (i = 1; i < 10; i++) {
                
                    if (newNumber2[2] == i) readable2 += " " + oneToTwenty[i];
                }
            }
        }
    return readable2;
    }
        
}
