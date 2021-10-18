// recuperer les repos gituhub publique et les afficher le container #github

const icon_star = '<i class="fa fa-star"></i>';


fetch('https://api.github.com/users/ezBYK/repos').then(function(response) {
    return response.json();
}
).then(function(data) {
    data.forEach(function(repo) {
        
        var div = document.createElement('div');
        div.classList.add('repo');
        var link = document.createElement('a');
        link.href = repo.html_url;
        link.textContent = repo.name;
        div.appendChild(link);
        var description = document.createElement('p');
        //description.innerHTML = repo.description == null? "" : repo.description + ' (' + (repo.language == null? "" : repo.language + ', ')  + repo.stargazers_count + ' '+')';
        div.appendChild(description);
        document.getElementById('github').appendChild(div);
        // supprimer l'icon de chargement (#github_loading) (attendre 1 seconde pour un effet de chargement vraiment utile)
        setTimeout(function() {
        document.getElementById('github_loading').classList = []
        }, 1000);

    });
}
);
