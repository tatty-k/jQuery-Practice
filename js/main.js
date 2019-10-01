let $addSkill = $('#add-skill')


$addSkill.on('click', function(evt){
    let $input = $('#input').val()
    let rowTemplate = `<tr>
                        <td><button class="btn btn-danger">X</button></td>
                        <td>${$input}</td>
                    <tr>`
    $('#table').append(rowTemplate)
})
$('#table').on('click', 'button', function(evt){
    $(this).closest('tr').remove()
})
