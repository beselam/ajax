// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
showImages();
 

async function showImages(){
     let con = document.querySelector('ul');
     const response = await fetch('images.html');
     let img = await response.text();
     con.innerHTML = img;
 }
