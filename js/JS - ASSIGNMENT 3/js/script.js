 //Element declaration
        var table = document.getElementById("insert");
        var input = document.querySelector('input');
        var btn = document.querySelector('button');
        var count = 0;

        btn.onclick = function() {//When Add Task is clicked

            var checkbox = document.createElement("INPUT"); //checbox creation
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", "myCheckbox");

            let task = input.value; //Set task to equal users input
            task.value = "";
            if (task.length <1){
                console.log("No Entry");
                return;
            }

            //Table markup
            var tableItem = document.createElement('tr'); //new row element
            var txt = document.createElement('span');//text for Task name
            var btnDelete = document.createElement('button'); //button to delete task
            btnDelete.setAttribute("id", "btnDelete");
            
            //Append elelments to the table Variable
            tableItem.appendChild(txt);
            txt.textContent = task;
            tableItem.appendChild(checkbox);
            tableItem.appendChild(btnDelete);
            btnDelete.textContent = 'Delete';
            
            table.appendChild(tableItem); //insert the new row into html table
            
            checkbox.onclick = function(e) {//when delete button clicked
                if (checkbox.checked == true){
                    tableItem.style.textDecoration = "line-through";
                    count +=1;
                } else {
                    tableItem.style.textDecoration = "none";
                    count -=1
                }
                document.getElementById("taskComplete").innerHTML = "Task Completed: "+count;
            }
            btnDelete.onclick = function(e) {//when delete button clicked   
                table.removeChild(tableItem);
            }

        }