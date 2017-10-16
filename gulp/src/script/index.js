( () => {
    console.og(1);

    class Point {
        constructor(x,y){
            this.x = x;
            this.y = y;
        }
        show(){
            return "("+this.x+" "+this,y+")";
        }
    }

    var point = new Point(5,2);
    console.log(point.show())
})()