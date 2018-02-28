/* global require */
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                'IE >= 10',
                'Safari >= 8',
                'last 2 Chrome versions',
                'last 2 ChromeAndroid versions',
                'last 2 Firefox versions',
                'last 2 Safari versions',
                'iOS >= 8',
                'Android >= 4.3'
            ]
        })
    ]
};
