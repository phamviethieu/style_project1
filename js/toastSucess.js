const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500
});
let message = $('#message').attr('data-text');
toastr.success(message)
