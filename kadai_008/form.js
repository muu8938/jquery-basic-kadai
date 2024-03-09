$(function() {
  // class属性がbtmがクリックされたら
  $('.btn').on('click', function() {
    
    // テキストボックス内に「クリックしました！」と表示されている
    $('.text-box').val("クリックしました！");
  });
});
