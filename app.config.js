const dev = !!process.env.ROLLUP_WATCH;
const dest = 'dist';
const assets = 'src/assets';

module.exports = {
    name: 'app',
    input: 'src/main.ts',
    files: [
        { src: `${assets}/*`, dest, },
    ],
    replace: {
        __env: JSON.stringify(dev ? 'development' : 'production'),
    },
    alias: {
        '@': './src',
        '@/*': './src/*'
    },
    extensions: [
        '.js',
        '.mjs',
        '.ts',
        '.svelte',
    ],
    mainFields: [
        'browser',
        'module',
        'main'
    ],
    sourceMap: !dev,
    legacy: false,
    assets,
    dest,
    dev,
};