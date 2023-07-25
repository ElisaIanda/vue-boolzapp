
const app = Vue.createApp({
    data() {
        return {
            contatti: [
                {
                    name: "Michele",
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Greta",
<<<<<<< HEAD
                    avatar: "_1",
=======
                    avatar: "./Immagini/avatar_1.jpg",
>>>>>>> bd6d2eb27630e63995b192186c6073674616a06c
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Tutto bene, te?",
                            status: "received",
                        },
                    ],
                },
<<<<<<< HEAD
            ],

            currentIndex: 0,
            search: " ",

            newMessage: {
                date: "",
                message: "",
                status: "sent"
            },

            risposta: [

                "ciao",
                "tutto bene?",
                "come stai?",
                "possiamo parlare?",
                "ok!"
=======
>>>>>>> bd6d2eb27630e63995b192186c6073674616a06c
            ],
            search: "",
            currentIndex: 0,
            active: null,

        };


    },
    methods: {
        changeChat(i) {
<<<<<<< HEAD
            this.currentIndex = i;
        },

        invioMessaggio(i) {
            //   Pusho il nuovo messaggio
            this.contatti[this.currentIndex].messages.push({ date: this.currentDate(), message: this.newMessage.message, status: "sent" });
            this.newMessage.message = " ";
            //   Richiamo la funzione di risposta al messaggio 
            this.rispostaMessagio(i)
        },

        rispostaMessagio() {
            setTimeout(() => {
                //   Creo una risposta random dall'array di risposte esistenti
                let randomRisposta = Math.floor(Math.random() * this.risposta.length);
                //   Pusho il nuovo messaggio
                this.contatti[this.currentIndex].messages.push({ date: this.currentDate(), message: this.risposta[randomRisposta], status: "received" });
            }, 1000);
        },

        // Creo funzione per ripostarere la data e l'ora nel messaggio
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
            return date;
=======
            this.currentIndex = i
            this.active = null;
        },

        // setto la active in false se è uguale all'indice del messaggio
        openChat(i) {
            if (this.active === i) {
                this.active = false;
            } else {
                this.active = i;
            }
>>>>>>> bd6d2eb27630e63995b192186c6073674616a06c
        },
    },
});

console.log(app);
app.mount("#app");