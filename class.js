class obj {
  constructor(x, y, w, h, a) {
    this.a = a;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  des_obj() {
    des.fillStyle = this.a;
    des.fillRect(this.x, this.y, this.w, this.h);
  }
}

class Carro extends obj {
  dir = 0;
  pts = 0;
  vida = 5;
  des_carro() {}

  atual_carro() {
    this.x += this.dir;
    if (this.x <= 2) {
      this.x = 2;
    } else if (this.x >= 424) {
      this.x = 424;
    }
  }

  point(objeto) {
    if (objeto.y > 610 && objeto.y < 618) {
      return true;
    }
  }

  colid(objeto) {
    if ((this.x < objeto.x + objeto.w)&&
        (this.x + this.w > objeto.x)&&
        (this.y < objeto.y + objeto.h)&&
        (this.y + this.h > objeto.y)) {
      return true;
    }
  }

}

class Carro2 extends obj {
  atual_carro2() {
    this.y += 1;
    if (this.y >= 700) {
      this.recomeca();
    }
  }

  recomeca() {
    this.y = -100;
    this.x = Math.floor(Math.random() * (424 - 2 + 1 + 2));
    if (this.y >= 700) {
      this.y = -100;
    }
  }
}

class Estrada extends obj {
  des_est() {
    des.fillStyle = this.a;
    des.fillRect(this.x, this.y, this.w, this.h);
  }

  mov_est() {
    this.y += 2;
    if (this.y >= 790) {
      this.y = -100;
    }
  }
}

class Text {
  des_text(text, x, y, cor, font) {
    des.fillStyle = cor;
    des.lineWidth = "8";
    des.font = font;
    des.fillText(text, x, y);
  }
}