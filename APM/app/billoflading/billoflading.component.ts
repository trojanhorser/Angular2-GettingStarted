import {Component} from 'angular2/core' 
import {VoyageComponent} from '../voyage/voyage.component'

@Component({
    selector: 'bill-of-lading',
    templateUrl: 'app/billoflading/billoflading.component.html',
    directives: [VoyageComponent]
})

export class BillOfLadingComponent{
    
}