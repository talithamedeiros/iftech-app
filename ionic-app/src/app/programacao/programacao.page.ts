import { Component, OnInit } from '@angular/core';
import { Programacao } from './programacao.model';
import { ProgramacaoService } from './programacao.service';

import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-programacao',
    templateUrl: './programacao.page.html',
    styleUrls: ['programacao.page.scss']
})
export class ProgramacaoPage implements OnInit {
    palestras: Programacao[] = [];

    constructor(private service: ProgramacaoService,
                private storage: Storage) { }

    ngOnInit() {
        this.service.getPalestras()
            .subscribe(palestras => {
                console.log(palestras);
                this.palestras = palestras;
            });
    }

    addFavorito(programacao: Programacao){
        this.storage.set('programacao', programacao)
    }

}