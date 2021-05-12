// Run for your goal!!!

var x, y, z;
var cam_x, cam_y, cam_z; 
var scene_x, scene_y, scene_z;
var cam_x_stop, cam_y_stop, cam_z_stop;
var scene_x_stop, scene_y_stop, scene_z_stop;

var cs = []; // var[][]  cs;

var vendas_acumuladas = []; // var[][] vendas_acumuladas;
var vendas_acumuladas_interpolado = []; // var[][] vendas_acumuladas_interpolado;
var cor_carro = []; // var[][] cor_carro;

var cores = []; // color
var cor_fundo, cor_titulo, cor_subtitulo, cor_dia, cor_eixo_x, cor_linhas; //color

var window_width, window_height;
var pista_x, pista_y;
var num_colaboradores = 19;
var num_pistas = 2 + num_colaboradores; // o numero de pistas contém duas extras: Objectivo e total da equipa 
var num_linhas_csv = 23;
var num_colunas_csv = 33;

let table; //Table
var dia;
var dia_interpolado; //dia inicial. normalmente 1
var dia_final_interpolado; //dia para parar a animação 

// dimensões relativas para o gráfico
var startline, endline;
var endline150, endline200;
var Titulo, info;
var faixa_height;

var cnt_interpolado;
var inicial;

var carro_he = 0.8;
var rasto_he = 0.2;

var F1_images = []; //PImage[] F1_images;
var AM_logo = []; //PImage AM_logo;

var dias_da_semana = [];

var s = []; // PShape[] s;
var nome_carro = [];

var bkg_file; // SoundFile
var acelera = []; // SoundFile

var flag_igual = [];
var anterior = [];
var actual = [];

var tipo3D = false; //mudar o size()
var movimento_camara = false;
var sound_on = true;


//
//
// PRELOAD 
//
//
function preload() {
  //
  // carrega dados da tabela csv
  //
  table = loadTable('processing_ok.csv', 'csv');
  // table = loadTable("processing_ok.csv", "header"); 


  //
  // SOUND
  //
  bkg_file = loadSound('danger-zone1.mp3');  
  // bkg_file = loadSound('Days.mp3');

  acelera[0] = loadSound('acelera1.wav');
  acelera[1] = loadSound('acelera2.wav');
  acelera[2] = loadSound('acelera3.wav');
  acelera[3] = loadSound('ring.mp3');
}


//
//
// SETUP
//
//
function setup() {
  print(">>>>>>>>>>>>> INICIO DO PROGRAMA  <<<<<<<<<<<<<");

  
  createCanvas(windowWidth, windowHeight);
  window_width=windowWidth-20;
  window_height=windowHeight-20;
  
  // size(1100, 620, P3D);    
  // createCanvas(1120, 620);
  // window_width=1100;
  // window_height=600;

  // size(1520, 820, P3D);   
  // createCanvas(1520, 820);
  // window_width = 1500;
  // window_height = 800;
  
  // createCanvas(1920, 1020);
  // window_width = 1900;
  // window_height = 1000;

  dia_interpolado = 1; //dia inicial. normalmente 1
  // dia_final_interpolado = day() * 100; // dia para parar a animação, normalmente o ultimo do mês
  dia_final_interpolado = 3000;

  AM_logo = loadImage("AM_logo.png");

  //gera_files_materiais();
  //exit();

  //   // 
  //   // 3D
  //   //
  //   if(tipo3D){
  //     // cs é a posicao da camara e cena
  //     cs = new var[5][6];

  //     s = new PShape[num_pistas];
  //     nome_carro = new String[num_pistas];

  //     nome_carro[0] = "objectivo";
  //     nome_carro[1] = "total";    
  //     nome_carro[2] = "01";
  //     nome_carro[3] = "02";
  //     nome_carro[4] = "03";    
  //     nome_carro[5] = "04";    
  //     nome_carro[6] = "05";
  //     nome_carro[7] = "06";    
  //     nome_carro[8] = "07";    
  //     nome_carro[9] = "08";
  //     nome_carro[10] = "09";    
  //     nome_carro[11] = "10";    
  //     nome_carro[12] = "11";
  //     nome_carro[13] = "12";    
  //     nome_carro[14] = "13";    
  //     nome_carro[15] = "14";    
  //     nome_carro[16] = "15";    
  //     nome_carro[17] = "16";
  //     nome_carro[18] = "17";    
  //     nome_carro[19] = "18";   
  //     nome_carro[20] = "19";

  //     for(int i= 0; i < num_pistas; i++){
  //       s[i] = loadShape(nome_carro[i] +".obj");
  //       print(nome_carro[i] +".obj");
  //       // s[i] = loadShape("testarossa0.obj");
  //     }   
  //    // img = loadImage("earth.jpg");
  //    // s.setTexture(img);

  //     cs[0][0]=264; cs[0][1]=223; cs[0][2]= 330; cs[0][3]=400; cs[0][4]= 1720;  cs[0][5]= -1160;
  //     camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5] , 0, 1, 0) ;


  //     cs[0][0] = 200;  // cam_x
  //     cs[0][1] = 200;
  //     cs[0][2] = 200;
  //     cs[0][3] = 400; // scene_X
  //     cs[0][4] = 1720; 
  //     cs[0][5] = -1160; 

  //     cs[1][0] = 260;  // cam_x
  //     cs[1][1] =  260;
  //     cs[1][2] = 260;
  //     cs[1][3] = 400; // scene_X
  //     cs[1][4] = 1720; 
  //     cs[1][5] = -1160; 

  //     cs[2][0] = 470;  // cam_x
  //     cs[2][1] =  470;
  //     cs[2][2] = 470;
  //     cs[2][3] = 400; // scene_X
  //     cs[2][4] = 1720; 
  //     cs[2][5] = -1160; 

  //     cs[3][0] = 820;  // cam_x
  //     cs[3][1] =  820;
  //     cs[3][2] = 820;
  //     cs[3][3] = 400; // scene_X
  //     cs[3][4] = 1720; 
  //     cs[3][5] = -1160; 

  //     cs[4][0] = 820;  // cam_x
  //     cs[4][1] =  820;
  //     cs[4][2] = 820;
  //     cs[4][3] = -290; // scene_X
  //     cs[4][4] = 1720; 
  //     cs[4][5] = -1160; 

  //   }    
  //   //
  //   // Fim de bloco 3D
  //   //


  startline = int(window_width * 0.085);
  endline = int(window_width * 0.8);
  endline150 = int(window_width * 0.9);;
  endline200 = int(window_width * 1);;

  Titulo = int(window_height * 0.1);
  info = int(window_height * 0.2);

  // 
  // Load a soundfile from the /data folder of the sketch and play it back
  //
  if (sound_on == true) {
    print("Soundfile");

    print("Duration= " + bkg_file.duration() + " seconds. Canais: " + bkg_file.channels());


  }

  setup_cores();

  cor_fundo = color('#CECCCC');
  cor_titulo = color('#E50707');
  cor_subtitulo = color('#E50707');
  cor_dia = color('#0C00BF');
  // cor_eixo_x = color('#0C00BF'); 
  cor_eixo_x = color('#212121');
  // cor_linhas = color('#00B4A7');
  cor_linhas = color('#212121');


  load_F1_images();

  frameRate(30);

  //noStroke();
  stroke(153);
  strokeWeight(1);
  fill(204, 102, 0);

  //Converte a porcaria do CSV gerado pelo estupido do excel em CSV Standard -> (";" e "," passam a "," e "." respectivamente) 
  //converte_csv_estupido_do_excel();

  //        
  //debug print(table.getRowCount() + ' total rows in table');
  //debug print(table.getColumnCount() + ' total columns in table');


  // js dias_da_semana = new aray(31); 
  // debug print(" >> Dias da semana ");
  for (var dia = 0; dia < 31; dia++) {
    dias_da_semana[dia] = table.getString(1, dia + 2);
    //debug print(dias_da_semana[dia] + " ");
  }

  // passa os dados da tabela para o array vendas_acumuladas
  //js  vendas_acumuladas = new   var [num_pistas][31];
  for (var linha = 0; linha < num_pistas; linha++) {
    // print();
    // print("linha:"+linha + "colunas: ");
    vendas_acumuladas[linha] = [];
    for (var coluna = 0; coluna < 31; coluna++) {
      // endas_acumuladas[linha][coluna] = table.getvar(linha + 2, coluna + 2);
      vendas_acumuladas[linha][coluna] = table.getNum(linha + 2, coluna + 2);
      //print(vendas_acumuladas[linha][coluna] + ",");
    }
    //print();
  }

  // Cria tabela interpolada com 100 valores por dia
  //js vendas_acumuladas_interpolado = new float[num_pistas][3100];


  for (var linha = 0; linha < num_pistas; linha++) {
    var cnt_interpolado = 0;
    vendas_acumuladas_interpolado[linha] = [];
    for (var coluna = 0; coluna < 31; coluna++) {
      for (var interCount = 0; interCount < 100; interCount++) {
        if (coluna == 0) {
          vendas_acumuladas_interpolado[linha][cnt_interpolado] = lerp(0, vendas_acumuladas[linha][coluna], (interCount) / 100.0);
        } else {
          vendas_acumuladas_interpolado[linha][cnt_interpolado] = lerp(vendas_acumuladas[linha][coluna - 1], vendas_acumuladas[linha][coluna], (interCount) / 100.0);;
        }

        //print(vendas_acumuladas_interpolado[linha][cnt_interpolado] + " ");
        cnt_interpolado++;
      }
      //print();
    }
  }
  
  //delay(3000);
  bkg_file.play(); 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  window_width=windowWidth-20;
  window_height=windowHeight-20;
}


function draw() {
  var valor, valor_temp, new_valor_temp;
  var pistaA, pistaB, barra;

  var cam_i, cam_f;
  var interpolacao;

  var sound_count;

  // delay(500);

  background(150);

  if (tipo3D) {
    lights();
    grelha_3d();
  } else {
    grelha();
  }

  //
  //
  dia_interpolado++;
  //
  //

  if (dia_interpolado >= dia_final_interpolado) { // final do mês
    // noLoop();                  // para
    dia_interpolado = dia_final_interpolado - 1;
  }
  if (!tipo3D) {
    fill(cor_dia);
    textSize(32);
    text("Dia: " + (int(dia_interpolado / 100) + 1) + " " + dias_da_semana[int(dia_interpolado / 100)], window_width / 2, Titulo + info / 3);
    textSize(12);
  }
  pistaA = endline - startline;
  pistaB = endline200 - endline;

  sound_count = 0;
  for (var linha = 0; linha < num_pistas; linha++) {
    fill(cores[linha], 170);

    valor = vendas_acumuladas_interpolado[linha][dia_interpolado];
    if (valor <= 100.0) {
      barra = valor / 100.0 * pistaA;
    } else {
      barra = pistaA + (valor - 100) / 100.0 * pistaB;
    }
    // print("Valor: " + valor + " barra: " + barra);


    //
    // Testa arranque para meter som
    //
    if (sound_on == true) {
      if ((dia_interpolado == 0) | (dia_interpolado == 3099)) {
        anterior[linha] = valor;
      } else {
        actual[linha] = valor;
        if (actual[linha] == anterior[linha]) {
          flag_igual[linha] = true;
        } else if (flag_igual[linha] == true) { //play

          if (sound_count < 4) { // máximo 4 sons de arranque por dia. Para não saturar o porcessamento
            acelera[int(random(3))].play();
            sound_count++;
          }
          //debug print("dia: " + dia_interpolado + "-pista: " + linha + " --->>>PLAY");
          flag_igual[linha] = false;
        }

        anterior[linha] = valor;
      }
    }

    if (tipo3D) {

      // 
      // 
      // desenha a barra
      //
      //
      //      if(barra >40){
      //         pushMatrix();
      //         x=startline - 40 ;
      //         y=500;
      //         //z=linha*20;        
      //         z=(linha-10)*20;
      //         translate(startline-40 + (barra - 40)/2,y,z);
      //         rectMode(CENTER);
      //         // box(barra - 40, 1, 15);
      //         noStroke();
      //         box(barra, 1, 15);
      //         popMatrix();
      //       } 

      //       //
      //       //
      //       // Carro 
      //       //
      //       //
      //       // stroke(255);
      //       pushMatrix();
      //       x=startline + barra - 40;
      //       y=500;
      //       z=(linha-10)*20;
      //       // print("3d box" + x);
      //       //translate(x-20,y,z);
      //       translate(x,y,z);
      //       rectMode(CENTER);


      //       //box(40,15,15);
      //       scale(12);
      //       rotateZ(PI);
      //       rotateY(-PI/2.0);
      //       shape(s[linha], 0,0);


      //       /////// popMatrix();

      //       // Percentagem de cumprimento
      //       textSize(1);

      //       /////// pushMatrix();

      //       translate(0,0,0);
      //       scale(1);
      //       rotateY(PI/2.0);
      //       rotateZ(PI);
      //       text(nf(vendas_acumuladas_interpolado[linha][dia_interpolado],0,1) + "%", 0,0); // barra +90, info + (linha) * faixa_height + faixa_height*1);          

      //       popMatrix();

      //       // camera(cam_x, cam_y, cam_z, scene_x , scene_y, scene_z , 0, 1, 0)  ;

      //       if(movimento_camara){
      //         int janela = 3100/4;
      //         //int indice_cam = dia_interpolado / janela;

      //         if(dia_interpolado<janela){
      //            cam_i = 0;
      //            cam_f = 1;
      //         }
      //         else if (dia_interpolado<janela*2) {
      //            cam_i = 1;
      //            cam_f = 2;

      //         }
      //         else if (dia_interpolado<janela*3) {
      //            cam_i = 2;
      //            cam_f = 3;
      //         }
      //         else { //if (dia_interpolado<janela*4) {
      //            cam_i = 3;
      //            cam_f = 4;
      //         }

      //         interpolacao = (dia_interpolado-janela*cam_i)/(janela);

      //         print("janela: " + janela + "  dia interpolado: " + dia_interpolado + "  cam_i: " + cam_i + "  Cam_f: " + cam_f + "  interpolação: " + interpolacao);
      //         print(" Cam: " + cs[cam_i][0]+ " " + cs[cam_i][1]+ " "+ cs[cam_i][2]+ " "+ cs[cam_i][3]+ " "+ cs[cam_i][4]+ " "+ cs[cam_i][5]);

      //         camera(lerp(cs[cam_i][0], cs[cam_f][0], interpolacao), lerp(cs[cam_i][1], cs[cam_f][1], interpolacao), lerp(cs[cam_i][2], cs[cam_f][2], interpolacao), lerp(cs[cam_i][3], cs[cam_f][3], interpolacao)  , lerp(cs[cam_i][4], cs[cam_f][4], interpolacao), lerp(cs[cam_i][5], cs[cam_f][5], interpolacao) , 0, 1, 0) ; 
      //       }
      //       else{
      //         // cs[0][0]=264; cs[0][1]=223; cs[0][2]= 330; cs[0][3]=400; cs[0][4]= 1720;  cs[0][5]= -1160;
      //         camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5] , 0, 1, 0) ; 
      //         // camera(mouseX, mouseY, cs[0][2], cs[0][3], cs[0][4], cs[0][5] , 0, 1, 0) ; 
      //       }

    } else { // Desenha a 2D
      // desenha a barra
      if (barra > 40) {
        rect(startline, info + (linha) * faixa_height + faixa_height * rasto_he, barra - 40, faixa_height - faixa_height * rasto_he);
      }

      // Carro LeMans
      image(F1_images[linha], startline + barra - 40, info + (linha) * faixa_height + faixa_height * (1 - carro_he), 40, faixa_height * carro_he);

      // Percentagem de cumprimento
      textSize(15);
      text(nf(vendas_acumuladas_interpolado[linha][dia_interpolado], 0, 1) + "%", startline + barra + 5, info + (linha) * faixa_height + faixa_height * 1);

    }
  }


  if (keyIsPressed) {
    if (key == 'q') {
      cs[0][0] += 10;
    }
    if (key == 'a') {
      cs[0][0] -= 10;
    }
    if (key == 'w') {
      cs[0][1] += 10;
    }
    if (key == 's') {
      cs[0][1] -= 10;
    }
    if (key == 'e') {
      cs[0][2] += 10;
    }
    if (key == 'd') {
      cs[0][2] -= 10;
    }

    if (key == 'r') {
      cs[0][3] += 10;
    }
    if (key == 'f') {
      cs[0][3] -= 10;
    }
    if (key == 't') {
      cs[0][4] += 10;
    }
    if (key == 'g') {
      cs[0][4] -= 10;
    }
    if (key == 'y') {
      cs[0][5] += 10;
    }
    if (key == 'h') {
      cs[0][5] -= 10;
    }
    if (key == 'p') {
      //debug print(cs[0][0] + ", " + cs[0][1] + ", " + cs[0][2] + ", " + cs[0][3] + ", " + cs[0][4] + ", " + cs[0][5]);
    }

    if (key == '1') {
      cs[0][0] = 264;
      cs[0][1] = 223;
      cs[0][2] = 330;
      cs[0][3] = 400;
      cs[0][4] = 1720;
      cs[0][5] = -1160;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);
    }
    if (key == '2') {
      cs[0][0] = 192;
      cs[0][1] = 309;
      cs[0][2] = 310;
      cs[0][3] = 400;
      cs[0][4] = 1720;
      cs[0][5] = -1160;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);
    }
    if (key == '3') {
      cs[0][0] = 393;
      cs[0][1] = 285;
      cs[0][2] = 310;
      cs[0][3] = 400;
      cs[0][4] = 1720;
      cs[0][5] = -1160;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);
    }
    if (key == '4') {
      cs[0][0] = 398;
      cs[0][1] = 41;
      cs[0][2] = 240;
      cs[0][3] = 400;
      cs[0][4] = 2870;
      cs[0][5] = -1110;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);

      // 398.0, 41.0, 240.0, 400.0, 2870.0, -1110.0

    }
    if (key == '5') {
      cs[0][0] = 798;
      cs[0][1] = 304;
      cs[0][2] = 330;
      cs[0][3] = -330;
      cs[0][4] = 1610;
      cs[0][5] = -1300;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);

      // 798.0, 304.0, 330.0, -330.0, 1610.0, -1300.0

    }
    if (key == '6') {
      cs[0][0] = 774;
      cs[0][1] = 317;
      cs[0][2] = 320;
      cs[0][3] = 180;
      cs[0][4] = 1590;
      cs[0][5] = -1130;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);
    }
    if (key == '7') {
      cs[0][0] = 851;
      cs[0][1] = 364;
      cs[0][2] = 300;
      cs[0][3] = -390;
      cs[0][4] = 1590;
      cs[0][5] = -1130;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);
    }
    if (key == '8') {
      cs[0][0] = 952;
      cs[0][1] = 293;
      cs[0][2] = 110;
      cs[0][3] = -1280;
      cs[0][4] = 2370;
      cs[0][5] = -860;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);
    }
    if (key == '9') {
      cs[0][0] = 948;
      cs[0][1] = 281;
      cs[0][2] = -10;
      cs[0][3] = -1280;
      cs[0][4] = 2220;
      cs[0][5] = 30;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);
    }
    if (key == '0') {
      cs[0][0] = 781;
      cs[0][1] = 357;
      cs[0][2] = -330;
      cs[0][3] = -1030;
      cs[0][4] = 2210;
      cs[0][5] = 2130;
      //js camera(cs[0][0], cs[0][1], cs[0][2], cs[0][3], cs[0][4], cs[0][5], 0, 1, 0);

      // 781.0, 357.0, -330.0, -1030.0, 2210.0, 2130.0
    }

    if (sound_on == true) {
      if (key == 'b') {
        acelera[0].play();
      }
      if (key == 'n') {
        acelera[1].play();
      }
      if (key == 'm') {
        acelera[2].play();
      }
      if (key == 'v') {
        acelera[3].play();
      }
    }
    // print("Camera: " + cs[0][0] + " , " + cs[0][0] + " , " + cs[0][0] );
    // print("Scene: " + cs[0][3] + " , " + cs[0][4] + " , " + cs[0][5] );
    delay(50);
  }




}

function grelha() {
  // cor_fundo, cor_titulo, cor_subtitulo, cor_dia, cor_eixo_x, cor_linhas;  

  strokeWeight(4);
  fill(cor_linhas);
  line(0, Titulo, window_width, Titulo);
  line(0, info, window_width, info);

  // Zona do Título
  fill(255);
  rect(0, 0, window_width + 100, Titulo);


  image(AM_logo, 0.0, 0.0); // Carrega imagem

  textSize(32);
  fill(cor_titulo);
  text("C1 Racing Team", 450, Titulo - 15);
  // text("IQOS Racing Team", 450, Titulo-15);
  fill(cor_subtitulo);
  text("Abril 2020", 900, Titulo - 15);
  // text("Fev. 2018", 900, Titulo-15 );

  fill(cor_linhas);
  line(startline, info - 2, startline, window_height);
  line(endline, info - 2, endline, window_height);
  line(endline150, info - 2, endline150, window_height);
  line(endline200, info - 2, endline200, window_height);

  strokeWeight(1);

  textSize(14);
  fill(cor_eixo_x);
  // legenda eixo dos XX
  text("0.0%", startline - 15, info - 3);
  text("100.0%", endline - 30, info - 3);
  text("150.0%", endline150 - 30, info - 3);
  text("200.0%", endline200 - 40, info - 3);

  //Faixas de rodagem
  faixa_height = (window_height - info) / (num_pistas);
  for (var linha = 0; linha < num_pistas; linha++) {
    //Escreve legenda do eixo dos y
    fill(cores[linha]);
    textSize(15);
    text(table.getString(linha + 2, 0), 5, info + (linha + 1) * faixa_height);

    //print(table.getString(linha, 0));
  }
}

function grelha_3d() {

}

function setup_cores() {
  cores[0] = color(200, 200, 200); // branco
  cores[1] = color(255, 0, 0); // Vermelho
  cores[2] = color(153, 76, 0);
  cores[3] = color(230, 230, 0);
  cores[4] = color(128, 220, 0);
  cores[5] = color(0, 255, 255);
  cores[6] = color(0, 128, 255);
  cores[7] = color(255, 0, 255);
  cores[8] = color(127, 0, 255);
  cores[9] = color(0, 0, 255); // Azul
  cores[10] = color(153, 0, 0); // vermelho claro
  cores[11] = color(255, 0, 127);
  cores[12] = color(64, 64, 0);
  cores[13] = color(255, 153, 153);
  cores[14] = color(51, 102, 0);
  cores[15] = color(100, 100, 200);
  cores[16] = color(255, 204, 153);
  cores[17] = color(0, 0, 102);
  cores[18] = color(153, 0, 76);
  cores[19] = color(255, 204, 204);
  cores[20] = color(255, 150, 200);
}

// function converte_csv_estupido_do_excel() {
//   print(">>> Converte CSV ");
//   String[] lines = loadStrings("processing.csv");
//   print("there are " + lines.length + " lines");
//   for (int i = 0; i < lines.length; i++) {
//     print(lines[i]);
//     lines[i] = lines[i].replace(',', '.');
//     lines[i] = lines[i].replace(';', ',');
//     print(lines[i]);
//   }

//   // Writes the strings to a file, each on a separate line
//   saveStrings("processing_ok.csv", lines);
// }

function load_F1_images() {
  // js F1_images = new PImage[num_pistas];

  F1_images[0] = loadImage("LeMans00.png");
  F1_images[1] = loadImage("LeMans01.png");
  F1_images[2] = loadImage("LeMans02.png");
  F1_images[3] = loadImage("LeMans03.png");
  F1_images[4] = loadImage("LeMans04.png");
  F1_images[5] = loadImage("LeMans05.png");
  F1_images[6] = loadImage("LeMans06.png");
  F1_images[7] = loadImage("LeMans07.png");
  F1_images[8] = loadImage("LeMans08.png");
  F1_images[9] = loadImage("LeMans09.png");
  F1_images[10] = loadImage("LeMans10.png");
  F1_images[11] = loadImage("LeMans11.png");
  F1_images[12] = loadImage("LeMans12.png");
  F1_images[13] = loadImage("LeMans13.png");
  F1_images[14] = loadImage("LeMans14.png");
  F1_images[15] = loadImage("LeMans15.png");
  F1_images[16] = loadImage("LeMans16.png");
  F1_images[17] = loadImage("LeMans17.png");
  F1_images[18] = loadImage("LeMans18.png");
  F1_images[19] = loadImage("LeMans19.png");
  F1_images[20] = loadImage("LeMans20.png");
}

// function carrega_movimentos_camara() {
//   //cs_temp
//   print(">>> Ccarrega_movimentos_camara ");
//   String[] lines = loadStrings("camara.csv");
//   print("there are " + lines.length + " lines");
//   for (int i = 0; i < lines.length; i++) {
//     print(lines[i]);

//     String[] q = splitTokens(lines[i], ",");

//   }

//   // Writes the strings to a file, each on a separate line
//   //saveStrings("processing_ok.csv", lines);
// }

// Altera especificamete a file de materials do carro Testarossa para mudar as cores.
// function gera_files_materiais() {
//   cor_carro = new float[21][3];

//   cor_carro[0][0] = 0.784314;
//   cor_carro[0][1] = 0.784314;
//   cor_carro[0][2] = 0.784314;
//   cor_carro[1][0] = 1.000000;
//   cor_carro[1][1] = 0.000000;
//   cor_carro[1][2] = 0.000000;
//   cor_carro[2][0] = 0.678431;
//   cor_carro[2][1] = 0.298039;
//   cor_carro[2][2] = 0.000000;
//   cor_carro[3][0] = 0.901961;
//   cor_carro[3][1] = 8.745098;
//   cor_carro[3][2] = 0.000000;
//   cor_carro[4][0] = 0.501961;
//   cor_carro[4][1] = 0.862745;
//   cor_carro[4][2] = 0.000000;
//   cor_carro[5][0] = 0.000000;
//   cor_carro[5][1] = 1.000000;
//   cor_carro[5][2] = 1.000000;
//   cor_carro[6][0] = 0.000000;
//   cor_carro[6][1] = 0.501961;
//   cor_carro[6][2] = 1.000000;
//   cor_carro[7][0] = 1.000000;
//   cor_carro[7][1] = 0.000000;
//   cor_carro[7][2] = 1.000000;
//   cor_carro[8][0] = 0.498039;
//   cor_carro[8][1] = 0.000000;
//   cor_carro[8][2] = 1.000000;
//   cor_carro[9][0] = 0.000000;
//   cor_carro[9][1] = 0.000000;
//   cor_carro[9][2] = 1.000000;
//   cor_carro[10][0] = 0.600000;
//   cor_carro[10][1] = 0.000000;
//   cor_carro[10][2] = 0.000000;
//   cor_carro[11][0] = 1.000000;
//   cor_carro[11][1] = 0.000000;
//   cor_carro[11][2] = 0.498039;
//   cor_carro[12][0] = 0.250980;
//   cor_carro[12][1] = 0.250980;
//   cor_carro[12][2] = 0.000000;
//   cor_carro[13][0] = 1.000000;
//   cor_carro[13][1] = 0.600000;
//   cor_carro[13][2] = 0.600000;
//   cor_carro[14][0] = 0.200000;
//   cor_carro[14][1] = 0.400000;
//   cor_carro[14][2] = 0.000000;
//   cor_carro[15][0] = 0.392157;
//   cor_carro[15][1] = 0.392157;
//   cor_carro[15][2] = 0.784314;
//   cor_carro[16][0] = 1.000000;
//   cor_carro[16][1] = 0.800000;
//   cor_carro[16][2] = 0.600000;
//   cor_carro[17][0] = 0.000000;
//   cor_carro[17][1] = 0.000000;
//   cor_carro[17][2] = 0.400000;
//   cor_carro[18][0] = 0.600000;
//   cor_carro[18][1] = 0.000000;
//   cor_carro[18][2] = 0.298039;
//   cor_carro[19][0] = 1.000000;
//   cor_carro[19][1] = 0.800000;
//   cor_carro[19][2] = 0.800000;
//   cor_carro[20][0] = 1.000000;
//   cor_carro[20][1] = 0.588235;
//   cor_carro[20][2] = 0.784314;


//   // carrega file model de materiais
//   String[] lines = loadStrings("data/testarossa.mtl");
//   print("there are " + lines.length + " lines");
//   for (int i = 0; i < lines.length; i++) {
//     print(i + ": " + lines[i]);
//   }

//   for (int carrinhos = 0; carrinhos < 21; carrinhos++) {
//     lines[17] = "Kd " + cor_carro[carrinhos][0] + " " + cor_carro[carrinhos][1] + " " + cor_carro[carrinhos][2];
//     saveStrings("data/testarossa" + carrinhos + ".mtl", lines);
//   }
// }