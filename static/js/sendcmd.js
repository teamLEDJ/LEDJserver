$(".btn").on('click',function() {
    // ajaxを用いて非同期通信
    $.ajax({
        url: $(this).parent().attr("id"),   // 送信URL
        type: 'post',
        data: $(this).attr("name"),
        dataType: 'text'
    });   
});