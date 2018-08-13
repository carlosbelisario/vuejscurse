new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function() {
                alert('you clicked the button');
            },
            display: function (event) {
                this.value = event.target.value;
            }
        }
    });