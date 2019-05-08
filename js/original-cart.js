window.addEventListener('DOMContentLoaded', () => {
    let modulCart = document.querySelector('.modul-cart'),
        menuCart = document.querySelector('.menu-cart'),
        cartCount = document.querySelector('.cart-count'),
        totalNum = document.querySelector('.total-num'),
        pluse = document.querySelectorAll('.count-plus'),
        minuse = document.querySelectorAll('.count-minus'),
        countText = document.querySelectorAll('.count-text'),
        cardProduct = document.querySelectorAll('.card-product'),
        tov = {};
    cart = document.querySelectorAll('.cart-price');
    cartTextTop = document.querySelector('.cart-total');
    modulCart.style.display = 'none';
    let count = 0,
        fullPrica = 0,
        allPrice = 0;
    let plusCount = 0,
        num = 0;

    menuCart.addEventListener('click', () => {
        if (modulCart.style.display === 'block') {
            modulCart.style.display = 'none';
        } else {
            modulCart.style.display = 'block';
        }
    });
    document.addEventListener('click', () => {

        let close = document.getElementsByClassName('btn-close'),
            clear = document.querySelector('.cart-clear'),
            cartProductALl = document.querySelectorAll('.cart-product'),

            cartTtitle = document.querySelector('.cart-title');
        order();

        //Order
        function order() {
            if (event.target.innerHTML === 'Заказать') {

                let nameCard = event.target.parentNode.childNodes[1].innerText,
                    cardCount = event.target.parentNode.childNodes[9].children[1].children[1].innerHTML;

                count++;
                cartCount.innerText = count;
                cartTtitle.innerHTML = `Корзина(${count})`;

                //Sup
                if (nameCard === 'Шурпа c говядиной') {
                    create('img/soup/soup-shurpa-mini.png', nameCard, '240', cardCount);
                    tov[nameCard] = '240';
                } else if (nameCard === 'Лагман') {
                    create('img/soup/soup-lagman-mini.png', nameCard, '240', cardCount);
                    tov[nameCard] = '240';
                } else if (nameCard === 'Чучвара') {
                    create('img/soup/soup-shurpa-mini.png', nameCard, '240', cardCount);
                    tov[nameCard] = '240';
                    // Plov
                } else if (nameCard === 'Плов Чайханский') {
                    create('img/hot/plov-chanhaysky-mini.png', nameCard, '350', cardCount);
                    tov[nameCard] = '350';
                } else if (nameCard === 'Плов Ферганский') {
                    create('img/hot/plov-fergansky-mini.png', nameCard, '350', cardCount);
                    tov[nameCard] = '350';
                } else if (nameCard === 'Плов Праздничный') {
                    create('img/hot/plov-holiday-mini.png', nameCard, '350', cardCount);
                    tov[nameCard] = '350';
                }
                //Salat
                else if (nameCard === 'Ачичук') {
                    create('img/salat/salat-achichuk-mini.png', nameCard, '150', cardCount);
                    tov[nameCard] = '150';
                } else if (nameCard === 'Овощной салат') {
                    create('img/salat/salat-ovosh-mini.png', nameCard, '150', cardCount);
                    tov[nameCard] = '150';

                } else if (nameCard === 'Морковный салат') {
                    create('img/salat/salat-morkva-mini.png', nameCard, '100', cardCount);
                    tov[nameCard] = '100';
                }
                //Drinks
                else if (nameCard === 'Лепёшка') {
                    create('img/drink/drink-lepeshka-mini.png', nameCard, '50', cardCount);
                    tov[nameCard] = '50';
                } else if (nameCard === 'Клюквенный морс') {
                    create('img/drink/drink-mors-mini.png', nameCard, '150', cardCount);
                    tov[nameCard] = '150';
                } else if (nameCard === 'Компот') {
                    create('img/drink/drink-kompot-mini.png', nameCard, '50', cardCount);
                    tov[nameCard] = '50';

                }


            }
        }

        //delete Card
        for (let p = 0; p < close.length; p++) {
            if (event.target === close[p]) {
                count--;
                cartCount.innerText = count;
                cartTtitle.innerHTML = `Корзина(${count})`;
                fullPrica -= +close[p].previousElementSibling.children[1].innerHTML;
                totalNum.innerText = fullPrica;
                close[p].parentNode.remove();
            }
        }
        //Clear
        if (event.target === clear) {
            for (let p = 0; p < cartProductALl.length; p++) {
                cartProductALl[p].remove();
            }
            totalNum.innerHTML = 0;
            fullPrica = 0;
            count = 0;
            cartCount.innerText = count;
            cartTtitle.innerHTML = `Корзина(${count})`;
        }


        //Create Card func
        function create(cartImg, nameCard, price, tovCount) {


            let card = document.createElement('div'),
                allPrice = price * tovCount;
            card.classList.add('cart-product');
            card.innerHTML = `<div class="cart-product-main">
            <div class="cart-product-image">
              <img class="prod-img" src='${cartImg}' alt="img">
            </div>
            <div class="cart-product-title"><div> ${nameCard}</div>
              <div class="cart-product-title_sub">Порция ${allPrice} гр</div>
            </div>

          </div>
          <div class="cart-product-count">
            <div class="cart-count">
              <div class="cart-count-minuse">-</div>
              <div class="cart-count-number">${tovCount}</div>
              <div class="cart-count-pulse">+</div>
            </div>
            <div class="cart-price">${allPrice}</div>
          </div>
          <div class="btn-close"></div>`;
            modulCart.insertBefore(card, cartTextTop);
            totalSum(allPrice);
            // cardCounter(tovCount, price, nameCard);
            // more(0, 0, allPrice)

        }


    });

    //Общая сумма с сказааов
    function totalSum(allPrice) {

        fullPrica += allPrice;
        totalNum.innerHTML = fullPrica

    }

    // function more(a, b, allPrice) {
    //
    //
    //
    //
    //
    // }

//plus and minus count
    for (let i = 0; i < pluse.length; i++) {
        let g = 0;
        cardProduct[i].addEventListener('click', () => {
            if (event.target === pluse[i]) {
                g++;
                plusCount++;
                plusOne(i, g)
            }
            if (event.target === minuse[i]) {

                if (g > 0) {
                    g--;
                    plusCount++;
                    plusOne(i, g)
                }
            }
        })
    }


    function cardCounter(tovCount, price, u) {


        let o = {};
        let cartCountNumber = document.querySelectorAll('.cart-count-number'),
            cartProductALl = document.querySelectorAll('.cart-product'),
            cartCountPulse = document.querySelectorAll('.cart-count-pulse'),
            cartPrice = document.querySelectorAll('.cart-price'),
            cartCountMinus = document.querySelectorAll('.cart-count-minuse');
        for (let i = 0; i < cartProductALl.length; i++) {
            cartProductALl = document.querySelectorAll('.cart-product');
            let a = tovCount;
            cartProductALl[i].addEventListener('click', () => {
                let n = cartProductALl[i].children[0].children[1].children[0].innerText;

                if (cartCountNumber[i].innerText >= 1) {
                    if (event.target === cartCountMinus[i]) {
                        cartCountNumber[i].innerText = --a;
                        // o[tov[n]] = a;
                        // more(o[tov[n]], tov[n],0);
                        cartPrice[i].innerHTML = tov[n] * a
                    }
                }
                if (cartCountNumber[i].innerText >= 0) {
                    if (event.target === cartCountPulse[i]) {
                        cartCountNumber[i].innerText = ++a;
                        // o[tov[n]] = a;
                        //
                        // more(o[tov[n]], tov[n],0);
                        cartPrice[i].innerText = tov[n] * a
                    }
                }

            })
        }
    }
    function plusOne(i, g) {
        countText[i].innerHTML = g;

    }
});