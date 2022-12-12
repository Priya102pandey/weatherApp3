
 function random_function()
 {
     var a=document.getElementById("input").value;
     if(a==="Andhra Pradesh")
     {
         var arr=["Vijayawada","Guntur","Nellore","Kurnool","Kadapa"];
     }
     else if(a==="Assam")
     {
         var arr=["Udalguri","Karimganj"];
     }
     else if(a==="Bihar")
     {
         var arr=["	Patna","Gaya","Muzaffarpur"];
     }
     else if(a==="Chhattisgarh")
     {
         var arr=["Raipur","Bilaspur","Bilaspur"];
     }
     else if(a==="Goa")
     {
         var arr=["Panaji","Mormugao","Margao"];
     }
     else if(a==="Uttar Pradesh")
     {
         var arr=["Allahabad","Ghaziabad","Lucknow","Kanpur"];
     }
     else if(a==="Uttarakhand")
     {
         var arr=["Dehradun","Haridwar","Haridwar"];
     }
  
     var string="";
  
     for(i=0;i<arr.length;i++)
     {
         string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
     }
     document.getElementById("output").innerHTML=string;
    
    }
    // var newName =  document.getElementById("output").value;
 
function GetInfo() {
    var newName =  document.getElementById("output");
    

    // var newName =  document.getElementById("output").value;
    // var cityName = document.getElementById("cityName");
    // cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
.then(response => response.json())
.then(data => {

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML =  Number(data.list[i].main.temp_max - 273.15).toFixed(1) + "°"+"C";
    }


    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon+".png";
    }

    console.log(data)

    function DefaultScreen(){
        document.getElementById("cityInput").defaultValue = "Mumbai";
        GetInfo();
    }
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    
    //Function to get the correct integer for the index of the days array
    function CheckDay(day){
        if(day + d.getDay() > 6){
            return day + d.getDay() - 7;
        }
        else{
            return day + d.getDay();
        }
    }
    
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
        }
    
    


})



.catch(err => alert("Something Is Missing Please Check:"))
}
 


   

