
//----------------stopwatch----------------------//

let dost4;
document.querySelector(".Pause").onclick=function()
{
    document.querySelector(".Pause").hidden=true;
    document.querySelector(".Start").hidden=false;
    clearInterval(dost4);
}
document.querySelector(".Start").onclick=function()
{
    
    document.querySelector(".Start").hidden=true;
    document.querySelector(".Pause").hidden=false;
    document.querySelector(".Pause").style.backgroundColor="blue";
    let h=0,m=0,s=0,ms=0;
    let dost3=setInterval(() => {
        dost4=dost3;
                    if(ms>="0"&&ms<="9")
                    document.getElementById("ms").innerHTML="0"+ms;
                    else
                    document.getElementById("ms").innerHTML=ms;
                    if(s>="0"&&s<="9")
                    document.getElementById("s").innerHTML="0"+s;
                    else
                    document.getElementById("s").innerHTML=s;
                    if(m>="0"&&m<="9")
                    document.getElementById("m").innerHTML="0"+m;
                    else
                    document.getElementById("m").innerHTML=m;
                    if(h>="0"&&h<="9")
                    document.getElementById("h").innerHTML="0"+h;
                    else
                    document.getElementById("h").innerHTML=h;
                    ms++;
                    if(ms==100)
                    {
                        s++;
                        ms=0;
                        if(s==60)
                        {
                            m++;
                            s=0
                            if(m==60)
                            {
                                h++;
                                m=0;;
                            }
                        }
                    }
                    
    },10)
}
let i=0;
document.querySelector(".Split").onclick=function()
{
    i++;
    
    let h=document.getElementById("h").innerHTML
    let m=document.getElementById("m").innerHTML
    let s=document.getElementById("s").innerHTML
    let ms=document.getElementById("ms").innerHTML
    let sio="<h1>#"+i+" &nbsp; &nbsp;"+h+" : "+m+" : "+s+" . "+ms+"</h1>"
    // console.log(sio)
    const temp = document.createElement("h1");
    temp.innerHTML=sio;
    document.querySelector(".laps").insertAdjacentElement("afterbegin",temp)
}
document.querySelector(".Reset").onclick=function()
{
    location.reload();
}