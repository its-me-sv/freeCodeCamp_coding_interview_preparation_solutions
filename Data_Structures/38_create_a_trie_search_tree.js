var Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};
var Trie = function () {
    this.root = new Node();
    this.add = (word, root = this.root) => {
        if (!word.length) {
            root.setEnd();
            return;
        }
        let letter = word[0];
        if (!Object.keys(root.keys).includes(letter))
            root.keys[letter] = new Node();
        this.add(word.slice(1), root.keys[letter]);
    };
    this.isWord = word => {
        let root = this.root;
        for (let letter of word) {
            if (!Object.keys(root.keys).includes(letter))
                return false;
            root = root.keys[letter];
        }
        return root.isEnd();
    };
    this.print = () => {
        let allWords = [];
        const makeWord = (word = "", root = this.root) => {
            for (let letter of Object.keys(root.keys))
                makeWord(word + letter, root.keys[letter]);
            if (root.isEnd())
                allWords.push(word);
        };
        makeWord();
        return allWords;
    };
};