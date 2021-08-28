

const e = React.createElement;

const showElem = (name) => {
	let names = [];
	
	if(Array.isArray(name)){
	  names = name;
	}
	else{
		names.push(name);
	}
	
	for(let i = 0; i < names.length; i++){
		$(names[i]).fadeIn();
	}
}

const hideElem = (name) => {
	let names = [];
	
	if(Array.isArray(name)){
	  names = name;
	}
	else{
		names.push(name);
	}
	
	for(let i = 0; i < names.length; i++){
		$(names[i]).hide();
	}
}

const ReactRender = (list) => {
	let names = [];
	
	if(Array.isArray(list)){
	  names = list;
	}
	else{
		names.push(list);
	}
	
	for(let i = 0; i < names.length; i++){
		let component = names[i].c, element = document.querySelector(names[i].e);
		ReactDOM.render(e(component), element);
	}
}

