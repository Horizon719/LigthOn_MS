class Kartya{
    
    #allapot
    #id
    #divElem

    constructor(id, allapot, szuloElem){
        this.#adat = adat;
        szuloElem.append(`<div class="divElem">
                            
                         </div>`);
        this.#divElem = $(".divElem:last-child");
        
    }

    setAllpot(){
        this.szinBeallit();
    }

    szinBeallit(){
        return this.#adat;
    }

    kattintasTrigger(){
        const KAPCS = new CustomEvent("kapcsolas", {detail: this});
        window.dispatchEvent(KAPCS);
    }
} export default Kartya;