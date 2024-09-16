function solution(n, k) {
    var answer = 12000*n+(k-(n-(n%10))/10)*2000;
    
    return answer;
}