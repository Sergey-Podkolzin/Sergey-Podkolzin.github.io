// // Get the container element
// var btnContainer = document.getElementById("tabs-list");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("tabs-item");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("tabs-active");
//     current[0].className = current[0].className.replace(" tabs-active", "");
//     this.className += " tabs-active";
//   });
// }


$('.realese-tabs a').on('click', function() {
  $('.realese-tabs li').removeClass('tabs-active');
  $(this).parent('li').addClass('tabs-active'); // выделяем выбранную категорию

  var all = $(this).attr('data-filter'); // определяем категорию

  if (all == 'all') { // если all
    $('.realese-list div').show(); // отображаем все позиции
  } else { // если не all
    $('.realese-list div').hide(); // скрываем все позиции
    $('.realese-list div[data-filter="' + all + '"]').show(); // и отображаем позиции из соответствующей категории
  }
});