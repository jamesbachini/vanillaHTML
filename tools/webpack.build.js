const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');

module.exports = {
	entry: './html/js/script.js',
	output: {
		filename: 'script.min.js',
		path: path.resolve(__dirname, '../dist/js/'),
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: path.resolve(__dirname, '../html'), to: path.resolve(__dirname, '../dist') },
			],
			options: {
				concurrency: 100,
			},
		}),
		{
			apply: (compiler) => {
				compiler.hooks.afterEmit.tap('done', (compilation) => {
					console.log('Editing index.html to include packaged JS');
					const indexPath = path.resolve(__dirname, '../dist/index.html');
					let indexHTML = fs.readFileSync(indexPath, 'utf8');
					indexHTML = indexHTML.split(`js/script.js`).join(`js/script.min.js`);
					fs.writeFile(indexPath, indexHTML, function (err) {
						if (err) return console.log(err);
					});
				});
			}
		}
	],
};
