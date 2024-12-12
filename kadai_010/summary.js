$(function(){
  $('#change-color').on('click', ()=>{
    $('#target').css('color', 'red');
  });
$('#change-text').on('click', ()=>{
  $('#target').text('テキスト変更しました');
});
$('#fade-out').on('click', ()=>{
  $('#target').fadeOut();
});
$('#fade-in').on('click', ()=>{
  $('#target').fadeIn();
});
});