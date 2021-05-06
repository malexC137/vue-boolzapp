const app = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
        name: 'Michele',
        img: 'imgs/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        img: 'imgs/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    }, {
        name: 'Samuele',
        img: 'imgs/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Matteo',
        img: 'imgs/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Mario',
        img: 'imgs/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Laura',
        img: 'imgs/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Deborah',
        img: 'imgs/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
        ],
        activeContact: {},
        textMessage: '',
        searchContact: '',

    },
    computed: {
        filteredContacts() {
            return this.contacts.filter((element) => {
                return element.name.toLowerCase().includes(this.searchContact.toLowerCase());
            });
        }
    },
    methods: {
        onContactClick(selectedContact) {
            this.activeContact = selectedContact
        },
        showMessage() {
            const newMessage = {
                date: '13/08/2019 15:30:55',
                // date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.textMessage,
                status: 'sent'
            }
            
            this.activeContact.messages.push(newMessage);
            this.textMessage = '';

            setTimeout(() => {
                const defaultAnswer = {
                    date: '13/08/2019 15:30:55',
                    text: 'Ok',
                    status: 'received'
                }
                this.activeContact.messages.push(defaultAnswer)
            }, 1000)
        },
        onInput() {
            const filteredContacts = this.contacts.filter((element) => element.name === this.searchContact);
            console.log(filteredContacts)
        }
    }
})