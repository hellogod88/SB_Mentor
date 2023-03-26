const container = document.querySelector('.search-container');
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	results = fruit.filter((data)=>{
		//filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
		return data.toLocaleLowerCase().startsWith(str.toLocaleLowerCase());
	});
	results = results.map((data)=>{
		// passing return data inside li tag
		return data = `<li>${data}</li>`;
	});

	return results;
}

function searchHandler(e) {
	let userData = e.target.value;
	console.log(userData);
	if(userData) {
		console.log(suggestions);
		container.classList.add("active");
		let results = search(userData);
		let inputVal = input.value;
		showSuggestions(results, inputVal);
        let allList = suggestions.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
			console.log(allList[i]);
            allList[i].setAttribute("onclick", "useSuggestion(this)");
        }
	} else {
		container.classList.remove("active");
	}
}

function showSuggestions(results, inputVal) {
    let listData;
    if(!results.length){
        listData = `<li>${inputVal}</li>`;
    }else{
      listData = results.join('');
    }
    suggestions.innerHTML = listData;
}

function useSuggestion(e) {
    let selectData = e.textContent;
	console.log('data : ' + selectData);
    input.value = selectData;
    // icon.onclick = ()=>{
    //     webLink = `https://www.google.com/search?q=${selectData}`;
    //     linkTag.setAttribute("href", webLink);
    //     linkTag.click();
    // }
    container.classList.remove("active");
}

input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);