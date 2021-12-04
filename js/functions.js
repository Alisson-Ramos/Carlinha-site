var btnLogin = document.querySelector("#imgLogin");
var bkgWhite = document.querySelector("#bkgWhite");
var bkgBlack = document.querySelector("#bkgBlack");
var painelLogin = document.querySelector("#blocoLogin");
var painelCad = document.querySelector("#blocoCadastro");
var btnEnviar = document.querySelector(".button");
var btnFecha = document.querySelector("#fecha");
var btnHamburguer = document.querySelector(".fa-bars");
var painelHeader = document.querySelector("#Hlista");
var reLogin = document.querySelector("#caixaLogin");
var quebraLinhaHeader = document.querySelector("#quebralinhaLogin");
var fundoMenu = document.querySelector("#homeCelular");
var btnCad = document.querySelector("#btn_cad");
var btnFecha = document.querySelector("#fecha");
var fecha_Cad = document.querySelector("#fecha_Cad");

btnLogin.addEventListener('click', abrirLogin);
btnEnviar.addEventListener('click', fecharLogin);
btnFecha.addEventListener('click', fecharLogin);
btnHamburguer.addEventListener('click', abrirHeader);
bkgBlack.addEventListener('click', fecharHeader);
linkCad.addEventListener('click', abrirCadatro);
btn_cad.addEventListener('click', fecharCadastro );
fecha_Cad.addEventListener('click', fecharCadastro);

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
	if (window.matchMedia("(max-width: 480px)").matches){
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
}
function fecharHeader() {
	reLogin.classList.add("esconder");
	quebraLinhaHeader.classList.add("esconder");
	bkgBlack.classList.add("esconder");
	painelHeader.classList.add("esconder");
	fundoMenu.classList.add("esconder");
}
function removerBKG() {
	bkgBlack.classList.add("esconder");
}

if (window.matchMedia("(max-width: 480px)").matches){
	fecharHeader();
}
function mostrarHeader() {

if (window.matchMedia("(min-width: 480px)").matches){
	abrirHeader();
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
