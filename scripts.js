const usuario = document.querySelector('.usuario');
const mail = document.querySelector('.mail');
const map = document.querySelector('.mapa');
const estudio = document.querySelector('.estudio');
const bubbles = document.querySelectorAll('#box2');
const userBubble = document.querySelector('.sb9');
const mailBubble = document.querySelector('.sb10');
const mapBubble = document.querySelector('.sb11');
const estudioBubble = document.querySelector('.sb12');
const container = document.querySelectorAll('.links');



const isUserClosed = userBubble.classList.contains('inactive');
const isMailClosed = mailBubble.classList.contains('inactive');
const isMapClosed = mapBubble.classList.contains('inactive');
const isEstudioClosed = estudioBubble.classList.contains('inactive');

function toggleUserBubble(){

    if (!isUserClosed){
        userBubble.classList.add('inactive');
    } userBubble.classList.toggle('inactive');
}
function toggleMailBubble(){

    if (!isMailClosed){
        mailBubble.classList.add('inactive');
    } mailBubble.classList.toggle('inactive');
}
function toggleMapBubble(){

    if (!isMapClosed){
        mapBubble.classList.add('inactive');
    } mapBubble.classList.toggle('inactive');
}
function toggleEstudioBubble(){

    if (!isEstudioClosed){
        estudioBubble.classList.add('inactive');
    } estudioBubble.classList.toggle('inactive');
}
usuario.addEventListener('click',toggleUserBubble);
mail.addEventListener('click',toggleMailBubble);
map.addEventListener('click',toggleMapBubble);
estudio.addEventListener('click',toggleEstudioBubble);
