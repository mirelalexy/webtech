const apiUrl = "http://localhost:8000/api/";

async function get(url) {
    return (await axios.get(url)).data;
}

async function loadTable() {
    let data = await get(apiUrl + "getList");
    let tableDiv = document.getElementById("tableData");

    if (!data || !tableDiv) return;

    let myHtmlCode = [];
    myHtmlCode.push("<table>");
    myHtmlCode.push("<thead>");
    myHtmlCode.push("<tr> <th hidden> Id </th> <th> Name </th> <th> Age </th>");
    myHtmlCode.push("</thead>");
    myHtmlCode.push("<tbody>");

    for (let item of data){
        myHtmlCode.push(`<tr> <th hidden> ${item.id} </th> <th> ${item.name} </th> <th> ${item.age} </th>`)
    }

    myHtmlCode.push("</tbody>");
    myHtmlCode.push("</table>");

    tableDiv.innerHTML = myHtmlCode.join("");
}

async function getPersonById(id) {
    try {
        let data = await get(apiUrl + "getElement/" + id);
        let resultDiv = document.getElementById("result");

        let person = data[0];
        resultDiv.innerHTML =  `<p>ID: ${person.id}</p>
                                <p>Name: ${person.name}</p>
                                <p>Age: ${person.age}</p>`;
    } catch (err) {
        console.error(err);
    }
}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let id = document.getElementById("id").value;
    if (id) {
        getPersonById(id);
    }
});

loadTable();