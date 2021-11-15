// Rifare l’esercizio della todo list.
// Partire dalla definizione di un array con 3 oggetti ( i todo).
// Ogni oggetto todo avrà le seguenti proprietà:
// - text, una stringa che indica il testo del todo
// - completed, un booleano (true/false) che indica se il todo è stato completato oppure no
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà completed è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1. Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista.
// 2. Cliccando sul testo del todo, invertire il valore della proprietà completed del todo corrispondente (se completed era uguale a false, impostare true e viceversa).

const root = new Vue({
    el: '#root',
    data: {
        todos: [
            {
                text: 'Portare fuori il cane',
                completed: false,
            },
            {
                text: 'Andare a fare la spesa',
                completed: true,
            },
            {
                text: 'Controllare la macchina',
                completed: false,
            },
        ],
        todoNew: '',
    },
    methods: {
        addNewTodo() {
            // se todoNew è diverso da 'striga vuota', allora pusha cpm primo della lista
            if(this.todoNew !== '') {
                this.todos.unshift({
                    text: this.todoNew,
                    completed: false,
                });

                // reset input
                this.todoNew = '';
            };
        },
    }
});