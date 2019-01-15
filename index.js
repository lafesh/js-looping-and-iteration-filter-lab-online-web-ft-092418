// Code your solution in this file
function findMatching(drivers, string) {
    console.log(drivers)
    const name = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return name
}

function fuzzyMatch(drivers, string) {
    let len = string.length
    const names = drivers.filter(driver => driver.slice(0, len) === string)
    return names
}

function matchName(drivers, string) {
    let list = []
    for (const name of drivers) {
        if (name.name === string) {
            list.push(name)
        }       
    }
    return list
}
