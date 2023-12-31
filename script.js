document.addEventListener('DOMContentLoaded', function () {
    revealText('actualWish', 'Hi Linh Chi. Mặc dù tớ làm cái trang web này trong cả ngày hôm nay nhưng trình độ có hạn nên nó chỉ được như thế này nhưng đây cũng là tâm huyết của tớ nên mong được cậu đón nhận. Tớ muốn gửi đôi lời với cậu thông qua trang web này đó là: Thì cũng đã đến lúc phải nói lời tạm biệt với năm 2023 đầy gian nan và sóng gió nhưng cũng đầy niềm vui với những kỉ niệm khó quên. Trong cái khoảnh khắc chuyển giao thiêng liêng này thì tớ mong cậu sẽ càng thêm xinh đẹp như cậu đã và đang; có thêm sức mạnh để vượt qua được những áp lực trong học tập, công việc cũng như cuộc sống; luôn nở một nụ cười trên môi dù phía trước có là gì đi chăng nữa. Lời cuối cùng là nếu cậu có buồn hay gặp khó khăn chuyện gì thì có thể nói với tớ. Dù tớ có thể không ở bên cậu lúc đó nhưng mà cậu biết mà, người ta gọi tớ là bậc thầy chữa lành=)). Có thể lúc đó tớ sẽ cùng chửi đứa đó cùng cậu hoặc sẽ mua vui bằng phép thuật của tiên nữ winx đang chảy trong người tớ nè. Cuối cùng thì tớ cảm ơn cậu vì đang đồng hành cùng tớ trong thời điểm thiêng liêng này và bây giờ hãy cùng "cześć and privet 2024"');
});

function revealText(elementId, text) {
    var element = document.getElementById(elementId);
    var index = 0;

    function reveal() {
        if (index <= text.length) {
            element.innerHTML = text.slice(0, index++);
            setTimeout(reveal, 50); // Adjust the timeout for the speed of reveal
        }
    }

    reveal();
}
