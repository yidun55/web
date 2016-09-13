   /**
    * @file 搜索详情页日历选择
    * @param  {function} 日历选择function
    * @return {string} 返回时间
    */
    function changeTime(timeStr) {
        timeStr = timeStr.replace(/(年)/g, '-').replace(/( |月)/g, '');
        return timeStr;
    }
    function showyearbox(inputname) {

        $(inputname).click(function () {
            var $searchButton = $('#go-search');
            var input = $(this);
            var index = $(input).parents('dl').index();
            var $toggleSelected = $('.toggle-term').find('li:eq(' + index + ')');
            var startCateType = $(input).prev().attr('startCateType');
            var endCateType = $(input).prev().attr('startCateType');

            $(input).parent('div').before('<div class=\"menu_bg_layer\"></div>');
            $('.menu_bg_layer').height($(document).height() - 188);
            $('.menu_bg_layer').css({
                'width': $(document).width() - 160,
                'position': 'absolute',
                'left': '0',
                'top': '0',
                'z-index': '0'});

            $(input).parent('div').css('position', 'relative');

            var myDate = new Date();
            var y = myDate.getFullYear();
            var ymin = y - 45;
            var htm = '';
            htm = '<div class=\"showyearbox yearlist\">';
            htm += '<ul>';
            for (var i = y; i >= ymin; i--) {
                htm += '<li  title=\"' + i + '年\">' + i + '</li>';
            }
            htm += '<div class=\"clear\"></div>';
            htm += '</ul>';
            htm += '</div>';

            htm += '<div class=\"showyearbox monthlist\">';

            htm += '<ul>';
            for (i = 1; i <= 12; i++) {
                htm += '<li title=\"' + i + '月\">' + i + '月</li>';
            }
            htm += '<div class=\"clear\"></div>';
            htm += '</ul>';
            htm += '</div>';
            // $(input).blur();
            if ($('.showyearbox')) {
                $('.showyearbox').hide();
            }

            if ($(input).hasClass('endTimeShow')) {

            }
            if ($(input).parent('div').find('.showyearbox').html()) {
                $(input).parent('div').children('.showyearbox.yearlist').slideToggle('fast');
            }
            else {
                $(input).parent('div').append(htm);
                $(input).parent('div').children('.showyearbox.yearlist').slideToggle('fast');
            }
            //
            $(input).parent('div').children('.yearlist').find('li').unbind('click').click(function () {
                var $text = $(this).attr('title');

                $(input).parent('div').children('.monthlist').show();
                $(input).parent('div').children('.monthlist').find('li').unbind('click').click(function () {
                    $(input).prev().text($text + ' ' + $(this).attr('title'));
                    var startTimeText = $('span[startCateType="startTime"]').text();
                    var endTimeText = $('span[endCateType="endTime"]').text();
                    var newStart = startTimeText.replace(/(年)/g, '/').replace(/(月| )/g, '');
                    var newEnd = endTimeText.replace(/(年)/g, '/').replace(/(月| )/g, '');
                    newStart = newStart.split('/');
                    newEnd = newEnd.split('/');
                    var date1 = new Date(parseInt(newStart[0]), parseInt(newStart[1]) - 1, 0, 0, 0, 0);
                    var date2 = new Date(parseInt(newEnd[0]), parseInt(newEnd[1]) - 1, 0, 0, 0, 0);

                    var newText = $(input).prev().text();
                    if (date1.getTime() > date2.getTime()) {
                        var strYear = newText.substr(0, 4);
                        var strMonth = newText.substr(6, 2).replace(/月/, '');
                        if (strMonth === 1) {
                            strYear -= 1;
                            strMonth = 12;
                            if (strYear === 1969) {
                                strYear = 1970;
                                strMonth = 1;
                            }
                        }
                        else {
                            strMonth -= 1;
                        }
                        var prevnewText = strYear + '年 ' + strMonth + '月';

                        startTimeText = prevnewText;
                        endTimeText = newText;
                        $('span[startCateType="startTime"]').text(prevnewText);
                        $('span[endCateType="endTime"]').text(newText);

                    }
                    $('.menu_bg_layer').hide();

                    $(input).parent('div').find('.showyearbox').hide();
                    $('.condition-list').removeClass('hidden');

                    $toggleSelected.html('<p  cateType="time"><span class="startTime">'
                        + startTimeText + '</span><span>-</span><span class="endTime">'
                        + endTimeText + '</span></p>');

                  //  $searchButton.trigger('click');
                });


            });

            $('.menu_bg_layer').click(function () {
                $('.menu_bg_layer').hide();
                $(input).parent('div').css('position', '');
                $(input).parent('div').find('.showyearbox').hide();
            });


        });
    }
