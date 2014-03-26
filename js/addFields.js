/**
 * Created by sanjeev on 26/03/2014.
 */

function add()
{
    var fn, ln, result;
    fn = parseInt(document.getElementById("first").value, 10);
    ln = parseInt(document.getElementById("second").value, 10);
    result =  (fn+ln);
    document.getElementById("demo2").innerHTML = result;
}