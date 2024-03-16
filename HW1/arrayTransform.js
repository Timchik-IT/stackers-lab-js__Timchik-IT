function arrayTransform(array) {
    // Creating starter array 
    starterArray = array

    // Creating new array with function
    var newArray = starterArray.map((element, index) => {
        return (element + index + 1) % 10
    })

    // Checking data in new array
    newArray.forEach(element => {
        console.log(element)
    });
}

console.log("First exercise")
arrayTransform([1, 2, 4])