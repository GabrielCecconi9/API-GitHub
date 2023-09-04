const userName = 'seu_nome_de_usuário';
const apiUrl = `https://github.com/GabrielCecconi9`;

async function fetchGitHubUserData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    
    const userData = await response.json();

    
    const avatarUrl = userData.avatar_url;
    const nome = userData.name;
    const username = userData.login;
    const repositorios = userData.public_repos;
    const seguidores = userData.followers;
    const seguindo = userData.following;
    const repositoriosUrl = userData.repos_url;

    console.log('Imagem do Avatar:', avatarUrl);
    console.log('Nome:', nome);
    console.log('Username:', username);
    console.log('Quantidade de Repositórios:', repositorios);
    console.log('Quantidade de Seguidores:', seguidores);
    console.log('Quantidade de Usuários Seguindo:', seguindo);
    console.log('Link para Repositórios:', repositoriosUrl);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}


fetchGitHubUserData();
