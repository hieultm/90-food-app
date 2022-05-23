module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'navbar-food': 'rgba(0, 0, 0, .84)',
                'product-cart': 'rgba(0,0,0,.65)',
                dropList: 'rgba(0, 0, 0, 0.15)',
                'cart-overlay': 'rgba(0, 0, 0, 0.08)',
                'dialog-overlay': 'rgba(0,0,0,0.4)',
                // sign up
                'form-signup': 'rgb(35,41,41)',
                'thumb-signup': 'rgb(47,63,63)',
                'input-signup': 'rgb(44,49,49)',
                'signup-btn': 'rgb(71,209,209)',
            },
            width: {
                dots: 'calc(100% - 0.05px)',
            },
            height: {
                dots: 'calc(100% - 0.05px)',
            },
            flex: {
                footer: '0 0 25%',
                'item-product': '1 0 23%',
            },
            boxShadow: {
                login: '0 1px 25px rgba(0, 0, 0, 0.07) ',
                btnLogin: '0 3px 8px rgb(0 0 0 / 15%);',
                dropList: '0 5px 15px rgba(0, 0, 0, 0.15)',
                'cart-overlay': '-2px 0 15px rgba(0, 0, 0, 0.1)',
                'cart-handle': '0 -5px 15px rgb(0 0 0 / 5%)',
                slider: '0 3px 20px rgb(0 0 0 / 8%)',
                'slider-hover': '0 5px 12px rgba(0, 0, 0, 0.1)',
            },
            fill: {
                fb: '#4166b1',
            },
            margin: {
                unset: 'unset',
            },
            fontFamily: {
                'category-heading': ['"Dancing Script"', 'cursive'],
            },
        },
        screens: {
            mobi: { max: '767px' },
            tablet: { max: '960px' },
        },
    },
    plugins: [],
};