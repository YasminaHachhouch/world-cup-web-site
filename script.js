//la fonction qui affiche volet 5
function vol5Open()
{   
  var volet5=document.getElementById("v5");
  volet5.classList.remove("hide");
}
//la fonction qui ferme volet 5
function vol5Close()
{   
  var volet5=document.getElementById("v5");
  volet5.classList.add("hide");
}
//la fonction qui affiche volet 2
function vol2Open()
{   
  var volet2=document.getElementById("v2");
  volet2.classList.remove("hide");
}
//la fonction qui ferme volet 2
function vol2Close()
{   
  var volet2=document.getElementById("v2");
  volet2.classList.add("hide");
}
//la fonction qui affiche le tableau et l'image d'equipe
function tableopen()
{

 var v4default=document.getElementById("v4default");
  var tab=document.getElementById("tab");
  var v3s=document.getElementById("v3s");
  var volet2=document.getElementById("v2");
  var tab=document.getElementById('tab')
  v4default.classList.add("hide");
  volet2.classList.add('hide')
  v3s.classList.remove("hide");
  tab.classList.remove("hide");
}
////la fonction qui ferme volet 3
function vol3Close()
{
  var v3s=document.getElementById("v3s");
  v3s.classList.add("hide");
}
//la fonction qui affiche le groupe F dans volet 2
function showf()
{
  var volet2=document.getElementById("v2");
  volet2.classList.remove("hide")
  var e=document.getElementById('e');
  e.classList.add('hide');
  var h=document.getElementById('h');
  h.classList.add('hide');
  var g=document.getElementById('g');
  g.classList.add('hide');
}
//la fonction qui affiche les "news"
function shownews()
{
  var v4default=document.getElementById("v4default");
  var newsdetails=document.getElementById("newsdetails");
  newsdetails.classList.remove('hide');
  v4default.classList.add("hide");
}
//la fonction qui affiche les match
function match()
{
  var v4default=document.getElementById("v4default");
  var match=document.getElementById('match');
  v4default.classList.add("hide");
  match.classList.remove('hide');
}
//la fonction qui affiche la fiche tecjnique dans volet 4
function fichtech()
{
  var FT=document.getElementById('FT');
  var tab=document.getElementById('tab')
  FT.classList.remove('hide');
  tab.classList.add('hide');
}
//la fonction qui affiche les classements
function classement()
{
  var v4default=document.getElementById("v4default");
  var classement=document.getElementById('classement');
  classement.classList.remove("hide");
  v4default.classList.add("hide");
}
//fonction de suppression des éléments du tableau
function Supprimer(no)
{
    var myRow = document.getElementById('row'+no).remove();
}
//fonction de modification des éléments du tableau
function Modifier(no)
{
    var edit = document.getElementById('edit'+no);
    var player = document.getElementById('player'+no);
    var position = document.getElementById('position'+no);
    var index = document.getElementById('index'+no);
    var palmares = document.getElementById('palmares'+no);
    var crtplayer = player.innerHTML;
    var crtposition = position.innerHTML;
    var crtindex = index.innerHTML;
    var crtpalmares = palmares.innerHTML;
    edit.innerHTML="<input id='ok' class='mod' type='button' onclick='okay("+no+")' value='ok'>";
    player.innerHTML="<input  id ='mod_player' type='text' value='"+crtplayer+"'>";
    position.innerHTML="<input  id ='mod_position' type='text' value='"+crtposition+"'>";
    index.innerHTML="<input  id ='mod_index' type='text' value='"+crtindex+"'>";
    palmares.innerHTML="<input  id ='mod_palmares' type='text' value='"+crtpalmares+"'>";
}
//fonction d'ajouter un élément au tableau
function Add()
{
  var form = document.getElementById('formulaire');
  var tab = document.getElementById('tab');
  tab.classList.add('hide'); 
  form.classList.remove('hide');
  var clsbtn = document.getElementById('cls');
  clsbtn.addEventListener('click',
  () => {
    form.classList.add('hide');
    tab.classList.remove('hide');
  }
);
//fonction ok pour confirmer et engistrer les modification
}
function okay(no)
    {
      
    var ok = document.getElementById('edit'+no);
    var player_val = document.getElementById('mod_player').value;
    var position_val = document.getElementById('mod_position').value;
    var index_val = document.getElementById('mod_index').value;
    var palmares_val = document.getElementById('mod_palmares').value;
    ok.innerHTML="<input class='mod' type='button' onclick='Modifier("+no+")' value='edit'>";
    document.getElementById('player'+no).innerHTML=player_val;
    document.getElementById('position'+no).innerHTML=position_val;
    document.getElementById('index'+no).innerHTML=index_val;
    document.getElementById('palmares'+no).innerHTML=palmares_val;

    }
    //la fonction de sauvegarde ajoute les informations et les insère dans le tableau
    function save()
    {
        var new_player =document.getElementById('new_player').value;
       var new_position =document.getElementById('new_position').value;
       var new_index =document.getElementById('new_index').value;
       var new_palmares =document.getElementById('new_palmares').value;
       var table = document.getElementById('table');
       var table_len =(table.rows.length)-1;
       var row =table.insertRow(table_len+1).outerHTML="<tr id='row"+table_len+1+"'><th id='player"+table_len+1+"' class='th_tab' >"+new_player+" </th><th id='position"+table_len+1+"' class='th_tab' >"+new_position+" </th><th id='index"+table_len+1+"' class='th_tab' >"+new_index+" </th><th id='palmares"+table_len+1+"' class='th_tab' >"+new_palmares+" </th><th class='th_tab' ><input class='sup' type='button' onclick='Supprimer("+table_len+1+")' value='delete'></th><th id='edit"+table_len+1+"'  class='th_tab'><input class='mod' type='button' onclick='Modifier("+table_len+1+")' value='edit'></th>"
      var form = document.getElementById('formulaire');
      var tab = document.getElementById('tab');
      form.classList.add('hide');
       tab.classList.remove('hide');
        document.getElementById('new_player').value="";
       document.getElementById('new_position').value="";
       document.getElementById('new_index').value="";
       document.getElementById('new_palmares').value="";
    }