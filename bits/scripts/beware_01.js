// JavaScript Document

<!-- Skript gegen IE Link-Rahmen  
function init()
{
lnks = document.getElementsByTagName("a");
for(i=0; i<lnks.length; i++) {
lnks[i].onfocus = new Function("if(this.blur)this.blur()");
}
}
onload = init;
//-->
<!--Sichtbarkeit Ebenen
var lastdiv = null;
function switch_content( div )
{
if ( lastdiv )
{
document.getElementById( lastdiv ).style.display = 'none';
}
displayType = ( document.getElementById( div ).style.display == 'none' ) ? 'block' : 'none'; document.getElementById( div ).style.display = displayType;lastdiv = div;
} 

function off_content( div )
{
displayType = ( document.getElementById( div ).style.display == 'none' ) ? 'none' : 'none'; document.getElementById( div ).style.display = displayType;
}

function on_content( div )
{
displayType = ( document.getElementById( div ).style.display == 'block' ) ? 'block' : 'block'; document.getElementById( div ).style.display = displayType;
}
//-->
<!--Pulldown
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
//-->
<!--Sichtbarkeit popup
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->
