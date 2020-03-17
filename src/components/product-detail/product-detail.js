$("#select2-product-detail-1").select2({
    placeholder: "Выберите параметр",
    minimumResultsForSearch: -1,
    width: "100%"
});

const check = $(".check-select>.custom-checkbox");
check.on("change", function () {
    if ($(this).children("input").is(":checked")) {
        $(this).next().prop("disabled", false);
    } else {
        $(this).next().prop("disabled", true);
    }
});
