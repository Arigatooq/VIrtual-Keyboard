


const container = document.createElement("div");
container.classList.add("container");
document.body.prepend(container);
////////////////////////////////////////////////////////////////////////////

const allButtons = ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", 'SLASH', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "''", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
const allButtonsRu = ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "SS", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с","м", "и", "т", "ь", "б", "ю", "."];



let input = document.createElement('input');
input.setAttribute('type', 'text');
input.classList.add("input")
container.prepend(input);
input.addEventListener("keydown", e =>{
  e.preventDefault();
})

const changeLanguage = document.createElement("div");
changeLanguage.classList.add("change");
changeLanguage.innerHTML = "Для меня языка нажмите Shift + Alt";
container.prepend(changeLanguage);



const flex = document.createElement("div");
flex.classList.add("flex");
input.after(flex);


const row_1 = document.createElement("div");
row_1.classList.add("row_1");
flex.prepend(row_1);

const row_2 = document.createElement("div");
row_2.classList.add("row_2");
flex.append(row_2);

const row_3 = document.createElement("div");
row_3.classList.add("row_3");
flex.append(row_3);

const row_4 = document.createElement("div");
row_4.classList.add("row_4");
flex.append(row_4);

const row_5 = document.createElement("div");
row_5.classList.add("row_5");
flex.append(row_5);







const firstRow = () =>{

const yo = document.createElement("div");
yo.classList.add("key");
yo.id = "square";
row_1.append(yo);
const value_yo = document.createElement("p")
value_yo.classList.add("value");
value_yo.innerHTML = allButtons[0];
yo.append(value_yo);
yo.addEventListener("click", () =>{
    input.value += value_yo.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "`" || e.key === "ё"){
    yo.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "`" || e.key === "ё"){
    yo.classList.remove("active");
  }
});





const one = document.createElement("div");
one.classList.add("key");
one.id = "square";
row_1.append(one)
const value_one = document.createElement("p")
value_one.classList.add("value");
value_one.innerHTML = allButtons[1];
one.append(value_one)
one.addEventListener("click", () =>{
    input.value += value_one.innerHTML;
});

document.addEventListener("keydown", (e) =>{
  if (e.key === "1"){
    one.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "1"){
    one.classList.remove("active");
  }
});






const two = document.createElement("div");
two.classList.add("key");
two.id = "square";
row_1.append(two)
const value_two = document.createElement("p")
value_two.classList.add("value");
value_two.innerHTML = allButtons[2];
two.append(value_two)
two.addEventListener("click", () =>{
    input.value += value_two.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "2"){
    two.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "2"){
    two.classList.remove("active");
  }
});



const three = document.createElement("div");
three.classList.add("key");
three.id = "square";
row_1.append(three)
const value_three = document.createElement("p");
value_three.classList.add("value");
value_three.innerHTML = allButtons[3];
three.prepend(value_three);
three.addEventListener("click", () =>{
    input.value += value_three.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "3"){
    three.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "3"){
    three.classList.remove("active");
  }
});


const four = document.createElement("div");
four.classList.add("key");
four.id = "square";
row_1.append(four)
const value_four = document.createElement("p");
value_four.classList.add("value");
value_four.innerHTML = allButtons[4];
four.prepend(value_four);
four.addEventListener("click", () =>{
    input.value += value_four.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "4"){
    four.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "4"){
    four.classList.remove("active");
  }
});


const five = document.createElement("div");
five.classList.add("key");
five.id = "square";
row_1.append(five)
const value_five = document.createElement("p");
value_five.classList.add("value");
value_five.innerHTML = allButtons[5];
five.prepend(value_five);
five.addEventListener("click", () =>{
    input.value += value_five.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "5"){
    five.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "5"){
    five.classList.remove("active");
  }
});



const six = document.createElement("div");
six.classList.add("key");
six.id = "square";
row_1.append(six)
const value_six = document.createElement("p");
value_six.classList.add("value");
value_six.innerHTML = allButtons[6];
six.prepend(value_six);
six.addEventListener("click", () =>{
    input.value += value_six.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "6"){
    six.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "6"){
    six.classList.remove("active");
  }
});



const seven = document.createElement("div");
seven.classList.add("key");
seven.id = "square";
row_1.append(seven)
const value_seven = document.createElement("p");
value_seven.classList.add("value");
value_seven.innerHTML = allButtons[7];
seven.prepend(value_seven);
seven.addEventListener("click", () =>{
    input.value += value_seven.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "7"){
    seven.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "7"){
    seven.classList.remove("active");
  }
});



const eight = document.createElement("div");
eight.classList.add("key");
eight.id = "square";
row_1.append(eight)
const value_eight = document.createElement("p");
value_eight.classList.add("value");
value_eight.innerHTML = allButtons[8];
eight.prepend(value_eight);
eight.addEventListener("click", () =>{
    input.value += value_eight.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "8"){
    eight.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "8"){
    eight.classList.remove("active");
  }
});



const nine = document.createElement("div");
nine.classList.add("key");
nine.id = "square";
row_1.append(nine)
const value_nine = document.createElement("p");
value_nine.classList.add("value");
value_nine.innerHTML = allButtons[9];
nine.prepend(value_nine);
nine.addEventListener("click", () =>{
    input.value += value_nine.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "9"){
    nine.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "9"){
    nine.classList.remove("active");
  }
});



const zero = document.createElement("div");
zero.classList.add("key");
zero.id = "square";
row_1.append(zero)
const value_zero = document.createElement("p");
value_zero.classList.add("value");
value_zero.innerHTML = allButtons[10];
zero.prepend(value_zero);
zero.addEventListener("click", () =>{
    input.value += value_zero.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "0"){
    zero.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "0"){
    zero.classList.remove("active");
  }
});



const minus = document.createElement("div");
minus.classList.add("key");
minus.id = "square";
row_1.append(minus)
const value_minus = document.createElement("p");
value_minus.classList.add("value");
value_minus.innerHTML = allButtons[11];
minus.prepend(value_minus);
minus.addEventListener("click", () =>{
    input.value += value_minus.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "-"){
    minus.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "-"){
    minus.classList.remove("active");
  }
});



const equally = document.createElement("div");
equally.classList.add("key");
equally.id = "square";
row_1.append(equally)
const value_equally = document.createElement("p");
value_equally.classList.add("value");
value_equally.innerHTML = allButtons[12];
equally.prepend(value_equally);
equally.addEventListener("click", () =>{
    input.value += value_equally.innerHTML;
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "="){
    equally.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "="){
    equally.classList.remove("active");
  }
});



const backspace = document.createElement("div");
backspace.classList.add("key");
backspace.id = "square";
row_1.append(backspace)
const value_backspace = document.createElement("p");
value_backspace.classList.add("value")
value_backspace.innerHTML = "BACKSPACE";
backspace.append(value_backspace)
backspace.addEventListener("click", (event) =>{
   input.value = input.value.slice(0, -1);
});
document.addEventListener("keydown", (e) =>{
  if (e.key === "Backspace"){
    backspace.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.key === "Backspace"){ 
    backspace.classList.remove("active");
  }
});



 
}
const secondRow = () =>{
  const tab = document.createElement("div");
  tab.classList.add("key")
  tab.id = "square_2";
  row_2.append(tab);
  const value_tab = document.createElement("p");
  value_tab.classList.add("value");
  value_tab.innerHTML = "TAB";
  tab.append(value_tab);
  tab.addEventListener("click", () =>{
    input.value += "    ";
  });
  document.addEventListener("keydown", (e) =>{
    if (e.key === "Tab"){
      tab.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.key === "Tab"){ 
      tab.classList.remove("active");
    }
  });
  

  

  const q = document.createElement("div");
  q.classList.add("key")
  q.id = "square_2";
  row_2.append(q);
  let value_q = document.createElement("p");
  value_q.classList.add("value");
  value_q.innerHTML = allButtons[13].toLocaleUpperCase();
  q.append(value_q);
  q.addEventListener("click", () =>{
    input.value += value_q.innerHTML;
 });
 document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyQ" ){
    q.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyQ"){ 
    q.classList.remove("active");
  }
});


 

  const w = document.createElement("div");
  w.classList.add("key")
  w.id = "square_2";
  row_2.append(w);
  let value_w = document.createElement("p");
  value_w.classList.add("value");
  value_w.innerHTML = allButtons[14].toLocaleUpperCase();
  w.append(value_w);
  w.addEventListener("click", () =>{
    input.value += value_q.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyW" ){
    w.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyW"){ 
    w.classList.remove("active");
  }
});






  const ee = document.createElement("div");
  ee.classList.add("key")
  ee.id = "square_2";
  row_2.append(ee);
  let value_e = document.createElement("p");
  value_e.classList.add("value");
  value_e.innerHTML = allButtons[15].toLocaleUpperCase();
  ee.append(value_e);
  ee.addEventListener("click", () =>{
    input.value += value_e.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyE" ){
    ee.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyE"){ 
    ee.classList.remove("active");
  }
});


  
  const r = document.createElement("div");
  r.classList.add("key")
  r.id = "square_2";
  row_2.append(r);
  let value_r = document.createElement("p");
  value_r.classList.add("value");
  value_r.innerHTML = allButtons[16].toLocaleUpperCase();
  r.append(value_r);
  r.addEventListener("click", () =>{
    input.value += value_r.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyR" ){
    r.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyR"){ 
    r.classList.remove("active");
  }
});



  const t = document.createElement("div");
  t.classList.add("key")
  t.id = "square_2";
  row_2.append(t);
  let value_t = document.createElement("p");
  value_t.classList.add("value");
  value_t.innerHTML = allButtons[17].toLocaleUpperCase();
  t.append(value_t);
  t.addEventListener("click", () =>{
    input.value += value_t.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyT" ){
    t.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyT"){ 
    t.classList.remove("active");
  }
});



  const y = document.createElement("div");
  y.classList.add("key")
  y.id = "square_2";
  row_2.append(y);
  let value_y = document.createElement("p");
  value_y.classList.add("value");
  value_y.innerHTML = allButtons[18].toLocaleUpperCase();
  y.append(value_y);
  y.addEventListener("click", () =>{
    input.value += value_y.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyY" ){
    y.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyY"){ 
    y.classList.remove("active");
  }
});



  const u = document.createElement("div");
  u.classList.add("key")
  u.id = "square_2";
  row_2.append(u);
  let value_u = document.createElement("p");
  value_u.classList.add("value");
  value_u.innerHTML = allButtons[19].toLocaleUpperCase();
  u.append(value_u);
  u.addEventListener("click", () =>{
    input.value += value_u.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyU" ){
    u.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyU"){ 
    u.classList.remove("active");
  }
});



  const i = document.createElement("div");
  i.classList.add("key")
  i.id = "square_2";
  row_2.append(i);
  let value_i = document.createElement("p");
  value_i.classList.add("value");
  value_i.innerHTML = allButtons[20].toLocaleUpperCase();
  i.append(value_i);
  i.addEventListener("click", () =>{
    input.value += value_i.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyI" ){
    i.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyI"){ 
    i.classList.remove("active");
  }
});



  const o = document.createElement("div");
  o.classList.add("key")
  o.id = "square_2";
  row_2.append(o);
  let value_o = document.createElement("p");
  value_o.classList.add("value");
  value_o.innerHTML = allButtons[21].toLocaleUpperCase();
  o.append(value_o);
  o.addEventListener("click", () =>{
    input.value += value_o.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyO" ){
    o.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyO"){ 
    o.classList.remove("active");
  }
});



  const p = document.createElement("div");
  p.classList.add("key")
  p.id = "square_2";
  row_2.append(p);
  let value_p = document.createElement("p");
  value_p.classList.add("value");
  value_p.innerHTML = allButtons[22].toLocaleUpperCase();
  p.append(value_p);
  p.addEventListener("click", () =>{
    input.value += value_p.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.code === "KeyP" ){
    p.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.code === "KeyP"){ 
    p.classList.remove("active");
  }
});



  const xx = document.createElement("div");
  xx.classList.add("key")
  xx.id = "square_2";
  row_2.append(xx);
  let value_xx = document.createElement("p");
  value_xx.classList.add("value");
  value_xx.innerHTML = allButtons[23].toLocaleUpperCase();
  xx.append(value_xx);
  xx.addEventListener("click", () =>{
    input.value += value_xx.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.keyCode === 219 ){
    xx.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.keyCode === 219 ){ 
    xx.classList.remove("active");
  }
});



  const cc = document.createElement("div");
  cc.classList.add("key")
  cc.id = "square_2";
  row_2.append(cc);
  let value_cc = document.createElement("p");
  value_cc.classList.add("value");
  value_cc.innerHTML = allButtons[24].toLocaleUpperCase();
  cc.append(value_cc);
  cc.addEventListener("click", () =>{
    input.value += value_cc.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.keyCode === 221  ){
    cc.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.keyCode === 221 ){ 
    cc.classList.remove("active");
  }
});


const del = document.createElement("div");
  del.classList.add("key")
  del.id = "square_2";
    row_2.append(del);
    let value_del = document.createElement("p");
    value_del.classList.add("value");
    value_del.innerHTML = "DEL";
    del.append(value_del);
    del.addEventListener("click", () =>{
      input.value += value_del.innerHTML;

  });
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 46  ){
      del.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 46 ){ 
      del.classList.remove("active");
    }
  });
  
  

  const slash = document.createElement("div");
  slash.classList.add("key")
  slash.id = "square_2";
  row_2.append(slash);
  let value_slash = document.createElement("p");
  value_slash.classList.add("value");
  value_slash.innerHTML = "|";
  slash.append(value_slash);
  slash.addEventListener("click", () =>{
    input.value += value_slash.innerHTML;

});
document.addEventListener("keydown", (e) =>{
  if (e.keyCode === 220){
    slash.classList.add("active");
  }
});
document.addEventListener("keyup", (e) =>{
  if (e.keyCode === 220){ 
    slash.classList.remove("active");
  }
});


let flag = false;
document.addEventListener("keydown", (event) =>{
  if (event.code == "AltLeft"){  
    flag = true;
  }
  if (event.code == "ShiftLeft" && flag) {
    value_q.innerHTML = allButtonsRu[13].toLocaleUpperCase();
    value_w.innerHTML = allButtonsRu[14].toLocaleUpperCase();
    value_e.innerHTML = allButtonsRu[15].toLocaleUpperCase();
    value_r.innerHTML = allButtonsRu[16].toLocaleUpperCase();
    value_t.innerHTML = allButtonsRu[17].toLocaleUpperCase();
    value_y.innerHTML = allButtonsRu[18].toLocaleUpperCase();
    value_u.innerHTML = allButtonsRu[19].toLocaleUpperCase();
    value_i.innerHTML = allButtonsRu[20].toLocaleUpperCase();
    value_o.innerHTML = allButtonsRu[21].toLocaleUpperCase();
    value_p.innerHTML = allButtonsRu[22].toLocaleUpperCase();
    value_xx.innerHTML = allButtonsRu[23].toLocaleUpperCase();
    value_cc.innerHTML = allButtonsRu[24].toLocaleUpperCase();
    value_slash.innerHTML = allButtonsRu[25].toLocaleUpperCase();
    flag = false;
  }
});






}


const third = () =>{
  const caps = document.createElement("div");
  caps.classList.add("key_3");
  caps.id = "square_3";
  row_3.append(caps);
  let value_caps = document.createElement("p");
  value_caps.classList.add("value");
  value_caps.innerHTML = "CAPSLOCK";
  caps.append(value_caps);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 20 ){
      caps.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 20){ 
      caps.classList.remove("active");
    }
  });
  
  const a = document.createElement("div");
  a.classList.add("key_3");
  a.id = "square_3";
  row_3.append(a);
  let value_a = document.createElement("p");
  value_a.classList.add("value");
  value_a.innerHTML = allButtons[26].toLocaleUpperCase();
  a.append(value_a);
  a.addEventListener("click", (e) =>{
    input.value += value_a.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyA" ){
      a.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyA"){ 
      a.classList.remove("active");
    }
  });

  const s = document.createElement("div");
  s.classList.add("key_3");
  s.id = "square_3";
  row_3.append(s);
  let value_s = document.createElement("p");
  value_s.classList.add("value");
  value_s.innerHTML = allButtons[27].toLocaleUpperCase();
  s.append(value_s);
  s.addEventListener("click", (e) =>{
    input.value += value_s.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyS" ){
      s.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyS"){ 
      s.classList.remove("active");
    }
  });

  const d = document.createElement("div");
  d.classList.add("key_3");
  d.id = "square_3";
  row_3.append(d);
  let value_d = document.createElement("p");
  value_d.classList.add("value");
  value_d.innerHTML = allButtons[28].toLocaleUpperCase();
  d.append(value_d);
  d.addEventListener("click", (e) =>{
    input.value += value_d.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyD" ){
      d.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyD"){ 
      d.classList.remove("active");
    }
  });

  const f = document.createElement("div");
  f.classList.add("key_3");
  f.id = "square_3";
  row_3.append(f);
  let value_f = document.createElement("p");
  value_f.classList.add("value");
  value_f.innerHTML = allButtons[29].toLocaleUpperCase();
  f.append(value_f);
  f.addEventListener("click", (e) =>{
    input.value += value_f.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyF" ){
      f.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyF"){ 
      f.classList.remove("active");
    }
  });
  
  const g = document.createElement("div");
  g.classList.add("key_3");
  g.id = "square_3";
  row_3.append(g);
  let value_g = document.createElement("p");
  value_g.classList.add("value");
  value_g.innerHTML = allButtons[30].toLocaleUpperCase();
  g.append(value_g);
  g.addEventListener("click", (e) =>{
    input.value += value_g.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyG" ){
      g.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyG"){ 
      g.classList.remove("active");
    }
  });

  const h = document.createElement("div");
  h.classList.add("key_3");
  h.id = "square_3";
  row_3.append(h);
  let value_h = document.createElement("p");
  value_h.classList.add("value");
  value_h.innerHTML = allButtons[31].toLocaleUpperCase();
  h.append(value_h);
  h.addEventListener("click", (e) =>{
    input.value += value_h.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyH" ){
      h.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyH"){ 
      h.classList.remove("active");
    }
  });

  const j = document.createElement("div");
  j.classList.add("key_3");
  j.id = "square_3";
  row_3.append(j);
  let value_j = document.createElement("p");
  value_j.classList.add("value");
  value_j.innerHTML = allButtons[32].toLocaleUpperCase();
  j.append(value_j);
  j.addEventListener("click", (e) =>{
    input.value += value_j.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyJ" ){
      j.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyJ"){ 
      j.classList.remove("active");
    }
  });

  const k = document.createElement("div");
  k.classList.add("key_3");
  k.id = "square_3";
  row_3.append(k);
  let value_k = document.createElement("p");
  value_k.classList.add("value");
  value_k.innerHTML = allButtons[33].toLocaleUpperCase();
  k.append(value_k);
  k.addEventListener("click", (e) =>{
    input.value += value_k.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyK" ){
      k.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyK"){ 
      k.classList.remove("active");
    }
  });

  const l = document.createElement("div");
  l.classList.add("key_3");
  l.id = "square_3";
  row_3.append(l);
  let value_l = document.createElement("p");
  value_l.classList.add("value");
  value_l.innerHTML = allButtons[34].toLocaleUpperCase();
  l.append(value_l);
  l.addEventListener("click", (e) =>{
    input.value += value_l.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyL" ){
      l.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyL"){ 
      l.classList.remove("active");
    }
  });

  const tsz = document.createElement("div");
  tsz.classList.add("key_3");
  tsz.id = "square_3";
  row_3.append(tsz);
  let value_tsz = document.createElement("p");
  value_tsz.classList.add("value");
  value_tsz.innerHTML = allButtons[35].toLocaleUpperCase();
  tsz.append(value_tsz);
  tsz.addEventListener("click", (e) =>{
    input.value += value_tsz.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 186  ){
      tsz.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 186){ 
      tsz.classList.remove("active");
    }
  });

  const kov= document.createElement("div");
  kov.classList.add("key_3");
  kov.id = "square_3";
  row_3.append(kov);
  let value_kov = document.createElement("p");
  value_kov.classList.add("value");
  value_kov.innerHTML = allButtons[36].toLocaleUpperCase();
  kov.append(value_kov);
  kov.addEventListener("click", (e) =>{
    input.value += value_kov.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 222 ){
      kov.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 222 ){ 
      kov.classList.remove("active");
    }
  });



  const enter = document.createElement("div");
  enter.classList.add("key_3");
  enter.id = "square_3";
  row_3.append(enter);
  let value_enter = document.createElement("p");
  value_enter.classList.add("value");
  value_enter.innerHTML = "ENTER";
  enter.append(value_enter);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 13 ){
      enter.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 13 ){ 
      enter.classList.remove("active");
    }
  });



  let flag = false;
  document.addEventListener("keydown", (event) =>{
    if (event.code == "AltLeft"){  
      flag = true;
    }
    if (event.code == "ShiftLeft" && flag) {
      value_a.innerHTML = allButtonsRu[26].toLocaleUpperCase();
      value_s.innerHTML = allButtonsRu[27].toLocaleUpperCase();
      value_d.innerHTML = allButtonsRu[28].toLocaleUpperCase();
      value_f.innerHTML = allButtonsRu[29].toLocaleUpperCase();
      value_g.innerHTML = allButtonsRu[30].toLocaleUpperCase();
      value_h.innerHTML = allButtonsRu[31].toLocaleUpperCase();
      value_j.innerHTML = allButtonsRu[32].toLocaleUpperCase();
      value_k.innerHTML = allButtonsRu[33].toLocaleUpperCase();
      value_l.innerHTML = allButtonsRu[34].toLocaleUpperCase();
      value_tsz.innerHTML = allButtonsRu[35].toLocaleUpperCase();
      value_kov.innerHTML = allButtonsRu[36].toLocaleUpperCase();
      flag = false;
    }
  });
  







}

const fouth = () =>{
  const shift = document.createElement("div");
  shift.classList.add("key_4");
  shift.id = "square_3";
  row_4.append(shift);
  const value_shift = document.createElement("p");
  value_shift.classList.add("value");
  value_shift.innerHTML = "SHIFT";
  shift.append(value_shift);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 16 ){
      shift.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 16){ 
      shift.classList.remove("active");
    }
  });
  

  const z = document.createElement("div");
  z.classList.add("key_4");
  z.id = "square_3";
  row_4.append(z);
  const value_z = document.createElement("p");
  value_z.classList.add("value");
  value_z.innerHTML = allButtons[37].toLocaleUpperCase();
  z.append(value_z);
  z.addEventListener("click", (e) =>{
    input.value += value_z.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyZ"){
      z.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyZ"){ 
      z.classList.remove("active");
    }
  });
  

  const x = document.createElement("div");
  x.classList.add("key_4");
  x.id = "square_3";
  row_4.append(x);
  const value_x = document.createElement("p");
  value_x.classList.add("value");
  value_x.innerHTML = allButtons[38].toLocaleUpperCase();
  x.append(value_x);
  x.addEventListener("click", (e) =>{
    input.value += value_x.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyX"){
      x.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyX"){ 
      x.classList.remove("active");
    }
  });
 

  const c = document.createElement("div");
  c.classList.add("key_4");
  c.id = "square_3";
  row_4.append(c);
  const value_c = document.createElement("p");
  value_c.classList.add("value");
  value_c.innerHTML = allButtons[39].toLocaleUpperCase();
  c.append(value_c);
  c.addEventListener("click", (e) =>{
    input.value += value_c.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyC"){
      c.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyC"){ 
      c.classList.remove("active");
    }
  });
  
  const v = document.createElement("div");
  v.classList.add("key_4");
  v.id = "square_3";
  row_4.append(v);
  const value_v = document.createElement("p");
  value_v.classList.add("value");
  value_v.innerHTML = allButtons[40].toLocaleUpperCase();
  v.append(value_v);
  v.addEventListener("click", (e) =>{
    input.value += value_v.innerHTML;
  });  
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyV" ){
      v.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyV"){ 
      v.classList.remove("active");
    }
  });
  
  const b = document.createElement("div");
  b.classList.add("key_4");
  b.id = "square_3";
  row_4.append(b);
  const value_b = document.createElement("p");
  value_b.classList.add("value");
  value_b.innerHTML = allButtons[41].toLocaleUpperCase();
  b.append(value_b);
  b.addEventListener("click", (e) =>{
    input.value += value_b.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyB"){
      b.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyB"){ 
      b.classList.remove("active");
    }
  });
  
  const n = document.createElement("div");
  n.classList.add("key_4");
  n.id = "square_3";
  row_4.append(n);
  const value_n = document.createElement("p");
  value_n.classList.add("value");
  value_n.innerHTML = allButtons[42].toLocaleUpperCase();
  n.append(value_n);
  n.addEventListener("click", (e) =>{
    input.value += value_n.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyN"){
      n.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyN"){ 
      n.classList.remove("active");
    }
  });

  const m = document.createElement("div");
  m.classList.add("key_4");
  m.id = "square_3";
  row_4.append(m);
  const value_m = document.createElement("p");
  value_m.classList.add("value");
  value_m.innerHTML = allButtons[43].toLocaleUpperCase();
  m.append(value_m);
  m.addEventListener("click", (e) =>{
    input.value += value_m.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.code === "KeyM" ){
      m.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.code === "KeyM"){ 
      m.classList.remove("active");
    }
  });
  
  const zap = document.createElement("div");
  zap.classList.add("key_4");
  zap.id = "square_3";
  row_4.append(zap);
  const value_zap = document.createElement("p");
  value_zap.classList.add("value");
  value_zap.innerHTML = allButtons[44].toLocaleUpperCase();
  zap.append(value_zap);
  zap.addEventListener("click", (e) =>{
    input.value += value_zap.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 188 ){
      zap.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 188){ 
      zap.classList.remove("active");
    }
  });
  
  const point  = document.createElement("div");
  point.classList.add("key_4");
  point.id = "square_3";
  row_4.append(point);
  const value_point = document.createElement("p");
  value_point.classList.add("value");
  value_point.innerHTML = allButtons[45].toLocaleUpperCase();
  point.append(value_point);
  point.addEventListener("click", (e) =>{
    input.value += value_point.innerHTML;
  });
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 190){
      point.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 190){ 
      point.classList.remove("active");
    }
  });
  
  const slash_2 = document.createElement("div");
  slash_2.classList.add("key_4");
  slash_2.id = "square_3";
  row_4.append(slash_2);
  const value_slash_2 = document.createElement("p");
  value_slash_2.classList.add("value");
  value_slash_2.innerHTML = allButtons[46].toLocaleUpperCase();
  slash_2.append(value_slash_2);
  slash_2.addEventListener("click", (e) =>{
    input.value += value_slash_2.innerHTML;
  });  
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 191 ){
      slash_2.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 191){ 
      slash_2.classList.remove("active");
    }
  });
  

  const arrowUp = document.createElement("div");
  arrowUp.classList.add("key_4");
  arrowUp.id = "square_3";
  row_4.append(arrowUp);
  const value_arrowUp = document.createElement("p");
  value_arrowUp.classList.add("value");
  value_arrowUp.innerHTML = "↑";
  arrowUp.append(value_arrowUp);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 38 ){
      arrowUp.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 38){ 
      arrowUp.classList.remove("active");
    }
  });
  
  

  const right_shift = document.createElement("div");
  right_shift.classList.add("key_4");
  right_shift.id = "square_3";
  row_4.append(right_shift);
  const value_right_shift = document.createElement("p");
  value_right_shift.classList.add("value");
  value_right_shift.innerHTML = "SHIFT";
  right_shift.append(value_right_shift);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 16 ){
      right_shift.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 16){ 
      right_shift.classList.remove("active");
    }
  });
  




  let flag = false;
  let language = 0;
  document.addEventListener("keydown", (event) =>{
    if (event.code == "AltLeft"){  
      flag = true;
    }
    if (event.code == "ShiftLeft" && flag && language === 0)  {
      value_z.innerHTML = allButtonsRu[37].toLocaleUpperCase();
      value_x.innerHTML = allButtonsRu[38].toLocaleUpperCase();
      value_c.innerHTML = allButtonsRu[39].toLocaleUpperCase();
      value_v.innerHTML = allButtonsRu[40].toLocaleUpperCase();
      value_b.innerHTML = allButtonsRu[41].toLocaleUpperCase();
      value_n.innerHTML = allButtonsRu[42].toLocaleUpperCase();
      value_m.innerHTML = allButtonsRu[43].toLocaleUpperCase();
      value_zap.innerHTML = allButtonsRu[44].toLocaleUpperCase();
      value_point.innerHTML = allButtonsRu[45].toLocaleUpperCase();
      value_slash_2.innerHTML = allButtonsRu[46].toLocaleUpperCase();
      language == 1;
    } 
    if (event.code == "ShiftLeft" && flag && language === 1){
      value_z.innerHTML = allButtons[37].toLocaleUpperCase();
      value_x.innerHTML = allButtons[38].toLocaleUpperCase();
      value_c.innerHTML = allButtons[39].toLocaleUpperCase();
      value_v.innerHTML = allButtons[40].toLocaleUpperCase();
      value_b.innerHTML = allButtons[41].toLocaleUpperCase();
      value_n.innerHTML = allButtons[42].toLocaleUpperCase();
      value_m.innerHTML = allButtons[43].toLocaleUpperCase();
      value_zap.innerHTML = allButtons[44].toLocaleUpperCase();
      value_point.innerHTML = allButtons[45].toLocaleUpperCase();
      value_slash_2.innerHTML = allButtons[46].toLocaleUpperCase();
      language === 0;
    }
  });
  
  
}

const fifth = () =>{
  const ctrl = document.createElement("div");
  ctrl.classList.add("key_5");
  ctrl.id = "square_5";
  row_5.append(ctrl);
  const value_ctrl = document.createElement("p");
  value_ctrl.classList.add("value");
  value_ctrl.innerHTML = "CTRL";
  ctrl.append(value_ctrl);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 17 ){
      ctrl.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 17){ 
      ctrl.classList.remove("active");
    }
  }); 

 

  const win = document.createElement("div");
  win.classList.add("key_5");
  win.id = "square_5";
  row_5.append(win);
  const value_win = document.createElement("p");
  value_win.classList.add("value");
  value_win.innerHTML = "Win";
  win.append(value_win);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 91 ){
      win.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 91){ 
      win.classList.remove("active");
    }
  }); 

  const alt = document.createElement("div");
  alt.classList.add("key_5");
  alt.id = "square_5";
  row_5.append(alt);
  const value_alt = document.createElement("p");
  value_alt.classList.add("value");
  value_alt.innerHTML = "Alt";
  alt.append(value_alt);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 18 ){
      alt.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 18){ 
      alt.classList.remove("active");
    }
  }); 

  const space = document.createElement("div");
  space.classList.add("space");
  space.id = "square_5";
  row_5.append(space);
  const value_space = document.createElement("p");
  value_space.classList.add("value");
  space.append(value_space);
  space.addEventListener("click", (e) =>{
    input.value += " ";
  })
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 32 ){
      space.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 32){ 
      space.classList.remove("active");
    }
  });

  const altRight = document.createElement("div");
  altRight.classList.add("key_5");
  altRight.id = "square_5";
  row_5.append(altRight);
  const value_altRight = document.createElement("p");
  value_altRight.classList.add("value");
  value_altRight.innerHTML = "Alt";
  altRight.append(value_altRight);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 18 ){
      altRight.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 18){ 
      altRight.classList.remove("active");
    }
  });

  const ctrlRight = document.createElement("div");
  ctrlRight.classList.add("key_5");
  ctrlRight.id = "square_5";
  row_5.append(ctrlRight);
  const value_ctrlRight = document.createElement("p");
  value_ctrlRight.classList.add("value");
  value_ctrlRight.innerHTML = "Ctrl";
  ctrlRight.append(value_ctrlRight);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 17 ){
      ctrlRight.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 17){ 
      ctrlRight.classList.remove("active");
    }
  });

  const arrowLeft = document.createElement("div");
  arrowLeft.classList.add("key_5");
  arrowLeft.id = "square_5";
  row_5.append(arrowLeft);
  const value_arrowLeft = document.createElement("p");
  value_arrowLeft.classList.add("value");
  value_arrowLeft.innerHTML = "←";
  arrowLeft.append(value_arrowLeft);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 37 ){
      arrowLeft.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 37){ 
      arrowLeft.classList.remove("active");
    }
  });

  const arrowDown = document.createElement("div");
  arrowDown.classList.add("key_5");
  arrowDown.id = "square_5";
  row_5.append(arrowDown);
  const value_arrowDown = document.createElement("p");
  value_arrowDown.classList.add("value");
  value_arrowDown.innerHTML = "↓";
  arrowDown.append(value_arrowDown);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 40 ){
      arrowDown.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 40){ 
      arrowDown.classList.remove("active");
    }
  });

  const arrowRight= document.createElement("div");
  arrowRight.classList.add("key_5");
  arrowRight.id = "square_5";
  row_5.append(arrowRight);
  const value_arrowRight = document.createElement("p");
  value_arrowRight.classList.add("value");
  value_arrowRight.innerHTML = "→";
  arrowRight.append(value_arrowRight);
  document.addEventListener("keydown", (e) =>{
    if (e.keyCode === 39 ){
      arrowRight.classList.add("active");
    }
  });
  document.addEventListener("keyup", (e) =>{
    if (e.keyCode === 39){ 
      arrowRight.classList.remove("active");
    }
  });
}


const pressKeys = () =>{
    document.addEventListener("keydown", (event) =>{
      if (event.key != "Tab" && event.key != "Alt" && event.key != "CapsLock" && event.key != "Shift" && event.key != "Control" && event.key != "ArrowDown" && event.key != "ArrowUp" && event.key != "ArrowLeft" && event.key != "ArrowRight" &&
        event.key != "Delete" && event.key != "Backspace" && event.key != "Enter" && event.key != "F1" && event.key != "F2" && event.key != "F3" && event.key != "F4" && event.key != "F5" && event.key != "F6" && event.key != "F7"
        && event.key != "F7" && event.key != "F8" && event.key != "F9" && event.key != "F10" && event.key != "F11" && event.key != "F12" && event.keyCode != 36 && event.keyCode != 35 && event.keyCode != 34 && event.keyCode != 33 && event.keyCode != 46
        && event.keyCode != 45 && event.keyCode != 36){
        let cursorPos = input.selectionStart;
        let inputText = input.value;
        input.value = inputText.slice(0, cursorPos) + event.key + inputText.slice(cursorPos);
        input.selectionStart = input.selectionEnd = cursorPos + 1;

        
      } 
    });
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 9) { 
        e.preventDefault(); 
        input.value += '\t';
      }
    });
    
    document.addEventListener("keydown", (e) =>{
      if (e.key === "Backspace"){
        
        let cursorPos = input.selectionStart;
        let inputText = input.value.split("");
        inputText.splice(cursorPos - 1, 1);
        input.value = inputText.join("");
        input.selectionStart = cursorPos - 1;
        input.selectionEnd = cursorPos - 1;
      }
    });
    
    document.addEventListener('keydown',(e) => {
      if (e.keyCode === 38) { 
        e.preventDefault(); 
      }
    });
    document.addEventListener("keydown", (e) =>{
      if (e.keyCode === 32){
        e.preventDefault();
        input.value += " ";
      }
    });
    input.addEventListener("keydown", (e) =>{
      if (e.keyCode === 13){
        e.preventDefault();
        input.value += "\n";
      }
    });
    document.addEventListener("keydown", (e) =>{
      if (e.keyCode === 13){
        e.preventDefault();
        input.value += "\n";
      }
    });
    document.addEventListener("keydown", (e) =>{
      if (e.keyCode === 37){
        const currentCaretPosition = input.selectionStart;
        input.selectionStart = currentCaretPosition - 1;
        input.selectionEnd = currentCaretPosition - 1;
        e.preventDefault();
      }
    });
    document.addEventListener("keydown", (e) =>{
      if (e.keyCode === 39){
        const currentCaretPosition = input.selectionStart;
        input.selectionStart = currentCaretPosition + 1;
        input.selectionEnd = currentCaretPosition + 1;
        e.preventDefault();
      }
    });

    document.addEventListener("keydown", (e) =>{
      if(e.keyCode === 46){
        let cursorPos = input.selectionStart;
        let inputText = input.value.split("");
        inputText.splice(cursorPos, 1);
        input.value = inputText.join("");
        input.selectionStart = cursorPos;
        input.selectionEnd = cursorPos + 1;
      }
    })










};

















































firstRow();
secondRow();
third();
fouth();
fifth();
pressKeys();






