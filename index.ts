class Vehicle {
    div: HTMLDivElement;
    value: number;
    damage: number;
    
    constructor() {
        this.div = document.createElement('div');
        this.div.getElementById('newVehicles').appendChild(this.div);
        $(this.div)
        this.value = null;
        this.damage = null;
        
    }
   