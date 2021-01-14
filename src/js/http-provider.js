const body = document.body;

const getFacebookLoginApi = () => {
    const html = `
    <div class="fb-login-button" data-width="600" data-size="large" data-button-type="login_with" data-layout="rounded" data-auto-logout-link="true" data-use-continue-as="false"></div>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);
};

export {
    getFacebookLoginApi
}