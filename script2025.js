const MAX = 12;
const Months = [1, -2, 1, 0, 1, 0, 1, 1, 0, 1, 0,1];
const MonthsInLeapYear = [1, -1, 1, 0, 1, 0, 1, 1, 0, 1, 0,1];
let ReadArray = (array, index) => {
    return array[index] ;
}
const DaysInMonth = (year, month) => {
    return 30 + ((year % 4) ? ReadArray(Months, month) : ReadArray(MonthsInLeapYear, month));
};
function DaysInYear(year, month = 0) {
    if (month < MAX - 1) {
        let daysInMonth = DaysInMonth(year, month);
        let buffer = DaysInYear(year, ++month);
        return daysInMonth + buffer;
    }    
    return DaysInMonth(year, month);
}
console.log("Days in year 2021: " + `${DaysInYear(2021)}`);
console.log("hello")
