
// -----Timer------

document.getElementById("up1").onclick=function()
{
    let c=document.getElementById("h").innerHTML
    if(c=="9999")
    c=-1
    c++;
    if(c>="0"&&c<="9")
    document.getElementById("h").innerHTML="0"+c;
    else
    document.getElementById("h").innerHTML=c;
}
document.getElementById("up2").onclick=function()
{
    let c=document.getElementById("m").innerHTML
    if(c=="59")
    c=-1
    c++;
    if(c>="0"&&c<="9")
    document.getElementById("m").innerHTML="0"+c;
    else
    document.getElementById("m").innerHTML=c;
}
document.getElementById("up3").onclick=function()
{
    let c=document.getElementById("s").innerHTML
    if(c=="59")
    c=-1
    c++;
    if(c>="0"&&c<="9")
    document.getElementById("s").innerHTML="0"+c;
    else
    document.getElementById("s").innerHTML=c;
}
document.getElementById("down1").onclick=function()
{
    let c=document.getElementById("h").innerHTML
    if(c=="00")
    c="10000"
    c--;
    if(c>="0"&&c<="9")
    document.getElementById("h").innerHTML="0"+c;
    else
    document.getElementById("h").innerHTML=c;
}
document.getElementById("down2").onclick=function()
{
    let c=document.getElementById("m").innerHTML
    if(c=="00")
    c="60"
    c--;
    if(c>="0"&&c<="9")
    document.getElementById("m").innerHTML="0"+c;
    else
    document.getElementById("m").innerHTML=c;
}
document.getElementById("down3").onclick=function()
{
    let c=document.getElementById("s").innerHTML
    if(c=="00")
    c="60"
    c--;
    if(c>="0"&&c<="9")
    document.getElementById("s").innerHTML="0"+c;
    else
    document.getElementById("s").innerHTML=c;
}
let a=document.querySelector(".start");
let c=document.querySelector(".stop");
let dost2;
document.getElementById("reset1").onclick=function()
{
    location.reload();
}

document.getElementById("reset2").onclick=function()
{
    location.reload();
}
c.onclick=function()
{
    clearInterval(dost2);
    a.hidden=false;
    c.hidden=true;
}
a.onclick=function()
{   
    a.innerHTML="Resume Timer"
    a.style.backgroundColor="yellow"
    a.style.color="black";
    a.hidden=true;
    c.hidden=false;
    c.style.backgroundColor="red";
    let h=Number(document.getElementById("h").innerHTML)
    let m=Number(document.getElementById("m").innerHTML)
    let s=Number(document.getElementById("s").innerHTML)
    let timeleft=0
    timeleft=Number(h)*60*59 + Number(m)*59 + Number(s);
    timeleft++;

    let dost=setInterval(() => {
            dost2=dost;
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

                    if(s==0&&m>=0)
                    {
                        
                    if(m==0&&h>0)
                    {
                        h--;
                        m=60
                    }
                        m--;
                        s=60;
                    }
                    s--;
                    timeleft--;
                    if(timeleft==0)
                    {
                        let audio = new Audio('alarm.mp3');
                        audio.play();
                        document.getElementById("hid").style.visibility = "visible";
                        clearInterval(dost);
                    } 
        
        }, 1000);
        
}