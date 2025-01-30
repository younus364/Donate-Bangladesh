document.getElementById('noakhali').addEventListener('click',function(){
    const donatedTaka = calculation('input-noakhali')
    if(isNaN(donatedTaka)){
       return ;
       
     }
    const rechentBdt = setInnerText('noakhaliBDT')
    const totalBDT = setInnerText('inTotalBDT')
    const result = donatedTaka + rechentBdt;
    const total = totalBDT - result;
    document.getElementById('noakhaliBDT').innerText = result;
    document.getElementById('inTotalBDT').innerText = total;
    document.getElementById('input-noakhali').value = ' '
 
    const today = new Date();
    const dateString = today.toLocaleDateString();
    console.log(dateString);
    const div = document.createElement('div')
    div.innerHTML = `
    <div class = " border rounded-lg p-6 mb-3 ">
    <h1 class = "text-xl font-bold mb-3"> ${donatedTaka} Taka is Donate for Flood at Noakhali, Bangladesh </h1>
    <p class = " bg-slate-100 p-2 rounded-md"> ${today}</p>
     </div>
    `
   document.getElementById('donet-list').appendChild(div)
 })
 
 document.getElementById('donation-btn').addEventListener('click',function(){
    donetList('donate-bangladesh')
    
    
 })
 
 document.getElementById('history-btn').addEventListener('click',function(){
    
    
    historyList('donet-list')
 })