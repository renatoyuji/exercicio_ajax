document.addEventListener('DOMContentLoaded', function () {
    const nomeElemento = document.querySelector('#nome');
    const usuarioElemento = document.querySelector('#usuario');
    const avatarElemento = document.querySelector('#avatar');
    const repositorioElemento = document.querySelector('#repositorio');
    const seguidoresElemento = document.querySelector('#seguidores');
    const seguindoElemento = document.querySelector('#seguindo');
    const linkElemento = document.querySelector('#link');

    fetch('https://api.github.com/users/renatoyuji')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nomeElemento.innerHTML = json.name;
            usuarioElemento.innerHTML = json.login;
            avatarElemento.src = json.avatar_url;
            seguindoElemento.innerHTML = json.following;
            seguidoresElemento.innerHTML = json.followers;
            repositorioElemento.innerHTML = json.public_repos;
            linkElemento.href = json.html_url;
        })
})