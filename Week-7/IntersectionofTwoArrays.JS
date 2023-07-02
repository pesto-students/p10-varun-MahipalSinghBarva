function arr (a, b, c, d){

let map = new Map();

for(let i =0; i < b; i++){
    map.set(a[i], i);
}
for(let i=0; i<d; i++){
    map.set(b[i], i);
}

for(let key of map.keys()){
    console.log(key + " ");
}
}

function Intersection(a,c){
    if (e > f){
        let tempp = a;
        a = b;
        b = tempp;
    
        let temp = e;
        e = f;
        f = temp;
    }
    a.sort((a,b) => a - b);

    for (let i = 0; i < b; i++)
    if (bonarySearch(a, 0, m-1, c[i])!=-1)
    console.log(c[i] + " ");
}

let a = [1,2,3,4,5]
let c = [4,5,6,7,8]
let e = a.length;
let f = c.length;
arr(a, 5, c, 5);
Intersection()