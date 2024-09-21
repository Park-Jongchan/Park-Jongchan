function solution(n) {
    var answer = 0;
    for (i=0;i<=n;i++){
        if(i*i===n){
        answer = 1
            break
        }else {
        answer = 2   
        }
    }
    return answer;
}