// 1. Example
var theInstructions = "alert('Hello World'); var x = 100";
var F=new Function (theInstructions);
//
new Function('alert("Hello")')();
//
// generate target class dynamicaly with new Function
var targetClass = new Function(`return class ${className} extends HTMLElement {}`)();

// 2. Example
ExecuteJavascriptString(); //Just for running it

function ExecuteJavascriptString(){
    var s = "alert('hello')";
    setTimeout(s, 1);
}

// 3. Example
function ExecStr(cmd, InterVal) {
    try {
        setTimeout(function () {
            var F = new Function(cmd);
            return (F());
        }, InterVal);
    } catch (e) { }
}
//sample
ExecStr("alert(20)",500);