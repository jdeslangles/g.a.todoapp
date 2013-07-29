// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(function() {
    $('.sortable').sortable();
    $('.sortable').disableSelection();

    $('#list li').draggable({
      appendTo: "body",
      revert: "invalid",
      cursor: "move",
      helper: "clone"
    });

    $('#list ul').droppable({
      activeClass: "ui-state-default",
      hoverClass:"ui-state-hover",
      accept:":not(.ui-sortable-helper)",
      drop:function(event,ui){
        $(this).find(".placeholder").remove();
        $("<li></li>").text(ui.draggable.text()).appendTo(this); }
      }).sortable({
        items:"li:not(.placeholder)",
        sort:function(){
          $( this).removeClass("ui-state-default");
    })

  })
});

