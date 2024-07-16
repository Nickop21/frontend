// debouncing -when user stop for a second then call happend after time define if user in between type again then the timer cleared and start again

// debouncing -achieve using  library (lodash)

const btn=document.querySelector(".increament_btn");
const btnpress=document.querySelector(".increament_pressed");
const count=document.querySelector(".increament_count");

 let pressedCount=0;
 let triggeredCount=0;

//  // plooyfill of debounce
//  const mydebouncing=function (callback,t) {
//     let timer
//     return function (...args) {
//         if(timer) clearTimeout(timer); //if user click bw
//       timer= setTimeout(() => {
//         callback(args)
//         }, t);
//     }

   
//  }

//  let debounced=mydebouncing(()=>{
//     count.innerHTML=triggeredCount++
//  },800)

 //throttling 

 const mythrottle=function(cb,t){
    let lasttime=0
    return (...args)=>{
        let cur=new Date().getTime();
        if(cur-lasttime < t) return;
        lasttime = cur
        return cb(...args)
    }
 }

  let throttling = mythrottle(()=>{
    count.innerHTML=triggeredCount++
 },800)

 btn.addEventListener("click",()=>{

    btnpress.innerHTML=pressedCount++
    
    // debounced()
    throttling()
 })
