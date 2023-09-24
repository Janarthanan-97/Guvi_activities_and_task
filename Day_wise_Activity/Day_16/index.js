var text = document.getElementById("innerDiv");
console.log(text)
function timer(cb){
    setTimeout(cb,1000);
    // setTimeout(cb,1000);
    // setTimeout(cb,1000);
    // setTimeout(cb,1000);
    // setTimeout(cb,1000);
    // setTimeout(cb,1000);
    // setTimeout(cb,1000);
    // setTimeout(cb,1000);
    // setTimeout(cb,1000);
    // setTimeout(cb,1000);
}

timer(()=>{
    text.innerHTML=10;
   timer(()=>{
        text.innerHTML=9;
        timer(()=>{
            text.innerHTML=8;
            timer(()=>{
                text.innerHTML=7;
                timer(()=>{
                    text.innerHTML=6;
                    timer(()=>{
                        text.innerHTML=5;
                        timer(()=>{
                            text.innerHTML=4;
                            timer(()=>{
                                text.innerHTML=3;
                                timer(()=>{
                                    text.innerHTML=2;
                                    timer(()=>{
                                        text.innerHTML=1;
                                        timer(()=>{
                                            text.innerHTML="Wish you happy <br> NEW YEAR";
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

    })
    
});
