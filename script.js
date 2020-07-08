let field = document.querySelector('.task-field')
let queue = []
let current = null


// Every seconds checks the queue and if there's a task, it'll countdown
setInterval(() => {
    if (current) {
        let now = new Date() // milliseconds
        let countdown = format(current.target - now)

        // Create box to display task
        field.innerHTML = `
            <div class="box">
                <h3>${current.task}</h3>
                <div>deadline: ${current.formattedTarget}</div>
                <div class="text-danger">${countdown}</div>
            </div>
        `

        // If countdown reached zero, check for the following task
        if (countdown === '00:00:00') {
            current = queue.length > 0 ? queue.shift() : null
        }
    }
    else if (queue.length > 0) {
        current = queue.shift()
    }
}, 1000)

// Saves new task in the queue
function createTask() {
    let task = document.querySelector('#task').value
    let due = document.querySelector('#due').value

    let target = setDate(due)

    queue.push({
        task: task, // To Do string
        target: target, // datetime
        formattedTarget: format(target, true) // string format
    })
}

// Creates a new datetime object with the deadline time
function setDate(due) {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let hour = Number(due.substring(0, due.indexOf(':')))
    let min = Number(due.substring(due.indexOf(':') + 1))
    return new Date(year, month, day, hour, min)
}

// Formats the datetime object into a string to display
function format(dt, timeZone) {
    let hrs = Math.floor((dt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let mins = Math.floor((dt % (1000 * 60 * 60)) / (1000 * 60))
    let secs = Math.floor((dt % (1000 * 60)) / 1000)

    if (timeZone) {
        let zoneInMins = dt.getTimezoneOffset()
        hrs = hrs - zoneInMins / 60
    }

    hrs = (hrs < 10 ? '0' : '') + hrs
    mins = (mins < 10 ? '0' : '') + mins
    secs = (secs < 10 ? '0' : '') + secs

    return `${hrs}:${mins}:${secs}`
}