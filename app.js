new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
        	result: function() {
        		return this.value == 37 ? 'done' : 'not there yet';
        	}
        },
        watch: {        	
        	value: function() {
        		var instance = this;
        		setTimeout(function() {
       	 			instance.value = 0;
        		}, 5000);
        	}
        }
    });