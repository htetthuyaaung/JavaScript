// // // // // // console.log('hello javascript');
// // // // // // var firstName = "Htet Thu";
// // // // // // var lastName = "Ya";
// // // // // // var age = 21;
// // // // // // var job = "developer";

// // // // // // console.log(firstName + age);
// // // // // // console.log(age);
// // // // // // console.log('My name is '+ firstName +''+ lastName);

// // // // // // var fullName = prompt('Entet your name');
// // // // // // console.log(fullName);

// // // // // var yearKoKo = 30 ;
// // // // // console.log(yearKoKo);
// // // // // var yearOoOo = 33 ;
// // // // //  var howOld = yearKoKo > yearOoOo;
// // // // //  console.log('Is Ko Ko older than Oo Oo?' + howOld);
// // // // //  console.log(typeof yearKoKo);

// // // // var now = 2020;
// // // // var yearKoKo = 1982;
// // // // var fullAge = 18;
// // // // var isFullAge = now - yearKoKo >= fullAge;
// // // // console.log(isFullAge);

// // // var aaMass = 80 ;
// // // var aaHeight = 20;

// // // var mmMass = 70 ;
// // // var mmHeight = 25 ;

// // // var mmbmi =  mmMass / mmHeight * 2;
// // // var aabmi = aaMass / aaHeight * 2;

// // // console.log('Mg Mg BMI is '+ mmbmi);
// // // console.log('Aung Aung BMI is '+ aabmi);

// // // var who = mmbmi > aabmi;
// // // console.log('Is Mg Mg BMI  higher than Aung Aung?' + who);

// // var name = 'Mg Mg';
// // // var civilStatus = 'Single';
// // var isMarried = false;

// // if ( isMarried ){
// // 	console.log(name + ' is married');
// // }else{
// // 	console.log(name + ' will hopefully marry soom :)');
// // }

// // var fullName = 'Mg Mg';
// // var age = 16;

// // // if ( age < 13){
// // // 	console.log(fullName + 'is boy');
// // // }else if( age >= 13 && age < 20){
// // // 	console.log(fullName + ' is teenager');
// // // }else if( age >= 20 && age < 35){
// // // 	console.log(fullName + ' young man');
// // // }else{
// // // 	console.log(fullName + 'is Man');
// // // }

// // // age > 18 ? console.log(fullName + ' drink beer') : console.log(fullName + ' drink juice');

// // var drink = age > 18 ? 'beer' : 'juice';
// // console.log(drink);

// var job = 'driver';
// var fullName = 'ko ko';
// switch(job){
// 	// case 'teacher' :
// 	// 	console.log(fullName + ' is good teacher');
// 	// 	break;

// 	// 	case 'driver' :
// 	// 	console.log(fullName + ' is good driver');
// 	// 	break;

// 	// 		case 'designer' :
// 	// 	console.log(fullName + ' is good designer');
// 	// 	break;

// 	case 'teacher':
// 	case 'driver':
// 	case 'designer':
// 	console.log(fullName + ' is good ' + job);
// 	break;
// 		default :
// 		console.log(fullName + ' is something job');
// 		break;
// }

// var fullName = 'Mg Mg';
// var age = 20;

// switch(true){
// 	case age < 13 :
// 	console.log(fullName + ' Boy');
// 	break;

// 	case age >= 13 && age < 20 :
// 	console.log(fullName + ' teenager');
// 	break;

// 	case age >= 20  && age < 35 :
// 	console.log(fullName + ' young');
// 	break;

// 	default:
// 	console.log(fullName + ' Man');
// }

// var  height = 0 ;
// if (height || height === 0){
// 	document.write('This is defined value');
// }else{
// 	document.write('This is not defined value');
// }

// var age = 23 ;
// if(age == '23'){
// 	document.write('true' + '<br>');
// }else{
// 	document.write('false');
// }

// var age = 23 ;
// if(age === '23'){
// 	document.write('true' + '<br>');
// }else{
// 	document.write('false');
// }

// var ageMgMg = 2020 - 1980;
// var ageKoKo = 2020 - 1970;
// console.log(ageMgMg);
// console.log(ageKoKo);

// function calAge(brithYear){
// 	return 2020 - brithYear; //39
// }
// var ageMgMg = calAge(1980);
// console.log(ageMgMg);

// var ageKoKo = calAge(1990);
// console.log (ageKoKo);

// function calAge(brithYear){
// 	return 2020 - brithYear; //39
// }

// function yearUntilRetirement(year,fullName){
// 	var age = calAge(year);
// 	var retirement = 60 - age;
// 	if (retirement > 0){
// 		console.log(age);
// 		console.log(fullName + ' retire  in ' + retirement + ' years');
	
// }else{
// 	console.log(age);
// 	console.log(fullName + ' already retire');
// }
	
// }

// yearUntilRetirement(1990, 'Mg Mg');
// yearUntilRetirement(1964, 'U Ba');
// yearUntilRetirement(1950, 'U Hla');

// var whatDoYouDo = function (job,fullName){
// 	switch(job) {
// 		case 'teacher':
// 		 	return fullName + ' is '+ job;
// 		 case 'driver':
// 		 	return fullName + ' is '+ job;
// 		 case 'designer':
// 		 	return fullName + ' is '+ job;

// 		 default:
// 		 	return fullName + ' is working something';

// 	}
// }
// console.log(whatDoYouDo('teacher','Mg Mg'));
// console.log(whatDoYouDo('designer','Aung Aung'));
// console.log(whatDoYouDo('driver','Ko Ko'));

// var bioMgMg = ['Mg Mg','Gyi',26,'teacher',false];
// bioMgMg.push('Blue');
// bioMgMg.unshift('Mr');
// bioMgMg.pop();
// bioMgMg.pop();
// console.log(bioMgMg);
// bioMgMg.shift();
// console.log(bioMgMg);

// console.log(bioMgMg.indexOf(26));

// var designer = bioMgMg.indexOf('designer') === -1 ? 'He is not designer' : 'He is designer';
// console.log(designer);

// var mgmg = {
// 	firstName : 'Mg Mg',
// 	lastName : 'Hla',
// 	age : 24 ,
// 	family : ['U Ba', 'Daw Mya', 'Ko Ko', 'Su Su'],
// 	isMarried : false
// };
// console.log(mgmg);
// console.log(mgmg.firstName);
// console.log(mgmg['isMarried']);

// var x = 'age';
// console.log(mgmg[x]);

// mgmg.age = '30';
// console.log(mgmg.age);

// mgmg.isMarried = true;
// console.log(mgmg.isMarried);
// console.log(mgmg);


// var aung = new Object();
// aung.firstName = 'Aung Aung';
// aung.lastName = 'Gyi';

// console.log(aung);

// for (var i = 0 ; i<=10 ; i++){
// 	console.log(i);
// }

// var dev = ['htet Thu','ya aung',1998,'developer',false];
// for ( var i =0 ; i<dev.length ; i++){
// 	if(typeof dev[i] !== 'string') break;
// console.log(dev[i]);
// }

// var i = 0;
// while( i < dev.length){
// 	console.log(dev[i]);
// 	i++;
// }

// var Person = function(name,dateOfBirth,isMarried){
// 	this.name = name;
// 	this.dateOfBirth = dateOfBirth;
// 	this.isMarried = isMarried;	

// 	this.calAge = function(){
// 		console.log( 2020 - this.dateOfBirth);
// 	}
// }
// Person.prototype.lastName = 'Soe';

// var mgmg = new Person ('MgMg', 1990, false);
// mgmg.calAge();
// var aungaung = new Person ( 'AungAung', 1980, true);
// aungaung.calAge();
// var hlahla = new Person ( 'HlaHla', 1992, false);
// hlahla.calAge();

// console.log ( mgmg.name + mgmg.lastName);
// console.log ( aungaung.name + aungaung.lastName);
// console.log ( hlahla.name + hlahla.lastName);

// var year = [ 1990, 1987, 1954, 1997, 2000];
// function arrCal( arr, fn ){
// 	var arrRes = [];
// 	for( var i = 0 ; i < arr.length; i++ ){
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }
// function calAge(el){
// 	return 2020 - el ;
// }

// var ages = arrCal(year, calAge);
// console.log( ages );



// function isFullAge(el){
// 	return 18 <= el;
// }
// var fullAge = arrCal ( ages, isFullAge);
// console.log(fullAge);

// function maxHeartRate(el){
// 	if(el >= 18 && el <= 81){
// 			return 206.9 - ( 0.67 * el);
// 		}else{
// 			return -1;
// 		}

// }
// var heartRate = arrCal(ages, maxHeartRate);
// console.log(heartRate);