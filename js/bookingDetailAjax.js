let title_id = "id";
let title_checkin = "checkin";
let title_checkout = "checkout";
let title_price = "Price";

$('.bookingDetail').on('click', function(){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: "GET",
        url: 'view-detail/booking/'+$(this).data('id'),
        dataType: 'json',
        success: function(response){
            let price = response.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
            let data = '<ul class="list-group">';
            data += ' <li class="list-group-item text-right">' + 'MS2020' + response.id +' <i class="fas fa-barcode"></i> </li>';
            data += ' <li class="list-group-item"><i class="fas fa-user"></i> : ' + response.user_name.toUpperCase() +'</li>';
            data += ' <li class="list-group-item"><i class="fas fa-phone-square"></i> : ' + response.phone_number +'</li>';
            data += ' <li class="list-group-item"><i class="fas fa-phone-square"></i> : ' + response.email +'</li>';
            data += ' <li class="list-group-item"><i class="far fa-calendar-check"></i> : ' + response.checkin +'</li>';
            data += ' <li class="list-group-item"><i class="fas fa-store-alt-slash"></i> : ' + response.checkout +'</li>';
            data += ' <li class="list-group-item text-right text-danger">'
                + '<i class="fas fa-money-check-alt"></i>'
                + title_price + ' : '
                + price +'</li>';
            $(".modal-body").html(data);
        }
    });
})
