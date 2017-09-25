/**
 * Classes and Inheritance
 * Code Example from http://www.es6fiddle.net/
 */
//Changing Done by sahil dhall
//changing done by sandeep ohdar , nodejs

class Rectangle{
	constructor(length,breadth){
		this.name='rectangle';
		this.length=length;
		this.breadth=breadth;
	}
	sayName(){
		console.log('Name is : ',this.name,'Area is :',this.length*this.breadth)
	}
}
class Square extends Rectangle{
	constructor(length=10){
		super(length,length)
                this.name='square';
        }
	get area(){
		console.log('Name is : ',this.name,'Area is :',this.length*this.breadth)
	}

}

var sq = new Square(5);
sq.sayName();
new Square().area;

