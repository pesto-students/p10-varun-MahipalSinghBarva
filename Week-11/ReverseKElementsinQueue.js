function reverseKElements(queue, K){
    const d = []
    
    for (let i = 0; i < K; i++){
        d.unshift(q.shift());
    }

    while (d.length !==0){
        q.push(d.shift());
    }

    for (let i =0; i < q.length -K; i++){
        q.push(q.shift());
    }
}
 const q = [];
  q.push(1);
  q.push(2);
  q.push(3);
  q.push(4);
  q.push(5);
  q.push(6);
  q.push(7);
  q.push(3);
 
  const k = 3;
  reverseKElements(q, k);
  console.log(q.join(' '));




