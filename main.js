let des = document.getElementById("des").getContext("2d");
let carro = new Carro(200, 500, 50, 80, "blue");
let c2 = new Carro2(400, 10, 50, 80, "yellow");
let c3 = new Carro2(20, 100, 50, 80, "red");
let c4 = new Carro2(200, 200, 50, 80, "green");
let ee = new Estrada(2, 2, 10, 696, "white");
let ed = new Estrada(488, 2, 10, 696, "white");
let ec1 = new Estrada(246, 30, 10, 80, "white");
let ec2 = new Estrada(246, 170, 10, 80, "white");
let ec3 = new Estrada(246, 310, 10, 80, "white");
let ec4 = new Estrada(246, 450, 10, 80, "white");
let ec5 = new Estrada(246, 590, 10, 80, "white");
let ec6 = new Estrada(246, 780, 10, 80, "white");

let t1 = new Text();
let t2 = new Text();
let t3 = new Text();
let t4 = new Text();

let batida = new Audio('./sounds/batida.mp3')
let motor = new Audio('./sounds/motor.wav')
motor.volume = 0.8
motor.loop = true
batida.volume = 0.8

document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    carro.dir -= 5;
    console.log("esquerda =", carro.dir);
  } else if (e.key === "d") {
    carro.dir += 5;
    console.log("direita =", carro.dir);
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "a") {
    carro.dir = 0;
  } else if (e.key === "d") {
    carro.dir = 0;
  }
});

function pontos(){
  if (carro.point(c2)){
    carro.pts += 1}
    else if(carro.point(c3)){
      carro.pts +=1}
    else if(carro.point(c4)){
      carro.pts +=1}
}

function colisao(){
  if (carro.colid(c2)){
    carro.vida -= 1
    c2.recomeca()
    batida.play()
    }else if (carro.colid(c3)){
    carro.vida -= 1
    c3.recomeca()
    batida.play()
    }else if (carro.colid(c4)){
    carro.vida -= 1
    c4.recomeca()
    batida.play()
    }

}

function desenha() {
  t1.des_text("Pontos: ", 360, 45, "green", "20px times");
  t2.des_text(carro.pts, 430, 45, "green", "20px times");
  t3.des_text("Vidas: ", 40, 45, "green", "20px times");
  t4.des_text(carro.vida , 100, 45, "green", "20px times");
  ee.des_est();
  ed.des_est();
  ec1.des_est();
  ec2.des_est();
  ec3.des_est();
  ec4.des_est();
  ec5.des_est();
  ec6.des_est();
  carro.des_obj();
  c2.des_obj();
  c3.des_obj();
  c4.des_obj();
}

function atualiza() {
  motor.play()
  pontos();
  colisao();
  ec1.mov_est();
  ec2.mov_est();
  ec3.mov_est();
  ec4.mov_est();
  ec5.mov_est();
  ec6.mov_est();
  carro.atual_carro();
  c2.atual_carro2();
  c3.atual_carro2();
  c4.atual_carro2();
}

function main() {
  des.clearRect(0, 0, 500, 700);
  desenha();
  atualiza();
}

setInterval(main, 5);