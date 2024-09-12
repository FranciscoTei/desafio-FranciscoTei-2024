class RecintosZoo {
    constructor() {
        this.recintos = [
            {'numero': 1, 'bioma': ['savana'], 'tamanho': 10, 'animais': {'MACACO': 3}},
            {'numero': 2, 'bioma': ['floresta'], 'tamanho': 5, 'animais': {}},
            {'numero': 3, 'bioma': ["savana","rio"], 'tamanho': 7, 'animais': {'GAZELA': 1}},
            {'numero': 4, 'bioma': ['rio'], 'tamanho': 8, 'animais': {}},
            {'numero': 5, 'bioma': ['savana'], 'tamanho': 9, 'animais': {'LEAO': 1}},
        ];

        this.animais = {
            'LEAO': {'tamanho': 3, 'biomas': ['savana'], 'carnivoro': true},
            'LEOPARDO': {'tamanho': 2, 'biomas': ['savana'], 'carnivoro': true},
            'CROCODILO': {'tamanho': 3, 'biomas': ['rio'], 'carnivoro': true},
            'MACACO': {'tamanho': 1, 'biomas': ['savana', 'floresta'], 'carnivoro': false},
            'GAZELA': {'tamanho': 2, 'biomas': ['savana'], 'carnivoro': false},
            'HIPOPOTAMO': {'tamanho': 4, 'biomas': ['savana', 'rio'], 'carnivoro': false}
        };
    }

    analisaRecintos(animal, quantidade) {
        if (!this.animais[animal.toUpperCase()]) {
            return { erro: "Animal inválido" };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }

        const infoAnimal = this.animais[animal.toUpperCase()];
        const tamanhoAnimal = infoAnimal.tamanho * quantidade;
        const biomasAceitos = infoAnimal.biomas;
        const carnivoro = infoAnimal.carnivoro;

        const recintosViaveis = [];

        let i = 0;
        this.recintos.forEach(recinto => {
            i +=1;
            const bioma = recinto.bioma;
            const animaisExistentes = recinto.animais;

            if (!recinto.bioma.some((b) => biomasAceitos.includes(b))) return;

            let espacoOcupado = Object.keys(animaisExistentes).reduce((acc, a) => {
                return acc + animaisExistentes[a] * this.animais[a].tamanho;
            }, 0);

            if (Object.keys(animaisExistentes).length > 0 && !animaisExistentes.hasOwnProperty(animal)) {
                espacoOcupado += 1;
            }

            const espacoTotal = recinto.tamanho;
            const espacoLivre = espacoTotal - espacoOcupado;

            if (espacoLivre < tamanhoAnimal) return;

            if (carnivoro) {
                if (Object.keys(animaisExistentes).some(a => a !== animal)) {
                    return;
                }
            } else if (Object.keys(animaisExistentes).some(a => this.animais[a].carnivoro)) {
                return;
            }

            if (animal.toLowerCase() === 'macaco' && Object.keys(animaisExistentes).length === 0 && quantidade == 1) return; //conferir
            if (animal.toLowerCase() === 'hipopotamo' && !['savana', 'rio'].some(b => bioma.includes(b)) && Object.keys(animaisExistentes).length > 0) return;

            recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre - tamanhoAnimal} total: ${espacoTotal})`);
        });

        if(recintosViaveis.length > 0) {
            return {
                erro: false,
                recintosViaveis: recintosViaveis,
            };
        }

        return {
            erro: "Não há recinto viável",
            recintosViaveis: false,
        };
    }

}


//console.log(new RecintosZoo().analisaRecintos('MACACO', 2));
//console.log(new RecintosZoo().analisaRecintos("GAZELA", 2));


export { RecintosZoo as RecintosZoo };
