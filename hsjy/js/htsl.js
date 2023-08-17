class Action{
    constructor(parameter) {
        this.data = parameter;
        this._main_group = $('.main-group');

        this._add_html();
        this._add_event();
    }
    _add_html(){
        let html ='';
        for(let i=0; i<this.data.length; i++){
            let this_data = this.data[i];
            html += '<div class="item-group">';
            html +='    <div class="img-group">';
            html +='        <div class="page-one-title" style="background:'+this_data.title_bg+';">'+this_data.title+'</div>';
            html +='        <img src="'+this_data.img+'" alt="">';
            html +='    </div>';
            html +='  <div class="content">';
            html +='<div class="title">'+this_data.title+'</div>';
            html +='<div class="desc">'+this_data.desc+'</div>';
            html +='<a href="'+this_data.url+'" class="button-group">';
            html +='  点击进入';
            html +='</a>';
            html +='</div>';
            html +='</div>';
        }
        this._main_group.html(html);
    }

    _add_event(){
        $('.item-group').hover(function(){
            $(this).find('.img-group img').css('clip-path', 'circle(20% at 50% 80px)');
            $(this).find('.content').css({'opacity':1, 'top': '170px'});
            $(this).find('.page-one-title').css({'opacity':0})
        },function(){
            $(this).find('.img-group img').css('clip-path', 'circle(100% at 50% 80px)');
            $(this).find('.content').css({'opacity':0, 'top': '180px'});
            $(this).find('.page-one-title').css({'opacity':1})
        });
    }
}