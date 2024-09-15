function solution(numer1, denom1, numer2, denom2) {
    let a=0
    let b=0
    if (denom1===denom2){
        a=numer1+numer2
        b=denom1
            for(let i=b-1; i>0; i-=1){
            if (a%i===0 && b%i===0){
                a=a/i
                b=b/i
                }
            }
    } else if(denom1!==denom2){
        a=numer1*denom2+denom1*numer2
        b=denom1*denom2
        for(let i=b-1; i>0; i-=1){
            if (a%i===0 && b%i===0){
                a=a/i
                b=b/i
            }
        }
            
    }
    var answer = [a,b];
    return answer;
}