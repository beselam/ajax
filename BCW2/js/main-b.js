// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg">
        <img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.

showImages();

async function showImages() {
    let con = document.querySelector('ul');
    const response = await fetch('images.json');
    let img = await response.json();
    img.forEach(element => {
        con. innerHTML += `<li>
                <figure>
                    <a href="img/original/${element.mediaUrl}">
                    <img src="img/original/${element.mediaUrl}"></a>
                    <figcaption>
                        <h3>${element.mediaTitle}</h3>
                    </figcaption>
                </figure>
       </li>`

   
    });
}
