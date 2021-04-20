/*
By Michael Dillon  drevil_nz@hotmail.com
Featured on JavaScript Kit (http://javascriptkit.com)
For this and over 400+ free scripts, visit http://javascriptkit.com
*/
var val=""
var counter="0"
themessage=new Array();
themessage[0]="hey moss ily <3"
themessage[1]="moss! keep it up! this website is amazing!"
themessage[2]="ur gr8"
themessage[3]="omg your jokes are so funny"
themessage[4]="i heard that you despise some kid with a crush on you, don't worry, i will crush him"
themessage[5]="let's go to five guys for dinner!"
themessage[6]="mwah! mwah! boops for you!"
themessage[7]="moss i love this feedback box"
themessage[8]="have you heard that your css skills are off the charts?"
themessage[9]="even stupid feedback is good"
x=Math.floor(Math.random()*themessage.length)
function changer(){
if(counter>=themessage[x].length){return false}
else{
val+=themessage[x].charAt(counter)
document.myform.mytext.value=val
counter++
return false
}
}
function resetit(){
alert("thamk :)")
document.myform.mytext.value=""
counter="0"
val=""
x=Math.floor(Math.random()*themessage.length)
}
