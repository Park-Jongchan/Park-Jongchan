function solution(angle) {
  
    
    if (angle===180) {
        answer = 4
    } else if(angle>90) {
        answer = 3
    } else if(angle===90) {
        answer = 2
    } else if(angle>0) {
        answer = 1
    }
    return answer;
}