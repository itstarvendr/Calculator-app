function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function display(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var expression = document.getElementById("result").value;
    var result = eval(expression);
    document.getElementById("result").value = result;
  }
  
  document.getElementById("1").onclick = function() {
    display("1");
  };
  
  document.getElementById("2").onclick = function() {
    display("2");
  };
  
  document.getElementById("3").onclick = function() {
    display("3");
  };
  
  document.getElementById("+").onclick = function() {
    display("+");
  };
  
  document.getElementById("4").onclick = function() {
    display("4");
  };
  
  document.getElementById("5").onclick = function() {
    display("5");
  };
  
  document.getElementById("6").onclick = function() {
    display("6");
  };
  
  document.getElementById("-").onclick = function() {
    display("-");
  };
  
  document.getElementById("7").onclick = function() {
    display("7");
  };
  
  document.getElementById("8").onclick = function() {
    display("8");
  };
  
  document.getElementById("9").onclick = function() {
    display("9");
  };
  
  document.getElementById("*").onclick = function() {
    display("*");
  };
  
  document.getElementById("0").onclick = function() {
    display("0");
  };
  
  document.getElementById(".").onclick = function() {
    display(".");
  };
  
  document.getElementById("/").onclick = function() {
    display("/");
  };
  
  document.getElementById("=").onclick = function() {
    calculate();
  };
  