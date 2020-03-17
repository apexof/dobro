const lazyLoadInstance = new LazyLoad({ elements_selector: ".lazy" });

$(".select2").select2({
    minimumResultsForSearch: -1,
    width: "100%"
});

$(".check-select__select2").select2({
    minimumResultsForSearch: -1,
    width: "100%",
    disabled: true
});
