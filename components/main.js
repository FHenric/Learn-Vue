Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{task.description}}</task>
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