var UserIdAutoIncrement;
var User = /** @class */ (function () {
    function User(paramUserName, paramAddress, paramUserPhoneNumber) {
        UserIdAutoIncrement++;
        this.UserId = "EB" + UserIdAutoIncrement.toString();
        this.UserName = paramUserName;
        this.Address = paramAddress;
        this.UserPhoneNumber = paramUserPhoneNumber;
    }
    return User;
}());
var BillDetails = /** @class */ (function () {
    function BillDetails(paramDate, paramUnitsRecorded) {
        this.Date = paramDate;
        this.UnitsRecorded = paramUnitsRecorded;
    }
    return BillDetails;
}());
function Newuser() {
    var homediv = document.getElementById("homediv").style.visibility = "hidden";
    var userlogindiv = document.getElementById("userlogindiv").style.visibility = "visible";
    var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "hidden";
    var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
    var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "hidden";
    var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "hidden";
    var getname = document.getElementById("Showhistorydiv").value;
    var getphone = document.getElementById("Showhistorydiv").value;
    var getAddress = document.getElementById("Showhistorydiv").value;
    var regexname = /^a-zA-Z$/;
    var regexphone = /^\d$/;
    if (getname == "" || getphone == "" || getAddress == "") {
        alert("fill all the Required feilds");
    }
    //else if (getname == RegExp.(regexname))
    //    and;
    //{
    //}
}
function Login() {
    var homediv = document.getElementById("homediv").style.visibility = "hidden";
    var userlogindiv = document.getElementById("userlogindiv").style.visibility = "visible";
    var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "hidden";
    var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
    var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "hidden";
    var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "hidden";
    var Showhistorydiv = document.getElementById("Showhistorydiv").style.visibility = "hidden";
}
function Admin() {
    var homediv = document.getElementById("homediv").style.visibility = "hidden";
    var userlogindiv = document.getElementById("userlogindiv").style.visibility = "hidden";
    var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "visible";
    var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
    var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "hidden";
    var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "hidden";
    var Showhistorydiv = document.getElementById("Showhistorydiv").style.visibility = "hidden";
}
function Add() {
    var homediv = document.getElementById("homediv").style.visibility = "visible";
    var userlogindiv = document.getElementById("userlogindiv").style.visibility = "hidden";
    var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "hidden";
    var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
    var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "hidden";
    var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "hidden";
    var Showhistorydiv = document.getElementById("Showhistorydiv").style.visibility = "hidden";
}
function Adminlogin() {
    var homediv = document.getElementById("homediv").style.visibility = "hidden";
    var userlogindiv = document.getElementById("userlogindiv").style.visibility = "hidden";
    var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "hidden";
    var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
    var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "hidden";
    var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "visible";
    var Showhistorydiv = document.getElementById("Showhistorydiv").style.visibility = "hidden";
}
function Userlogin() {
    var homediv = document.getElementById("homediv").style.visibility = "hidden";
    var userlogindiv = document.getElementById("userlogindiv").style.visibility = "hidden";
    var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "hidden";
    var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
    var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "visible";
    var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "hidden";
    var Showhistorydiv = document.getElementById("Showhistorydiv").style.visibility = "hidden";
}
function Showhistory() {
    var homediv = document.getElementById("homediv").style.visibility = "hidden";
    var userlogindiv = document.getElementById("userlogindiv").style.visibility = "hidden";
    var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "hidden";
    var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
    var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "hidden";
    var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "hidden";
    var Showhistorydiv = document.getElementById("Showhistorydiv").style.visibility = "visible";
    function AddUnits() {
        alert("Units are sucessfully added to the user");
        var homediv = document.getElementById("homediv").style.visibility = "visible";
        var userlogindiv = document.getElementById("userlogindiv").style.visibility = "hidden";
        var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "hidden";
        var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
        var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "hidden";
        var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "hidden";
        var Showhistorydiv = document.getElementById("Showhistorydiv").style.visibility = "hidden";
    } //
    function pay() {
        alert("Your payment is successful!!!!");
        var homediv = document.getElementById("homediv").style.visibility = "visible";
        var userlogindiv = document.getElementById("userlogindiv").style.visibility = "hidden";
        var Adminlogindiv = document.getElementById("Adminlogindiv").style.visibility = "hidden";
        var Existinguserlogindivdiv = document.getElementById("Existinguserlogindiv").style.visibility = "hidden";
        var Existingpagediv = document.getElementById("Existingpagediv").style.visibility = "hidden";
        var mainAdminpagediv = document.getElementById("Adminpage").style.visibility = "hidden";
        var Showhistorydiv = document.getElementById("Showhistorydiv").style.visibility = "hidden";
    } //
}
