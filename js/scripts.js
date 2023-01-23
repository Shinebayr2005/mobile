const bang = document.querySelector(".mobile-container");


function render(){
    characters.forEach( el => {
        bang.innerHTML += `
            <div class="mobile">
                <img src="${el.img}" alt="" height="60%" width="80%">
                <p>Name: ${el.Name} </p>
                <p>skins: ${el.Skins}</p>
                <p>role: ${el.Role}</p>
                <p>Age: ${el.Age}</p>
                <p>specialties: ${el.Specialties}  </p>
                
            </div>  
        `
    });
    console.log("hello");
}
render();