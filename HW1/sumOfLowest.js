function sumOfLowest(array) {
    // Creating starter array 
    var starterArray =  array

    // Saving two lowest numbers in array
    if (starterArray.length >= 2){
        var low1 = starterArray[0];
        var low2 = starterArray[1];
        
        starterArray.forEach(element => {
            if (element < low1){
                low2 = low1
                low1 = element
            }else if (element < low2){
                low2 = element
            }
        });

        // Checking data
        console.log(low1, low2, low1 + low2)
    }else{
        console.log("Too short!")
    }
}

console.log("Second exercise")
sumOfLowest([11, 23, 5, 14, 2, 94])
sumOfLowest([1])
sumOfLowest([1, 2])