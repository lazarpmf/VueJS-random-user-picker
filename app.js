const App = {
    data() {
        return {
            Fname : 'John',
            Lname : 'Doe',
            email : 'john@doe.com',
            picture : 'https://randomuser.me/api/portraits/lego/2.jpg',
        }
    },
    methods : {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            // sad cemo da mijenjamo one podatke gore. Koristi se kljucna rijec "this"

            this.Fname = results[0].name.first;
            this.Lname = results[0].name.last;
            this.email = results[0].email;
            this.picture = results[0].picture.medium;

        }
    }
}

Vue.createApp(App).mount('#app');