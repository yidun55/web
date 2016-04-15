/**
 * @file 信用信息搜索、政府行政许可与行政处罚、站内文章 搜索文件
 * @author v_zhangming05@baidu.com
 */

define(
    function (require) {
        var common = require('./common');

        /**
         * 对象类型的map
         * @type {Object}
        */
        var objectMap = {
            '全部': '',
            '男': 1,
            '女': 2
        };
        /**
         * 信用记录的map
         * @type {Object}
         */
        var typeMap = {
            '全部': '',
            '优良记录': 2,
            '不良记录': 4,
            '失信记录': 8
        };
        /**
        * 双公示行政类型
        * @type {Object}
        */
        var dataTypeMap = {
            '行政处罚': 0,
            '行政许可': 1
        };

        var curSeniorText = '高级搜索';
        //  搜素类型
        var selectType = $('.seachInputWrap').find('li.active').attr('searchtype');
        //  搜索框
        var $keyword = $('#keyword');
        //  搜素按钮
        var $searchButton = $('#go-search');
        //  高级搜索
        var $seniorButton = $('#senior-search');
        // 是否是第一次加载
        var isFirst = true;
        // 高级搜索的选项框
        var $searchFilter = $('.creditsearch-filter');
        // 搜索项目的切换
        var searchList = $('.seach-title-list').find('li:lt(3)');
        // 更多 收起
        var toggleBtn = $('.toggle-button').find('span');
        /*globals  G_pageSum*/

        /*globals  wwwDomain*/
        function initDom() {
            toggleBtn.addClass('toggle-btn-down').removeClass('toggle-btn-up');
            $('#areaList').find('td:gt(9)').addClass('hidden');
            $('#sourceList').find('td:gt(7)').addClass('hidden');
            $('.media-list').html('');
            $('.article-media-list').addClass('hidden');
            $('#pagination').hide();
            $('#search-count').html('');
        }
        // 单选多选切换
        $('.radio_btn').click(function () {
            var $this = $(this);
            $this.siblings().removeClass('search_btn_active');
            $this.addClass('search_btn_active');
            //$searchButton.trigger('click');
        });
        $('.checkbox_btn').click(function () {
            var $this = $(this);
            var parent = $this.parents('table');
            $this.toggleClass('search_btn_active');
            if ($this.hasClass('search_btn_active')) {
                parent.prev().addClass('search_btn_active');
            }

            if (parent.find('td.search_btn_active').length === 0) {
                parent.prev().removeClass('search_btn_active');
            }
        });
        // 选择全部切换
        $('.checkbox_all').click(function () {
            var $this = $(this);
            var childList = $this.next().find('td');
            $this.toggleClass('checkbox_all_cancle');
            if ($this.hasClass('checkbox_all_cancle')) {
                childList.addClass('search_btn_active');
            }
            else {
                childList.removeClass('search_btn_active');
            }
        });
        // 更多收起切换
        $('.toggle-button').on('click', function () {
            var $this = $(this);
            $this.find('span').toggleClass('toggle-btn-up');
            var prevList = $this.prev('.toggle-content');

            if ($this.hasClass('area-button')) {
                prevList.find('td:gt(9)').toggleClass('hidden');
            }
            else if ($this.hasClass('source-button')) {
                prevList.find('td:gt(7)').toggleClass('hidden');
            }

        });


        // 高级搜索切换
        $seniorButton.click(function () {
            var $changeFilter = $('.creditsearch-filter').eq(0);
            if (curSeniorText === '高级搜索') {
                $changeFilter.removeClass('hidden');
                curSeniorText = '关闭高级搜索';
                $seniorButton.text(curSeniorText);
            }
            else if (curSeniorText === '关闭高级搜索') {
                $changeFilter.addClass('hidden');
                curSeniorText = '高级搜索';
                $seniorButton.text(curSeniorText);

            }
        });

        // 搜索项目切换
        searchList.click(function () {
            var $this = $(this);
            var thisIndex = $this.index();
            selectType = $this.attr('searchtype');

            selectChange(thisIndex);

            $searchButton.trigger('click');
        });

        function hashHander() {
            var page = common.getHashParam('page') || 1;
            var keyword = common.getHashParam('keyword');
            selectType = common.getHashParam('selectType') || '0';

        }

        /**
         * 重新绑定hashchange
         */
        function reBindHashChange(page) {

            common.unBindHashChange();
            location.hash = common.json2UrlData({
                keyword: $('#keyword').val(),
                selectType: selectType || '0',
                page: 1
            });
            var hashDataType = $('li[cateType="pub-type"].search_btn_active').attr('curvalue');
            var dataTypeValue = dataTypeMap[hashDataType];
            if (selectType === '1') {
                location.hash += '&dataType=' + dataTypeValue;
                location.hash += '&exact=1';
            }
        }

        function selectChange(num) {
            var $this = $('.thisimg li');
            var changeList = $('.seach-title-list li');
            $('.creditsearch-filter').addClass('hidden');
            // 信用信息
            if (num === 0) {
                $this.stop(false, false).animate({
                    'left': '35%'
                });
                $seniorButton.removeClass('hidden');
                $keyword.attr('placeholder', '请输入企业或者个人信息');
            }
            else {
                $seniorButton.addClass('hidden');
                curSeniorText = '高级搜索';
                $seniorButton.text(curSeniorText);
            }

            if (num === 1) {
                // 政府行政许可与行政处罚
                $('.thisimg li').stop(false, false).animate({
                    'left': '47%'
                });
                $('.creditsearch-filter').eq(1).removeClass('hidden');
                $keyword.attr('placeholder', '请输入企业或者个人信息');
            }
            else if (num === 2) {
                $('.thisimg li').stop(false, false).animate({
                    'left': '61%'
                });
                $keyword.attr('placeholder', '请输入文章关键词');
            }
            changeList.removeClass('active');
            changeList.eq(num).addClass('active');
        }

        $('.direction-tip').hover(
            function () {
                $('.direction-detail').eq(selectType).removeClass('hidden');
            },
            function () {

                $('.direction-detail ').eq(selectType).addClass('hidden');
            }

        );

        // 利用惰性判断当前是哪个搜索，选择相应的接口
        var getAjaxURL = function () {
            var ajaxUrl;
            if (!selectType) {
                selectType = '0';
            }
            if (selectType === '0') {
                ajaxUrl = '/channel_record';
            }
            else if (selectType === '1') {
                ajaxUrl = '/publicity_search';
            }
            else if (selectType === '2') {
                ajaxUrl = '/article_search/article_search_page';
            }
            return ajaxUrl;
        }

        /**
         * hash的处理函数
         * @param  {Object} hash 值
         */
        function hashHandler(hash) {
            var page = common.getHashParam('page') || 1;
            var keyword = common.getHashParam('keyword');
            selectType = common.getHashParam('selectType') || '0';
            if (selectType === '2') {
                $('.pagination').pagination('selectPage', page);

            }
            else if (selectType === '1') {
                if (keyword.length === 1) {
                    return false;
                }
                $('.pagination').pagination('selectPage', page);
            }
            else {
                if (keyword.length < 2) {
                    return false;
                }
                $('.pagination').pagination('selectPage', page);
            }
            paginationEvent(page);
        }

        var getPostData = function () {
            var params = {};
            var arrText = [];
            var sourceText = [];

            params.keyword = $.trim($('#keyword').val());

            if (selectType === '0') {
                var objectText = $('li[cateType="objType"].search_btn_active').attr('curvalue');
                var typeText = $('li[cateType="creditType"].search_btn_active').attr('curvalue');

                params.type = objectMap[objectText];
                params.object = typeMap[typeText];

                var $areaBoxList = $('#areaList').find('td');
                var $sourceBoxList = $('#sourceList').find('td');

                $areaBoxList.each(function (index, item) {
                    var $item = $(item);

                    if (!$item.hasClass('search_btn_active')) {
                        //alert("abc")
                        arrText.push($.trim($item.text()));
                    }
                });
                if (arrText.length === $areaBoxList.length) {
                    arrText = [];
                }
                params.areas = arrText;
                $sourceBoxList.each(function (index, item) {
                    var $item = $(item);
                    if (!$item.hasClass('search_btn_active')) {
                        sourceText.push($.trim($item.text()));
                    }
                });
                if (sourceText.length === $sourceBoxList.length) {
                    sourceText = [];
                }
                params.source = sourceText;
            }

            else if (selectType === '1') {
                var dataTypeText = $('li[cateType="pub-type"].search_btn_active').attr('curvalue');
                var areaCodeText = $('li[cateType="pub-area"].search_btn_active').attr('areaCode');
                params.dataType = dataTypeMap[dataTypeText];
                params.areaCode = areaCodeText;
                params.exact = 1;
            }

            return params;
        };

        function successHandler(data, page) {
            var tpl;
            var searchResult;
            var totalPageCount;
            if (selectType === '0') {
                tpl = $('#item-template').html();
                searchResult = data.result.results;
                totalPageCount = data.result.totalPageCount;

            }
            else if (selectType === '1') {
                tpl = $('#pub-item-template').html();
                searchResult = data.results;
                totalPageCount = data.totalPageCount
            }
            var html = $.template(tpl, {
                list: searchResult || []
            });
            if (!searchResult.length) {
                $('#search-count').html('暂未搜索到相关信息，请修改搜索条件重新查询。');
            }
            else {
                var newData = common.formatNumber(data.totalCount);
                $('#search-count').html('已为您匹配<span> ' + $.trim($('#keyword').val())
                    + ' </span>相关结果' + newData + '条，请点击名称查看详细信息。');
            }

            $('.media-list').html(html);

            // 分页
            var hashDataType = $('li[cateType="pub-type"].search_btn_active').attr('curvalue');
            var dataTypeValue = dataTypeMap[hashDataType];

            var hrefPrefix = null;

            if (totalPageCount  > 1) {
                $('#pagination').show();
                if (selectType === '1') {
                    hrefPrefix = '#keyword=' + $.trim($('#keyword').val())
                                + '&selectType=' + selectType
                                + '&dataType=' + dataTypeValue
                                + '&exact=1' + '&page=';
                }
                else {
                    hrefPrefix = '#keyword=' + $.trim($('#keyword').val())
                                        + '&selectType=' + selectType + '&page=';
                }
                $('#pagination').pagination({
                    hrefTextPrefix: hrefPrefix,
                    pages: totalPageCount || 0,
                    onPageClick: function () {}

                }).pagination('selectPage', page);
                common.bindHashChange(hashHandler);
            }

        }

        function paginationEvent(pageNumber) {
            var postData = getPostData();
            var sendURL = getAjaxURL();
            if (isFirst) {
                //isFirst = false;
                isFirst = false;
                // common.bindHashChange(hashHandler);
            }
            postData.page = pageNumber;
            postData = common.serializeData(postData);

            jQuery.ajax({
                async: true,
                url: wwwDomain + sendURL + '?t=' + new Date().getTime(),
                type: 'POST',
                dataType: 'text',
                data: postData,
                complete: function (jqXHR, status) {
                    var success = (status === 'success');
                    if (!success) {
                        return;
                    }

                    var data = jqXHR.responseText;
                    if ($.trim(data) === '' || $.trim(data) === '[]') {
                        // console.log("无数据");
                        return;
                    }


                    var json = $.parseJSON(data);
                    //alert(json['a'])
                    // createCountUp(json['total']);
                    createCountUp(1000000);
                    successHandler(json, pageNumber);


                }

            });
        }

        $searchButton.click(function (event, pageNumber) {
            initDom();
            if (!isFirst) {
                reBindHashChange(pageNumber);
            }

            if ($.trim($('#keyword').val()).length < 2) {
                $('#search-count').html('<span class="red-tip">搜索关键词不得少于２个字符</span>');

                return false;
            }

            paginationEvent(1);

            // common.bindHashChange(hashHandler);
        })

        $('#keyword').keydown(function (e) {
            if (e.keyCode === 13) {
                $searchButton.trigger('click');
            }
        });

        var exports = {};
        exports.start = function () {
            common.start();
            initDom();

            selectType = common.getHashParam('selectType');
            var dataType = Math.abs(common.getHashParam('dataType') - 1);
            var hashSelectType = +selectType;
            if (hashSelectType === 1) {
                $('#keyword').val(common.getHashParam('keyword'));
                $('li[cateType="pub-type"]').removeClass('search_btn_active');
                $('li[cateType="pub-type"]').eq(dataType).addClass('search_btn_active');
                $searchButton.trigger('click');
                selectChange(hashSelectType);
            }
            else {
                if (common.getHashParam('keyword')) {
                    $('#keyword').val(common.getHashParam('keyword'));
                    $searchButton.trigger('click');
                    selectChange(hashSelectType);
                }
            }

        }
        return exports;
    }
);


