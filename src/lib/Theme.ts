import themes from '../assets/themes';

/* Here you can extend this by Setting and Fetching the theme.
------------------------------------------------------------------- */

const themeCollection = themes.map((t) => ({ ...t }));
const theme = themeCollection[0];

export default theme;
