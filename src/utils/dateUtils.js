export const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

export const today = new Date();
today.setHours(0,0,0,0);

export const ymd = (d) =>
  `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;

export const daysInMonth = (year,month) =>
  new Date(year,month+1,0).getDate();

export const startDow = (year,month) => {
  const raw=new Date(year,month,1).getDay();
  return (raw+6)%7;
};