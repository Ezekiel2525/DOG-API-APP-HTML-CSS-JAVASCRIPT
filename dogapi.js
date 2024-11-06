const dogimgDiv = document.getElementById('dogimage');
const addBtn = document.getElementById('addbtn');
let dogapi = 'https://dog.ceo/api/breeds/image/random'

const getDogpic = () => {
    const dogApp = fetch(dogapi);

    dogApp.then(response => response.json())
    .then(json =>{
        dogimgDiv.innerHTML = `<img class="dogimg" src ="${json.message} ">`;
    })

}

addBtn.addEventListener('click', getDogpic);
