function areaOftriangle() {
    var side1 = parseInt(document.getElementById("sidea").value);
    var side2 = parseInt(document.getElementById("sideb").value);
    var side3 = parseInt(document.getElementById("sidec").value);
    console.log(typeof (side1));
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    document.getElementById("area_triangle").innerHTML = area;
    }
    function areaOfcircle() {
    var radius = parseInt(document.getElementById("Radius").value);
    var area = 3.14 * (radius ** 2);
    document.getElementById("ansC").innerHTML = area;
    }
    function areaOfrectangle() {
    var length = parseInt(document.getElementById("length").value);
    var breadth = parseInt(document.getElementById("width").value);
    var area = length * breadth;
    document.getElementById("ans").innerHTML = area;
    }