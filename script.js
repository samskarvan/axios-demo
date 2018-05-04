const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c118demouser';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(res => {
    console.log(res);
    const { todos } = res.data;
    const table = $('table tbody');

    addToDom(todos, table);
});

const addToDom = (list, container) => {
    const tableRows = list.map((item, index) => {

        const tableData = [
            $(`<td>${index + 1}</td>`),
            $(`<td>${item.title}</td>`),
            item.complete ? $(`<td class="text-success">Yes</td>`) : $(`<td class="text-danger">No</td>`)
        ];

        return
             $('<tr>').append(tableData);
    });

    container.append(tableRows);
};

const toDoItem = {
    title: 'Sam needs to buy chips and guac',
    details: 'get chips and guac for cinco de mayoooo'
};

axios.post(`${BASE_URL}/todos${API_KEY}`, toDoItem).then(res=> {
    console.log('add item response:', res);
}).catch(err=>{
    console.log('hay un error', err.response.data.error);
    console.log(err.message);

    const newError = new Error ('this is the error message');

    console.log('new error:', newError.message);

    throw(newError);
})


// this is from Keith bc he's smart

// const BASE_URL = 'http://api.reactprototypes.com';
// const API_KEY = '?key=c118demouser';

// axios.get(`${BASE_URL}/todos${API_KEY}`)
//     .then( (response) => {
//         console.log(response.data.todos);

//         const listElements = response.data.todos.map( (item, index) => {
//             const tr = document.createElement('tr');
//             const number = document.createElement('td');
//             const title = document.createElement('td');
//             const completed = document.createElement('td');

//             number.innerText = index + 1;
//             title.innerText = item.title;
//             completed.innerText = item.complete;

//             tr.appendChild(number);
//             tr.appendChild(title);
//             tr.appendChild(completed);
//             document.querySelector('.table tbody').appendChild(tr);
//         })
//     });

// const todoItem = {
//     title: 'CERVEZAS POR FAVOR',
//     details: 'He lives the life I\'ve always dreamed of living',
//     complete: true,
// };
// axios.post(`${BASE_URL}/todos${API_KEY}`, todoItem)
//     .then(response => {
//         console.log(response);
//     });