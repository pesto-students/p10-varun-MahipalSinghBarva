function mostFrequent (arr, target){
    let result = []
    let numIndex = new Map()

    for (let i=0; i < arr.length; i++){
        let num = arr[i];
        let compliment = target-num;

        if (numIndex.has(compliment)){
            result [0]= numIndex.get(compliment);
            result[1] = i;
            console.log(result[0], result[1]);
            return result;
        }
        numIndex.set(num, i)
    }
    return result;
}
arr = [2,4,6,8,10]
target = 12;
mostFrequent(arr, target)