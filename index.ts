/// <reference path= "typings/browser.d.ts" />

class Vehicle {
    div: HTMLElement;
    value: number;
    damage: number;
    
    constructor() {
        this.div = document.createElement('div');
        document.getElementById('newVehicles').appendChild(this.div);
        $(this.div).css({left: Math.floor(Math.random() * 10), top: Math.floor(Math.random() * 20)
            });
        this.value = null;
        this.damage = null;
        
    }
    drive() {
        let Number = Math.floor(Math.random() *10) +1;
        let ranNum = Math.floor(Math.random() * 20) +1;
        $('.car').animate({'right': Number}, 1500);
        $('.cop').animate({'top': ranNum}, 500);
        $('.bike').animate({'bottom': Number}, 2000);
        $('.tank').animate({'left': ranNum}, 3000);
    }
    crash() {
        this.damage++;
        if(this.value == this.damage) {
            this.out();
        }
     }
     out() {
         this.div.remove();
     }
}
class Car extends Vehicle{
    constructor() {
        super();
        this.value = 0;
        this.damage = 2;
        this.div.className = 'car';
        this.div.addEventListener('click', (e) => {
            this.crash();
            
        });
    }
}

    function addCar() {
        let car = new Car();
        car.drive()
        setInterval(function() {
            car.drive();
        }, 1500);
        }
        
    class Cop extends Vehicle {
        constructor() {
            super();
                this.value = 0;
                this.damage = 3;
                this.div.addEventListener('click', (e) => {
                    this.crash();
                })
                
            }
        }
    function addCop() {
        let cop = new Cop();
        cop.drive();
        setInterval(function() {
            cop.drive();
        }, 500);
    }
    
    class Bike extends Vehicle {
        constructor() {
            super();
            this.value = 0;
            this.damage = 10;
            this.div.className = 'bike';
            this.div.addEventListener('click', (e) => {
                this.crash();
            });
        }
    }
function addBike() {
    let bike = new Bike();
    bike.drive();
    setInterval(function() {
        bike.drive();
    }, 2000); 
    }
class Tank extends Vehicle {
    constructor() {
        super();
        this.value = 0
        this.damage = 1;
        this.div.className = 'tank';
        this.div.addEventListener('click', (e) => {
            this.crash();
            
        });
    }
}
function addTank() {
    let tank = new Tank();
    tank.drive();
    setInterval(function() {
        tank.drive();
    }, 3000);
  }
  
  $(document).ready(function() {
      $('addCar').click(function() {
          addCar();
      });
      $('addCop').click(function() {
          addCop();  
      });
      $('addBike').click(function() {
        addBike();  
      });
      $('addTank').click(function() {
          addTank();
      });
  })
