import {Component} from 'angular2/core' 

@Component({
    selector: 'cargo',
    templateUrl: 'app/cargo/cargo.component.html'
})

export class CargoComponent{
    
    cargos: any = [{
            "quantity": 500,
            "package": "Lumber",
            "commodity": "Something",
            "hsCode": "10021",
            "weight": [
                200,
                300,
                400
            ],
            "volume": [
                500,
                1000,
                3000
            ],
            "showDetails": false
            },
            {
            "quantity": 500,
            "package": "New York",
            "commodity": "NY",
            "hsCode": "10021",
            "weight": [
                200,
                300,
                400
            ],
            "volume": [
                500,
                1000,
                3000
            ],
            "showDetails": false
            }]
    
}