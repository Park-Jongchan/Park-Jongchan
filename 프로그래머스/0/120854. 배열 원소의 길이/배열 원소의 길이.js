function solution(strlist) {
    var answer = [];
    for(let i=0; i<strlist.length; i++){
        word = strlist[i];
        num = word.length;
        answer.push(num)
    }
    return answer;
}