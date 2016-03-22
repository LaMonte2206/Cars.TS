var Vehicle = (function () {
    function Vehicle() {
        this.div = document.createElement('div');
        this.div.className = 'newVehicle';
    }
    Vehicle.prototype.insert = function () {
        var New = document.getElementById('new');
        New.appendChild(this.div);
    };
    return Vehicle;
}());
var newCar = [];
function addCar() {
    var newVehicle = new Vehicle();
    newVehicle.insert();
    newCar.push(newVehicle);
    console.log('something');
}
