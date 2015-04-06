/**
 * Add tab changing
 **/
$('#tab li').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

/**
 * Add drag & drop behaviour
 **/
$(".draggable").draggable({helper: 'clone',snap : '.droppable'});
$(".droppable").droppable({
    drop: function (event, ui) {
        ui.draggable.clone().appendTo($(this)).draggable();
    }
});
