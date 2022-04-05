Vue.component('modal', {

    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
            <button class="modal-close is-large" v-on:click="$emit('close')" aria-label="close"></button>
        </div> 
    `,
// Usar o v-on:click normal aqui não vai funcionar por conta do escopo, o comando não seria reconhecido pelo Vue.component
// No lugar disso, iremos criar nosso proprio v-on:<ação> que nesse caso é feito aqui com v-on:click="$emit('close')"
// Que lá no html sera chamado pelo nome dentro do $emit: (v-on:close="showModel = false")
    methods: {
        
    },
});

new Vue ({
    el:'#root',
    data: {showModal: false}
})