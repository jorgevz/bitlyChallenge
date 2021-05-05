
document.getElementById("myBtn").addEventListener("click", function() {
    if (document.getElementById('arrival').value) {
      let startTime = moment('01-01-2021 08:00 AM');
      let endingTime = moment(document.getElementById('arrival').value);
      let minuteCount = endingTime.diff(startTime, 'minutes');
  
      document.getElementById('result').innerHTML = minuteCount;
    } else {
      document.getElementById('result').innerHTML = 'No date selected';
    }
  
  });


