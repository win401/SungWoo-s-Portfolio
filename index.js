// aos
AOS.init({
  duration: 1200,
});

const bg1 = document.querySelector(".radius_background");
const gradient = document.querySelector(".shadow_gradient");
const star = document.querySelector("#star6");

this.addEventListener("mousemove", (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  bg1.style.transform = `translate(${-x / 50}px,${-y / 600}px)`;
  gradient.style.transform = `translate(${-x / 100}px,${-y / 600}px)`;
  star.style.transform = `translate(${-x / 60}px,${-y / 60}px)`;
});

// 현재시간 출력
// const date = document.querySelector('.date span');
const hours = document.querySelector(".hours span");
const minutes = document.querySelector(".minutes span");
const seconds = document.querySelector(".seconds span");
const now = new Date();

// 재귀함수 방법
function updateTime() {
  const now = new Date();
  // date.textContent = String(now.getDate()).padStart(2, '0');
  hours.textContent = String(now.getHours()).padStart(2, "0");
  minutes.textContent = String(now.getMinutes()).padStart(2, "0");
  seconds.textContent = String(now.getSeconds()).padStart(2, "0");

  setTimeout(updateTime, 1000); // setInterval()을 이용하는 것보다 메모리 측면에서 효율적
}
updateTime();

// project1 urbanic
$(".pj1").on("mouseenter", () => {
  $(".project1").addClass("active");
});
$(".pj1").on("mouseleave", () => {
  $(".project1").removeClass("active");
});

// project2 한림공원 이미지
$(".pj2").on("mouseenter", () => {
  $(".project2").addClass("active");
});
$(".pj2").on("mouseleave", () => {
  $(".project2").removeClass("active");
});

// project3 universal
$(".pj3").on("mouseenter", () => {
  $(".project3").addClass("active");
});
$(".pj3").on("mouseleave", () => {
  $(".project3").removeClass("active");
});

// project4 dining note
$(".pj4").on("mouseenter", () => {
  $(".project4").addClass("active");
});
$(".pj4").on("mouseleave", () => {
  $(".project4").removeClass("active");
});

// project5 hellinox
$(".pj5").on("mouseenter", () => {
  $(".project5").addClass("active");
});
$(".pj5").on("mouseleave", () => {
  $(".project5").removeClass("active");
});

// to top btn

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  let submain = $(".skill").offset().top;
  if (scroll >= submain) {
    $(".top_btn").addClass("active");
  } else {
    $(".top_btn").removeClass("active");
  }
});

$(".top_btn").on("click", (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// menu active 스타일 변경

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  let project1 = $(".project1").offset().top;
  if (scroll >= project1) {
    $(".menu_text").addClass("active");
  } else {
    $(".menu_text").removeClass("active");
  }
});

$(".top_btn").on("click", (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//scroll-up-bar.js
let prescroll = window.scrollY;
console.log(prescroll);

$(window).on("scroll", () => {
  //스크롤시 변수에 저장
  let scroll = window.scrollY;
  console.log(scroll);
  console.log("prescroll00", prescroll);

  // 이전 스크롤값이 크면 트루, 스크루 올리면 헤더보임
  if (prescroll > scroll) {
    $(".menu_text").css({ top: 0 });
  } else {
    // 이후 스크롤값이 크면 풜스, 스크루 올리면 헤더가려짐
    $(".menu_text").css({ top: -90 });
  }

  prescroll = scroll;
});

// a 기본값 삭제
$('a[href="#"]').on("click", (e) => {
  e.preventDefault();
});

// 메뉴 클릭 페이지 변경시 안보였다가 몇초 뒤에 나타남
window.addEventListener("load", () => {
  document.body.classList.add("fade_out");
});

// header menu btn
//project 버튼
$(".project_btn").on("click", (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// about 버튼
$(".about_btn").on("click", (e) => {
  let about = $(".about").offset().top;
  e.preventDefault();
  scrollTo({
    top: about,
    behavior: "smooth",
  });
});
// skill 버튼
$(".skill_btn").on("click", (e) => {
  let skill = $(".skill").offset().top;
  e.preventDefault();
  scrollTo({
    top: skill,
    behavior: "smooth",
  });
});
// contect 버튼
$(".contect_btn").on("click", (e) => {
  let contect = $(".car").offset().top;
  e.preventDefault();
  scrollTo({
    top: contect,
    behavior: "smooth",
  });
});

var Bird = {
  def: function (n, m, s) {
    if (m) this.e(n.prototype, m);
    if (s) this.e(n, s);
    return n;
  },
  e: function (o, p) {
    for (prop in p) o[prop] = p[prop];
    return o;
  },
  v: [
    [5, 0, 0],
    [-5, -2, 1],
    [-5, 0, 0],
    [-5, -2, -1],
    [0, 2, -6],
    [0, 2, 6],
    [2, 0, 0],
    [-3, 0, 0],
  ],
  beak: [
    [0, 1, 2],
    [4, 7, 6],
    [5, 6, 7],
  ],
  L: null,
  V: {
    x: 0,
    y: 0,
    z: 5000,
  },
};
Bird.obj = Bird.def(
  function () {
    (this.vtr = new Bird.Vtr()),
      this.accel,
      (this.width = 600),
      (this.height = 600),
      (this.depth = 300),
      this.ept,
      (this.area = 200),
      (this.msp = 4),
      (this.mfrc = 0.1),
      (this.coll = false);
    this.pos = new Bird.Vtr();
    this.vel = new Bird.Vtr();
    this.accel = new Bird.Vtr();
  },
  {
    _coll: function (value) {
      this.coll = value;
    },
    param: function (w, h, dth) {
      this.width = w;
      this.height = h;
      this.depth = dth;
    },
    run: function (b) {
      if (this.coll) {
        this.vtr.set(-this.width, this.pos.y, this.pos.z);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.width, this.pos.y, this.pos.z);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.pos.x, -this.height, this.pos.z);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.pos.x, this.height, this.pos.z);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.pos.x, this.pos.y, -this.depth);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
        this.vtr.set(this.pos.x, this.pos.y, this.depth);
        this.vtr = this.detect(this.vtr);
        this.vtr.scale(5);
        this.accel.add(this.vtr);
      }
      if (Math.random() > 0.5) {
        this.fly(b);
      }
      this.move();
    },
    fly: function (b) {
      if (this.ept) {
        this.accel.add(this.meet(this.ept, 0.005));
      }
      this.accel.add(this.line(b));
      this.accel.add(this.togeth(b));
      this.accel.add(this.apart(b));
    },
    move: function () {
      this.vel.add(this.accel);
      var l = this.vel.len();
      if (l > this.msp) {
        this.vel.lowscale(l / this.msp);
      }
      this.pos.add(this.vel);
      this.accel.set(0, 0, 0);
    },
    detect: function (pt) {
      var dir = new Bird.Vtr();
      dir.copy(this.pos);
      dir.sub(pt);
      dir.scale(1 / this.pos.dsq(pt));
      return dir;
    },
    rep: function (pt) {
      var dist = this.pos.dst(pt);
      if (dist < 150) {
        var dir = new Bird.Vtr();
        dir.subv(this.pos, pt);
        dir.scale(0.5 / dist);
        this.accel.add(dir);
      }
    },
    meet: function (pt, amt) {
      var dir = new Bird.Vtr();
      dir.subv(pt, this.pos);
      dir.scale(amt);
      return dir;
    },
    line: function (b) {
      var _b,
        totvel = new Bird.Vtr(),
        cnt = 0;
      for (var i = 0, il = b.length; i < il; i++) {
        if (Math.random() > 0.6) continue;
        _b = b[i];
        var dist = _b.pos.dst(this.pos);
        if (dist > 0 && dist <= this.area) {
          totvel.add(_b.vel);
          cnt++;
        }
      }
      if (cnt > 0) {
        totvel.lowscale(cnt);
        var v = totvel.len();
        if (v > this.mfrc) {
          totvel.lowscale(v / this.mfrc);
        }
      }
      return totvel;
    },
    togeth: function (b) {
      var _b,
        dist,
        plus = new Bird.Vtr(),
        dir = new Bird.Vtr(),
        cnt = 0;
      for (var i = 0, il = b.length; i < il; i++) {
        if (Math.random() > 0.6) continue;
        _b = b[i];
        dist = _b.pos.dst(this.pos);
        if (dist > 0 && dist <= this.area) {
          plus.add(_b.pos);
          cnt++;
        }
      }
      if (cnt > 0) {
        plus.lowscale(cnt);
      }
      dir.subv(plus, this.pos);
      var l = dir.len();
      if (l > this.mfrc) {
        dir.lowscale(l / this.mfrc);
      }
      return dir;
    },
    apart: function (b) {
      var _b,
        dist,
        plus = new Bird.Vtr(),
        rep = new Bird.Vtr();
      for (var i = 0, il = b.length; i < il; i++) {
        if (Math.random() > 0.6) continue;
        _b = b[i];
        dist = _b.pos.dst(this.pos);
        if (dist > 0 && dist <= this.area) {
          rep.subv(this.pos, _b.pos);
          rep.level();
          rep.lowscale(dist);
          plus.add(rep);
        }
      }
      return plus;
    },
  }
);
Bird.Build = Bird.def(
  function () {
    (this.base = 0), (this.left = 1), (this.right = 2);
    this.pos = new Bird.Vtr();
    this.rot = new Bird.Vtr();
    this.bbase = this.tri(this.base);
    this.leftwing = this.tri(this.left);
    this.rightwing = this.tri(this.right);
  },
  {
    matrix: function () {
      this.bbase.vtx();
      this.leftwing.vtx();
      this.rightwing.vtx();
      this.leftwing.wingY(this.wY);
      this.rightwing.wingY(this.wY);
      this.bbase.rotY(this.rot.y);
      this.bbase.rotZ(this.rot.z);
      this.leftwing.rotY(this.rot.y);
      this.leftwing.rotZ(this.rot.z);
      this.rightwing.rotY(this.rot.y);
      this.rightwing.rotZ(this.rot.z);
      this.bbase.trans(this.pos);
      this.leftwing.trans(this.pos);
      this.rightwing.trans(this.pos);
    },
    draw: function () {
      this.bbase.draw();
      this.leftwing.draw();
      this.rightwing.draw();
    },
    tri: function (i) {
      var v1, v2, v3, v;
      v = Bird.v[Bird.beak[i][0]];
      v1 = new Bird.Vtr(v[0], v[1], v[2]);
      v = Bird.v[Bird.beak[i][1]];
      v2 = new Bird.Vtr(v[0], v[1], v[2]);
      v = Bird.v[Bird.beak[i][2]];
      v3 = new Bird.Vtr(v[0], v[1], v[2]);
      return new Bird.Tri(v1, v2, v3);
    },
    wang: function (y) {
      var v1 = Bird.v[Bird.beak[1][1]];
      this.rot.x = Math.atan2(y, v1[0]);
    },
    zpos: function () {
      var z1 = this.bbase._z();
      var z2 = this.leftwing._z();
      var z3 = this.rightwing._z();
      return Math.min(z1, z2, z3);
    },
    wing: function (y) {
      this.wY = y;
    },
  }
);
Bird.Tri = Bird.def(
  function (p1, p2, p3) {
    this.mainv = [p1.copy(), p2.copy(), p3.copy()];
    this.Vtxs = [p1.copy(), p2.copy(), p3.copy()];
    this.bv = new Bird.Vtr(0.5, 0.5, 0.8);
  },
  {
    draw: function () {
      var v1 = [this.Vtxs[0].Pt().x, this.Vtxs[0].Pt().y];
      var v2 = [this.Vtxs[1].Pt().x, this.Vtxs[1].Pt().y];
      var v3 = [this.Vtxs[2].Pt().x, this.Vtxs[2].Pt().y];
      var col = this.col();
      Bird.$.fillStyle = col;
      Bird.$.strokeStyle = col;
      Bird.$.lineWidth = 0.1;
      Bird.$.beginPath();
      Bird.$.moveTo(v1[0], v1[1]);
      Bird.$.lineTo(v2[0], v2[1]);
      Bird.$.lineTo(v3[0], v3[1]);
      Bird.$.lineTo(v1[0], v1[1]);
      Bird.$.closePath();
      Bird.$.fill();
      Bird.$.stroke();
    },
    rotX: function (a) {
      var ang = a;
      this.Vtxs.forEach(function (e, i, a) {
        Bird.Matrix.rotX(e, ang);
      });
    },
    rotY: function (a) {
      var ang = a;
      this.Vtxs.forEach(function (e, i, a) {
        Bird.Matrix.rotY(e, ang);
      });
    },
    rotZ: function (a) {
      var ang = a;
      this.Vtxs.forEach(function (e, i, a) {
        Bird.Matrix.rotZ(e, ang);
      });
    },
    trans: function (s) {
      var trans = s;
      this.Vtxs.forEach(function (e, i, a) {
        Bird.Matrix.trans(e, [trans.x, trans.y, trans.z]);
      });
    },
    vtx: function (idx) {
      for (var i = 0; i < 3; i++) {
        var x = this.mainv[i].x;
        var y = this.mainv[i].y;
        var z = this.mainv[i].z;
        this.Vtxs[i].x = x;
        this.Vtxs[i].y = y;
        this.Vtxs[i].z = z;
      }
    },
    wingY: function (y) {
      this.Vtxs[0].y = y;
    },
    _z: function () {
      return Math.min(this.Vtxs[0].z, this.Vtxs[1].z, this.Vtxs[2].z);
    },
    col: function () {
      var e = 0.3,
        f = 0.3,
        g = 0.7;
      var bw = new Bird.Vtr(1, 1, 1);
      var n = this.norm();
      var x = this.Vtxs[0].copy();
      var v = x.sub(Bird.V);
      v.level();
      x = this.Vtxs[0].copy();
      var l = x.sub(Bird.L);
      l.level();
      var p = l.p(n);
      var x1 = n.copy();
      x1.scale(p);
      x1.scale(2);
      var r = l.copy();
      r.sub(x1);
      x1.scale(-1);
      p = Math.max(x1.p(l), 0);
      var col = this.bv.copy();
      col.scale(p);
      col.scale(col, e);
      x1 = col.copy();
      var x2 = r.copy();
      x2.scale(-1);
      p = Math.pow(Math.max(x2.p(v)), 20);
      x2 = bw.copy();
      x2.scale(p * f);
      var x3 = this.bv.copy();
      x3.scale(g);
      x1.add(x2);
      x1.add(x3);
      var _r = Math.floor(x1.x * 255);
      var _g = Math.floor(x1.y * 255);
      var _b = Math.floor(x1.z * 255);
      return "rgb(" + _r + "," + _g + "," + _b + ")";
    },
    norm: function () {
      var v1 = this.Vtxs[0];
      var v2 = this.Vtxs[1];
      var v3 = this.Vtxs[2];
      v3.sub(v2);
      v1.sub(v3);
      v3.cross(v1);
      v3.level();
      return v3;
    },
  }
);
Bird.Vtr = Bird.def(
  function (x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.fl = 1000;
  },
  {
    Pt: function () {
      var zsc = this.fl + this.z;
      var scale = this.fl / zsc;
      var x = this.x * scale;
      var y = this.y * scale;
      return {
        x: x,
        y: y,
        scale: scale,
      };
    },
    set: function (x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    },
    len: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    add: function (v, w) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    },
    sub: function (v, w) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    },
    subv: function (a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    },
    scale: function (upd) {
      this.x *= upd;
      this.y *= upd;
      this.z *= upd;
      return this;
    },
    lowscale: function (upd) {
      if (upd !== 0) {
        var inv = 1 / upd;
        this.x *= inv;
        this.y *= inv;
        this.z *= inv;
      } else {
        this.x = 0;
        this.y = 0;
        this.z = 0;
      }
      return this;
    },
    copy: function (v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    },
    dst: function (v) {
      return Math.sqrt(this.dsq(v));
    },
    dsq: function (v) {
      var dx = this.x - v.x;
      var dy = this.y - v.y;
      var dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    },
    cross: function (v, w) {
      var x = this.x,
        y = this.y,
        z = this.z;
      this.x = y * v.z - z * v.y;
      this.y = z * v.x - x * v.z;
      this.z = x * v.y - y * v.x;
      return this;
    },
    p: function (v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    },
    level: function () {
      return this.lowscale(this.len());
    },
    copy: function () {
      return new Bird.Vtr(this.x, this.y, this.z);
    },
  }
);
Bird.Matrix = {
  rotX: function (pt, angX) {
    var pos = [pt.x, pt.y, pt.z];
    var asin = Math.sin(angX);
    var acos = Math.cos(angX);
    var xrot = [];
    xrot[0] = [1, 0, 0];
    xrot[1] = [0, acos, asin];
    xrot[2] = [0, -asin, acos];
    var calc = this.mm(pos, xrot);
    pt.x = calc[0];
    pt.y = calc[1];
    pt.z = calc[2];
  },
  rotY: function (pt, angY) {
    var pos = [pt.x, pt.y, pt.z];
    var asin = Math.sin(angY);
    var acos = Math.cos(angY);
    var yrot = [];
    yrot[0] = [acos, 0, asin];
    yrot[1] = [0, 1, 0];
    yrot[2] = [-asin, 0, acos];
    var calc = this.mm(pos, yrot);
    pt.x = calc[0];
    pt.y = calc[1];
    pt.z = calc[2];
  },
  rotZ: function (pt, angZ) {
    var pos = [pt.x, pt.y, pt.z];
    var asin = Math.sin(angZ);
    var acos = Math.cos(angZ);
    var yrot = [];
    yrot[0] = [acos, asin, 0];
    yrot[1] = [-asin, acos, 0];
    yrot[2] = [0, 0, 1];
    var calc = this.mm(pos, yrot);
    pt.x = calc[0];
    pt.y = calc[1];
    pt.z = calc[2];
  },
  trans: function (pt, s) {
    pt.x += s[0];
    pt.y += s[1];
    pt.z += s[2];
  },
  scale: function (pt, s) {
    pt.x *= s[0];
    pt.y *= s[1];
    pt.z *= s[2];
  },
  mm: function (m1, m2) {
    var calc = [];
    calc[0] = m1[0] * m2[0][0] + m1[1] * m2[1][0] + m1[2] * m2[2][0];
    calc[1] = m1[0] * m2[0][1] + m1[1] * m2[1][1] + m1[2] * m2[2][1];
    calc[2] = m1[0] * m2[0][2] + m1[1] * m2[1][2] + m1[2] * m2[2][2];
    return calc;
  },
};

function draw() {
  var c = document.getElementById("canv");
  Bird.$ = c.getContext("2d");
  Bird.canv = {
    w: (c.width = window.innerWidth),
    h: (c.height = window.innerHeight),
  };
  Bird.L = new Bird.Vtr(0, 2000, 5000);
  Bird.V = new Bird.Vtr(0, 0, 5000);
  var birds = [];
  var b = [];
  for (var i = 0; i < 100; i++) {
    _b = b[i] = new Bird.obj();
    _b.pos.x = Math.random() * 800 - 400;
    _b.pos.y = Math.random() * 800 - 400;
    _b.pos.z = Math.random() * 800 - 400;
    _b.vel.x = Math.random() * 2 - 1;
    _b.vel.y = Math.random() * 2 - 1;
    _b.vel.z = Math.random() * 2 - 1;
    _b._coll(true);
    _b.param(400, 400, 800);
    bird = birds[i] = new Bird.Build();
    bird.phase = Math.floor(Math.random() * 62.83);
    bird.pos = b[i].pos;
  }

  run();

  function run() {
    window.requestAnimationFrame(run);
    draw();
  }

  function draw() {
    Bird.$.setTransform(1, 0, 0, 1, 0, 0);
    Bird.$.translate(Bird.canv.w / 2, Bird.canv.h / 2);
    Bird.$.clearRect(
      -Bird.canv.w / 2,
      -Bird.canv.h / 2,
      Bird.canv.w,
      Bird.canv.h
    );
    Bird.$.scale(1, -1);
    var arr = [];
    b.forEach(function (e, i, a) {
      var _b = b[i];
      _b.run(b);
      var bird = birds[i];
      bird.rot.y = Math.atan2(-_b.vel.z, _b.vel.x);
      bird.rot.z = Math.asin(_b.vel.y / _b.vel.len());
      bird.phase = (bird.phase + (Math.max(0, bird.rot.z) + 0.1)) % 62.83;
      bird.wing(Math.sin(bird.phase) * 5);
      bird.matrix();
      arr.push({
        z: bird.zpos(),
        o: bird,
      });
    });
    arr.sort(function (a, b) {
      return a.z < b.z ? -1 : a.z > b.z ? 1 : 0;
    });
    arr.forEach(function (e, i, a) {
      e.o.draw();
    });
  }
}
draw();
window.addEventListener("resize", function () {
  if (c.width !== window.innerWidth && c.height !== window.innerHeight) {
    Bird.canv = {
      w: (c.width = window.innerWidth),
      h: (c.height = window.innerHeight),
    };
  }
});

console.log("sungwoo");
