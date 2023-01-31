const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todo = document.querySelector("#td");
const todo2 = document.querySelector("#td2");
const formsearch = document.querySelector("#form-search");
const formedit = document.querySelector("#edit-form");
const Searchinput = document.querySelector("#search-input");
const todof = document.querySelector("#todo-form-todo");
const filter = document.querySelector("#Filter-Toolbar");
const edinput = document.querySelector("#edit-input");
const cancel = document.querySelector("#cancel-edit-btn");
const btnedit = document.querySelector("#btn-edit");
const erasebtn = document.querySelector("#erase-button");
const back = document.querySelector("#back-button");
let todotitle;
let todotitleold;

const toggleforms = () => {
    todo.classList.toggle("None");
    todof.classList.toggle("None");
    formedit.classList.toggle("None");
    filter.classList.toggle("None");
};
const toggletodo = () => {
    todof.classList.toggle("None");
    back.classList.toggle("None");
    let lista = document.querySelectorAll(".todo .todo-list h3");
    lista.forEach((item) => {
        item.closest("div").classList.toggle("None");
    });
};
const togglebeck = () => {
    todof.classList.toggle("None");
    back.classList.toggle("None");
    const lista = document.querySelectorAll(".todo .todo-list");
    lista.forEach((item) => {
        item.classList.remove("None");
    });
};

const Savetodo = (text) => {
    const classe = document.createElement("div"); //Cria o Elemento html
    classe.classList.add("todo-list");//add uma classe no elemento 

    //h3
    const texto = document.createElement("h3");
    texto.innerText = text;
    classe.appendChild(texto);

    //btn1
    const btndone = document.createElement("button");
    btndone.classList.add("finish-todo");
    btndone.innerHTML = '<i class="btn fa-solid fa-check"></i>';
    classe.appendChild(btndone);

    //btn2
    const btnedit = document.createElement("button");
    btnedit.classList.add("edit-todo");
    btnedit.innerHTML = '<i class="btn fa-solid fa-pen"></i>';
    classe.appendChild(btnedit);

    //btn3
    const btnremove = document.createElement("button");
    btnedit.classList.add("remove-todo");
    btnremove.innerHTML = '<i class="btn fa-solid fa-xmark"></i>';
    classe.appendChild(btnremove);

    todo.appendChild(classe);
};

Searchtodo = (text) => {
    todo.className = "None";

    const classe = document.createElement("div"); //Cria o Elemento html
    classe.classList.add("todo-list");//add uma classe no elemento 

    //h3
    const texto = document.createElement("h3");
    texto.innerText = text;
    classe.appendChild(texto);

    //btn1
    const btndone = document.createElement("button");
    btndone.classList.add("finish-todo");
    btndone.innerHTML = '<i class="btn fa-solid fa-check"></i>';
    classe.appendChild(btndone);

    //btn2
    const btnedit = document.createElement("button");
    btnedit.classList.add("edit-todo");
    btnedit.innerHTML = '<i class="btn fa-solid fa-pen"></i>';
    classe.appendChild(btnedit);

    //btn3
    const btnremove = document.createElement("button");
    btnedit.classList.add("remove-todo");
    btnremove.innerHTML = '<i class="btn fa-solid fa-xmark"></i>';
    classe.appendChild(btnremove);

    todo2.appendChild(classe);

};

// lembrando q esse todoform é um formulario veja se é possivel se fosse um id 
todoform.addEventListener("submit", (e) => { //esse addEventListener cria um evento que é possivel colocar parametros
    e.preventDefault(); //não recarrega a pagina, mas n envia dados para o backend
    Savetodo(todoInput.value); //metodo chamado 
});

erasebtn.addEventListener("click", (e) => {
    e.preventDefault();
    let lista = document.querySelectorAll(".todo .todo-list h3");
    let conteiner;
    lista.forEach((item) => {
        if (item.innerHTML == Searchinput.value) {
            toggletodo();
            item.closest("div").classList.toggle("None");
            todotitle = item.closest("div").querySelector("h3").innerText;
        }
    });
});
back.addEventListener('click', (e) => {
    e.preventDefault();
    togglebeck();
});

todo.addEventListener('click', (e) => {
    const Element = e.target;
    const ElementClass = Element.closest("div");
    todotitleold = ElementClass.querySelector("h3");
    if (Element.classList.contains("fa-check")) {
        ElementClass.classList.toggle("Done");
    }
    if (Element.classList.contains("fa-xmark")) {
        ElementClass.remove();
    }
    if (Element.classList.contains("fa-pen")) {
        toggleforms();
    }

});
cancel.addEventListener('click', (e) => {
    e.preventDefault();
    toggleforms();
    todo.classList.remove("None");
});
btnedit.addEventListener('click', (e) => {
    e.preventDefault();
    todotitleold.innerHTML = edinput.value;
    toggleforms();

});