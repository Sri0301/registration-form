function fetchData(){
	fetch('https://reqres.in/api/users?delay=3').then(response => {
		if (response) {
			hideSpinner();
		}
		if(!response.ok){
			throw Error('ERROR')
		}
		return response.json();
	}).then(data =>{
		console.log(data.data);
		const html = data.data.map(user => {
			return '<div class="container"><div class="row align-items-start"><div class="col-sm"><div class="user"><p><img src="'+user.avatar+'" alt="'+user.first_name+'"></p> <p><b>ID:</b> '+user.id+'</p> <p><b>First Name:</b> '+user.first_name+'</p> <p><b>Last Name:</b> '+user.last_name+'</p> <p><b>Email:</b> '+user.email+'</p></div></div></div></div>';
		}).join("");
		document.querySelector('#app').insertAdjacentHTML('afterbegin',html)
	}).catch(error => {
		console.log(error);
	});
}
fetchData();

function hideSpinner() {
    document.getElementById('spinner')
            .style.display = 'none';
} 