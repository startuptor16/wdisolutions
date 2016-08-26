$(document).ready(function () {
    //minimize chat on click
    $('.fa-minus').click(function(){
        $(this).closest('.top').siblings().slideUp();
    });

    //open chat on click
    $('.fa-plus').click(function(){
        $(this).closest('.top').siblings().slideDown();
    });

    //remove entry on click of li
    $('li').click(function(){
        $(this).remove();
    });

    //triggers post submit on enter key
    $('.blog').keyup(function(e){
        // enter key pressed 
        if(e.which === 13){
            //if textarea contains non-whitespace characters
            if($(this).val().match(/\S/)) {
                //pass value of target textarea and target to blogSubmit function
                blogSubmit($(this).val(), $(this));
            }
            //clear textarea
            $(this).val('');
        }
    });

    //regular submit with button
    $('.submit').click(function(){
        if($(this).val().match(/\S/)) {
            var blog = $(this).siblings('.blog');
            blogSubmit(blog.val(), $(this));
            blog.val('');
        }
    });

    //remove window on click
    $('.fa-times').click(function(){
        $(this).closest('.chatBox').remove();
    });
});

//function for appending html
function blogSubmit (input,post){
    var listItem = $("<li class='reply'>me: " + input + '</li>');
    post.parent().siblings('.content').find('ul').append(listItem);

    //rebind remove function to new list items
    listItem.click(function(){
        $(this).remove();
    });
}