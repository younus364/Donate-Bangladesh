function calculation(taka){
    const getcal = document.getElementById(taka).value;
    const convartcal = parseFloat(getcal);
    
    
    return convartcal;
}

function setInnerText(innerText){
    const getInnerText = document.getElementById(innerText).innerText;
    const consvartInnerText = parseFloat(getInnerText)
    return consvartInnerText;
}

function donetList(info){
  document.getElementById(info).classList.remove('hidden')
  document.getElementById('donet-list').classList.add('hidden')
 
  document.getElementById('history-btn').style.backgroundColor = ''
  document.getElementById('donation-btn').style.backgroundColor = '#B4F461'
  
  
}

function historyList(info){
  document.getElementById(info).classList.remove('hidden')
  document.getElementById('donate-bangladesh').classList.add('hidden')

document.getElementById('donation-btn').classList.remove('bg-[#B4F461]')
document.getElementById('donation-btn').style.backgroundColor = ''

  document.getElementById('history-btn').style.backgroundColor = '#B4F461'

}