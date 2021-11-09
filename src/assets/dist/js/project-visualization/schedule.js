$(document).ready(function () {

    // Create activity
    $("#new-activity").on("click", function () {
        enableNewActivity();
    });

    // Delete new activity
    $('#cancel-activity').on("click", function () {
        disableNewActivity();
    });
});
function enableNewActivity() {
    $('#confirm-activity').removeClass('d-none');
    $('#cancel-activity').removeClass('d-none');
    $('#form-activity').removeClass('d-none');
    $('#new-activity').addClass('d-none');
}

function disableNewActivity() {
    $('#confirm-activity').addClass('d-none');
    $('#cancel-activity').addClass('d-none');
    $('#form-activity').addClass('d-none');
    $('#new-activity').removeClass('d-none');
}


function calculateRow(row) {
    var price = +row.find('input[name^="price"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}


function updateChartHeight(height) {
    $("google-chart").attr('height', height);
}