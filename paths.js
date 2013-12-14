var path = require('path');

/*
 * Paths for use in other modules
 */
module.exports = {
	public: path.resolve('./public'),
	cache: path.resolve('./cache'),
	logs: path.resolve('./log'),
	build: path.resolve('./build'),
	buildcache: path.resolve('./build/cache'),
	archive: path.resolve('./build/archive'),
	git: {
		nightly: path.resolve('./build/nightly/'),
		stable: path.resolve('./build/stable')
	},
	tmp: path.resolve('./build/tmp'),
	wiki: path.resolve('./build/wiki'),
	cdn: path.resolve('./build/jsdelivr'),
	cdnProject: path.resolve('./build/jsdelivr/files/qtip2'),
	cdnUrl: '//cdn.jsdelivr.net/qtip2',
	donators: path.resolve('./public') + '/donators.txt'
}
