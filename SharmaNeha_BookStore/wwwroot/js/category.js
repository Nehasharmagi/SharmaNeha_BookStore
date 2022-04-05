const { Toast } = require("bootstrap");

var dataTable;

$(document).ready(function () {
    loadDataTable();
});


function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/Category/GetAll"
        },
        "columns": [
            { "data": "name", "width": "60%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                            <div class="text-center">
                                <a href="/Admin/Category/Upsert/${data}" class="btn btn-success text-white" style="cursor:pointer">
                                    <i class="fas fa-edit"></i>&nbsp;
                                </a>
                                <a onclick=Delete("/Admin/Category/Delete/${data}")class="btn btn-danger text-white" style="cursor:pointer">
                                    <i class="fas fa-trash-alt"></i>&nbsp;
                                </a>
                            </div>
                            `;
                }, "width": "40%"
            }
        ]
    });
}
function Delete(url) {
    swal({
        title: "Are you sure you want to delete?",
        text: "you will not be able to restore the data!",
        icon: "Waring",
        button: true,
        dangerMode: true

    }).then((willDelete) => {
    if (willDelete) {
        $ajax({
            type: "DELETE",
            url: url,
            suceess: function (data) {
                if (data.success) {
                    Toastr.success(data.message);
                    dataTable.ajax.reload();
                }
                else {
                    Toastr.error(data.message);
                }
            }
        });
    }
});
    }
