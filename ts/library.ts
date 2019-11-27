const getHtmlContents = async (name: string = 'home') => {
  try {
    const fileContents = await fetch(`./dist/${name}.html`);
    return fileContents.text();
  } catch (err) {
    console.log(err);
    return '<p>The page you\'re trying to access doesn\'t exist!</p>';
  }
};

const globalLoadingElement = (): HTMLElement => {
  const loading = document.createElement('div');
  loading.setAttribute('class', 'mdl-spinner');
  loading.setAttribute('class', 'mdl-js-spinner');
  loading.setAttribute('class', 'is-active');

  return loading;
}

// If the page doesn't exist, then we return 404
const filterPageValues = (page?: string): string => {
  if (!page || page === '') page = 'home';

  const pagesBank = ['home', 'about'];
  return (pagesBank.includes(page)) ? page : '404';
}

// Get the hash portion of the URL
const getHashValue = (link: string): string => {
  const hashRegex = /#(\w+)$/;
  return link.match(hashRegex) ? link.match(hashRegex)[1] : undefined;
}


// listeners for the header links
const navElements = document.getElementsByClassName('site-navigation');
Array.from(navElements).map((nav: HTMLElement) => {
  nav.addEventListener('click', async (e: MouseEvent) => {
    e.preventDefault();
    const bodyContent = document.getElementById('page-content');    
    bodyContent.innerHTML = '';
    bodyContent.appendChild(globalLoadingElement());

    const link = e.target.toString();
    // blank => home page
    let hrefValue = getHashValue(link);
    hrefValue = filterPageValues(hrefValue);
    const fileContents = await getHtmlContents(hrefValue);
    bodyContent.innerHTML = fileContents;
    if (history)
      history.pushState({html: fileContents, set: true}, hrefValue, `#${hrefValue ? hrefValue : ''}`);
  });
});

// On page load, check the URL to see what page to load
document.addEventListener('DOMContentLoaded', async (e) => {
  const bodyContent = document.getElementById('page-content');    
  bodyContent.innerHTML = '';
  bodyContent.appendChild(globalLoadingElement());

  // @ts-ignore
  const link = e.currentTarget.location.href;
  // blank => home page
  let hrefValue = getHashValue(link);
  hrefValue = filterPageValues(hrefValue);
  const fileContents = await getHtmlContents(hrefValue);
  document.getElementById('page-content').innerHTML = fileContents;
  // in case someone enters in a wrong url, we want to show them the 404
  if (history)
    history.replaceState({html: fileContents, set: true}, hrefValue, `#${hrefValue ? hrefValue : ''}`);
});

// manually replace page contents if someone uses the browser back/forth buttons
window.addEventListener('hashchange', async (e) => {
  const oldHash = filterPageValues(getHashValue(e.oldURL));
  const newHash = filterPageValues(getHashValue(e.newURL));

  if (oldHash !== newHash) {
    const bodyContent = document.getElementById('page-content');
    bodyContent.innerHTML = '';
    bodyContent.appendChild(globalLoadingElement());

    const fileContents = await getHtmlContents(newHash);
    bodyContent.innerHTML = fileContents;
  }
});