/**
 * We gaan het schip laten bewegen! 
 * Dat gaat in verschillende spellen op verschillende manieren.
 * Laten we beginnen met de muis.
 * 
 * Opdracht:
 * 
 * Laat het schip je muis volgen, door de `x` en `y` van je schip 
 * gelijk te maken aan de `x` en `y` van je muis
 * 
 */
 
var schip = Sprite('images/schip.png')
var muis = Mouse

schip.x = 100
schip.y = 100

function volgMuis() {
  // Binnen deze volgMuis functie kun je het schip je muis laten volgen

  
}

// hierdoor wordt de volgMuis functie aangeroepen
// elke keer als je je muis beweegt
on.mousemove(volgMuis)
