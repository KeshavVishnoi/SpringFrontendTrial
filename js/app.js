const printData = () => {
    const id = document.getElementById('id');
    const name = document.getElementById('name');
    // console.log(typeof parseInt(id.value) + '         ' + typeof name.value);

    postData({ "id" : parseInt(id.value), "name" : name.value});
}


const subBtn = document.querySelector('form').addEventListener(
    'submit',
    event => {
        // console.log("hi");
        event.preventDefault();
        printData();
    }
    );
    
    
    
    
    const postData = async dataPost => {
        console.log(dataPost);
        let data = await axios.post('http://localhost:8080/addPerson', dataPost).then(res => res.data);
        console.log(data);
    }
    
    // postData();

    console.log("testing shitss");
    
    // import axios from 'axios';
    
    // const dataT = document.querySelector('.data');
    
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

