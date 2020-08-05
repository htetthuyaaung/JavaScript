//Budget controller
var budgetController = (function(){

	var Expense = function(id,description,value){
		this.id = id;
		this.description = description;
		this.value = value;
		this.percentage = -1;
	}

	Expense.prototype.calcPercentage = function(totalIncome){
		if (totalIncome > 0) {
			this.percentage = Math.round((this.value / totalIncome) * 100) ;
		}else{
			this.percentage = -1 ;
		}
	}

	Expense.prototype.getPercentage = function(){
		return this.percentage;
	}

	var Income = function(id,description,value){
		this.id = id;
		this.description = description;
		this.value = value;
	}

	var data = {
		allItems : {
			exp:[],
			inc:[]
		},
		totals : {
			exp: 0,
			inc: 0
		},
		budget : 0,
		percentage : -1
		
	}

	var calculateTotal = function(type){
		var sum = 0;
		data.allItems[type].forEach(function(cur){
			
			sum = sum + cur.value;
	
		})
			data.totals[type] = sum; 
	}

	    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            // ID = last ID + 1
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },
        
        deleteItem : function(type,id){

            var ids = data.allItems[type].map(function(current){
                return current.id;
            });
            var index = ids.indexOf(id);
            if(index !== -1){
                data.allItems[type].splice(index,1);
            }
        },
        
        
        
        calculateBudget: function() {
            
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }            
            
            // Expense = 100 and income 300, spent 33.333% = 100/300 = 0.3333 * 100
        },
        
        
        
        
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        claculatePercentage : function(){

        	data.allItems.exp.forEach(function(cur){
        		cur.calcPercentage(data.totals.inc);
        	})
        },

        getPercentage : function(){
        	var allPerc = data.allItems.exp.map(function(cur){
        		return cur.getPercentage();
        	})
        	return allPerc;
        },
        
        testing: function() {
            return data.allItems;
        }
    };

})();
//[1 2 3 4 5] nextID = 6
//[1 2 4 6 8] nextID = 9
//ID = last ID + 1
//ID = data.allItems[type][data.allItems[type].length-1].id + 1;


//UI controlller
var UIController = (function(){

	var DOMString = {

		inputType : '.add__type',
		inputDescription : '.add__description',
		inputValue : '.add__value',
		inputBtn : '.add__btn',
		incomeElement : '.income__list',
		expenseElement : '.expenses__list',
		budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container : '.container',
        expensePercLabel : '.item__percentage'

	}

	return {

		getInput : function(){

			return{
				type :document.querySelector(DOMString.inputType).value,
				description :document.querySelector(DOMString.inputDescription).value,
				value : parseFloat(document.querySelector(DOMString.inputValue).value)

			}
			

		},

		getDOMString : function(){
			return DOMString;
		},

		addListItem : function(obj,type){
			// create html string with placeholder test
			var html,newHTML,element;

			if(type === 'inc'){
				element = DOMString.incomeElement;
				html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">+ %value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';

			}else if( type === 'exp'){
				element = DOMString.expenseElement;
				html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div> <div class="item__percentage">21%</div> <div class="item__delete"><button class="item__delete--btn"> <i class="ion-ios-close-outline"></i></button></div></div></div>';
			}
			
			
			// replace hlaceholder text with actual data
			newHTML = html.replace('%id%',obj.id);
			newHTML = newHTML.replace('%description%',obj.description);
			newHTML = newHTML.replace('%value%',obj.value);
			// insert html int the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
		},

        deleteListItem : function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);

        },

		clearFileds :function(){
			var fields,fieldsArr;
			fields = document.querySelectorAll(DOMString.inputDescription+','+DOMString.inputValue);

			// fields.slice();
			fieldsArr=Array.prototype.slice.call(fields);
			fieldsArr.forEach(function(current,index,array){
				current.value = '';
			})
			fieldsArr[0].focus();
		},

	displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMString.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMString.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMString.expensesLabel).textContent =obj.totalExp;
            
            if (obj.percentage > 0) {
                document.querySelector(DOMString.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMString.percentageLabel).textContent = '---';
            }
            
        },
        diaplayPercentage : function(percentage){
        	var fields = document.querySelectorAll(DOMString.expensePercLabel);

        	var nodeListforEach = function(list,callBack){
        		for( var i = 0; i < list.length; i++){
        			callBack(list[i],i)
        		}
        	}
        	nodeListforEach(fields,function(current,index){
        		if(percentage[index] > 0){
        		current.textContent = percentage[index] + '%';
        	}else{
        		current.textContent = '---';
        	}
        	});
        }
		

	}


})();


//Global app controller
var controller = (function(budgetCtrl,UICtrl){

	 var setupEventListener = function() {
        var DOM = UICtrl.getDOMString();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
	}



    var updateBudget = function() {
        
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
       
        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
    };

    var updatePercentages = function(){
    	// 1.Calculate percentage
    	budgetCtrl.claculatePercentage();
    	// 2.Read percentage form budget controller
    	var percentage = budgetCtrl.getPercentage();
    	
    	// 3.update the UI with new percentage
    	UICtrl.diaplayPercentage(percentage);
    };
	
	var ctrlAddItem = function(){
		var input,newItem;
				// 1. Get the field input data
				input = UICtrl.getInput();

				if( input.description !== '' && !isNaN(input.value)  && input.value > 0){

					// 2. Add the item to the budget controller
					newItem	= budgetCtrl.addItem(input.type,input.description,input.value);


					// 3. Add the item to the UI
					UICtrl.addListItem(newItem,input.type);

					// 4. clearFileds
					UICtrl.clearFileds();
					
					// 5. calculate the update budget
                    updateBudget();
					// console.log('hello');

					// 6. Calculate and update percentage
					updatePercentages();
	                   }


				}

        var ctrlDeleteItem = function(event){

            var itemID,splidID,type,ID;
            itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
            if (itemID) {
                splidID = itemID.split('-');
                type = splidID[0];
                ID = parseInt(splidID[1]);

                // 1.delete the item from datastructure
                budgetCtrl.deleteItem(type,ID);
                // 2.delete the item from UI;
                UICtrl.deleteListItem(itemID);
                //  3.Update and Show the New Budget;
                updateBudget();
                // 4.updatePercentages
                updatePercentages();



            }

        }
			

	
	return{
		init : function(){
			console.log('application start');
              UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
			setupEventListener();
			
		}
	}
	
})(budgetController,UIController);

controller.init();

