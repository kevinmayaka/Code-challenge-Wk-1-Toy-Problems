//Challenge 1: Student Grade Generator

let mark = 50;

if (mark > 79){
    return "A";
}else if (mark >= 60 && mark <= 79){
    return "B";
}else if(mark >= 50 && mark <= 59){
    return "C";
}else if (mark >= 40 && mark <= 49){
    return "D";
}else if (mark < 40){
    return "E";
}

// Challenge 2: Speed Detector
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > demeritPointsThreshold) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

// Challenge 3: Net Salary Calculator