// Make sure that all cookies and redirects are loaded before the DOM.


// Mobile Site Detection and Cookie Functions
 var username=getCookie("fullsite");

// Check if its mobile and they haven't already clicked visit full site
if (screen.width <= 599 && username != "true" ) {
window.location.replace('mobile/index.html');
}


// Set the Domain Name of the site here and thats all you have to edit....
var domainName = "innovativemodular.com";


////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
//Function to get the cookie
function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

// This sets a cookie and redirects back to main site.
function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString())+ ";domain=."+domainName+".com;path=/";
document.cookie=c_name + "=" + c_value;
document.cookie = c_name +"=" + value + ";expires=" + exdays 
                  + ";domain=."+domainName+".com;path=/";
window.location.href = "http://www."+domainName;
}


// This sets a cookie and redirects back to mobile sites
function setCookie2(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString())+ ";domain=."+domainName+".com;path=/";
document.cookie=c_name + "=" + c_value;
document.cookie = c_name +"=" + value + ";expires=" + exdays 
                  + ";domain=."+domainName+".com;path=/";
window.location.href = "http://www."+domainName+"/mobile/index.html";
}



function DeleteCookie(name, path, domain) 
{
    path = (path ? ";path=" + path : "");
    domain = (domain ? ";domain=" + domain : "");
    var expiration = "Thu, 01-Jan-1970 00:00:01 GMT";
    document.cookie = name + "=" + path + domain + ";expires=" + expiration;
}



// After the DOM has loaded utilize JQuery

$(function(){ 
// If they clicked full site give them option to go back
if(username=="true") {
  $("#footer").append("<a class='mobileButton' href='#'>Tap to Visit Mobile Site</a>")
}

//Delete the cookie if they want to go back to the mobile site.
$( ".mobileButton" ).click(function() {
  DeleteCookie("fullsite","/",domainName);
  document.location = "mobile/index.html";
});
});