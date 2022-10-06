import laravel from 'laravel-vite-plugin'
import {defineConfig} from 'vite'

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/tailwind.scss',
            'resources/css/site.scss',
            'resources/js/site.js',
        ]),
    ],
});
