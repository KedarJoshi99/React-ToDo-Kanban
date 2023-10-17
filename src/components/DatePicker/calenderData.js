export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const getMonthDays = (month, year) => {
  const months30 = [3, 5, 8, 10];
  const leapYear = year % 4 === 0;

  return month === 1 ? (leapYear ? 29 : 28) : (months30.includes(month) ? 30 : 31)
}
export const zeroPad = (value, length) => {
  return `${value}`.padStart(length, '0');
}
export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const weeks = 6;
export const getMonthFirstDay = (month , year) => {
  return +(new Date(`${year}-${zeroPad(month+1, 2)}`).getDay());
}

export const stringToDate = (str,dateFormat)=>{
  let date;
  if(dateFormat==="dd/MM/yyyy"){
    date = str.split("/");
    return new Date(`${Number(date[2])}-${Number(date[1])}-${Number(date[0])}`)
  }
}