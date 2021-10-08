

var images=["https://images-na.ssl-images-amazon.com/images/I/51KNpAKei-L.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ilRkXbR2SHt56n05LJ3wIffKNOKrhSPcUA&usqp=CAU" , 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmRVZWi2En1p8n4nLmXdxXBOzTaOqjAzOtw&usqp=CAU" ,
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuQI3pZZv_V6j9uVzInzXGe5D6mgavxsjww&usqp=CAU" , 
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUBfiq2PbQGumZiBRbb5aME52lsUfxfgDoQ&usqp=CAU"]

     var names=[
        "Family Book", "Dad" , "Mom" , "Bro" , "Me"];
     
var i = 0;
function update() {
    i++;
var number_of_family_members_in_array = 4;
if (i > number_of_family_members_in_array)
{  
i = 0;
}
var updatedImage = images[i];
var updatednames = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatednames;
}