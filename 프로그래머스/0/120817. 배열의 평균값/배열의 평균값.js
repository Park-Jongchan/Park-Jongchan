function solution(numbers) {
    var answer = 0;
    let n = 0;
    let total = 0;
    for (i=0;i<numbers.length;i++){
        total += numbers[i];
        n +=1;
    }
    answer = total/n;
    return answer;
}