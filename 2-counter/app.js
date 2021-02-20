// set inital value to zero
let count = 2;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns)

// for (let i = 0; i < btns.length; i++) {
//   // btn.addEventListener()
// }
function addMadLibs(){
  const companyName = companies[Math.floor(Math.random() * companies.length)]
  const firstLetter = companyName.charAt(0)
  const companyString = "My company is a" + ((vowels.indexOf(firstLetter) > -1) ? "n " : " ") + companyName + " for " + animals[Math.floor(Math.random() * animals.length)] + "s!"
  //outputDiv.innerHTML += companyString
  return companyString
}


btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      //count--;
      value.textContent = addMadLibs()
    } else if (styles.contains("increase")) {
<<<<<<< HEAD
      //count *= 2;
      // count = count * 2
      value.textContent = addMadLibs()
=======
      count *= 2;
      // count = count * 2
>>>>>>> 872b5812c964e5594f44efe31294acb030d5ab1e
    } else {
      value.textContent = ""

      //count = 0;
    }

    //if (count > 0) {
    //  value.style.color = "green";
    //}
    //if (count < 0) {
    //  value.style.color = "red";
    //}
    //if (count === 0) {
    // value.style.color = "#222";
    //}
    //value.textContent = count;
  });
});
