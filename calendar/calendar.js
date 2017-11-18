let calendar = document.getElementById("calendar");
let mSelect = document.getElementById("month");
let ySelect = document.getElementById("year");
let thisYear = (new Date()).getFullYear();
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let month = null;
let year = null;

// Add months to the select element
for(let i=0; i<months.length; i++){
  let e = document.createElement("option");
  e.appendChild(document.createTextNode(months[i]));
  mSelect.appendChild(e);
}
// Add years to the select element
for(let i=thisYear, j=thisYear-15; i>j; i--){
  let e = document.createElement("option");
  e.appendChild(document.createTextNode(i));
  ySelect.appendChild(e);
}
//Add days to the calendar table UI
for(let week=0; week<5; week++){
  let tr = document.createElement("tr");
  for(let weekday=0; weekday<7; weekday++){
    let td = document.createElement("td");
    tr.appendChild(td);
  }
  calendar.appendChild(tr);
}
// Add Event Handler for month selection
mSelect.onchange = function(e){
  month = months.indexOf(e.target.value);
  if(month!==null && year!==null){
    initializeCalendar();
  } 
}
// Add Event Handler for year selection
ySelect.onchange = function(e){
  year = e.target.value;
  if(month!==null && year!==null){
    initializeCalendar();
  } 
}
/* 
 * Function to initialize the calendar table
 * "first day of a month = next day of last day of previous month"
*/
function initializeCalendar(){
  // Clear the old calendar, if exists
  let tds = calendar.getElementsByTagName("td");
  if(tds[8].innerText!==null){
    for(let i=0, j=tds.length; i<j; i++){
      tds[i].innerText = null;
    }
  }
  // Add the day entries into calendar.
  let day = new Date(year, month, 1).getDay(); //0=Sun,1=Mon,...
  let days= new Date(year, month+1, 0).getDate(); //1-31
  for(let i=0, j=day; i<days; i++){
    tds[i+j].innerText = ""+(i+1);
  }
}

