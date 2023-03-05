class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    <img src="img/bucket.png" width="25px"> ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}
const headerPage = new Header();