//Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір
// і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод
// print, який виводить рядок із формулою розрахунку площі.

interface IShape {
    name: string ;
    color: string;
    calculateArea():number ;
}

abstract class Shape {
    protected constructor(
        public readonly name: string,
        public readonly color: string,
    ) {}

    public calculateArea(): number {
        return 1
    };
}

interface ICircle extends IShape {
    circleArea:number;
}

class Circle extends Shape implements ICircle {
    constructor(public readonly name: string,
                public readonly color: string,
                private radius:number,
    ) {
        super( name, color)
    }
    calculateArea(r:number = this.radius):number {
        return Math.PI*Math.pow(r,2)
    }
    circleArea:number = this.calculateArea()
}

const circle = new Circle("bigCircle","yellow",6)
console.log(circle,circle.circleArea)

interface IPrintable {
    print():string;
}

interface IRectangle extends IShape,IPrintable {
    rectangleArea:number ;
}

class Rectangle extends Shape implements IRectangle {
    constructor(public readonly name: string,
                public readonly color: string,
                private sideA:number,
                private sideB: number
    ) {
        super( name, color)
    }
    calculateArea(a:number=this.sideA ,b:number=this.sideB ):number {
        return (a*b) ;
    }
    print():string {
        return "RectangleArea = sideA * sideB"
    };
    rectangleArea:number =  this.calculateArea()
}

const rectangle = new Rectangle("bigRectangle","red",6,7)
console.log(rectangle,rectangle.rectangleArea)

interface ISquare extends IShape,IPrintable {
    squareArea:number;
}

class Square extends Shape implements ISquare {
    constructor(public readonly name: string,
                public readonly color: string,
                private sideLength:number
    ) {
        super( name, color)
    }

    calculateArea(c:number=this.sideLength):number {
        return (Math.pow(c,2)) ;
    }

    print():string {
        return "SquareArea = Math.pow(sideLength,2) "
    };
    squareArea:number = this.calculateArea()
}

const square = new Square("bigSquare","green",7)
console.log(square ,square.calculateArea())

interface ITriangle extends IShape {
    triangleArea:number ;
}

class Triangle extends Shape implements ITriangle {
    constructor(public readonly name: string,
                public readonly color: string,
                private sideA:number,
                private sideB:number,
                private sizeOfAngle:number,
    ) {
        super( name, color)
    }
    calculateArea(a:number = this.sideA,b:number = this.sideB,c:number = this.sizeOfAngle):number {
        return ((a*b)/2)*(Math.sin(c*0.0174533))
    }
    triangleArea:number = this.calculateArea()
}

const triangle = new Triangle("bigTriangle","blue",6,7,45)
console.log(triangle,triangle.triangleArea)