var ham=document.getElementById("hamburger");
var navlist=document.getElementsByClassName("navlist");
var navbar=document.getElementsByClassName("navbar");
var dropdown=document.getElementsByClassName("dropdown-options")

var i=1;
function navigation(){
    if(i%2==0){
        navlist[0].classList.remove('navlist-show');
        navlist[0].classList.add('navlist-hide');
        navbar[0].classList.add('navbar-height-dec');
        navbar[0].classList.remove('navbar-height');
        // ham.classList.remove('ham-position');
        i++;
    }
    else{
        navlist[0].classList.remove('navlist-hide');
        navlist[0].classList.add('navlist-show');
        navbar[0].classList.add('navbar-height');
        navbar[0].classList.remove('navbar-height-dec');
        // ham.classList.add('ham-position');
        i++;
    }
    console.log(i);
}
var j=1;
function about(){
    if(j%2==0){
        dropdown[0].classList.remove('dropdown-height');
        j++;
    }
    else{
        dropdown[0].classList.add('dropdown-height');
        j++;
    }
    
}