// Require html
const body = document.body;
const img = document.createElement('img');
const h1 = document.createElement('h1');

const about = () => {
    h1.innerHTML = 'About Webpack';
    body.append(h1);
};

export {
    about
}