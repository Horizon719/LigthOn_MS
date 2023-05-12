class Lampa{
    
    #allapot
    #id
    #divElem

    constructor(id, allapot, szuloElem){
        this.#id = id;
        this.#allapot = allapot;
        szuloElem.append(`<div class="divElem" >
                            
                         </div>`);
        this.#divElem = $(".divElem:last-child");
        this.#szinBeallit();
        this.#divElem.on("click", () => {
            this.#kattintasTrigger();
        });
    }

    getId(){
        return this.#id;
    }

    setAllapot(){
        if (this.#allapot) {
            this.#allapot = false;
        } else {
            this.#allapot = true;
        }
        this.#szinBeallit();
    }

    #szinBeallit(){
        if (this.#allapot) {
            this.#divElem.css("background-color", "green")
        } else {
            this.#divElem.css("background-color", "yellow")
        }
    }

    #kattintasTrigger(){
        const KAPCS = new CustomEvent("kapcsolas", {detail: this});
        window.dispatchEvent(KAPCS);
    }
} export default Lampa;