class Chronometer { 
constructor() {
   this.currentTime =0;
   this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
    
    this.currentTime += 1;
     //printTimeCallback(this.currentTime);
    }, 1000);
    if (this.currentTime === 3) {
      clearInterval(this.intervalId);
      return;
    }
  }
    
  getMinutes() {

  const minutes = this.currentTime/60;
   const minutesWithoutDecimal = Math.floor(minutes);
   return minutesWithoutDecimal;

  }

  getSeconds() { 
    const minutes = this.getMinutes();

    const seconds = this.currentTime - minutes * 60;
    return seconds 
    }

  computeTwoDigitNumber(value){
    if (value === 0) {
      return '00';
    } else if (value < 10) {
      return '0' + value.toString();
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  

  }

  split() {
    // ... your code goes here
  }
}
