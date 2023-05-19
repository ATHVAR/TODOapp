
function display() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var response = JSON.parse(this.responseText);
      setTable(response);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

function setTable(response) {
  document.getElementById("things").style.display = "none";
  let table = "<thead><tr><th>TITLE</th><th>STATUS</th></tr></thead>";
  for (let i = 0; i < response.length; i++) {
    table += "<tr>";
    if (response[i].completed === true) {
      table += "<td>" + response[i].title + "</td><td><input type='checkbox' checked disabled></td>";
    } else {
      table += "<td>" + response[i].title + "</td><td><input type='checkbox' name='check' onclick='checkcounter()'></td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("list").innerHTML = table;
}
function checkcounter() {
  return new Promise((resolve, reject) => {
    var i = 0;
    var count = 0;
    var check = document.getElementsByName("check");
    for (i = 0; i < check.length; i++) {
      if (check[i].checked === true) {
        count = count + 1;
      }
    }

    if (count === 5) {
      alert("Congrats! 5 Tasks have been Successfully Completed");
      resolve();
    } else {
      reject("select 5 task");
    }
  });
}

checkcounter()
  .then(() => {
    // Promise resolved
    // Perform additional actions if needed
  })
  .catch((error) => {
    console.log(error);
  });

      








                



              