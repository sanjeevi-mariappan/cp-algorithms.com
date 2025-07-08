import assert from 'assert';



/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns a raised to the power b
 */
const fn = (a,b) => {
    if (b == 0) return 1;
    let result = fn (a, Math.floor(b/2));
    if(b%2==0) return result * result;
    else return result * result * a;
}

const it_fn = (a,b) => {
    if(b==0) return 1;
    let result;
    while(b > 0){
        if(b & 1) result*=a;
        a*=a;
        b = b >> 1;
    }
    return result;
}


assert(fn(2,4)==16);