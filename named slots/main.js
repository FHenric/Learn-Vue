Vue.component('modal', {
    template: `
    <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
            <slot name="header"></slot>
        </p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
    `,

    data() {
        return {
            tasks: [
                {
                    description: 'Ir no clube das tias',
                    complete: true
                },
                {
                    description: 'Comer amoras',
                    completed: false
                },
                {
                    description: 'Adicionar alcione na playlist do spotify',
                    completed: true
                },
                {
                    description: 'Alimentar a planta carnivore não binária',
                    completed: false
                },
                {
                    description: 'Amamentar o filhote de bezerra do tio Sergio',
                    completed: true
                },
            ]
        }
    },
});
Vue.component('task', {
    template: '<li><slot></slot</li>',

    
});

new Vue({
    el:'#root'
});