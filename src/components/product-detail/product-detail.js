$("#select2-product-detail-1").select2({
    placeholder: "Выберите параметр",
    minimumResultsForSearch: -1,
    width: "100%"
});
$(".check-select__select2").select2({
    minimumResultsForSearch: -1,
    width: "100%",
    disabled: true
});


const check = $(".check-select>.custom-checkbox");
check.on("change", function () {
    if ($(this).children("input").is(":checked")) {
        $(this).next().prop("disabled", false);
    } else {
        $(this).next().prop("disabled", true);
    }
});
