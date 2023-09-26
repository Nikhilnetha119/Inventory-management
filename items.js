var submitButton = document.getElementById("submit");

submitButton.addEventListener('click', function(){
    const itemname = document.getElementById("itemname")
    const price = document.getElementById("price")
    const description = document.getElementById("description")
    const quantity = document.getElementById("quantity")

    const items = {
        itemname: itemname,
        price : price,
        description: description,
        quantity: quantity
    }

    axios.post("https://crudcrud.com/api/34ddcf32f09d44ee84d1565954f2c12a/bookappointment", items)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

    axios.get("https://crudcrud.com/api/34ddcf32f09d44ee84d1565954f2c12a/bookappointment")
    .then((response) => {
        console.log(response)
        Show(response.data)
    })
    .catch((error) => {
        console.log(error)
    })


    alert("Items added successfully.")
})

function Show(lists) {
    const parentChild = document.getElementById("itemlists")
    const child = document.createElement('li')
    child.textContent = lists.itemname + ' - ' + lists.description + ' - ' + lists.price + ' - ' + lists.quantity

    parentChild.appendChild(child);
}