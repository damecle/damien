window.addEventListener('load',function(){
var btnStart=document.getElementById("btnStart")
var attak=document.getElementById("attak")
	





btnStart.addEventListener('click',function(){
	var pp1=pp(0)


	attak.innerHTML = "<input type='button' id='btnAtk1' value='"+pkmn.ses4attaques[0].nom+""+pkmn.ses4attaques[0].pp+"pp'>";
	attak.innerHTML =attak.innerHTML + "<input type='submit' id='btnAtk2' value='"+pkmn.ses4attaques[1].nom+" "+pkmn.ses4attaques[1].pp+"pp'>";
	attak.innerHTML = attak.innerHTML +"<input type='button' id='btnAtk3' value='"+pkmn.ses4attaques[2].nom+" "+pkmn.ses4attaques[2].pp+"pp'>";
	attak.innerHTML = attak.innerHTML +"<input type='button' id='btnAtk4' value='"+pkmn.ses4attaques[3].nom+" "+pkmn.ses4attaques[3].pp+"pp'>";
	btnStart.style.display = "none";

	var btnAtk1=document.getElementById("btnAtk1")
	var btnAtk2=document.getElementById("btnAtk2")
	var btnAtk3=document.getElementById("btnAtk3")
	var btnAtk4=document.getElementById("btnAtk4")
/*Les attaques -----------------------------------------------------------------------*/
	/*1*/
	btnAtk1.addEventListener("click",function(){
	var PcPvA=document.getElementsByClassName("pourcentagePv")[1]
	var percentLife = pkmn.nombrePvActuel / pkmn.nombrePv * 100
	var percentLifeAdv = pkmnAdv.nombrePvActuel / pkmnAdv.nombrePv * 100
	var PcPvM=document.getElementsByClassName("pourcentagePv")[0]
	var atkRan=EntierAl(0,3)
	


	
	pkmn.nombrePvActuel=pkmn.nombrePvActuel-pkmn.ses4attaques[0].puissance
	PcPvA.style.width = percentLife+"%"
	pkmnAdv.nombrePvActuel=pkmnAdv.nombrePvActuel-pkmnAdv.ses4attaques[atkRan].puissance
	PcPvM.style.width = percentLifeAdv+"%"
	pp1--
	btnAtk1.setAttribute('value','"+pkmn.ses4attaques[0].nom+""+pp1+"pp')

	})
	/*2*/
		btnAtk2.addEventListener("click",function(){
	var PcPvA=document.getElementsByClassName("pourcentagePv")[1]
	var percentLife = pkmn.nombrePvActuel / pkmn.nombrePv * 100
	var percentLifeAdv = pkmnAdv.nombrePvActuel / pkmnAdv.nombrePv * 100
	var PcPvM=document.getElementsByClassName("pourcentagePv")[0]
	var atkRan=EntierAl(0,3)

	
	pkmn.nombrePvActuel=pkmn.nombrePvActuel-pkmn.ses4attaques[0].puissance
	PcPvA.style.width = percentLife+"%"
	pkmnAdv.nombrePvActuel=pkmnAdv.nombrePvActuel-pkmnAdv.ses4attaques[atkRan].puissance
	PcPvM.style.width = percentLifeAdv+"%"


	})
	/*3*/
		btnAtk3.addEventListener("click",function(){
	var PcPvA=document.getElementsByClassName("pourcentagePv")[1]
	var percentLife = pkmn.nombrePvActuel / pkmn.nombrePv * 100
	var percentLifeAdv = pkmnAdv.nombrePvActuel / pkmnAdv.nombrePv * 100
	var PcPvM=document.getElementsByClassName("pourcentagePv")[0]
	var atkRan=EntierAl(0,3)

	
	pkmn.nombrePvActuel=pkmn.nombrePvActuel-pkmn.ses4attaques[0].puissance
	PcPvA.style.width = percentLife+"%"
	pkmnAdv.nombrePvActuel=pkmnAdv.nombrePvActuel-pkmnAdv.ses4attaques[atkRan].puissance
	PcPvM.style.width = percentLifeAdv+"%"


	})
	/*4*/
		btnAtk4.addEventListener("click",function(){
	var PcPvA=document.getElementsByClassName("pourcentagePv")[1]
	var percentLife = pkmn.nombrePvActuel / pkmn.nombrePv * 100
	var percentLifeAdv = pkmnAdv.nombrePvActuel / pkmnAdv.nombrePv * 100
	var PcPvM=document.getElementsByClassName("pourcentagePv")[0]
	var atkRan=EntierAl(0,3)

	
	pkmn.nombrePvActuel=pkmn.nombrePvActuel-pkmn.ses4attaques[0].puissance
	PcPvA.style.width = percentLife+"%"
	pkmnAdv.nombrePvActuel=pkmnAdv.nombrePvActuel-pkmnAdv.ses4attaques[atkRan].puissance
	PcPvM.style.width = percentLifeAdv+"%"


	})
	
	function EntierAl(min,max){
	 return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function pp(nbr){
	return pkmn.ses4attaques[nbr].pp
	}

})



	













var pkmn = {
	nom:"carapuce",
	niveau:40,
	nombrePv:300,
	nombrePvActuel:300,
	ses4attaques:[
		{	
			nom:"charge",
			puissance:40,
			precision:100,
			pp:35,
		},
		{	
			nom:"pistoletAO",
			puissance:40,
			precision:100,
			pp:35,
		},
		{	
			nom:"repli",
			puissance:40,
			precision:100,
			pp:35,
		},
		{	
			nom:"ecume",
			puissance:40,
			precision:100,
			pp:35,
		}],
	statut:"rien",
	nomDresseurAttrapé:"Samuel",
	est_ilKO:false,
	types:["eau"] 
}
var pkmnAdv = {
	nom:"salameche",
	niveau:40,
	nombrePv:300,
	nombrePvActuel:300,
	ses4attaques:[
		{	
			nom:"charge",
			puissance:40,
			precision:100,
			pp:35,
		},
		{	
			nom:"lanceflamme",
			puissance:80,
			precision:100,
			pp:35,
		},
		{	
			nom:"griffe",
			puissance:10,
			precision:100,
			pp:35,
		},
		{	
			nom:"roueDeFeu",
			puissance:100,
			precision:100,
			pp:35,
		}],
	statut:"rien",
	nomDresseurAttrapé:"Samuel",
	est_ilKO:false,
	types:["eau"] 
}

})