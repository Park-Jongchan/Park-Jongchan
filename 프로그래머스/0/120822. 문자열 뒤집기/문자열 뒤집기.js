function solution(my_string) {
    var answer = '';
    for(let i=my_string.length-1; i>=0; i-=1){
        let letter = my_string[i]
        answer += letter
    }
        
    return answer;
}