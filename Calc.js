
var fibonacci = function (input)

{
    var x = 0;
    var y = 1;
    for (var counter = 1; counter < input; counter +=1)
 {
        z = x+y;
        x = y;
        y = z;
 }
     return z;
}

var run = function ()
{
    var input = document.getElementById('input').value;
    var fibNum = fibonacci( input );
    var output = document.getElementById('result');
    output.innerHTML = ( '\nThe ' + input + 'th Fibonacci Number is: ' + fibNum + '\n');
};

var button = document.getElementById('runner');
button.onclick = run;