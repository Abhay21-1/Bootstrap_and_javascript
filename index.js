function abc()
{
var reg=/^([A-Z a-z 0-9_/-/.])+@([A-Z a-z 0-9_/-/.])+([A-Z a-z 0-9]{3,4})$/;
var add=document.getElementById('12').value;
if(reg.test(add)==false)
{
    alert("please enter valid email");
    document.getElementById('12').focus();
    return false;
}   
}
