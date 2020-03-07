let password = document.querySelector('#password');
const user = document.querySelector('#upm-id');
const btn = document.querySelector('.btn-primary');
const err = document.querySelector('.error');
const user_pass_err = document.querySelector('.login-error');
const error_text = document.querySelector('.error-text');

btn.addEventListener('click', (e) => {
	e.preventDefault();
	if (user.value == '' && password.value == '') {
		error_text.innerHTML = `
		          <p>Username is required field.</p>
              <p>Password is a required field.</p>`;
		user_pass_err.style.display = 'flex';
	} else if (user.value == '') {
		error_text.innerHTML = `
		          <p>Username is required field.</p>`;
		user_pass_err.style.display = 'flex';
	} else if (password.value == '') {
		error_text.innerHTML = `
              <p>Invalid password. If you forgot your UPM-ID account password, you can reset it. or please contact helpdesk for help.</p>`;
		user_pass_err.style.display = 'flex';
	}
});

password.addEventListener('keyup', () => {
	let word = password.value;
	let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	if (!re.test(word)) {
		showError();
	} else {
		showSuccess();
	}
});

function showError() {
	err.style.display = 'block';
	password.classList.add('err');
}

function showSuccess() {
	err.style.display = 'none';
	password.classList.remove('err');
	password.style.background = '#70ba61';
}
