function solution(array) {

    var newArray = array.sort((a, b) => a - b);

    var num = Math.floor((newArray.length - 1) / 2);
 
    var answer = newArray[num];
    return answer;
}