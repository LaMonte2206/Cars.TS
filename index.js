/// <reference path= "typings/browser.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle() {
        this.div = document.createElement('div');
        document.getElementById('newVehicles').appendChild(this.div);
        $(this.div).css({ left: Math.floor(Math.random() * 10), top: Math.floor(Math.random() * 20)
        });
        this.value = null;
        this.damage = null;
    }
    Vehicle.prototype.drive = function () {
        var Number = Math.floor(Math.random() * 10) + 1;
        var ranNum = Math.floor(Math.random() * 20) + 1;
        $('.car').animate({ 'right': Number }, 1500);
        $('.cop').animate({ 'top': ranNum }, 500);
        $('.bike').animate({ 'bottom': Number }, 2000);
        $('.tank').animate({ 'left': ranNum }, 3000);
    };
    Vehicle.prototype.crash = function () {
        this.damage++;
        if (this.value == this.damage) {
            this.out();
        }
    };
    Vehicle.prototype.out = function () {
        this.div.remove();
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = this;
        _super.call(this);
        this.value = 0;
        this.damage = 2;
        this.div.className = 'car';
        this.div.addEventListener('click', function (e) {
            _this.crash();
        });
    }
    return Car;
}(Vehicle));
function addCar() {
    var car = new Car();
    car.drive();
    setInterval(function () {
        car.drive();
    }, 1500);
}
var Cop = (function (_super) {
    __extends(Cop, _super);
    function Cop() {
        var _this = this;
        _super.call(this);
        this.value = 0;
        this.damage = 3;
        this.div.addEventListener('click', function (e) {
            _this.crash();
        });
    }
    return Cop;
}(Vehicle));
function addCop() {
    var cop = new Cop();
    cop.drive();
    setInterval(function () {
        cop.drive();
    }, 500);
}
var Bike = (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        var _this = this;
        _super.call(this);
        this.value = 0;
        this.damage = 10;
        this.div.className = 'bike';
        this.div.addEventListener('click', function (e) {
            _this.crash();
        });
    }
    return Bike;
}(Vehicle));
function addBike() {
    var bike = new Bike();
    bike.drive();
    setInterval(function () {
        bike.drive();
    }, 2000);
}
var Tank = (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        var _this = this;
        _super.call(this);
        this.value = 0;
        this.damage = 1;
        this.div.className = 'tank';
        this.div.addEventListener('click', function (e) {
            _this.crash();
        });
    }
    return Tank;
}(Vehicle));
function addTank() {
    var tank = new Tank();
    tank.drive();
    setInterval(function () {
        tank.drive();
    }, 3000);
}
$(document).ready(function () {
    $('addCar').click(function () {
        addCar();
    });
    $('addCop').click(function () {
        addCop();
    });
    $('addBike').click(function () {
        addBike();
    });
    $('addTank').click(function () {
        addTank();
    });
});
