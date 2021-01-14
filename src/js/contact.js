// Require html
const body = document.body;
const img = document.createElement('img');
const h1 = document.createElement('h1');

const contact = () => {
    h1.innerHTML = 'Contact Webpack';
    body.append(h1);
};

export {
    contact
}