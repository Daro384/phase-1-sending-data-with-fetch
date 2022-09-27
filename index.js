// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({Daro:"Joffan98@gmail.com"})
// }

// console.log()

// fetch("http://localhost:3000/users", configurationObject)
// .then(resp => resp.json())
// .then(data => console.log(data))



const submitData = (myName, myEmail) => {
    const emailObject = {name:myName, email:myEmail}
    const emailSubmission = {
        method: "POST",
        headers: {
            "content-type":"application/json",
            "accept": "application/json",
        },
        body: JSON.stringify(emailObject)
    }

    return fetch("http://localhost:3000/users", emailSubmission)
    .then(resp => resp.json())
    .then(data => handleRequest(data.id))
    .catch(error => handleRequest(error.message))
}

const handleRequest = text => {
    const data = document.createElement("p").textContent = text
    document.querySelector("body").append(data)
}