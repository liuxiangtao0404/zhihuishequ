module.exports = {
	lintOnSave: false,
	publicPath: '/',
	// baseUrl:'./',
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
				'views': '@/views'
			}
		}
	}
}
