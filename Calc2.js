

// this will be used to store the user's input

 var input = document.getElementById('input').value;
 

// this will be used to hold the input converted into a number


var triangular = function (input)
{
      
        for (var counter = 0, result = 0; counter < input; counter ++)
        {
            result += counter;
        }
        return result;
};

var run = function ()
{         
    var input = document.getElementById('input').value;
    var triNum = triangular( input );
    var output = document.getElementById('result');
    output.innerHTML = ('\nThe ' + input + 'th Triangular Number is: ' + triNum + '\n');
 
};

var button = document.getElementById('runner');
button.onclick = run;



