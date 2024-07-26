function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

function toggle() {
    const widthScreen = window.innerWidth;
    const clientWidthDocument = document.body.clientWidth;
    const paddingScroll = widthScreen - clientWidthDocument;
    const jsToggle = document.querySelectorAll('.js-toggle');
    const listElTarget = [];

    if (!jsToggle.length) return;

    const handleButtonClick = (button, targetEl, isNoScroll) => {
        return (e) => {
            e.preventDefault();
            const isHidden = targetEl.classList.contains("hide");
            requestAnimationFrame(() => {
                targetEl.classList.toggle("hide", !isHidden);
                targetEl.classList.toggle("show", isHidden);
                if (isNoScroll === 'true') {
                    if (isHidden) {
                        document.body.style.overflow = 'hidden';
                        document.body.style.paddingRight = `${paddingScroll}px`;
                    } else {
                        document.body.style.overflow = '';
                        document.body.style.paddingRight = '';
                    }
                    window.addEventListener('resize', debounce(handleResize(targetEl)));
                }
            });
        }
    };

    const handleResize = (targetEl) => {
        return () => {
            if (window.innerWidth > 991) {
                targetEl.classList.add("hide");
                targetEl.classList.remove("show");
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }
        }
    };

    const handleDocumentClick = (e) => {
        const isElTarget = listElTarget.some((elTarget) => e.target.closest(`#${elTarget}`));
        if (!isElTarget) {
            const selectorId = listElTarget.find(elTarget => {
                return document.querySelector(`#${elTarget}`).classList.contains('show');
            });
            const targetEl = document.querySelector(`#${selectorId}`);
            if (targetEl) {
                targetEl.previousElementSibling.click();
            }
        }
    };

    jsToggle.forEach(button => {
        const selectorId = button.getAttribute('target-toggle');
        listElTarget.push(selectorId);
        const isNoScroll = button.getAttribute('no-scroll');
        const targetEl = document.querySelector(`#${selectorId}`);
        if (!targetEl) return;
        button.onclick = handleButtonClick(button, targetEl, isNoScroll);
    });

    document.onclick = handleDocumentClick;
}

// Debounce function to limit how often the resize handler is called
function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}


toggle()
const iphoneProductList = [
    {
        "img": "./assets/img/product/ip15promax.png",
        "name": "IPhone 15 Pro Max",
        "price": "29.390.000đ"
    },
    {
        "img": "./assets/img/product/ip15.png",
        "name": "IPhone 15",
        "price": "19.290.000đ"
    },
    {
        "img": "./assets/img/product/ip15plus.png",
        "name": "IPhone 15 Plus",
        "price": "22.190.000đ"
    },
    {
        "img": "./assets/img/product/ip14promax.png",
        "name": "IPhone 14 Pro Max",
        "price": "26.990.000đ"
    },
    {
        "img": "./assets/img/product/ip15promax.png",
        "name": "IPhone 15 Pro Max",
        "price": "29.390.000đ"
    },
    {
        "img": "./assets/img/product/ip13.png",
        "name": "IPhone 13",
        "price": "13.890.000đ"
    },
    {
        "img": "./assets/img/product/ip15pro.png",
        "name": "IPhone 15 Pro",
        "price": "24.990.000đ"
    },
    {
        "img": "./assets/img/product/ip14plus.png",
        "name": "IPhone 14 Plus",
        "price": "19.690.000đ"
    },
    {
        "img": "./assets/img/product/ip12promax.png",
        "name": "IPhone 12 Pro Max",
        "price": "23.490.000đ"
    },
    {
        "img": "./assets/img/product/ip15pro.png",
        "name": "IPhone 15 Pro",
        "price": "24.990.000đ"
    },
    {
        "img": "./assets/img/product/ip13.png",
        "name": "IPhone 13",
        "price": "13.890.000đ"
    },
    {
        "img": "./assets/img/product/ip15plus.png",
        "name": "IPhone 15 Plus",
        "price": "22.190.000đ"
    },
]

const samsungListProduct = [
    {
        "img": "./assets/img/product/ss_s24_ultra.png",
        "name": "SS S24 Ultra",
        "price": "29.990.000đ"
    },
    {
        "img": "./assets/img/product/ss_s23_ultra.png",
        "name": "SS S23 Ultra",
        "price": "27.990.000đ"
    },
    {
        "img": "./assets/img/product/ss_galaxy_z_flip_5.png",
        "name": "SS Galaxy Z Flip 5",
        "price": "16.990.000đ"
    },
    {
        "img": "./assets/img/product/ss_galaxy_z_fold_5.png",
        "name": "SS Galaxy Z Fold 5",
        "price": "28.990.000đ"
    },
    {
        "img": "./assets/img/product/ss_galaxy_a54.png",
        "name": "SS Galaxy A54",
        "price": "9.390.000đ"
    },
    {
        "img": "./assets/img/product/ss_galaxy_m14.png",
        "name": "SS Galaxy M14",
        "price": "5.090.000đ"
    },
    {
        "img": "./assets/img/product/ss_galaxy_z_flip_4.png",
        "name": "SS Galaxy Z Flip 4",
        "price": "25.990.000đ"
    },
    {
        "img": "./assets/img/product/ss_galaxy_z_fold_4.png",
        "name": "SS Galaxy Z Fold 4",
        "price": "22.490.000đ"
    }
]
const listXiaomi = [
    {
        "img": "./assets/img/product/xiaomi_13t_pro.png",
        "name": "Xiaomi 13T Pro",
        "price": "14.790.000đ"
    },
    {
        "img": "./assets/img/product/xiaomi_14_ultra.png",
        "name": "Xiaomi 14 Ultra",
        "price": "29.990.000đ"
    },
    {
        "img": "./assets/img/product/xiaomi_13t.png",
        "name": "Xiaomi 13T",
        "price": "10.990.000đ"
    },
    {
        "img": "./assets/img/product/xiaomi_14.png",
        "name": "Xiaomi 14",
        "price": "20.990.000đ"
    },
    {
        "img": "./assets/img/product/xiaomi_12t.png",
        "name": "Xiaomi 12T",
        "price": "8.990.000đ"
    },
    {
        "img": "./assets/img/product/xiaomi_12t_pro.png",
        "name": "Xiaomi 12T Pro",
        "price": "14.090.000đ"
    },
    {
        "img": "./assets/img/product/redmi_note_13_pro.png",
        "name": "Redmi Note 13 Pro",
        "price": "8.390.000đ"
    },
    {
        "img": "./assets/img/product/redmi_note_11_pro.png",
        "name": "Redmi Note 11 Pro",
        "price": "5.790.000đ"
    }
]

function renderProduct(container, list) {
    const containerEl = document.querySelector(container)
    const html = list.map((listItem) => {
        return `<div class="col">
                    <article class="product-card">
                        <a href="#!">
                            <div class="product-card__img-wrap">
                                <img src="${listItem.img}" alt="" class="product-card__img">
                            </div>
                        </a>
                        <div class="product-card__info">
                            <a href="#!">
                                <h3 class="product-card__heading d-h4">${listItem.name}</h3>
                            </a>
                        <span class="t-h5 product-card__price">${listItem.price}</span>
                        </div>
                        <button class="btn btn--icon product-card__heart">
                            <img src="./assets/icons/heart.svg" alt="" class="product-card__heart-icon">
                        </button>
                    </article>
                </div>`
    }).join('')

    containerEl.insertAdjacentHTML('beforeend', html)
}

renderProduct('#listIphone', iphoneProductList)
renderProduct('#listSamsung', samsungListProduct)
renderProduct('#listXiaomi', listXiaomi)


const formSlider = document.querySelector('#filter__form-slider')
// const labelPriceMin = document.querySelector('.filter__price-min') as HTMLSpanElement
const labelPriceMin = document.querySelector('.filter__price-min')
// const labelPriceValueMax = document.querySelector('.filter__price-max') as HTMLSpanElement
const labelPriceMax = document.querySelector('.filter__price-max')

const progress = document.querySelector('.filter__progress')

const maxRangeValue = 15000000
const baseValue = 5000000
const vnd = new Intl.NumberFormat('vi-VN', {
    notation: 'compact',
    maximumFractionDigits: 2
})
const [rangeMin, rangeMax] = formSlider.querySelectorAll('.filter__input-range')
let priceMin = rangeMin.valueAsNumber, priceMax = rangeMax.valueAsNumber

function updateRangeUi(priceMinValue, priceMaxValue) {
    labelPriceMin.textContent = `${vnd.format(priceMinValue)}`
    progress.style.left = `${((priceMinValue - baseValue) / maxRangeValue) * 100}%`
    labelPriceMax.textContent = `${vnd.format(priceMaxValue)}`
    progress.style.right = `${100 - (priceMaxValue - baseValue) / maxRangeValue * 100}%`
}

updateRangeUi(priceMin, priceMax)
formSlider.addEventListener('input', function (e) {
    // const inputRange = e.target.closest('.filter__input-range') as HTMLInputElement
    const inputRange = e.target.closest('.filter__input-range')
    if (inputRange) {
        if ((rangeMax.valueAsNumber - rangeMin.valueAsNumber) >= 2000000) {
            priceMin = rangeMin.valueAsNumber, priceMax = rangeMax.valueAsNumber
            updateRangeUi(priceMin, priceMax)
        }
        else {
            rangeMin.value = priceMin
            rangeMax.value = priceMax
        }
    }
})


function select(containerSelect, selectBtn, listItemSelect) {
    const selectBtnEl = document.querySelector(`.${selectBtn}`)
    const listContainerSelectEl = document.querySelectorAll(`.${containerSelect}`)
    const selectActive = `${listItemSelect}--active`
    const firstItemSelect = document.querySelectorAll(`.${listItemSelect}`)[0]
    firstItemSelect.classList.add(selectActive)
    if (selectBtnEl) selectBtnEl.textContent = firstItemSelect.textContent

    listContainerSelectEl.forEach((containerSelectEl) => {
        const listItemSelectEl = containerSelectEl.querySelectorAll(`.${listItemSelect}`)
        listItemSelectEl.forEach((itemSelectEl) => {
            itemSelectEl.addEventListener('click', function (e) {
                containerSelectEl.querySelector(`.${selectActive}`)?.classList.remove(selectActive)
                itemSelectEl.classList.add(selectActive)
                if (selectBtnEl) selectBtnEl.textContent = itemSelectEl.textContent
            })
        })
    })
    // listItemSelectEl.forEach(itemSelect)
}

select('js-select', 'form__select-text', 'form__select-item')

const filterBtnSelect = document.querySelectorAll('.filter__btn-select') // as HTMLButtonElement[]

filterBtnSelect.forEach(btnSelect => {
    let isClick = false
    btnSelect.addEventListener('mousedown', function () {
        if (!isClick) {
            isClick = true
            btnSelect.classList.add('active')
        } else {
            btnSelect.classList.remove('active')
            isClick = false
        }
    })
})

const btnResetFilter = document.querySelector('.filter__btn-reset')
btnResetFilter.addEventListener('click', function () {
    updateRangeUi(rangeMin.min, rangeMax.max)
    rangeMin.value = rangeMin.min
    rangeMax.value = rangeMax.max
    filterBtnSelect.forEach(btnSelect => {
        btnSelect.classList.remove('active')
    })
})