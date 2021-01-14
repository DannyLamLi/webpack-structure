// Require html
const body = document.body;
const img = document.createElement('img');
const h1 = document.createElement('h1');

const welcome = () => {
    h1.innerHTML = 'Welcome to Webpack.';
    body.append(h1);
};

export {
    welcome
}