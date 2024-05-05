function countDown (){
    setInterval(function(){

        let dest = new Date("11,April,2024").getTime();
        let current = new Date().getTime();
        let diff = dest - current;
        let day = Math.floor (diff / (1000*60*60*24));
        
        let hr = Math.floor (diff % (1000*60*60*24)/(1000*60*60));
        let min = Math.floor (diff % (1000*60*60)/(1000*60));
        let sec = Math.floor (diff % (1000*60)/(1000));
        
        document.getElementById('day').innerHTML=day+"<br>"+"day";
        document.getElementById('hr').innerHTML=hr+"<br>"+"hr";
        document.getElementById('min').innerHTML=min+"<br>"+"min";
        document.getElementById('sec').innerHTML=sec+"<br>"+"sec";
    },1000)
}
countDown();