const getHtmlContents = async (name: string = 'home') => {
  try {
    const fileContents = await fetch(`./dist/${name}.html`);
    return fileContents.text();
  } catch (err) {
    console.log(err);
    return '<p>The page you\'re trying to access doesn\'t exist!</p>';
  }
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
    const hrefValue = link.match(/\/(\w+)$/) ? link.match(/\/(\w+)$/)[1] : undefined;
    const fileContents = await getHtmlContents(hrefValue);
    bodyContent.innerHTML = fileContents;
    if (history)
      history.pushState({html: fileContents, set: true}, hrefValue, `/${hrefValue ? hrefValue : ''}`);
  });
});

// By default, open up on the home page
document.addEventListener('DOMContentLoaded', async (e) => {
  
  const link = e.target.toString();
  // blank => home page
  const hrefValue = link.match(/\/(\w+)$/) ? link.match(/\/(\w+)$/)[1] : undefined;
  const fileContents = await getHtmlContents(hrefValue);
  document.getElementById('page-content').innerHTML = fileContents;

});

// check the URL first!
window.addEventListener('hashchange', (e) => {
  console.log(e);
})