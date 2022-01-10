

// fetch(`https://api.postalpincode.in/pincode/441225`)
// .then((res) => res.json())
// .then((data) => initialize(data))
// .catch((err) => console.log("Error:", err.message));


document.querySelector(".info").innerHTML =
    `<label for="catSearch"><h1>Enter a Pincode you want to know about</h1></label>
 <input type="search" name="search" id="catSearch"  placeholder="Search">
 &nbsp<button onclick ="Number(catSearch.value)" type="button" class="btn btn-info">Search</button>`


 document.querySelector(".container").innerHTML = ` <H1>Result</H1>`;

function Number(value) {
     console.log(value)
     var code = "https://api.postalpincode.in/pincode/" + value;
     console.log(code[0].Message)

    // fetch(`http://api.postalpincode.in/pincode/` + value)
    fetch(code)
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => console.log("Error:", err.message));

    
//    frtch(`https://api.postalpincode.in/pincode/441225`)

        // .then((res) => res.json())
        // .then((data) => initialize(data))
        // .catch((err) => console.log("Error:", err.message));

        
    function initialize(Data) {
        console.log(Data.Message);
        document.querySelector(".container").innerHTML = `
                                                 <h1>Pincode:${Data[0].PostOffice[0].Pincode}</h1>
                                                 <h1>Name:${Data[0].PostOffice[0].Name}</h1>
                                                 <h1>District:${Data[0].PostOffice[0].District}</h1>
                                                 <h1>Region:${Data[0].PostOffice[0].Region}</h1>
                                                 <h1>State:${Data[0].PostOffice[0].State}</h1>
                                                 <h1>Country:${Data[0].PostOffice[0].Country}</h1>
                                                    
                                                
                                                  `
    }

}


