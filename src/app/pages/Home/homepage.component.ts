import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionFlashOutline, ionShieldOutline, ionTrophyOutline } from '@ng-icons/ionicons';
import { mainCardComponent } from "../../components/maincard/maincard.component";

@Component({
    templateUrl:'./homepage.component.html',
    imports:[MatButtonModule, NgIcon,mainCardComponent],
    viewProviders: [provideIcons({ ionFlashOutline, ionShieldOutline,ionTrophyOutline })]
})

export class HomePageComponent{
    
}