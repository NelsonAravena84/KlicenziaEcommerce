import { Component } from "@angular/core";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { MatButtonModule } from "@angular/material/button";
import { ionFlashOutline, ionShieldOutline, ionTrophyOutline } from '@ng-icons/ionicons';


@Component({
    templateUrl : './herosection.component.html',
    selector: 'herosection',
    imports: [MatButtonModule, NgIcon],
    viewProviders: [provideIcons({ ionFlashOutline, ionShieldOutline,ionTrophyOutline })]

})

export class herosectionComponent{}