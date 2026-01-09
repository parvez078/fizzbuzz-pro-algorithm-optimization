let n = Number(prompt("Enter your final number:"));
let result = ""; // आउटपुट जमा करने के लिए खाली स्ट्रिंग

for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
        result += "FizzBuzz\n"; // \n का मतलब है नई लाइन
    } 
    else if (i % 3 === 0) {
        result += "Fizz\n";
    } 
    else if (i % 5 === 0) {
        result += "Buzz\n";
    } 
    else {
        result += i + "\n";
    }
}

console.log(result);


//  Advanced code with memory optimization

let m = Number(prompt("Enter your final number:"));
let outputArray = []; // खाली एरे

for (let i = 1; i <= m; i++) {
    if (i % 15 === 0) outputArray.push("FizzBuzz");
    else if (i % 3 === 0) outputArray.push("Fizz");
    else if (i % 5 === 0) outputArray.push("Buzz");
    else outputArray.push(i);
}

// .join("\n") सभी आइटम्स को एक स्ट्रिंग में बदल देगा जिसमें बीच में 'नई लाइन' होगी
console.log(outputArray.join("\n"));
