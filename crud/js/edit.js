
$(document).on('click', '.editStudentBtn', function () {
    var student_id = $(this).val();
    $.ajax({
        type: "GET",
        url: "code.php?student_id=" + student_id,
        success: function (response) {
            var res = jQuery.parseJSON(response);
            if(res.status == 404) {
                alert(res.message);
            }else if(res.status == 200){
                $('#student_id').val(res.data.id);
                $('#name').val(res.data.name);
                $('#email').val(res.data.email);
                $('#phone').val(res.data.phone);
                $('#course').val(res.data.course);
                $('#studentEditModal').modal('show');
            }
        }
    });
});

