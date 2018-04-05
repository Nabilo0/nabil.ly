// query form
	const form = document.getElementById('query-form');
			// text input field
	const query = document.getElementById('query');
			// ul id="list-data"
	const list = document.getElementById('list-data');
							
				// set onsubmit
		form.onsubmit = function(event){
			event.preventDefault();
			// get value in input field
			// console.log(queryTerm);
			const queryTerm = query.value;
		getTaggedPhotos(queryTerm);
	}

	// function getTaggedPhotos(tagName){
function getTaggedPhotos(tagName){
var url = 'https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=soasij2Cc9orlt3R17QBkWUQJ0enGus2ZjQL9w09BMWcM2mZWC'; 
$(document).ready(function(){
$.ajax({
		url: url,
      type: "GET",
     	  crossDomain: true,
    		  dataType: "jsonp",
      			header:{'Access-Control-Allow-Origin':'https://api.tumblr.com/'},
      		success: function (data) {
				console.log(data.response)
		  list.innerHTML = '';
		const items = data.response;
		let masonry;
	for (var i = 0; i < items.length; i++) {
			// console.log(items[i]);
			const item = items[i];
			if (item.photos != undefined) {
				const altSizes = item.photos[0].alt_sizes
				// const imgSrc = altSizes[altSizes.length - 3].url;
				const imgSrc = item.photos[0].original_size.url;
				const img = document.createElement('img');
				img.src = imgSrc;
				img.onload = function(){
							masonry.layout();		

				}
				const li = document.createElement('li');
				li.appendChild(img);
				// li.innerHTML = imgSrc;
				list.appendChild(li);
		}
		}

		// initialize masonry
 masonry = new Masonry(list,{
		  itemSelector: 'li',
		  // columnWidth: 90,
		  // gutterWidth: 8,

	});
		masonry.layout();		
		}
});
});
};
		
	
	// var url = "https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=OLf2IaO8uSqxy5z2Km0ATopTLaFfE31xSjIX6ephFmvkJ0uVuB"
	// fetch(url, method: 'POST').then(response => response)
 //  .then(json => console.log(json))

	// let url = 'https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=OLf2IaO8uSqxy5z2Km0ATopTLaFfE31xSjIX6ephFmvkJ0uVuB';
	// // fetch(url,{'mode':"no-cors",}).then(resp=>console.log(resp))
	//  fetch(url).then((resp) => resp) // Transform the data into json
 	//  		.then(function(data) {
 	//    // Create and append the li's to the ul
 	//    console.log(data);
 	//    })

  // *************************
        // headers: {  
        //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        // },

	// fetch(url,{
 //        mode:"no-cors",
 //        headers: {  
 //            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
 //        },
 //    })
 //    .then(resp=>console.log(resp))
	// var blob;
	// fetch(url, {'mode':'no-cors'}).then(function(response){ return response}
    // 			console.log(response)
    // 			)
		// fetch(url, {'mode':'no-cors'}).then(function(response) { return response});
    // .then(function(myBlob) {console.log(myBlob.posts);});
	// }


		 // fetch('https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=OLf2IaO8uSqxy5z2Km0ATopTLaFfE31xSjIX6ephFmvkJ0uVuB',{'mode': 'no-cors'}).then(response=>response.json()).then(function(result){
		 // console.log(result);

		// list.innerHTML = '';
		// const items = result.response;
		// for (var i = 0; i < items.length; i++) {
		// 	// console.log(items[i]);
		// 	const item = items[i];
		// 	if (item.photos != undefined) {
		// 		const altSizes = item.photos[0].alt_sizes
		// 		const imgSrc = altSizes[altSizes.length - 3].url;
		// 	// const imgSrc = item.photos[0].original_size.url;
		// 	const img = document.createElement('img');
		// 		img.src = imgSrc;
		// 		const li = document.createElement('li');
		// 		li.appendChild(img);
		// 		// li.innerHTML = imgSrc;
		// 		list.appendChild(li);
			// }
		// }
	// })
// }

	 // getTaggedPhotos("food"); 
	 // 	 getTaggedPhotos("cat"); 