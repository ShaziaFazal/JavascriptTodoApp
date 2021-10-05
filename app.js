let datalist = []
let currentIndex = null

function getData() {
    let list = document.getElementById('collection');
    list.innerHTML = "";
    datalist.forEach((item, index) => {
        list.innerHTML += `
        <li class="d-flex"> ${item}<i style="color:green;" onclick="editTitle(${index})" class="fa fa-pencil ml-auto px-2"></i>
        <i onclick="removeTitle(${index})" class="fa fa-remove px-4" style="color:red;"></i> </li>
     `;
    });
}
function addMore(e) {
    let title = document.getElementById('title').value;
    if (title) {
        datalist.push(title);
    }
    document.getElementById('title').value = " ";
    getData();
}
function update() {
    let editAble = document.getElementById('title');
    datalist[currentIndex] = editAble.value;
    document.getElementById('title').value = " ";
    getData();

}


function removeTitle(e) {
    datalist.splice(e, 1);
    getData();
    updatebtn = false
}

function editTitle(index) {
    currentIndex = index;
    let editAble = document.getElementById('title');
    editAble.value = datalist[index];
}