import { Component, input } from "@angular/core";
import { NgIcon, provideIcons } from '@ng-icons/core';
import {MatCardModule} from '@angular/material/card';
import { ionCheckmarkSharp } from '@ng-icons/ionicons';
import { MatButtonModule } from "@angular/material/button";


@Component({
    selector:'maincard',
    templateUrl:'./maincard.component.html',
    imports: [MatCardModule, NgIcon,MatButtonModule],
    viewProviders: [provideIcons({ ionCheckmarkSharp })]
})

export class mainCardComponent{
    imageTittle = input<string>();
    TituloProducto = input<string>();
    DescripcionProducto = input<string>();
    PrecioProducto = input<string>();
    PrecioAnteriorProducto = input<string>();
    Caracteristica_1 = input<string>();
    Caracteristica_2 = input<string>();
    Caracteristica_3 = input<string>();
}