let UserIdAutoIncrement;


class User {

    UserId: string;
    UserName: string;
    Address:string;
    UserPhoneNumber: number;
    

    constructor(paramUserName: string, paramAddress:string, paramUserPhoneNumber: number) {

        UserIdAutoIncrement++;

        this.UserId = "EB" + UserIdAutoIncrement.toString();

        this.UserName = paramUserName;
        this.Address=paramAddress;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
}
class BillDetails{
    
    Date:Date;
    UnitsRecorded:number;

    constructor(paramDate:Date,paramUnitsRecorded:number){

        this.Date=paramDate;
        this.UnitsRecorded=paramUnitsRecorded;
        
    }

}


function Newuser(){
    let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="hidden";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="visible";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="hidden";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="hidden";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="hidden";
    let getname= (<HTMLInputElement>document.getElementById("Showhistorydiv")).value;
    let getphone=(<HTMLInputElement>document.getElementById("Showhistorydiv")).value;
    let getAddress=(<HTMLInputElement>document.getElementById("Showhistorydiv")).value;
    let regexname=/^a-zA-Z$/;
    let regexphone=/^\d$/;
    if(getname==""|| getphone==""||getAddress==""){
        alert("fill all the Required feilds");
    }else if( ){

    }

}
function Login(){
    let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="hidden";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="visible";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="hidden";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="hidden";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="hidden";
    let Showhistorydiv=(document.getElementById("Showhistorydiv") as HTMLElement).style.visibility="hidden";


}
function Admin(){
    let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="hidden";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="hidden";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="visible";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="hidden";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="hidden";
    let Showhistorydiv=(document.getElementById("Showhistorydiv") as HTMLElement).style.visibility="hidden";

}
function Add() {
    if(){
          let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="visible";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="hidden";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="hidden";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="hidden";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="hidden";
    let Showhistorydiv=(document.getElementById("Showhistorydiv") as HTMLElement).style.visibility="hidden";
}
    }
  

function Adminlogin(){
    let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="hidden";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="hidden";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="hidden";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="hidden";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="visible";
    let Showhistorydiv=(document.getElementById("Showhistorydiv") as HTMLElement).style.visibility="hidden";

} 
function Userlogin(){
    let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="hidden";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="hidden";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="hidden";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="visible";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="hidden";
    let Showhistorydiv=(document.getElementById("Showhistorydiv") as HTMLElement).style.visibility="hidden";

}
function Showhistory(){
    let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="hidden";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="hidden";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="hidden";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="hidden";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="hidden";
    let Showhistorydiv=(document.getElementById("Showhistorydiv") as HTMLElement).style.visibility="visible";
    
function AddUnits(){


    alert("Units are sucessfully added to the user");

    let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="visible";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="hidden";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="hidden";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="hidden";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="hidden";
    let Showhistorydiv=(document.getElementById("Showhistorydiv") as HTMLElement).style.visibility="hidden";
}//
function pay(){


    alert("Your payment is successful!!!!");
    
    let homediv = (document.getElementById("homediv") as HTMLElement).style.visibility="visible";
    let userlogindiv = (document.getElementById("userlogindiv") as HTMLElement).style.visibility="hidden";
    let Adminlogindiv = (document.getElementById("Adminlogindiv") as HTMLElement).style.visibility="hidden";
    let Existinguserlogindivdiv = (document.getElementById("Existinguserlogindiv") as HTMLElement).style.visibility="hidden";
    let Existingpagediv = (document.getElementById("Existingpagediv") as HTMLElement).style.visibility="hidden";
    let mainAdminpagediv = (document.getElementById("Adminpage") as HTMLElement).style.visibility="hidden";
    let Showhistorydiv=(document.getElementById("Showhistorydiv") as HTMLElement).style.visibility="hidden";
    
}//

}