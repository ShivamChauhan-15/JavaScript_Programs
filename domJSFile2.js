//innerHTML
const headline=document.querySelector(".headline");
console.log(headline.innerHTML);
//we can change inner html as
headline.innerHTML="<h1>Inner html changed</h1";
headline.innerHTML+="<button class=\"btn\">Learn More</button>";
console.log(headline.innerHTML);