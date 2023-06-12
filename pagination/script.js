

  

let k = fetch('https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json').then((data) =>{
    // console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData);

 

    
    tableData = '';
    len = objectData.length;
    a = objectData;

    const bag = [];

    for(i=0;i<len;i++){
    // objectData.forEach((a)=>{
        tableData +=  `<tr>
        
        <td> ${a[i].id}</td>
        <td> ${a[i].name}</td>
        <td>${a[i].email}</td>
        
    </tr>`
   if(i==19){
    break
   }
   
}
   document.getElementById('table_body').innerHTML = tableData;
 

}).catch((err)=>{
    console.log(err)
})






