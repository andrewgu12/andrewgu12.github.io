const getHtmlContents = async (name: string = 'home') => {
  try {
    const fileContents = await fetch(`./dist/${name}.html`);
    return fileContents.text();
  } catch (err) {
    console.log(err);
    return '<p>The page you\'re trying to access doesn\'t exist!</p>';
  }
};

// If the page doesn't exist, then we return 404
const filterPageValues = (page?: string): string => {
  if (!page || page === '') page = 'home';

  const pagesBank = ['home', 'about'];
  return (pagesBank.includes(page)) ? page : '404';
}

// listeners for the header links
const navElements = document.getElementsByClassName('site-navigation');
Array.from(navElements).map((nav: HTMLElement) => {
  nav.addEventListener('click', async (e: MouseEvent) => {
    e.preventDefault();
    const bodyContent = document.getElementById('page-content');    
    bodyContent.innerHTML = "";

    const link = e.target.toString();
    // blank => home page
    let hrefValue = link.match(/#(\w+)$/) ? link.match(/#(\w+)$/)[1] : undefined;
    hrefValue = filterPageValues(hrefValue);
    const fileContents = await getHtmlContents(hrefValue);
    bodyContent.innerHTML = fileContents;
    if (history)
      history.pushState({html: fileContents, set: true}, hrefValue, `#${hrefValue ? hrefValue : ''}`);
  });
});

// By default, open up on the home page
document.addEventListener('DOMContentLoaded', async (e) => {
  // @ts-ignore
  const link = e.currentTarget.location.href;
  // blank => home page
  let hrefValue = link.match(/#(\w+)$/) ? link.match(/#(\w+)$/)[1] : undefined;
  hrefValue = filterPageValues(hrefValue);
  const fileContents = await getHtmlContents(hrefValue);
  document.getElementById('page-content').innerHTML = fileContents;
  // in case someone enters in a wrong url, we want to show them the 404
  if (history)
    history.replaceState({html: fileContents, set: true}, hrefValue, `#${hrefValue ? hrefValue : ''}`);
});
