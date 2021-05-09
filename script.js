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
                name: 'Fabio accollo',
                img: 'imgs/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Stasera ceniamo tutti da me, sei invitato',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Grande!Ciao guarda mi piacerebbe moltissimo ma purtroppo ho già un impegno',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:37:55',
                        text: 'Dai non puoi mancare',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:38:00',
                        text: 'Ma mollami!!!',
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
                        date: '28/03/2020 10:20:00',
                        text: 'Ma che caz',
                        status: 'sent'
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
                name: 'Matteo pacco',
                img: 'imgs/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Oh allora stasera Officine?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Non posso, ho la cena dagli suoceri',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:52:55',
                        text: 'Sfigato',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Mario',
                img: 'imgs/avatar_5.jpg',
                visible: true,
                messages: [],
            },
            {
                name: 'Valentina',
                img: 'imgs/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Stasera ho casa libera',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma ho mal di testa',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Deboroh calcetto',
                img: 'imgs/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Perchè ad ogni cosa che ti scrivo rispondi "ok"?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ok',
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
        },
    },
    methods: {
        onContactClick(selectedContact) {
            this.activeContact = selectedContact
        },
        showMessage() {
            const newMessage = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.textMessage,
                status: 'sent'
            }

            this.activeContact.messages.push(newMessage);
            this.textMessage = '';

            setTimeout(() => {
                const defaultAnswer = {
                    date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    text: 'Ok',
                    status: 'received'
                }
                this.activeContact.messages.push(defaultAnswer)
            }, 3000)
        },
        onInput() {
            const filteredContacts = this.contacts.filter((element) => element.name === this.searchContact);
            console.log(filteredContacts)
        },
        formatTime(stringDate) {
            return moment(stringDate, "DD/MM/YYYY hh:mm:ss").format("HH:mm")
        },
        onMessageClick(message, event) {
            this.$set(message, "showPopUp", true);

            event.currentTarget.focus()
        },
        onMouseOut(message) {
            this.$set(message, "showPopUp", false);
        },
        onInfoClick(message) {
            message.showPopUp = false;
        },
        onDeleteClick(messageIndex) {
            this.activeContact.messages.splice(messageIndex, 1)
        },
        getLastMessage(messages) {
            if (messages.length === 0) {
                return "Questa conversazione non contiene nessun messaggio"
            }

            const lastMessage = messages[messages.length - 1];

            const slicedMessage = lastMessage.text.slice(0, 20) + "..."

            return slicedMessage
        },
        getLastMessageTime(messages) {
            if (messages.length === 0) {
                return " "
            }

            const lastMsg = messages[messages.length - 1];

            const lastMessageTime = this.formatTime(lastMsg.date)

            return lastMessageTime
        }
    }
})