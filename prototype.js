var inheritfrom = Object.create( null )
inheritfrom.capitalizeName = "CAPITALS"

var instructors = Object.create( inheritfrom )
instructors.names = ["Rick","Jarrod","Darren"]


console.log( instructors.capitalizeName )
