const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass("resources/scss/main.scss", "css/styles.css")
    .browserSync({
        watch: true,
        server: "public",
        files: "public/**/*.*",
        notify: false,
    })
    .disableNotifications()
    .setPublicPath("public")
    .sourceMaps();
