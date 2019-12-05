// var cvs = document.getElementById("canvas");
// /** @type {CanvasRenderingContext2D} */
// var ctx = cvs.getContext("2d");
// var x = cvs.width/2;
// var y = cvs.height/3;
// var MinballRadius = 0;
// var MaxballRadius= 12
// var BallsNo=15

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, 12, 0, Math.PI*2, false);
//     ctx.fillStyle = "#87ceeb";
//     ctx.fill();
//     ctx.closePath();
// }

// drawBall();

function HelixAnimation() {
  var cvs = document.getElementById("canvas");
  /** @type {CanvasRenderingContext2D} */
  var ctx = cvs.getContext("2d");
  var frames=0;

  //   this.drawBall= function()
  //     {
  //     this.ctx.beginPath();
  //     this.ctx.arc(this.x, this.y, 12, 0, Math.PI*2, false);
  //     this.ctx.fillStyle = "#87ceeb";
  //     this.ctx.fill();
  //     this.ctx.closePath();
  //     }

  this.ball = {
    //    MinballRadius : 0,
    MaxballRadius: 0,
    color: "#87ceeb",
    line: 100,

    draw: function(y,color1) {
      this.x = cvs.width / 12;
      this.y = y;
      this.BallsNo = 15;

       for (var j = 0; j < 5; j++) {
         for (var i = 270; i > 90; i=i-5) {
        
          ctx.beginPath();
          ctx.arc(
            this.x,
            ((Math.sin((frames-i)*(Math.PI/180)))*100)+this.y,
           this.MaxballRadius+ Math.abs(Math.sin((frames%360))*(Math.PI/180))*15,     // this.MaxballRadius + Math.sin(i * 0.2) * 5,
            0,
            Math.PI * 2,
            false
          );
          ctx.fillStyle = color1// "#FFB375";
          ctx.fill();
          ctx.closePath();
          this.x = this.x +10*2 ;
         
          }
          this.y = this.y + 10*5
          this.x = cvs.width / 12;
        }
          
         
        this.MaxballRadius= Math.sin((frames%180)*(Math.PI/180))*15;
         console.log(frames);
        }
        
       
    //     this.x = cvs.width / 12;
    //     this.y = this.y + 25;
    //    // console.log(this.y);
    //   }
    //   this.y--;
    // }
  };

  this.loop = function() {
    this.update();
    this.draw();
    frames++;
    requestAnimationFrame(this.loop.bind(this));
  };
  this.draw = function() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    this.ball.draw(200,"#FFB375");

    // bg.draw();
    // pipes.draw();
    // fg.draw();
    // bird.draw();
    // getReady.draw();
    // gameOver.draw();
    // score.draw();
  };

  // UPDATE
  this.update = function() {};
}
new HelixAnimation().loop();
