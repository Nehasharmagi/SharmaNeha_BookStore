const { dataTable } = require("./category");

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
                suceess: function(data) {
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
