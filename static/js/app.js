fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
.then(res => res.json())
.then((data) => {
    data.forEach(element => {
        console.log(element)
        document.getElementById("content").innerHTML += `
        <div class="post" style="display: flex; flex-direction: row;">
        <h5>${element.firstName} ${element.lastName}</h5><img src="${element.imageUrl}">
        </div>
        `
        
    });
})