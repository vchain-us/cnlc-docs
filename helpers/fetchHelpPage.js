export const fetchHelpPage = (dir, page) => async ({ $content, params }) => {
	const article = await $content(dir, page || params.slug).fetch();
	const articles = await $content('help', { deep: true })
			.only(['title', 'path', 'slug'])
			.fetch();

	return {
		article,
		articles,
	};
};
