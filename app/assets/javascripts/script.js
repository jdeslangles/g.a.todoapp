$(function() {

    // $(".sortable").html("Drag here!");

    $("#list ul").sortable({
      stop: function(event, ui) {
        to_do_item_id = ui.item.data('to_do_item_id')
        position = ui.item.index();
        $.post('/to_do_items/'+ to_do_item_id +'/change_position', {'position': position});
      }
    });

    var old_list, new_list, item;
    $('.sortable').sortable({
        start: function(event, ui) {
            item = ui.item;
            new_list = old_list = ui.item.parent().parent();
        },
       stop: function(event, ui) {
        to_do_item_id = ui.item.data('to_do_item_id')
        position = ui.item.index();
        $.post('/to_do_items/'+ to_do_item_id +'/change_position', {'position': position});
        $.post('to_do_items/' + to_do_item_id + 'change_list', {'new_list': new_list});
        },
        change: function(event, ui) {
            if(ui.sender) new_list = ui.placeholder.parent().parent();
        },
        connectWith: ".sortable"
    }).disableSelection();
});


// $('.sortable').disableSelection();

//     $('#list li').draggable({
//       appendTo: "body",
//       revert: "invalid",
//       cursor: "move",
//       helper: "clone"
//     });

//     $('#list ul').droppable({
//       activeClass: "ui-state-default",
//       hoverClass:"ui-state-hover",
//       accept:":not(.ui-sortable-helper)",
//       drop:function(event,ui){
//         $(this).find(".placeholder").remove();
//         $("<li></li>").text(ui.draggable.text()).appendTo(this); }
//       }).sortable({
//         items:"li:not(.placeholder)",
//         sort:function(){
//           $( this).removeClass("ui-state-default");
//         }
//       })
// });

