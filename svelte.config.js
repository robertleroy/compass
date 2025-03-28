import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
			fallback: '404.html'
		}),
    paths: {
      base: process.argv.includes('dev') ? '' : '/compass'
    }
  },
};

export default config;
