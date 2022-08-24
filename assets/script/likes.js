const key1 = 'count1';
const key2 = 'count2';
const key3 = 'count3';
const key4 = 'count4';
const key5 = 'count5';
const key6 = 'count6';

if(typeof(Storage) !== 'undefined') {
	if(localStorage.getItem(key1) === 'undefined'){
		localStorage.setItem(key1, 0);
	}

	const img = document.querySelector('#img1');
	const count = document.querySelector('#count1');

	count.innerText = localStorage.getItem(key1);
	img.addEventListener('click', function(event){
		let number = localStorage.getItem(key1);
		number++;
		localStorage.setItem(key1, number);
		count.innerText = localStorage.getItem(key1);
	});

	if(localStorage.getItem(key2) === 'undefined'){
		localStorage.setItem(key2, 0);
	}

	const img2 = document.querySelector('#img2');
	const count2 = document.querySelector('#count2');

	count2.innerText = localStorage.getItem(key2);
	img2.addEventListener('click', function(event){
		let number = localStorage.getItem(key2);
		number++;
		localStorage.setItem(key2, number);
		count2.innerText = localStorage.getItem(key2);
		console.log('click');
	});

	if(localStorage.getItem(key3) === 'undefined'){
		localStorage.setItem(key3, 0);
	}

	const img3 = document.querySelector('#img3');
	const count3 = document.querySelector('#count3');

	count3.innerText = localStorage.getItem(key3);
	img3.addEventListener('click', function(event){
		let number = localStorage.getItem(key3);
		number++;
		localStorage.setItem(key3, number);
		count3.innerText = localStorage.getItem(key3);
	});
	
	if(localStorage.getItem(key4) === 'undefined'){
		localStorage.setItem(key4, 0);
	}

	const img4 = document.querySelector('#img4');
	const count4 = document.querySelector('#count4');

	count4.innerText = localStorage.getItem(key4);
	img4.addEventListener('click', function(event){
		let number = localStorage.getItem(key4);
		number++;
		localStorage.setItem(key4, number);
		count4.innerText = localStorage.getItem(key4);
	});

	if(localStorage.getItem(key5) === 'undefined'){
		localStorage.setItem(key5, 0);
	}

	const img5 = document.querySelector('#img5');
	const count5 = document.querySelector('#count5');

	count5.innerText = localStorage.getItem(key5);
	img5.addEventListener('click', function(event){
		let number = localStorage.getItem(key5);
		number++;
		localStorage.setItem(key5, number);
		count5.innerText = localStorage.getItem(key5);
	});

	if(localStorage.getItem(key6) === 'undefined'){
		localStorage.setItem(key6, 0);
	}

	const img6 = document.querySelector('#img6');
	const count6 = document.querySelector('#count6');

	count6.innerText = localStorage.getItem(key6);
	img6.addEventListener('click', function(event){
		let number = localStorage.getItem(key6);
		number++;
		localStorage.setItem(key6, number);
		count6.innerText = localStorage.getItem(key6);
	});

} else {
	alert('Browser tidak mendukung web storage');
}