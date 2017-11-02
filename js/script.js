//global component
Vue.component('test-component', {
    template: '#temp',
    data: function() {
        return {
            name: 'This is a global Vue component'
        };
    },
    props: [],
    methods: {},
});

// local component
var vm2 = new Vue({
    el: "#app2",
    components: {
        localComp: {
            template: '#temp',
            data: function() {
                return {
                    name: 'This is a local Vue component'
                };
            },
            props: [],
            methods: {},
        }
    }
})

// realtime calculation
Vue.component('item', {
    template: '#temp1',
    data: function() {
        return {}
    },
    props: ['label', 'value'],
    methods: {
    	send:function(v){
    		this.$emit('input',v);
    	}
    },
});
var rtc = new Vue({
    el: "#app3",
    data: {
        price: 0,
        shipping: 0,
        discount: 0,
        wrapping:0,
    },
    computed: {
        total: function() {
        	this.price = Number(this.price);
        	this.shipping = Number(this.shipping);
        	this.discount = Number(this.discount);
        	this.wrapping = Number(this.wrapping);
            return this.price + this.shipping + this.wrapping - this.discount;
        }
    },

})

// mvvm
var model = {
    name: 'vue',
    url: 'vue.png',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};
var vm = new Vue({
    el: '#app',
    data: {
        info: [{
                name: 'vue',
                url: '/Vue.png',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                name: 'vue',
                url: '/Vue.png',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                name: 'vue',
                url: '/Vue.png',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                name: 'vue',
                url: '/Vue.png',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
        ]
    },
    methods: {
        //nama function colon anonymous function
        display: function(arg1, arg2) {
            alert(arg1 + "\n" + arg2);
        }
    }
});