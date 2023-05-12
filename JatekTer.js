import Lampa from "./Lampa.js"

class JatekTer{
    #db;
    #allapotLista = [];
    #meret
    #lepes

    constructor(){
        this.#meret = 3;

        const TAROLO = $("#tarolo");
        this.#setAllapotLista();
        for (let i = 0; i < this.#meret*this.#meret; i++) {
            
            let allapot = this.#allapotLista[i];
            const LAMPA = new Lampa(i, allapot, TAROLO);
        }
        $(window).on("kapcsolas",(event)=>{
            event.detail.setAllapot();
            this.#allapotLista[event.detail.getId()] = !this.#allapotLista[event.detail.getId()];
        })
    }

    #setAllapotLista(){
        for (let i = 0; i < this.#meret*this.#meret; i++) {
            let szam = Math.floor(Math.random()*5);
            if (szam ===  0) {
                this.#allapotLista[i] = true;
            } else {
                this.#allapotLista[i] = false;
            }
        }
    }

    #szomszedokKeresese(id){

    }

    #init(){
        
    }

    #ellenorzes(){
        let db = 0;
        this.#allapotLista.forEach(allapot => {
            if(allapot){
                db++;
            }
        });
        return db;
    }

} export default JatekTer;