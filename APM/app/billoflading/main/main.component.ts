import {Component} from 'angular2/core' 
import {VoyageComponent} from '../../voyage/voyage.component'
import {BillOfLadingDetailComponent} from '../details/detail.component'


@Component({
    selector: 'bill-of-lading',
    templateUrl: 'app/billoflading/main/main.component.html',
    directives: [VoyageComponent,BillOfLadingDetailComponent]
})

export class BillOfLadingComponent{
    
}