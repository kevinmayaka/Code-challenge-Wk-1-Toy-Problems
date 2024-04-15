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
// KRA tax rates
const kraTaxRates = [
    { min: 0, max: 24000, rate: 10 },
    { min: 24001, max: 32333, rate: 15 },
    { min: 32334, max: 40333, rate: 20 },
    { min: 40334, max: 48333, rate: 25 },
    { min: 48334, max: Infinity, rate: 30 }
];
// NHIF rates
const nhifRates = [
    { min: 0, max: 5999, amount: 150 },
    { min: 6000, max: 7999, amount: 300 },
    { min: 8000, max: 11999, amount: 400 },
    { min: 12000, max: 14999, amount: 500 },
    { min: 15000, max: 19999, amount: 600 },
    { min: 20000, max: 24999, amount: 750 },
    { min: 25000, max: 29999, amount: 850 },
    { min: 30000, max: 34999, amount: 900 },
    { min: 35000, max: 39999, amount: 1000 },
    { min: 40000, max: 44999, amount: 1100 },
    { min: 45000, max: 49999, amount: 1200 },
    { min: 50000, max: 59999, amount: 1300 },
    { min: 60000, max: 69999, amount: 1400 },
    { min: 70000, max: 79999, amount: 1500 },
    { min: 80000, max: 89999, amount: 1600 },
    { min: 90000, max: 99999, amount: 1700 },
    { min: 100000, max: Infinity, amount: 1800 }
];

// NSSF rates
const nssfRate = 0.06; // 6% of basic salary

// Function to calculate PAYE (KRA tax)
function calculatePAYE(basicSalary) {
    let tax = 0;
    for (const rate of kraTaxRates) {
        if (basicSalary > rate.min && basicSalary <= rate.max) {
            tax = (basicSalary - rate.min) * (rate.rate / 100);
            break;
        } else if (basicSalary > rate.max) {
            tax = (rate.max - rate.min) * (rate.rate / 100);
        }
    }
    return tax;
}

// Function to calculate NHIF deductions
function calculateNHIF(basicSalary) {
    for (const rate of nhifRates) {
        if (basicSalary > rate.min && basicSalary <= rate.max) {
            return rate.amount;
        }
    }
    return 0; // Default to 0 if basic salary does not fall within any range
}

// Function to calculate NSSF deductions
function calculateNSSF(basicSalary) {
    return basicSalary * nssfRate;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePAYE(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const deductions = payee + nhif + nssf;
    const netSalary = grossSalary - deductions;
    return {
        payee,
        nhif,
        nssf,
        grossSalary,
        deductions,
        netSalary
    };
}
