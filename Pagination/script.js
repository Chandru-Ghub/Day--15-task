////Usin fetsch method 
let k = fetch('https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json').then((data) =>{
    // console.log(data);
    return data.json();
}).then((data)=>{
    console.log(data);
  
itemsPerPage = 15;

//Function to renderData
function renderData(page){
let startIndex = (page -1)*itemsPerPage;
let endIndex = (startIndex + itemsPerPage);
let productPerPage = data.slice(startIndex,endIndex);

tableData = '';
console.log(productPerPage);
productPerPage.forEach((a)=>{

        tableData +=  
        `<tr>  
            <td > ${a.id}</td>
            <td> ${a.name}</td>
            <td>${a.email}</td>  
        </tr>`
}) 
   

   document.getElementById('table_body').innerHTML = tableData;
}

////Function to render the pagination
function renderPaginaton(page){

noOfpages = document.getElementById('pages')
noOfpages.innerHTML = `${page}`

let prevPage = document.getElementById('prev');
let nextPage = document.getElementById('next');

prevPage.style.display = "inline-block";
nextPage.style.display = "inline-block";

if(page == 1){
    prevPage.style.display = 'none';
  
}
if(page == Math.ceil(data.length / itemsPerPage)){
   nextPage.style.display = 'none';
}

}

let currentPage = 1;
renderData(currentPage);
renderPaginaton(currentPage);

document.getElementById('prev').addEventListener('click',function(){
    currentPage--;
    renderData(currentPage);
    renderPaginaton(currentPage);
})
document.getElementById('next').addEventListener('click',function(){
    currentPage++;
    renderData(currentPage);
    renderPaginaton(currentPage);
})


}).catch((err)=>{
    console.log(err)
})






