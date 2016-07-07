import {Component} from 'angular2/core' 

@Component({
    selector: 'voyage',
    templateUrl: 'app/voyage/voyage.component.html'
})

export class VoyageComponent{
    
    billOfLadingNumber: number;
    masterBillOfLadingNumber: number = 50;
    billOfLadingType: number = 2;
    wharfCode: string;
    originPort: string;
    destination: string;
    loadingPort: string;
    discharge: string;
    consignee: string;
    shipper: string;
    notify: string;
}