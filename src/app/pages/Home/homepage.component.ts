import { Component } from "@angular/core";
import { herosectionComponent } from "./sections/herosection/herosection.component";
import { productcardsection } from "./sections/productcardsection/productcardsection.component";
import { benefitsection } from "./sections/benefitsection/benefitsection.component";
import { contactpricesection } from "./sections/contactpricesection/contactpricesection.component";

@Component({
    templateUrl:'./homepage.component.html',
    imports:[herosectionComponent, productcardsection, benefitsection,contactpricesection],
})

export class HomePageComponent{
    
}