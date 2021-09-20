const name = prompt("Please enter a name: ")
const sillyWord = prompt("Please enter a silly word: ")
const number = prompt("Please enter a number: ")
const adjective = prompt("Please enter first adjective: ")
const noun = prompt("Please enter a noun: ")
const adjective2 = prompt("Please enter another adjective: ")
const relative = prompt("Please enter your relative: ")
const adjective3 = prompt("Please enter another adjective: ")
const verb = prompt("Please enter a verb: ")
const adjective4 = prompt("Please enter another adjective: ")
const adjective5 = prompt("Please enter the last one adjective: ")

const text = document.querySelector(".madlib")
text.textContent = `"Hello my name is astronaut ${name}. I am on my way to planet ${sillyWord}.I will be gone for ${number} days. I am very ${adjective} about the trip but I will miss my ${noun}. I have heard that the atmosphere there is ${adjective2}. Luckily ${relative} packed me a jacket to keep me ${adjective3}. When I land on the planet I will ${verb} for joy. I am ${adjective4} to walk on another planet. I could not be more ${adjective5} for this trip!"`