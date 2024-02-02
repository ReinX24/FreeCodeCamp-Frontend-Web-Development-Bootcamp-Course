// Variables that we will be using for our program
// Getting stored tasks in tasksLists inside our localStorage, checks if the
// the taskLists is already stored in localStorage, if not, create a new array
const taskLists = JSON.parse(localStorage.getItem('taskLists')) == null ? [] : JSON.parse(localStorage.getItem('taskLists'))
const tableList = document.querySelector('#table-body')
const alertBox = document.querySelector('#alert-box')
let toUpdate = {
    taskName: '',
    dueDate: ''
}

// Loading stored tasks in tasksLists
function loadData() {
    // Iterating through our taskList elements
    let content = ''
    for (let index = 0; index < taskLists.length; index++) {
        const task = taskLists[index]
        // Converts date to dd/mm/yyyy then into month dd, yyyy 
        const formattedDueDate = convertDate(new Date(task.dueDate).toLocaleDateString())

        content += `
            <tr>
                <td>${task.taskName}</td>
                <td>${formattedDueDate}</td>
                <td>
                    <div class="d-flex gap-2">
                        <button class="btn btn-success btn-sm del-btn" onclick="updateTask(${index})">
                            <i class="fa-solid fa-pencil"></i> Edit 
                        </button>
                        <button class="btn btn-danger btn-sm del-btn" onclick="deleteTask(${index})">
                            <i class="fa-solid fa-trash"></i> Delete 
                        </button>
                    </div>
                </td>
            </tr>`
    }
    // Setting the innerHTML of our tableList
    tableList.innerHTML = content
}

// Function for adding tasks
function createTask() {
    // Getting the values for taskName and dueDate from our input fields
    const taskName = document.querySelector('#taskInput').value
    const dueDate = document.querySelector('#dueDateInput').value

    // Notify the user of their taskName or dueDate is empty
    if (taskName == '') { // No taskName
        alertBox.classList.remove('d-none')
        alertBox.innerText = 'Task name field is required.'
    } else if (dueDate == '') { // No dueDate
        alertBox.classList.remove('d-none')
        alertBox.innerText = 'Due date field is required.'
    } else {
        // Adding the taskName and dueDate as an object to our taskLists array
        taskLists.push({
            taskName: taskName,
            dueDate: dueDate
        })

        // Saving our taskLists to our localStorage
        localStorage.setItem('taskLists', JSON.stringify(taskLists))

        // Reset taskInput and dueDateInput input values after adding a task
        document.querySelector('#taskInput').value = ''
        document.querySelector('#dueDateInput').value = ''
        document.querySelector('#add-task-btn').innerText = 'Add New Task'

        // Remove cancel button
        document.querySelector('#cancel-edit-btn').classList.add('d-none')

        document.querySelector('#add-task-btn').disabled = true
        document.querySelector('#add-task-btn').innerHTML = '<i class="fa fa-spinner fa-spin"></i> Processing...'

        // Loads the data from localStorage and shows in our webpage
        loadData()

        // Re-enable add-task-btn after two seconds to mimic loading
        setTimeout(() => {
            // Re-enabling add new task button
            document.querySelector('#add-task-btn').disabled = false
            document.querySelector('#add-task-btn').innerHTML = '<i class="fa-solid fa-plus" id="add-task-icon"></i> Add New Task'
            // Reset toUpdate attribute values
            toUpdate = {
                taskName: '',
                dueDate: ''
            }
        }, 2000)

    }

}

// Update an existing task in tasksLists
function updateTask(index) {
    // Move the taskName and dueDate that the user chose to our inputs 
    document.querySelector('#taskInput').value = taskLists[index].taskName
    document.querySelector('#dueDateInput').value = taskLists[index].dueDate
    document.querySelector('#add-task-btn').innerText = 'Update Task'

    // Show the cancel button which cancels editing
    document.querySelector('#cancel-edit-btn').classList.remove('d-none')

    // If the user is currently updating a task and decided to edit another
    // task, push the current task to tasksLists
    // After this, in the deleteTask function, the toUpdate will be updated to
    // contain the new task that the user decided to edit (else block)
    if (toUpdate.taskName !== '') {
        taskLists.push({
            taskName: toUpdate.taskName,
            dueDate: toUpdate.dueDate
        })
    }

    deleteTask(index, false)
}

// Function that deletes a task from our list and refreshes tableList
function deleteTask(index, deletePermanently = true) {
    // Ask the user to confirm their task deletion, returns true if 'Ok' is chosen
    if (deletePermanently) {
        if (confirm('Are you sure you want to delete?')) {
            // If the user is currently editing, put their currently editing
            // entry to our taskLists and remove changes from inputs
            if (toUpdate.taskName !== '') {
                taskLists.push({
                    taskName: toUpdate.taskName,
                    dueDate: toUpdate.dueDate
                })

                document.querySelector('#taskInput').value = ''
                document.querySelector('#dueDateInput').value = ''
            }

            // Remove deleted element from array
            taskLists.splice(index, 1)

            // Updating the data in our localStorage
            localStorage.setItem('taskLists', JSON.stringify(taskLists))

            loadData()
        }
    } else {
        // Place the currently being edited task to toUpdate
        toUpdate.taskName = taskLists[index].taskName
        toUpdate.dueDate = taskLists[index].dueDate
        // Remove currently being edited task from our taskLists array
        taskLists.splice(index, 1)
        loadData()
    }
}

// Checks for input presses
function inputPress() {
    // Removes the alert box if the user is entering either on taskInput or 
    // dueDateInput
    const taskInputVal = document.querySelector('#taskInput').value
    const dueDateInputVal = document.querySelector('#dueDateInput').value

    if (taskInputVal == '') {
        alertBox.classList.remove('d-none')
        alertBox.innerText = 'Task name field is required.'
    } else if (dueDateInputVal == '') {
        alertBox.classList.remove('d-none')
        alertBox.innerText = 'Due date field is required.'
    } else {
        alertBox.classList.add('d-none')
    }

}

// Cancels editing, resets inputs, and reloads the page (does not save changes)
function submitCancel() {
    document.querySelector('#taskInput').value = ''
    document.querySelector('#dueDateInput').value = ''
    location.reload()
}

// Converts date to a more readable format
function convertDate(dateData) {
    let dateMonth = ''
    let dateDay = ''
    let dateYear = ''

    const newDate = dateData.split("/") // converts String to an array
    if (newDate[0] == 1) {
        dateMonth = 'January'
    } else if (newDate[0] == 2) {
        dateMonth = "February"
    } else if (newDate[0] == 3) {
        dateMonth = "March"
    } else if (newDate[0] == 4) {
        dateMonth = "April"
    } else if (newDate[0] == 5) {
        dateMonth = "May"
    } else if (newDate[0] == 6) {
        dateMonth = "June"
    } else if (newDate[0] == 7) {
        dateMonth = "July"
    } else if (newDate[0] == 8) {
        dateMonth = "August"
    } else if (newDate[0] == 9) {
        dateMonth = "September"
    } else if (newDate[0] == 10) {
        dateMonth = "October"
    } else if (newDate[0] == 11) {
        dateMonth = "November"
    } else {
        dateMonth = "December"
    }

    dateDay = newDate[1].toString().padStart(2, "0") // reserves 2 digits, places 0 if single digit
    dateYear = newDate[2]

    return `${dateMonth} ${dateDay}, ${dateYear}`
}

// Adding event listeners
const addTaskBtn = document.querySelector('#add-task-btn')
addTaskBtn.addEventListener('click', createTask)

const cancelEditBtn = document.querySelector('#cancel-edit-btn')
cancelEditBtn.addEventListener('click', submitCancel)

// Loads taskLists data when the page loads
window.onload = loadData