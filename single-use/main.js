Vue.component('progress-view', {
    // O template não será necessário pois foi adicionado uma funcionalidade chamada de "inline-template" 
    // que fala para o Vue renderizar o template:{} diretamente no html

    data() {
        return {
            completionRate: 24
        }
    },
});


new Vue({
    el:'#root'
});