$(document).ready(function () {
    var counter = 0;//Avoid creating doble row

    // Create activity
    $("#new-activity").on("click", function () {
        // if (counter != 0) return;
        // var newRow = $("<tr class='form-activity'>");
        // var cols = "<form #activityData='ngForm'";
        // cols += '<td></td>';
        // cols += '<td><input type="text" class="form-control" name="nombre" ngModel/></td>';
        // cols += '<td><input type="text" class="form-control" name="responsable" ngModel/></td>';
        // cols += '<td><input type="text" class="form-control" name="previa" ngModel/></td>';
        // cols += '<td><input type="date" class="form-control" name="inicio" ngModel/></td>';
        // cols += '<td><input type="date" class="form-control" name="fin" ngModel/></td>';
        // cols += '<td><input type="number" class="form-control" name="presupuesto" ngModel/></td>';
        // cols += '<td><input type="number" class="form-control" name="completado" ngModel/></td>';
        // newRow.append(cols);
        // $("table.order-list").append(newRow);
        // counter++;

        enableNewActivity();
    });

    // Delete new activity
    $('#cancel-activity').on("click", function () {
        // $('.form-activity').remove();
        // counter -= 1;
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




// $("#google-gantt").find("svg").removeAttr('fill');




// let menu = document.getElementById('menu');
// console.log(main.lastElementChild);

// function UpdateColors() {

//     // var item = document.getElementById('google-gantt');//.removeAttribute('fill');
//     let aiuda = document.getElementById('google-gantt');
//     // var aiuda = document.getElementById('google-gantt').getElementsByTagName('svg');
//     console.log(aiuda);
//     console.log(aiuda.firstElementChild);
//     console.log(aiuda.lastElementChild);
//     console.log(aiuda.children);
//     console.log(aiuda.children.length);
//     console.log(aiuda.firstChild);
//     // console.log(aiuda.item(0));
//     // console.log((aiuda.children)[0]);
//     // console.log(aiuda[0]);
//     // console.log(aiuda.children[0]);
//     console.log(aiuda.item(0));
// }


// // var item = document.getElementById('google-gantt');//.removeAttribute('fill');
// let aiuda = document.getElementById('google-gantt');
// // var aiuda = document.getElementById('google-gantt').getElementsByTagName('svg');
// console.log(aiuda);
// console.log(aiuda.firstElementChild);
// console.log(aiuda.lastElementChild);
// console.log(aiuda.children);
// console.log(aiuda.children.length);
// console.log(aiuda.firstChild);
// // console.log(aiuda.item(0));
// // console.log((aiuda.children)[0]);
// // console.log(aiuda[0]);
// // console.log(aiuda.children[0]);
// console.log(aiuda.item(0));




// // var item = document.getElementById('google-gantt').getElementsByTagName('svg');

// // const item2 = item.children;


// // console.log(item2);
// let amount = aiuda.amount;
// // var aux = item.childNodes[0];
// // console.log("amount");
// // console.log(amount);