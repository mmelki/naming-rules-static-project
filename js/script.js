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
$(".draggable").draggable({helper: 'clone', snap: '.droppable'});
$(".droppable").droppable({
    drop: function (event, ui) {

        alert(ui.draggable);
        ui.draggable.children(":first").clone().css("font-size","64px").appendTo($(this)).draggable();
    }
});
