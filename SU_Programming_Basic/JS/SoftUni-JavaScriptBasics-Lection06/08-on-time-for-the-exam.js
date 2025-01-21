function onTime(examHour, examMinute, arrivalHour, arrivalMinute) {
    let totalExamTime = examHour * 60 + examMinute;
    let totalArrivalTime = arrivalHour * 60 + arrivalMinute;

    let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMinute = totalDiffTime % 60;
    
    if (totalExamTime === totalArrivalTime) {
        console.log('On time');
    } else if (totalExamTime < totalArrivalTime) {
        console.log('Late');
        if (totalDiffTime < 60) {
            console.log(`${diffMinute} minutes after the start`);  
        } else {
            if (diffMinute < 10) {
                console.log(`${diffHour}:0${diffMinute} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMinute} hours after the start`);
            }
        } 
    } else {
        if (totalDiffTime <= 30) {
            console.log('On time');
            console.log(`${diffMinute} minutes before the start`);
        } else {
            console.log('Early');
            
            if (totalDiffTime < 60) {
                console.log(`${diffMinute} minutes before the start`);  
            } else {
                if (diffMinute < 10) {
                console.log(`${diffHour}:0${diffMinute} hours before the start`);
                } else {
                console.log(`${diffHour}:${diffMinute} hours before the start`);
                }
            }
        }
    }

}

onTime(9,30,8,45);

