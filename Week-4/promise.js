function getNumber(resolveTime, rejectTime, resolveCallback, rejectCallback) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rejectCallback(`Rejected: ${randomNumber} is divisible by 5`);
      } else {
        resolveCallback(`Resolved: ${randomNumber} is not divisible by 5`);
      }
    }, randomNumber % 2 === 0 ? resolveTime : rejectTime);
  }

  getNumber(
    2000,  // resolveTime
    1000,  // rejectTime
    message => console.log(message),  // resolveCallback
    message => console.log(message)   // rejectCallback
  );
  