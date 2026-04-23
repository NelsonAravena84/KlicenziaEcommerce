import { Component, input } from "@angular/core";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { 
    ionCardOutline, 
    ionTimeOutline, 
    ionHeadsetOutline, 
    ionRefreshOutline, 
    ionLockClosedOutline,
    ionPeopleOutline } from '@ng-icons/ionicons';

@Component({
    selector: 'simple-card',
    templateUrl: './simplecard.component.html',
    imports:[NgIcon],
    viewProviders: [provideIcons({ ionCardOutline, ionTimeOutline, ionHeadsetOutline, ionRefreshOutline, ionLockClosedOutline,ionPeopleOutline })]

})

export class simplecard { 
    IconTitulo = input<string>();
    Titutlo = input<string>();
    IconTittle = input<string>();
    Descripcion = input<string>();
}