// var mgmg = {

// 	fullName : 'MgMg',
// 	bills : [32000,15000,170000,82000,4800],

// 	calculateTips : function(){
// 		this.tips = [];
// 		this.totalAmount = [];

// 		for( i=0; i<this.bills.length; i++){
// 			var percentage;
// 			var bill = this.bills[i];
// 			if(this.bill<30000){
// 				percentage = 0.2;
// 			}else if (this.bill>=30000 && this.bill < 100000) {
// 				percentage = 0.5;
// 			}else{
// 				percentage = 0.1;
// 			}
// 			this.tips[i] = bill * percentage;
// 			this.totalAmount[i] = bill + bill  * percentage;
// 		}
// 	}
// }

// mgmg.calculateTips();
// console.log(mgmg);

// var hlahla = {

// 	fullName : 'HlaHla',
// 	bills : [28000,140000,79000,14000],

// 	calculateTips : function(){
// 		this.tips = [];
// 		this.totalAmount = [];

// 		for( i=0; i<this.bills.length; i++){
// 			var percentage;
// 			var bill = this.bills[i];
// 			if(this.bill<20000){
// 				percentage = 0.2;
// 			}else if (this.bill>=20000 && this.bill < 80000) {
// 				percentage = 0.1;
// 			}else{
// 				percentage = 0.25;
// 			}
// 			this.tips[i] = bill * percentage;
// 			this.totalAmount[i] = bill + bill  * percentage;
// 		}
// 	}
// }

// hlahla.calculateTips();
// console.log(hlahla);

// function calculateAverage(tips){
// 			var sum = 0;
// 			for ( var i=0; i< tips.length; i++){
// 				sum = sum + tips[i];
// 			}

// 			return sum/tips.length;
// }

// mgmg.average = calculateAverage(mgmg.tips);
// hlahla.average = calculateAverage(hlahla.tips);
// console.log(mgmg,hlahla);

// if (mgmg.average > hlahla.average){
// 	console.log(mgmg.fullName + '\'s family pay heigher tips with an average of $' + mgmg.average);
// }else if (mgmg.average < hlahla.average){
// 	console.log(hlahla.fullName + '\'s family pay heigher tips with an average of $' + hlahla.average);
// }else{
// 	console.log('They are equal balance');
// }
