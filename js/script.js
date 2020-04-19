
$(".Login").on("click", function(e){
  e.preventDefault();

  if(visible) {
    $('.submenu-user').show();
    mostrar();
    visible = false;
  } else {
    $('.submenu-user').hide();
    $('#MenuPequenio').hide();
    visible = true;
  }
});

$(".icon-menu").on("click", function(e){
  e.preventDefault();

  if(visible) {
    $('#MenuPequenio').show();
    visible = false;
  } else {
    $('#MenuPequenio').hide();
    $('.submenu-user').hide();
    visible = true;
  }
});
	

function mostrar() {
for (i = 0; i <= 10; i++)
 setTimeout("document.getElementsByClass('.Menu').style.opacity = '" + (i / 10) + "'", i * 100)
}
