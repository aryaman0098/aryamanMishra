let i = 0;
let txt = "<..aryaman.Mishra..>";
let time = 200;

document.getElementById("label").innerHTML = "< . . a r y a  m a n  . M i s h r a . . >";
document.getElementById("label").addEventListener("click", function(){
    i = 0;
    nameLabel("label");                                                                                                         //Animation for the <..aryaman.Mishra..> label
});

document.getElementById("footerLabel").innerHTML = "< . . a r y a  m a n  . M i s h r a . . >";
document.getElementById("footerLabel").addEventListener("click", function(){
    i = 0;
    nameLabel("footerLabel");
});



function nameLabel(tag){
    if  (i===0){
        document.getElementById(tag).innerHTML = " ";
    }
    if(i < txt.length){
        document.getElementById(tag).innerHTML += " " +txt.charAt(i)
        i++;
        setTimeout(nameLabel, time, tag);
    }
}
