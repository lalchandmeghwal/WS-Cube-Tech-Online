const form = document.querySelector('form');
const table = document.querySelector('#showData');
const search = document.querySelector('#search');


const notiSuccess = document.querySelector('#notiSuccess');
const err = document.querySelector('#err');

const popup = document.querySelector('.popup');
const yes = document.querySelector('.popup .yes');
const no = document.querySelector('.popup .no');

const submitBtn = document.querySelector('form button');


const tableContainer = document.querySelector('.tableContainer');



let editIndex = null;


const notifiTime = 4000;



const data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];





form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
   

    const obj = { name, email, phone };





    if (!name) {
        err.innerHTML = 'Please enter your name';
        err.style.top = '10px';

        setTimeout(() => {
            err.style.top = '-100px';
        }, notifiTime);
        return;
    };
    if (!email) {
        err.innerHTML = 'Please enter your email';
        err.style.top = '10px';

        setTimeout(() => {
            err.style.top = '-100px';
        }, notifiTime);
        return;
    };
    if (!phone) {
        err.innerHTML = 'Please enter your phone';
        err.style.top = '10px';

        setTimeout(() => {
            err.style.top = '-100px';
        }, notifiTime);
        return;
    };




    // const emailExist = data.find((item) => item.email === email);
    // if (emailExist) {
    //     err.innerHTML = 'Email ID already exists';
    //     err.style.top = '10px';

    //     setTimeout(() => {
    //         err.style.top = '-100px';
    //     }, 4000);
    //     return;
    // };

    // data.push(obj);



    if (editIndex === null) {
        const emailExist = data.find(item => item.email === email);
        if (emailExist) {
            err.innerHTML = 'Email already exists';
            err.style.top = '10px';
            setTimeout(() => err.style.top = '-100px', notifiTime);
            return;
        };

        data.push(obj);


        // notification
        notiSuccess.style.top = '10px';
        notiSuccess.innerHTML = 'Data Sava Successfully'
        setTimeout(() => {
            notiSuccess.style.top = '-100px';
        }, notifiTime);


    } else {
        // updata code
        // const emailExist = data.find((item) => item.email === email);

        // if (emailExist) {
        //     err.innerHTML = 'Email already exists';
        //     err.style.top = '10px';
        //     setTimeout(() => err.style.top = '-100px', 3000);
        //     return;

        // };


        data[editIndex] = obj; // update

        notiSuccess.style.top = '10px';
        notiSuccess.innerHTML = 'Data Update Successfully'

        setTimeout(() => {
            notiSuccess.style.top = '-100px';
        }, notifiTime);

        editIndex = null;
        submitBtn.innerHTML = 'Submit';
    }


    localStorage.setItem('data', JSON.stringify(data));

    showData(data);
    form.reset();

});

// show Data

const showData = (dataStore) => {
    table.innerHTML = '';

    dataStore.map((item, i) => {
        const { name, email, phone, img } = item;
        table.innerHTML += ` <tr>
                    <td>${i+1}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>
                        <span id="edit"    onclick="editData(${i})">Edit</span>
                        <span id="deleteBtn"   onclick="deleteData(${i})">Delete</span>
                    </td>
                </tr>`

    });

    if (data.length  < 0) {
        tableContainer.style.display = 'none';
    };
};

showData(data);


// search Data

search.addEventListener('input', () => {
    const searchValue = search.value.toLocaleLowerCase().trim();


    const searchData = data.filter(item => {
        return item.name.toLocaleLowerCase().includes(searchValue) || item.email.toLocaleLowerCase().includes(searchValue) || item.phone.toLocaleLowerCase().includes(searchValue) ;
    });
    showData(searchData);
});



// delete
let deleteIndex = null;

const deleteData = (index) => {
    deleteIndex = index;   // index store करो
    popup.style.display = 'flex';
    
   
};

yes.addEventListener('click', () => {
    if (deleteIndex !== null) {
        data.splice(deleteIndex, 1);
        localStorage.setItem('data', JSON.stringify(data));
        showData(data);
        deleteIndex = null;
    }
    popup.style.display = 'none';
});

no.addEventListener('click', () => {
    popup.style.display = 'none';
    deleteIndex = null;
});


// edit data

const editData = (i) => {
    const item = data[i]; 

    document.getElementById('name').value = item.name;
    document.getElementById('email').value = item.email;
    document.getElementById('phone').value = item.phone;


    submitBtn.innerHTML = 'Update';
    editIndex = i;


};




