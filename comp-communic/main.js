window.Event = new class{
    constructor() {
        this.vue = new Vue;
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback){
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: `
        <input placeholder="Bota o cupom ai boy" v-on:blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied(){
            Event.fire('applied');
        }
    },

    data() {
        return {
            
        }
    },
});

new Vue({
    el:'#root',

    data:{
        couponApplied: false
    },

    created() {
        Event.listen('applied', () => alert('Handling'))
    },
});