"use strict";

// function for our list view - all under async
async function getAllRecords() {
  let getResultElement = document.getElementById("<ID of where polaroids will go>");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patuFgvh6HNoEtrvI.d64de38cad8e4bbb6bf102bb496823a9bef1ca93d4f5671536f5c74dce153463`,
    },
  };

// fetch data and place into webpage dynamically for List View
  await fetch(
    `https://api.airtable.com/v0/appqAeU9IcXvLlgM3/tblEfDOW7uydXhVR6`,
    options
  )
    .then((response) => response.json()) // there is a valid response, proceed
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear container HTML

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) { // for each table row, create and append HTML listing
        let name = data.records[i].fields["fldC1Jl7tonru5mKS"]; 
		let image = data.records[i].fields["fldtUfZIJaVhiivkn"];
		// And any other things we would like to add. Follow format of:
		// let <internal variable name> = data.records[i].fields["<field name>"];
		
// NEWHTML will be finalized by FrontEnd team. here is an early placeholder version
        newHtml += `
			<div class="polaroid">
				<div class="headshot">
					${image
						? `<img src="${image[0].url}" alt="Image of ${name}.">`
						: ``
					}
				</div>
				<div class="caption">
					${name}
				</div>
			</div>
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

getAllRecords();