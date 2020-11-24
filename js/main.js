const contacts = [
    {
        name: "Pietro",
        avatar: "img/avatar_2.jpg",
        lastSeen: "23/11/2020 12:02",
        messages: [
            {
                textMessage: "Ciao io sono Giuseppe tu?",
                date: "23/11/2020 11:00",
                recived: 0
            },
            {
                textMessage: "Ciao io sono Pietro.",
                date: "23/11/2020 14:00",
                recived: 1
            }
        ]

    },
    {
        name: "Giacomo",
        avatar: "img/avatar_3.jpg",
        lastSeen: "23/11/2020 12:02",
        messages: [
            {
                textMessage: "Ciao io sono Giuseppe tu?",
                date: "23/11/2020 11:00",
                recived: 0
            },
            {
                textMessage: "Ciao io sono Giacomo.",
                date: "23/11/2020 14:00",
                recived: 1
            }
        ]

    },
    {
        name: "Paolo",
        avatar: "img/avatar_4.jpg",
        lastSeen: "23/11/2020 12:02",
        messages: [
            {
                textMessage: "Ciao io sono Giuseppe tu?",
                date: "23/11/2020 11:00",
                recived: 0
            },
            {
                textMessage: "Ciao io sono Paolo.ashdofhjasodfjuasdfjisfjdpasdojpfipkiidshdlpodhiljoiushafdiohhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
                date: "23/11/2020 14:00",
                recived: 1
            }
        ]

    },
    {
        name: "Nino",
        avatar: "img/avatar_5.jpg",
        lastSeen: "23/11/2020 12:02",
        messages: [
            {
                textMessage: "Ciao io sono Giuseppe tu?",
                date: "23/11/2020 11:00",
                recived: 0
            },
            {
                textMessage: "Ciao io sono Nino D'Angelo e ti canterò una canzone.",
                date: "23/11/2020 14:00",
                recived: 1
            },
            {
                textMessage: "Nuje nuje sule vicine o stesso tavulino <br>\
                Na birra gelata gelata come noi <br>\
                Due morsi un panino amico cameriere <br>\
                Non fare il cretino va via <br>\
                Nuje nuje sule parlamm <br>\
                Ma nun dicimmo niente <br>\
                L'ammore c'e chiamm <br>\
                E nuje nun respunimm <br>\
                Arriva c'e il conto <br>\
                Mi presti mille lire <br>\
                Mi presti qualcosa da dire <br>\
                Pop cor e patatine pe ce arricurda <br>\
                Chella ca si stata e chella ca nun vo turna <br>\
                Tu la mia bambina pane ammore e liberta <br>\
                Io con il mio sciocco sogno di felicita' <br>\
                Pop corn e patatine pe ce arricurda <br>\
                Quann miezz' e scale tu currive a mma braccia <br>\
                Nuje nuje sule vicine o stesso tavulino <br>\
                Ti sfioro la mano pigliann o bicchiere <br>\
                Me guarde te guarde s'e ncontrono e penziere <br>\
                Facciamo la pace sta sera <br>\
                Nuje nuje sule cchiu sule di chi nun tene ammore <br>\
                Sciupammo stu tiempo stamm'e facenno tarde <br>\
                Che sciocco puntiglio e nun c'e n'accurgimmo <br>\
                Ca nuje senza e nuje c'e perdimm <br>\
                Pop corn e patatine pe ce arricurda <br>\
                Chella ca si stata e chella ca nun vo turna <br>\
                Tu la mia bambina pane ammore e liberta <br>\
                Io con il mio sciocco sogno di felicita' <br>\
                Pop corn e patatine pe ce arricurda <br>\
                Quann miezz' e scale tu curriv a mma braccia <br>\
                Pop corn e patatine pe ce arricurda <br>\
                Chella ca si stata e chella ca nun vo turna <br>\
                Tu la mia bambina pane ammore e liberta <br>\
                Io con il mio sciocco sogno di felicita'",
                date: "23/11/2020 14:03",
                recived: 1
            },

        ]

    },
]
const loggedUser = {
    name: "Giuseppe Zerino",
    avatar: "img/avatar_1.jpg",
    lastSeen: "24/11/2020 10:00"

}

var root = new Vue({
    el: '#root',
    data: {
        contacts: [...contacts],
        loggedUser: { ...loggedUser },
        message: [],
        search: '',
        currentContact: contacts[0],
        txtInput: '',
    },
    methods: {

    },
    methods: {
        submit() {
            this.currentContact.messages.push({
                textMessage: this.txtInput,
                date: Date.dateString,
                recived: 0
            });

            this.txtInput='';

            setTimeout(() => 
                this.currentContact.messages.push({
                    textMessage: "bellazzzi",
                    date: Date.dateString,
                    recived: 1
                })
            ,5000);
        }
    },
    computed: {
        filterList() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }

});