const twoSum = (arr, target) => {
    for(let i = 0; i <= arr.length; i++ ){
        for(let j= 0; j <= arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [i, j]
            }
        }
    }
}
