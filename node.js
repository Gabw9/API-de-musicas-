// Seu código existente permanece aqui

const musicData = {
    "Lourena": [
        "Bota",
        "Sorrisos e Poesia 14"
    ],
    "L7NNON": [
        "Bota",
        "Sorrisos da Boca"
    ],
    "Matuê": [
        "Bota",
        "Kenny G",
        "Máquina do Tempo"
    ],
    "Teto": [
        "Céu Azul",
        "Balazul"
    ],
    "Dela Cruz": [
        "Afrodite",
        "Vício de Amor"
    ]
};

// Função que simula uma requisição assíncrona
function fetchMusic(artist) {
    return new Promise((resolve, reject) => {
        const songs = musicData[artist];
        setTimeout(() => {
            if (songs) {
                resolve({ artist, songs });
            } else {
                reject(`Artista ${artist} não encontrado.`);
            }
        }, 1000); // Simula um atraso de 1 segundo
    });
}

async function fetchMultipleMusics() {
    const artists = Object.keys(musicData); // Obtém os nomes dos artistas

    const promises = artists.map(artist => fetchMusic(artist));

    try {
        const results = await Promise.all(promises);
        results.forEach(data => {
            console.log(`Artista: ${data.artist}`);
            console.log(`Músicas: ${data.songs.join(', ')}`);
            console.log('--------------------------');
        });
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Função para lidar com o clique do botão
document.getElementById('fetch-button').addEventListener('click', () => {
    alert('Por favor, acesse o console para ver as músicas!');
    fetchMultipleMusics(); // Chama a função para buscar as músicas
});
