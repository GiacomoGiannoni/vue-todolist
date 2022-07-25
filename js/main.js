const listitem =[
    {
        text: 'Fare la spesa',
        done: false
    },
    
    {
        text: 'Studiare',
        done: true
    },
    {
        text: 'Mangiare',
        done: false
    },
    
    {
        text: 'Shopping',
        done: true
    },
    {
        text: 'Divertirsi',
        done: false
    },
]




var app = new Vue(
    {
        el: '#app',
        data: {
            listitem,
            newlistitem:''
        },
        methods: {
            eliminaList(index) {
                this.listitem.splice(index, 1);
            },
            addList() {
                this.listitem.push(
                    {
                        text: this.newlistitem,
                        done: false
                    }
                    )
                this.newlistitem = '';
            },
        }
    }
);