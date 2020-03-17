const $input = $(".cart-counter__input input");
const $buffer = $(".input-buffer");
const $plus = $(".cart-counter__plus");
const $minus = $(".cart-counter__minus");

function checkBuffer() {
    $buffer.text($input.val());
    $input.width(Math.ceil($buffer.width()) + 34);
}

$input.on("input", checkBuffer);

$plus.on("click", () => {
    $input.val(+$input.val() + 1);
    checkBuffer();
});
$minus.on("click", () => {
    if (+$input.val() > 0) {
        $input.val(+$input.val() - 1);
        checkBuffer();
    }
});
