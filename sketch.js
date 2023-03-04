var Lobo;
var GatoconBotas, GatoconBotas_asustado;
var ground, groundImage,ivicibleGround;
var ennemy1, ennemy2, ennemy3, ennemy4, ennemy5;

function preload(){
Lobo = loadImage("La Muerte sin Máscara.png");
GatoconBotas = loadImage("PussInBoots2022.png");

groundImage = loadImage("ground.png");

ennemy1 = loadImage("Troll.png");
ennemy2 = loadImage("Minotauro.png");
ennemy3 = loadImage("Dragón.png");
ennemy4 = loadImage("Enano.png");
ennemy5 = loadImage("Pirata 1.png");

}

function setup() {
 createCanvas(windowWith, windowHeigth);
 //create sprite Gato
 GatoconBotas = createSprite(70, height-90, 30, 50);
 GatoconBotas.setCollider("diamond", 0, 0, 35);
 GatoconBotas.addAnimation("caught", GatoconBotas_asustado);
 GatoconBotas.debug = true;

 GatoconBotas.sacle = 0.7;

 //Suelo
 ground = createSprite(width/2, height-99, width, 20);
 ground.addImage("ground", groundImage);
 
}

function draw() {
 
}