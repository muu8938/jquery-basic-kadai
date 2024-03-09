$(function() {
  $('#change-color').on('click', function () {
    $('#target').css('color', '#00afcc');
  });

  $('#change-text').on('click', function () {
    const p = $('p').text();
    $('p').text('Hello!');
  });

  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});
