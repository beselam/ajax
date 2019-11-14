// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element


showImages();
async function showImages(){
    let con = document.querySelector('ul');
    const response = await fetch('images.json');
    let img = await response.json();
    console.log(img);
    img.forEach(element => {
       let list =document.createElement('li');
       let fig = document.createElement('figure');
       let a = document.createElement('a');
       a.href= 'img'+'/'+'original'+'/'+element.mediaUrl;
       let img = document.createElement('img');
       img.src='img'+'/'+'original'+'/'+element.mediaUrl;
       let figc = document.createElement('figcaption');
       let head = document.createElement('h3');
       head.innerHTML = element.mediaTitle;
       
       a.appendChild(img);
       figc.appendChild(head);
       fig.appendChild(a);
       fig.appendChild(figc);
       list.appendChild(fig);
       con.appendChild(list);

       
        
    });
    
}
