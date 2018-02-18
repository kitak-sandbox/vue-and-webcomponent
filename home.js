import Vue from '/node_modules/vue/dist/vue.esm.browser.js';

Vue.component('home', {
    data() {
        return {
            value: 0,
        };
    },
    mounted() {
        setInterval(() => {
            this.value += 1;
        }, 1000);
    },
    methods: {
        onClick() {
            console.log('onClick', this.value);
        },
    },
    template: `
        <my-button :text="value" @my-click="onClick"></my-button>
    `,
});