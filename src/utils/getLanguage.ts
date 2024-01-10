export const getLanguage = (): string => {
	const lang = localStorage.getItem('language');
	if (lang) return lang;
	return 'en';
}