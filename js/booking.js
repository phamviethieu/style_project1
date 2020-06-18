$('.cancel').on('click', function() {

    Swal.fire({
        title: 'Hủy booking?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tiếp tục hủy!'
    }).then((result) => {
        if (result.value) {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                type: "POST",
                url: 'bookings/update-status',
                data: {
                    'id': $(this).attr('data-id'),
                    'status': 0,
                },
                success: function() {

                    Swal.fire({
                        icon: 'success',
                        title: 'Hủy đơn thành công',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        }
    })
});
$('.approve').on('click', function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: "POST",
        url: 'bookings/update-status',
        data: {
            'id': $(this).attr('data-id'),
            'status': 1,
        },
        success: function() {

            Swal.fire({
                icon: 'success',
                title: 'Chấp nhận thành công',
                showConfirmButton: false,
                timer: 1500
            });


        }
    });

});