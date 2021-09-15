module.exports = {
    entry: './src/index.tsx',
    port: 3000,
    sourceMaps: true,
    hot: true,
    static: 'public',
    webpack (config) {
        config.resolve.extensions = ['.tsx', '.ts', '.js', '.json', '.json5']
        config.module.rules[0].oneOf.push({
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        })
        config.module.rules[0].oneOf.push({
            test: /\.json5$/,
            loader: 'json5-loader',
            exclude: /node_modules/,
        })
    }
}
