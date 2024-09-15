let hash = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

function randomColor() {
    
let firstCode = Math.floor(Math.random() * 15);
let secondCode = Math.floor(Math.random() * 15);
let thirdCode = Math.floor(Math.random() * 15);
let fourthCode = Math.floor(Math.random() * 15);
let fifthCode = Math.floor(Math.random() * 15);
let sixthCode = Math.floor(Math.random() * 15);

let hashColorCode = "#"+hash[firstCode]+hash[secondCode]+hash[thirdCode]+hash[fourthCode]+hash[fifthCode]+hash[sixthCode]
return hashColorCode

}

let boxes = document.getElementsByClassName("box")

// boxes[0].style.backgroundColor = randomColor()
// boxes[0].style.color = randomColor()

// boxes[1].style.backgroundColor = randomColor()
// boxes[1].style.color = randomColor()

// boxes[2].style.backgroundColor = randomColor()
// boxes[2].style.color = randomColor()

// boxes[3].style.backgroundColor = randomColor()
// boxes[3].style.color = randomColor()

// boxes[4].style.backgroundColor = randomColor()
// boxes[4].style.color = randomColor()

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = randomColor()
    e.style.color = randomColor()
})
