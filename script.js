//v 4.0 save / get array via cookies
//v 4.0 read cookie on load and display

//v3.4

window.onload = function() {
 alert("Welcome to 'Shopping List' App!\n\nCreated by Shulgan\n**Javascript(Web233) Student**");
 populateshoppinglistonload();
  displayShoppinglists();
    clearFocus();
};

function about()
{
     *:focus {
    outline: none;
}
a:link {
    color: white;
}
/* visited link */
a:visited {
    color: white;
}

/* mouse over link */
a:hover {
    color: hotpink;
}

/* selected link */
a:active {
    color: white;
}
body {
    font: 14px/21px"Lucida Sans", "Lucida Grande", "Lucida Sans Unicode", sans-serif;
    background-color: #eace00;
}
#footer {
    margin:2px; background:#0a0f9e; color:#ffdb17;text-align:center;font-size:x-small;
    }
label {
     float:left;
    padding-right: 15px;
    text-indent: 5px;
}
#wrapper {
    width:300px;
    margin:20px auto;
    padding:20px;
    border-radius: 5px 5px 0 0;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(0, 0, 0, .3);
    border: 1px solid #6f212f;
}
h1 {
    color: #222;
    margin: 10px 0 20px 0;
    padding: 0;
    font-size: 24px;
    text-align:center;
}
input#item {
    float:left;
    margin-bottom:5px;
}
input#remove {
    float:right;
    margin-bottom:20px;
    margin-right:5px;
    background-color: #0a0f9e;
     color: #ffffff;
     font-size:smaller;
      width: 65px;
}
input#adds {
    float:left;
    margin-bottom:10px;
    margin-right:5px;
    margin-left:10px;
     margin-top:5px;
    background-color: #f44165;
     color: #FFFFFF;
      font-size:smaller;
}
input[type=checkbox] {
    vertical-align:middle;
}
input[type=button] {
    vertical-align:middle;
    float:right;
    margin-bottom:10px;
    margin-right:1,5;
    margin-left:10px;
    background-color: #0a0f9e;
    color: #FFFFFF;
    width: 60px;
}
ul {
    list-style-type:none;
    list-style-position:outside;
    margin:10px 0px;
    padding:0px;
    clear:both;
}
li {
    background: #ccc;
    margin:5px 0px;
    line-height:1.6;
    padding:10px;
    border:#222 solid 1px;
}
li:nth-child(odd) {
    background: #ccc;
}
li a {
    font-size:small;
}
form a {
    border-radius: 0.2em 0.2em 0.2em 0.2em;
    cursor: pointer;
    float:right;
    font: 11px sans-serif;
    margin: 0;
    margin-top:2px;
    outline: medium none;
    overflow: visible;
    height:17px;
    padding:0.3em 0.3em 0 0.3em;
    text-decoration: none;
    white-space: nowrap;
    background-color: #2E8B57;
    background-image: -moz-linear-gradient(center top, #4BC380, #2E8B57);
    border: 1px solid #1D5837;
    color: #FFFFFF;
    text-shadow: 0 -1px 0 #1D5837;
}
form a:hover {
    background-color: #71D09B;
    background-image: -moz-linear-gradient(center top, #71D09B, #2E8B57);
    border: 1px solid #1D5837;
    color: #FFFFFF;
    text-shadow: 0 -1px 0 #1D5837;
}
#labels {
     margin:2px; background:#0a0f9e; color:#ffffff;text-align:center;font-size:small;
}
}
form a:active {
    border-color: #1D5837;
    color: #FFFFFF;
    text-shadow: none;
}
form a.delete {
    background-color: #CD0000;
    background-image: -moz-linear-gradient(center top, #FF2323, #CD0000);
    border: 1px solid #890000;
    color: #FFFFFF;
    text-shadow: 0 -1px 0 #890000;
    margin-top:0px;
    height:17px;
}
form a.delete:hover {
    background-color: #FF5656;
    background-image: -moz-linear-gradient(center top, #FF5656, #CD0000);
    border: 1px solid #890000;
    color: #FFFFFF;
    text-shadow: 0 -1px 0 #890000;
}
form a.delete:active {
    border-color: #890000;
    color: #FFFFFF;
    text-shadow: none;
}

}

//read cookie and return
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

//v. 4.0remove and format cookie
function remove_unwanted(str) {  
    
  if ((str===null) || (str===''))  
       return false;  
 else  
   str = str.toString();  
   str = str.replace(/%20/g, "");
   str = str.replace(/%24/g, "$"); 
   str = str.replace(/%7C/g, " | ");
  return str.replace(/[^\x20-\x7E]/g, '');  
}  


//v 4.0 save cookie
function savecookie()
{
  delete_cookie('konkollist');
   var date = new Date();
   //keeps for a year
    date.setTime(date.getTime() + Number(365) * 3600 * 1000);
   document.cookie = 'konkollist' + "=" + escape(shoppinglist.join(',')) + "; path=/;expires = " + date.toGMTString();
}


//v 4.0 delete cookie
function delete_cookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


function populateshoppinglistonload()
{
  shoppinglist = [];
  addtocart = [];
  //load cookie into array
  var y = readCookie('konkollist');
  //remove unwanted chars and format
  y = remove_unwanted(y); 
  //spit array by comma %2C
  y = y.split('%2C');
  if (y) {
    shoppinglist = y;
   }
}


var MyItems = {
  name:"",
  price:""
};

var shoppinglist = [];

//v 3.1 addtocart empty array
var addtocart = [];

//v3.1
function changeShoppinglist(position) {
  //document.getElementById("MyList").innerHTML = shoppinglist[position];
  var arrays = shoppinglist[position];
  arrays = arrays.split(",");
    var e1 = arrays[0];
   var e2 = arrays[1];
 var ReplacedAmount = e2.replace(/\$/g,'');
  var eitem = prompt("Please enter new item", e1);
  var ecost = prompt("Please enter your name", ReplacedAmount);
  shoppinglist[position] = eitem + "," + '$' + ecost;
  displayShoppinglists();
  displayShoppingCart();
  //v 4.0 save cookie
  savecookie();
}

//v3.1
function changeShoppingCart(position) {
  document.getElementById("MyCart").innerHTML = shoppinglist[position];
  var arrays = addtocart[position];
  arrays = arrays.split(",");
    var e1 = arrays[0];
   var e2 = arrays[1];
 var ReplacedAmount = e2.replace(/\$/g,'');
  var eitem = prompt("Please enter new item", e1);
  var ecost = prompt("Please enter your name", ReplacedAmount);
  addtocart[position] = eitem + "," + '$' + ecost;
  displayShoppinglists();
  displayShoppingCart();
  //v 4.0 save cookie
   savecookie();
}

//v3.1 
function addbacktoshoppinglist(item,num) {
  //push to deleteShoppingCar
   deleteShoppingCart(num);
  shoppinglist.push(item);
  //display shoppinglist
  displayShoppinglists();
//v3.1 display displayShoppingCart() 
  displayShoppingCart(); 
  clearFocus();
  //v 4.0 save cookie
   savecookie();
}

//v 3.1 Update function addShoppinglist by adding objects
function addtoshopcart(item, num) {
    deleteShoppinglists(num);
    addtocart.push(item);
  //display shoppinglist
  displayShoppinglists();
//v3.1 display displayShoppingCart() 
  displayShoppingCart(); 
  //Clear
  clearFocus();
  //v 4.0 save cookie
   savecookie();
}

//v 3.1 Update function addShoppinglist by adding objects
function addShoppinglist(item) {
  //v 3.0 declare variable for groc string
  //push to shoppinglist
  if (item != "")
  {
  shoppinglist.push(item);
  //display shoppinglist
  displayShoppinglists();
//v3.1 display displayShoppingCart() 
  displayShoppingCart(); 
  clearFocus();
  //v 4.0 save cookie
  savecookie();
  }else
  {
  alert("Item Description Required: Please enter now :)");
  clearFocus();
  }
}

function clearFocus()
{
  document.getElementById("item").value = "";
 //  document.getElementById("cost").value = "";
  document.getElementById("item").focus();
}


//v 3.1: update function displayShoppinglists() to add to cart 
function displayShoppinglists() {
document.getElementById("MyList").innerHTML = '';
var TheList = "";
var TheRow = "";
var arrayLength = shoppinglist.length;
for (var i = 0; i < shoppinglist.length; i++) {
  //v 3.1 change button name to btndelete
var btndelete =  ' <input class="button" id="remove" name="delete" type="button" value="Remove" onclick="deleteShoppinglists(' + i + ')" />';
var btnupdate =  ' <input class="button" name="edit" type="button" value="Edit Item" onclick="changeShoppinglist(' + i + ')" />';
//v 3.1 add edit button using below i index & name it btnpdate
var arrays = shoppinglist[i];
arrays = "'"+arrays+"'";
var btnaddcart =  '<input name="add" type="checkbox" id="adds" value="Add to Shopping Cart" onclick="addtoshopcart('+arrays+','+ i +')" />';
TheRow = '<li>' + shoppinglist[i] + btndelete + ' '  + btnaddcart + '</li>';
TheList += TheRow;
}
//v3.1 add Title
if (arrayLength > 0)
{
  document.getElementById("MyList").innerHTML = '<ul>' + TheList + '</ul>';
}else
{
  document.getElementById("MyList").innerHTML = ' ';
}
}

//v3.1
function displayShoppingCart() {
document.getElementById("MyCart").innerHTML = ''
var TheList = "";
var TheRow = "";
var arrayLength = addtocart.length;
for (var i = 0; i < arrayLength; i++) {
  //v 3.1 change button name to btndelete
var btndelete =  ' <input class="button" id="remove" name="delete" type="button" value="Remove" onclick="deleteShoppingCart(' + i + ')" />';
//v 3.1 add edit button using below i index & name it btnpdate
var btnupdate =  ' <input class="button" name="edit" type="button" value="Edit Item" onclick="changeShoppingCart(' + i + ')" />';
var arrays = addtocart[i];
arrays = "'"+arrays+"'";
//v 3.1 add edit button using below i index & name it btnpdate
var btnaddlist =  '<input name="add" type="checkbox" id="adds" value="Add to Shopping List" onclick="addbacktoshoppinglist('+arrays+',' + i + ')" checked="checked"/>';
TheRow =  "<li>" + addtocart[i] + btndelete + ' ' +  ' ' + btnaddlist + '</li>';
TheList += TheRow;
}
if (arrayLength > 0)
{
  document.getElementById("labels").innerHTML = 'Purchased';
  document.getElementById("MyCart").innerHTML = '<ul>' + TheList + '</ul>';
}else{
  document.getElementById("labels").innerHTML = '';
  document.getElementById("MyCart").innerHTML = '';
}
}

//v3.1
function deleteShoppinglists(position) {
  shoppinglist.splice(position, 1);
  displayShoppinglists();
  displayShoppingCart();
   //v 4.0 save cookie
  savecookie();
}
//v3.1
function deleteShoppingCart(position) {
  addtocart.splice(position, 1);
  displayShoppinglists();
  displayShoppingCart();
}








