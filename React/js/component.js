function formatUser(user) {
	return user.FirstName + user.SecondName
}

function func(user) {
	if (user) {
		return <h1>Добрый день {user}!</h1>
	}
	return false
}

const user = {
	FirstName: 'Илья',
	SecondName: ' Петров',
}

const element2 = <h1>Здравствуйте, {formatUser(user)}!</h1>

const name = 'Полина'
const element = <h1>Здравствуй, {name}!</h1>
ReactDOM.render(element2, element, document.getElementById('root'))
