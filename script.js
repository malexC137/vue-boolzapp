const app = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
                name: "Travis",
                img: "imgs/travis.jpg",
                messages: [
                    {
                        date: '13/08/2020 15:30:55',
                        text: 'Ma dici a me?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Hey, con chi stai parlando?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Dici a me?',
                        status: 'received'
                    }
                ],
            },
            {
                name: "Tony",
                img: "imgs/tony.jpg",
                messages: [
                    {
                        date: '13/08/2020 15:30:55',
                        text: 'Tu accontentati, io mi prendo tutto quello che posso',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Mi prendo il mondo chico e tutto quello che c è dentro',
                        status: 'sent'
                    }
                ],
            },
            {
                name: "George",
                img: "imgs/george.jpg",
                messages: [
                    {
                        date: '13/08/2020 15:30:55',
                        text: 'Ma alla fine ne valeva la pena?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Dio santo come è cambiata la mia vita',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'è sempre l ultimo giorno d estate e io sono rimasto fuori al freddo senza una porta per rientrare',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:16:00',
                        text: 'lo ammetto ho avuto una buona dose di momenti intensi',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:18:55',
                        text: 'molti fanno grandi progetti ma la vita gli sfugge dalle mani',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:20:34',
                        text: 'nel corso della mia vita ho lasciato brandelli di cuore qui e la',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:21:04',
                        text: 'e ormai non me ne è rimasto abbastanza per tenermi in vita',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:22:23',
                        text: 'ma mi sforzo di sorridere',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:22:59',
                        text: 'sapendo che la mia ambizione ha superato di gran lunga il mio talento',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:23:49',
                        text: 'ormai non trovo più cavalli bianchi o belle donne alla mia porta.',
                        status: 'sent'
                    },
                ],
            },
            {
                name: "Jay-Z",
                img: "imgs/jay.jpg",
                messages: [
                    {
                        date: '13/08/2020 15:30:55',
                        text: 'Fear not when, fear not why',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Fear not much while we re alive',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Life is for living not living uptight',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:16:42',
                        text: 'Til you re somewhere up in the sky',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:16:42',
                        text: 'Fear not die, I ll be alive for a million years, bye byes are not for legends, Im forever young',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:16:42',
                        text: 'My name shall survive',
                        status: 'received'
                    },
                ],
            },
            {
                name: "Rick Sanchez",
                img: "imgs/rick.jpg",
                messages: [
                    {
                        date: '13/08/2020 15:30:55',
                        text: 'I matrimoni fondamentalmente sono funerali con la torta',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Non sono la persona più gentile del mondo, sono la più geniale',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'gentili si fingono gli stupidi per confondere le acque',
                        status: 'received'
                    }
                ],
            },
            {
                name: "Noyz Narcos",
                img: "imgs/noyz.jpg",
                messages: [
                    {
                        date: '13/08/2020 15:30:55',
                        text: 'Open my bara dorata',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Sniff my droga tagliata',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Die lungo la strada with the narice scoppiata',
                        status: 'received'
                    }
                ],
            },
            {
                name: "Bomba Anarchica",
                img: "imgs/bomba.jpg",
                messages: [
                    {
                        date: '13/08/2020 15:30:55',
                        text: 'E da me che voi?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Io al massimo te posso cantà na canzone',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: '"Stai sotto al cielo sbagliatooo"',
                        status: 'received'
                    }
                ],
            },
        ],
        activeContact: null
    },
    methods: {
        onContactClick(selectedContact) {
            this.activeContact = selectedContact
        },
    },
})