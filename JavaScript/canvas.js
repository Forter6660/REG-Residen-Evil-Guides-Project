const canava = document.getElementById('canva');
const ctx = canava.getContext("2d");


export function lidl(x, y){
    function square1(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 200, 200); 
    }
    function ball1(x, y){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.ellipse(x, y, 95, 95, 0, 0, 2*Math.PI);
        ctx.fill();
    }
    function ball2(x, y){
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.ellipse(x, y, 90, 90, 0, 0, 2*Math.PI);
        ctx.fill();
    }
    function romb(x, y){
        ctx.save();                        
        ctx.translate(x + 20, y + 20);     
        ctx.rotate(45 * Math.PI / 180);     
        ctx.fillStyle = "red";
        ctx.fillRect(-20, -20, 30, 30);     
        ctx.restore();      
    }
    function line1(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 20, 30); 
    }
    function line2(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 40, 20); 
    }
    function line3(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 20, 30); 
    }
    function line4(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 40, 20); 
    }
    function ball3(x, y){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.ellipse(x, y, 13, 13, 0, 0, 2*Math.PI);
        ctx.fill();
    }
    function square1(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 200, 200); 
    }
    function ball1(x, y){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.ellipse(x, y, 95, 95, 0, 0, 2*Math.PI);
        ctx.fill();
    }
    function ball2(x, y){
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.ellipse(x, y, 90, 90, 0, 0, 2*Math.PI);
        ctx.fill();
    }
    function romb(x, y){
        ctx.save();                        
        ctx.translate(x + 20, y + 20);     
        ctx.rotate(45 * Math.PI / 180);     
        ctx.fillStyle = "red";
        ctx.fillRect(-20, -20, 28, 28);     
        ctx.restore();      
    }
    function romb1(x, y){
        ctx.save();                        
        ctx.translate(x + 20, y + 20);     
        ctx.rotate(45 * Math.PI / 180);     
        ctx.fillStyle = "red";
        ctx.fillRect(-20, -20, 5, 40);     
        ctx.restore();      
    }
    function romb2(x, y){
        ctx.save();                        
        ctx.translate(x + 20, y + 20);     
        ctx.rotate(45 * Math.PI / 180);     
        ctx.fillStyle = "red";
        ctx.fillRect(-20, -20, 5, 50);     
        ctx.restore();      
    }
    function line1(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 20, 40); 
    }
    function line2(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 40, 20); 
    }
    function line3(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 20, 30); 
    }
    function line4(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 40, 20); 
    }
    function lined1(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 20, 7); 
    }
    function lined2(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 20, 7); 
    }
    function ball3(x, y){
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.ellipse(x, y, 10, 10, 0, 0, 2*Math.PI);
        ctx.fill();
    }
    function halfball(x, y){
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.ellipse(x, y, 20, 23, -1.575, 0, 1*Math.PI);
        ctx.fill();
    }
    function line6(x, y){
        ctx.fillStyle = "blue";
        ctx.fillRect (x, y, 20, 40); 
    }
    function halfball2(x, y){
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.ellipse(x, y, 8, 7, -1.575, 0, 1*Math.PI);
        ctx.fill();
    }
    function lineD1(x, y){
        ctx.fillStyle = "black";
        ctx.fillRectx (x, y, 10, 30);
    }
        square1(x, y-5); 
        ball1(x+100, y+95);
        ball2(x+100, y+95);
        romb(x+60, y+80);
        romb1(x+60, y+80);
        romb2(x+87, y+86);
        ball3(x+78, y+59);
        line1(x+20, y+70);
        line2(x+20, y+90);
        line3(x+143, y+70);
        line4(x+143, y+90);
        halfball(x+120, y+90);
        line6(x+105, y+70);
        halfball2(x+123, y+90);
        lined1(x+98, y+70);
        lined2(x+98, y+103)
}