Vue.createApp({
    data() {
        return {
            words: [],
            word: "",
            showwords: false
        }
    },
    methods: {
        addWord(word) {
                console.log("addword() runs " + word);
                this.words.push(word);
        },
        show()
        {
            console.log("show() runs ");
            this.showwords = true;
        },
        clear(){
            console.log("Clear ");
            this.words.length = 0;
            this.showWords = false;
        }
    }
}).mount("#app")