var memberNameInput=document.getElementById('memberName');
var descriptionPriceInput=document.getElementById('descriptionPrice');
var startDateInput=document.getElementById('startDate');
var endDateInput=document.getElementById('endDate');
var memberContainer=[];
if(localStorage.getItem('members') !=null){
    memberContainer=JSON.parse(localStorage.getItem('members'));
    displayMember();

}
function addmember(){
if(memberNameInput.value !="" && descriptionPriceInput.value !="" && startDateInput.value !="" && endDateInput.value !=""){
    var memberObj={
        name:memberNameInput.value,
        price:descriptionPriceInput.value,
        start:startDateInput.value,
        end:endDateInput.value
    }
    memberContainer.push(memberObj);
    localStorage.setItem('members',JSON.stringify(memberContainer));
    displayMember();
    clearInputs();

}else{
    alert("please enter all data");
}
  
}
function displayMember(){
      var cartona=``;
      for(var i=0;i<memberContainer.length;i++){
        cartona +=`<tr>
             <td>
                ${i+1}
             </td>
            <td>
                ${memberContainer[i].name}
            </td>
            <td>
                ${memberContainer[i].price}
            </td>
            <td>
                ${memberContainer[i].start}
            </td>
            <td>
                ${memberContainer[i].end}
            </td>
            <td>
            <button class="btn btn-danger btn-sm" onclick="deleteMember(${i})">Delete</button>
            </td>
            
         </tr>`
      }
      document.getElementById('demo').innerHTML=cartona;
}
var keyWord=document.getElementById('search');
function searchMember(keyWord){
    console.log(keyWord);
    var cartona=``;
    
      for(var i=0;i<memberContainer.length;i++){
        if(memberContainer[i].name.toLowerCase().startsWith(keyWord.toLowerCase())){
           
            cartona +=`<tr  class=" text-light">
            <td >
               ${i+1}
            </td>
           <td>
               ${memberContainer[i].name}
           </td>
           <td>
               ${memberContainer[i].price}
           </td>
           <td>
               ${memberContainer[i].start}
           </td>
           <td>
               ${memberContainer[i].end}
           </td>
           <td>
           <button class="btn btn-danger btn-sm" onclick="deleteMember(${i})">Delete</button>
           </td>
         
        </tr>`
        }
 
      }
      document.getElementById('demo').innerHTML=cartona;
}
function deleteMember(Index){
    let checkDelete=alert(`You deleted member number ${memberContainer[Index].name} end date ${memberContainer[Index].end}`);
    memberContainer.splice(Index,1);
    localStorage.setItem('members',JSON.stringify(memberContainer));
    displayMember();
}
 

function clearInputs(){
    memberNameInput.value="";
    descriptionPriceInput.value="";
    startDateInput.value="";
    endDateInput.value="";
}
