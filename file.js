let vvariable='1';
function readfile()
{
    var x = localStorage.getItem('a'+vvariable);
    var y = localStorage.getItem('b'+vvariable);
    var name = localStorage.getItem('c'+vvariable);
    variable++;
    console.log(x,y,name);
}