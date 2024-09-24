function solution(array, n) {
    const howMany = array.filter((el) => el === n); 
    const answer = howMany.length > 0 ? howMany.length : 0;
    return answer;
}