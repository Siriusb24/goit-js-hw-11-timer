const daysToFinish = document.querySelector('[data-value="days"]')
const hoursToFinish = document.querySelector('[data-value="hours"]')
const minsToFinish = document.querySelector('[data-value="mins"]')
const secToFinish = document.querySelector('[data-value="secs"]')

class CountdownTimer{
    constructor(coronaFinish){
      this.coronaFinish = coronaFinish.targetDate.getTime()
      this.intervalID = null
      this.finishTime = 0
    }
    ohNo() {
          this.intervalID = setInterval(() => {
          let currentDate = Date.now()
          this.finishTime = this.coronaFinish - currentDate
    
          this.insertData(daysToFinish, this.getDaysCount(this.finishTime))
          this.insertData(hoursToFinish, this.getHoursCount(this.finishTime))
          this.insertData(minsToFinish, this.getMinsCount(this.finishTime))
          this.insertData(secToFinish, this.getSecondsCount(this.finishTime))
        }, 1000)
      }
    weDidIt() {
        clearInterval(this.intervalID)
        this.clearClockFace()
      }
      clearClockFace() {
        document.getElementById("timer").innerHTML = "Hooray quarantine is over !!!";
      }

      toString(value, num, symbol) {
        return String(value).padStart(num, symbol)
      }
      getDaysCount(time) {
        return this.toString(Math.floor(time / (1000 * 60 * 60 * 24)), 3, ' ')
      }
      getHoursCount(time) {
        return this.toString(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          2,
          '0',
        )
      }
      getMinsCount(time) {
        return this.toString(
          Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
          2,
          '0',
        )
      }
      getSecondsCount(time) {
        return this.toString(Math.floor((time % (1000 * 60)) / 1000), 2, '0')
      }
      insertData(place, value) {
        place.textContent = value
      }

}

  const myTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 31, 2021'),
  });
  
  myTimer.ohNo(myTimer.targetDate);
  