
var btnLogin = document.querySelector("#imgLogin");
var bkgWhite = document.querySelector("#bkgWhite");
var bkgBlack = document.querySelector("#bkgBlack");
var painelLogin = document.querySelector("#blocoLogin");
var painelCad = document.querySelector("#blocoCadastro");
var btnEnviar = document.querySelector(".button");
var btnEnviar2 = document.querySelector("#btn_msg");
var btnFecha = document.querySelector("#fecha");
var btnHamburguer = document.querySelector(".fa-bars");
var painelHeader = document.querySelector("#Hlista");
var reLogin = document.querySelector("#caixaLogin");
var quebraLinhaHeader = document.querySelector("#quebralinhaLogin");
var fundoMenu = document.querySelector("#homeCelular");
var btnCad = document.querySelector("#btn_cad");
var btnFecha = document.querySelector("#fecha");
var fecha_Cad = document.querySelector("#fecha_Cad");
var aPodcast = document.querySelector("#sbpodcast");
var liPodcast = document.querySelector("#lipodcast");
var setaMenu = document.querySelector(".setamenu");


btnLogin.addEventListener('click', abrirLogin);
btnEnviar.addEventListener('click', fecharLogin);
btnFecha.addEventListener('click', fecharLogin);
btnHamburguer.addEventListener('click', abrirHeader);
bkgBlack.addEventListener('click', fecharHeader);
linkCad.addEventListener('click', abrirCadatro);
btn_cad.addEventListener('click', fecharCadastro );
fecha_Cad.addEventListener('click', fecharCadastro);
aPodcast.addEventListener('click', submenu);


function abrirLogin() {
	bkgWhite.classList.remove("esconder");
	painelLogin.classList.remove("esconder");
	fecharHeader();
	removerBKG();
	mostrarHeader();
}
function fecharLogin() {
	bkgWhite.classList.add("esconder");
	painelLogin.classList.add("esconder");
	if (window.matchMedia("(max-width: 812px)").matches){
	removerBKG();
}
	mostrarHeader();
}

function abrirHeader() {
	reLogin.classList.remove("esconder");
	quebraLinhaHeader.classList.remove("esconder");
	bkgBlack.classList.remove("esconder");
	painelHeader.classList.remove("esconder");
	fundoMenu.classList.remove("esconder");
	setaMenu.classList.remove("esconder");
}
function fecharHeader() {
	reLogin.classList.add("esconder");
	quebraLinhaHeader.classList.add("esconder");
	bkgBlack.classList.add("esconder");
	painelHeader.classList.add("esconder");
	fundoMenu.classList.add("esconder");
	fecharpdc();
}
function removerBKG() {
	bkgBlack.classList.add("esconder");
}

if (window.matchMedia("(max-width: 812px)").matches){
	fecharHeader();
}
function mostrarHeader() {

if (window.matchMedia("(min-width: 812px)").matches){
	abrirHeader();
	setaMenu.classList.add("esconder");
	removerBKG();
}	
}
function abrirCadatro () {
	fecharLogin();
	bkgWhite.classList.remove("esconder");
	painelCad.classList.remove("esconder");
}

function fecharCadastro () {
	bkgWhite.classList.add("esconder");
	painelCad.classList.add("esconder");
}


function submenu (liSubmenus) {
	if (window.matchMedia("(max-width: 812px)").matches){
		liPodcast.classList.add("strokepdc");
		setaMenu.classList.remove("esconder");
		setaMenu.classList.remove("fa-chevron-right");
		setaMenu.classList.add("fa-chevron-down");
		var liSubmenus = document.querySelectorAll(".liCategoria");
		for (I = 0; I < liSubmenus.length; I++) {
			liSubmenus[I].classList.remove("esconder");
		}
		
		
		
		
	}
	else {
		aPodcast.href = "./podcast.html"
	}
}
function fecharpdc(liSubmenus) {
	if (window.matchMedia("(max-width: 812px)").matches){
		liPodcast.classList.remove("strokepdc");
		setaMenu.classList.add("fa-chevron-right");
		setaMenu.classList.remove("fa-chevrondown");
		var liSubmenus = document.querySelectorAll(".liCategoria");
		for (I = 0; I < liSubmenus.length; I++) {
			liSubmenus[I].classList.add("esconder");
		}
	}
	
}

if (window.matchMedia("(min-width: 812px)").matches){setaMenu.classList.add("esconder");}

categoriaPodcast();
function categoriaPodcast(catPodcast) {
	var catPodcast = document.querySelectorAll(".cjsPodcast");
	var catEtica = document.querySelector(".etica");
	var catEducacao01 = document.querySelector(".educacao-1");
	var catEducacao02 = document.querySelector(".educacao-2");
	var catVida = document.querySelector(".vida-social");
	for (I = 0; I < catPodcast.length; I++) {
		catPodcast[0].addEventListener('click', funTodos);
			function funTodos() {
				catEtica.classList.remove("esconder");	
				catVida.classList.remove("esconder");
				catEducacao01.classList.remove("esconder");
				catEducacao02.classList.remove("esconder");	
						
			}
		catPodcast[5].addEventListener('click', funEducacao);
			function funEducacao() {
				catEtica.classList.add("esconder");	
				catVida.classList.add("esconder");
				catEducacao01.classList.remove("esconder");
				catEducacao02.classList.remove("esconder");	
						
			}
			catPodcast[6].addEventListener('click', funEtica);
			function funEtica() {
				catEtica.classList.remove("esconder");	
				catVida.classList.add("esconder");	
				catEducacao01.classList.add("esconder");
				catEducacao02.classList.add("esconder");		
			}
			catPodcast[7].addEventListener('click', funVida);
			function funVida() {
				catEtica.classList.add("esconder");	
				catVida.classList.remove("esconder");	
				catEducacao01.classList.add("esconder");
				catEducacao02.classList.add("esconder");		
			}
			catPodcast[1].addEventListener('click', funNada);
			catPodcast[2].addEventListener('click', funNada);
			catPodcast[3].addEventListener('click', funNada);
			catPodcast[4].addEventListener('click', funNada);
			function funNada() {
				catEtica.classList.add("esconder");	
				catVida.classList.add("esconder");	
				catEducacao01.classList.add("esconder");
				catEducacao02.classList.add("esconder");		
			}
	}
	
}

