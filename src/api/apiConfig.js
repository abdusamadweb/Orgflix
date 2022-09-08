const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '651d7ee8d308005bb379a669f0b5bb8b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;