module.exports = {
    // ======================================================
    // Overrides when NODE_ENV === 'development'
    // ======================================================
    development : (config) => ({
        api: 'https://api.alysei.com/api', //process.env.API_ENDPOINT,
        image_url:"https://api.alysei.com"
    }),
    production : (config) => ({
        api: 'https://api.yoursafespaceonline.com/api', //process.env.API_ENDPOINT,
        server_port: 80
    })
};
