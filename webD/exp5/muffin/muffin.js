
function display()
{
    let number=document.getElementById("qt").value
    console.log(number)
    // console.log("hello")
    


    for(x=0 ; x < number;x++) {
        let variable=  " <img src='https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg' width='200px'></img>"
        document.getElementById("display_muffin").innerHTML += variable
    }
    

}
