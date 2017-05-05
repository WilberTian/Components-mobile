require.config({
    paths: {
        jquery: 'vendor/jquery.min',
        text: 'vendor/text',
        async: 'node_modules/requirejs-plugins/src/async',
        ejs: 'node_modules/ejs/ejs.min',
        moment: 'node_modules/moment/min/moment.min',
        underscore: 'node_modules/underscore/underscore-min',
        baidumap: 'http://api.map.baidu.com/api?v=2.0&ak=F2SZlbGkd2LpoOuGCjrLGfWyLcVGPZ4u',
        bdidumapconvertor: 'http://developer.baidu.com/map/jsdemo/demo/convertor'
    }
});

require([
    'jquery',
    'components/list/List',
    'components/list/listItem/textListItem/TextListItem',
    'components/list/listItem/touchListItem/TouchListItem',
    'components/select/Select',
    'components/multiSelect/MultiSelect',
    'components/nav/Nav',
    'components/tab/Tab',
    'components/cell/Cell',
    'components/modal/Modal',
    'components/map/Map'
], function ($, List, TextListItem, TouchListItem, Select, MultiSelect, Nav, Tab, Cell, Modal, Map) {

    // TextList
    var level = ['初级', '中级', '高级'];

    var textListItemComponents = level.map(function(item){
        return new TextListItem({
            $el: $('<div class="C_ListItemWrapper"></div>'),
            model: {
                text: item
            }
        })
    });
    new List({
        $el: $('.text-list'),
        model: {
            listItems: textListItemComponents
        }
    });


    // TouchList
    var level = ['初级', '中级', '高级'];

    var touchListItemComponents = level.map(function(item){
        return new TouchListItem({
            $el: $('<div class="C_ListItemWrapper"></div>'),
            model: {
                text: item
            }
        })
    });
    new List({
        $el: $('.touch-list'),
        model: {
            listItems: touchListItemComponents
        }
    });


    // Select
    var cities = [{
        label: '北京',
        value: 1
    }, {
        label: '上海',
        value: 2
    }, {
        label: '广州',
        value: 3
    }];

    new Select({
        $el: $('.select'),
        model: {
            options: cities,
            selected: 1
        }
    });

    // MultiSelect
    new MultiSelect({
        $el: $('.multi-select'),
        model: {
            options: cities,
            selected: [1, 2]
        }
    });
    
    // Nav
    var navItems = [{
        label: '主页',
        value: 1,
        iconClass: 'fa fa-home'
    }, {
        label: '用户',
        value: 2,
        iconClass: 'fa fa-users'
    }, {
        label: '通讯录',
        value: 3,
        iconClass: 'fa fa-address-book-o'
    }, {
        label: '设置',
        value: 3,
        iconClass: 'fa fa-cogs'
    }];

    new Nav({
        $el: $('.bottom-nav'),
        model: {
            navItems: navItems
        }
    });

    // Tab
    var tabs = [{
        label: '歌单',
        value: '1'
    }, {
        label: '热门推荐',
        value: '2'
    }, {
        label: '排行榜',
        value: '3'
    }, {
        label: '新歌',
        value: '4'
    }];

    new Tab({
        $el: $('.tab'),
        model: {
            selected: 1,
            tabs: tabs
        }
    });

    // Cell
    var cellItems = [{
        label: '主页',
        value: 1,
        iconClass: 'fa fa-home'
    }, {
        label: '用户',
        value: 2,
        iconClass: 'fa fa-users'
    }, {
        label: '通讯录',
        value: 3,
        iconClass: 'fa fa-address-book-o'
    }, {
        label: '设置',
        value: 3,
        iconClass: 'fa fa-cogs'
    }, {
        label: '主页',
        value: 1,
        iconClass: 'fa fa-home'
    }, {
        label: '用户',
        value: 2,
        iconClass: 'fa fa-users'
    }, {
        label: '通讯录',
        value: 3,
        iconClass: 'fa fa-address-book-o'
    }, {
        label: '设置',
        value: 3,
        iconClass: 'fa fa-cogs'
    }];

    new Cell({
        $el: $('.cell'),
        model: {
            cellItems: cellItems
        }
    });


    // Modal
    $('.show-modal-btn').on('click', function() {
        var modal = new Modal({
            $el: $('.modal'),
            style: {
                '.modal-dialog': {
                    width: '280px'
                }
            },
            messages: {
                'MODAL_CONFIRM': function(data){
                    console.log('modal was confirmed')
                    modal.destory();
                }
            }
        });
    });

    // Map
    new Map({
        $el: $('.map')
    });
});
