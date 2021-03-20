const table = document.getElementById('table');
const fragment = document.createDocumentFragment();


// ------- CON XMLHttpRequest --------------------


// xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// xhr.addEventListener('load', (data) =>{
//     const dataJson = JSON.parse(data.target.response);
//     console.log(dataJson);

//     for(let i of dataJson){
//         const newTR = document.createElement('TR');
//         const newID = document.createElement('TD');
//         const newName = document.createElement('TD');
//         const newUsername = document.createElement('TD');
//         const newEmail = document.createElement('TD');
//         newID.textContent=i.id;
//         newName.textContent=i.name;
//         newUsername.textContent=i.username;
//         newEmail.textContent=i.email;
       
//         const newStreet = document.createElement('TD');
//         const newSuite = document.createElement('TD');
//         const newCity = document.createElement('TD');
//         const newZipcode = document.createElement('TD');
//         newStreet.textContent=i.address.street;
//         newSuite.textContent=i.address.suite;
//         newCity.textContent=i.address.city;
//         newZipcode.textContent=i.address.zipcode;

//         newTR.append(newID, newName, newUsername, newEmail,
//             newStreet, newSuite, newCity, newZipcode);
//         fragment.append(newTR)
//     }
//     table.append(fragment);

// })

// xhr.send();





// -------------------------- CON FETCH
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(dataJson=>{
//         for(let i of dataJson){
//             const newTR = document.createElement('TR');
//             const newID = document.createElement('TD');
//             const newName = document.createElement('TD');
//             const newUsername = document.createElement('TD');
//             const newEmail = document.createElement('TD');
//             newID.textContent=i.id;
//             newName.textContent=i.name;
//             newUsername.textContent=i.username;
//             newEmail.textContent=i.email;
            
//             const newStreet = document.createElement('TD');
//             const newSuite = document.createElement('TD');
//             const newCity = document.createElement('TD');
//             const newZipcode = document.createElement('TD');
//             newStreet.textContent=i.address.street;
//             newSuite.textContent=i.address.suite;
//             newCity.textContent=i.address.city;
//             newZipcode.textContent=i.address.zipcode;
            
//             newTR.append(newID, newName, newUsername, newEmail,
//                 newStreet, newSuite, newCity, newZipcode);
//                 fragment.append(newTR)
//             }
//             table.append(fragment);
//         })







// ----------------- con AXIOS------------------

// ENVIO DE DATOS CON POST
// axios({
//     method:'POST',
//     url: 'https://jsonplaceholder.typicode.com/users',
//      data:{
            // name:"juan",
            // username:"hjklkl",
//} 
// })

// PETICIONES GET
axios({
    method:'GET',
    url: 'https://jsonplaceholder.typicode.com/users'
})
    .then(response => {
        for(let i of response.data){
            const newTR = document.createElement('TR');
            const newID = document.createElement('TD');
            const newName = document.createElement('TD');
            const newUsername = document.createElement('TD');
            const newEmail = document.createElement('TD');
            newID.textContent=i.id;
            newName.textContent=i.name;
            newUsername.textContent=i.username;
            newEmail.textContent=i.email;
            
            const newStreet = document.createElement('TD');
            const newSuite = document.createElement('TD');
            const newCity = document.createElement('TD');
            const newZipcode = document.createElement('TD');
            newStreet.textContent=i.address.street;
            newSuite.textContent=i.address.suite;
            newCity.textContent=i.address.city;
            newZipcode.textContent=i.address.zipcode;
            
            newTR.append(newID, newName, newUsername, newEmail,
                newStreet, newSuite, newCity, newZipcode);
                fragment.append(newTR)
            }
            table.append(fragment);
    })