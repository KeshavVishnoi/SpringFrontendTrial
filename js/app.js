// import axios from 'axios';

const dataT = document.querySelector('.data');


console.log("testing shitss");

// axios.get('https://jsonplaceholder.typicode.com/posts').then( res => {
//     console.log(res);
//     res.data.forEach(e => {
//         let el = document.createElement('div');
//         el.innerHTML = JSON.stringify(e);
//         // console.log(typeof el)
//         dataT.insertAdjacentElement('beforeend', el)
//     })
// })
//Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned

// axios.post('http://localhost:8080/addPerson', [{"name": "KV"},{"hi":"bye"}])
// .then( res => {
//     console.log(res.data)
// })
// ;

const postData = async () => {
    let data = await axios.post('http://localhost:8080/addPerson', {"id": 1 ,"name": "KV"}).then(res => res.data);
    console.log(data);
}

postData();




