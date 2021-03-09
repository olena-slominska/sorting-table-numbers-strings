document.addEventListener("click", handleClick);
function  handleClick (e) {
  switch (e.target.id) {
    case "number":
      sortTableByNumbers(0);
      break;
    case "firstName":
      sortTableByWords(1);
      break;
    case "lastName":
      sortTableByWords(2);
      break;
    default:
      alert("Click on the header of the column you want to sort the table by!");
  }
}

function sortTableByWords(n) {
  let x,
    y,
    switching = true,
    shouldSwitch,
    dir = 'asc',
    switchCount = 0;
  const table = document.getElementById("myTable");
  const rows = table.rows;

  while (switching) {
    switching = false;
    

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableByNumbers(n) {
  let x,
    y,
    shouldSwitch,
    switchCount = 0;
    switching = true;
    dir = "asc";
  const table = document.getElementById("myTable");
  const rows = table.rows;
  while (switching) {
    switching = false;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir === "asc") {
        if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
