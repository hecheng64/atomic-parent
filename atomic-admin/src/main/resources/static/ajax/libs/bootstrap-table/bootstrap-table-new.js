/**
 * bootstrap-table - An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3).
 *
 * @version v1.14.2
 * @homepage https://bootstrap-table.com
 * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
 * @license MIT
 */

(function(e, t) {
    if ('function' == typeof define && define.amd) define([], t);
    else if ('undefined' != typeof exports) t();
    else {
        t(),
            e.bootstrapTable = {
                exports: {}
            }.exports
    }
})(this,
    function() {
        'use strict';
        function e(e, t) {
            if (! (e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function t(e) {
            if (Array.isArray(e)) {
                for (var t = 0,
                         o = Array(e.length); t < e.length; t++) o[t] = e[t];
                return o
            }
            return Array.from(e)
        }
        var o = function() {
                function e(e, t) {
                    for (var o, a = 0; a < t.length; a++) o = t[a],
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                    'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
                }
                return function(t, o, a) {
                    return o && e(t.prototype, o),
                    a && e(t, a),
                        t
                }
            } (),
            a = function() {
                function e(e, t) {
                    var o = [],
                        a = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var s, l = e[Symbol.iterator](); ! (a = (s = l.next()).done) && (o.push(s.value), !(t && o.length === t)); a = !0);
                    } catch(e) {
                        i = !0,
                            n = e
                    } finally {
                        try { ! a && l['return'] && l['return']()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return o
                }
                return function(t, o) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, o);
                    throw new TypeError('Invalid attempt to destructure non-iterable instance')
                }
            } (),
            n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol': typeof e
                }; (function(s) {
            var i = 4;
            try {
                var g = s.fn.dropdown.Constructor.VERSION;
                g !== void 0 && (i = parseInt(g, 10))
            } catch(t) {}
            var l = {
                    3 : {
                        theme: 'bootstrap3',
                        iconsPrefix: 'glyphicon',
                        icons: {
                            paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
                            paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
                            refresh: 'glyphicon-refresh icon-refresh',
                            toggleOff: 'glyphicon-list-alt icon-list-alt',
                            toggleOn: 'glyphicon-list-alt icon-list-alt',
                            columns: 'glyphicon-th icon-th',
                            detailOpen: 'glyphicon-plus icon-plus',
                            detailClose: 'glyphicon-minus icon-minus',
                            fullscreen: 'glyphicon-fullscreen'
                        },
                        classes: {
                            buttonsPrefix: 'btn',
                            buttons: 'default',
                            buttonsGroup: 'btn-group',
                            buttonsDropdown: 'btn-group',
                            pull: 'pull',
                            inputGroup: '',
                            input: 'form-control',
                            paginationDropdown: 'btn-group dropdown',
                            dropup: 'dropup',
                            dropdownActive: 'active',
                            paginationActive: 'active'
                        },
                        html: {
                            toobarDropdow: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
                            toobarDropdowItem: '<li role="menuitem"><label>%s</label></li>',
                            pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
                            pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
                            dropdownCaret: '<span class="caret"></span>',
                            pagination: ['<ul class="pagination%s">', '</ul>'],
                            paginationItem: '<li class="page-item%s"><a class="page-link" href="#">%s</a></li>',
                            icon: '<i class="%s %s"></i>'
                        }
                    },
                    4 : {
                        theme: 'bootstrap4',
                        iconsPrefix: 'fa',
                        icons: {
                            paginationSwitchDown: 'fa-caret-square-down',
                            paginationSwitchUp: 'fa-caret-square-up',
                            refresh: 'fa-sync',
                            toggleOff: 'fa-toggle-off',
                            toggleOn: 'fa-toggle-on',
                            columns: 'fa-th-list',
                            fullscreen: 'fa-arrows-alt',
                            detailOpen: 'fa-plus',
                            detailClose: 'fa-minus'
                        },
                        classes: {
                            buttonsPrefix: 'btn',
                            buttons: 'secondary',
                            buttonsGroup: 'btn-group',
                            buttonsDropdown: 'btn-group',
                            pull: 'float',
                            inputGroup: '',
                            input: 'form-control',
                            paginationDropdown: 'btn-group dropdown',
                            dropup: 'dropup',
                            dropdownActive: 'active',
                            paginationActive: 'active'
                        },
                        html: {
                            toobarDropdow: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
                            toobarDropdowItem: '<label class="dropdown-item">%s</label>',
                            pageDropdown: ['<div class="dropdown-menu">', '</div>'],
                            pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
                            dropdownCaret: '<span class="caret"></span>',
                            pagination: ['<ul class="pagination%s">', '</ul>'],
                            paginationItem: '<li class="page-item%s"><a class="page-link" href="#">%s</a></li>',
                            icon: '<i class="%s %s"></i>'
                        }
                    }
                } [i],
                r = {
                    bootstrapVersion: i,
                    sprintf: function(e) {
                        for (var t = arguments.length,
                                 o = Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) o[a - 1] = arguments[a];
                        var n = !0,
                            s = 0,
                            i = e.replace(/%s/g,
                                function() {
                                    var e = o[s++];
                                    return 'undefined' == typeof e ? (n = !1, '') : e
                                });
                        return n ? i: ''
                    },
                    isEmptyObject: function() {
                        var e = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {};
                        return 0 ===
                            function(e) {
                                return Object.keys(e).map(function(t) {
                                    return [t, e[t]]
                                })
                            } (e).length && e.constructor === Object
                    },
                    isNumeric: function(e) {
                        return ! isNaN(parseFloat(e)) && isFinite(e)
                    },
                    getFieldTitle: function(e, t) {
                        for (var o = e,
                                 a = Array.isArray(o), i = 0, _iterator = a ? o: o[Symbol.iterator]();;) {
                            var n;
                            if (a) {
                                if (i >= o.length) break;
                                n = o[i++]
                            } else {
                                if (i = o.next(), i.done) break;
                                n = i.value
                            }
                            var s = n;
                            if (s.field === t) return s.title
                        }
                        return ''
                    },
                    setFieldIndex: function(e) {
                        for (var t = 0,
                                 o = [], a = e[0], n = Array.isArray(a), s = 0, _iterator2 = n ? a: a[Symbol.iterator]();;) {
                            var l;
                            if (n) {
                                if (s >= a.length) break;
                                l = a[s++]
                            } else {
                                if (s = a.next(), s.done) break;
                                l = s.value
                            }
                            var d = l;
                            t += d.colspan || 1
                        }
                        for (var m = 0; m < e.length; m++) {
                            o[m] = [];
                            for (var i = 0; i < t; i++) o[m][i] = !1
                        }
                        for (var y = 0; y < e.length; y++) for (var c = e[y], p = Array.isArray(c), h = 0, _iterator3 = p ? c: c[Symbol.iterator]();;) {
                            var g;
                            if (p) {
                                if (h >= c.length) break;
                                g = c[h++]
                            } else {
                                if (h = c.next(), h.done) break;
                                g = h.value
                            }
                            var u = g,
                                r = u.rowspan || 1,
                                f = u.colspan || 1,
                                b = o[y].indexOf(!1);
                            1 === f && (u.fieldIndex = b, 'undefined' == typeof u.field && (u.field = b));
                            for (var w = 0; w < r; w++) o[y + w][b] = !0;
                            for (var k = 0; k < f; k++) o[y][b + k] = !0
                        }
                    },
                    getScrollBarWidth: function() {
                        if (this.cachedWidth === void 0) {
                            var e = s('<div/>').addClass('fixed-table-scroll-inner'),
                                t = s('<div/>').addClass('fixed-table-scroll-outer');
                            t.append(e),
                                s('body').append(t);
                            var o = e[0].offsetWidth;
                            t.css('overflow', 'scroll');
                            var a = e[0].offsetWidth;
                            o === a && (a = t[0].clientWidth),
                                t.remove(),
                                this.cachedWidth = o - a
                        }
                        return this.cachedWidth
                    },
                    calculateObjectValue: function(e, o, a, i) {
                        var s = o;
                        if ('string' == typeof o) {
                            var h = o.split('.');
                            if (1 < h.length) {
                                s = window;
                                for (var l = h,
                                         r = Array.isArray(l), d = 0, _iterator4 = r ? l: l[Symbol.iterator]();;) {
                                    var c;
                                    if (r) {
                                        if (d >= l.length) break;
                                        c = l[d++]
                                    } else {
                                        if (d = l.next(), d.done) break;
                                        c = d.value
                                    }
                                    var p = c;
                                    s = s[p]
                                }
                            } else s = window[o]
                        }
                        return null !== s && 'object' === ('undefined' == typeof s ? 'undefined': n(s)) ? s: 'function' == typeof s ? s.apply(e, a || []) : !s && 'string' == typeof o && this.sprintf.apply(this, [o].concat(t(a))) ? this.sprintf.apply(this, [o].concat(t(a))) : i
                    },
                    compareObjects: function(e, t, o) {
                        var a = Object.keys(e),
                            i = Object.keys(t);
                        if (o && a.length !== i.length) return ! 1;
                        for (var n = a,
                                 s = Array.isArray(n), l = 0, _iterator5 = s ? n: n[Symbol.iterator]();;) {
                            var r;
                            if (s) {
                                if (l >= n.length) break;
                                r = n[l++]
                            } else {
                                if (l = n.next(), l.done) break;
                                r = l.value
                            }
                            var d = r;
                            if ( - 1 !== i.indexOf(d) && e[d] !== t[d]) return ! 1
                        }
                        return ! 0
                    },
                    escapeHTML: function(e) {
                        return 'string' == typeof e ? e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/`/g, '&#x60;') : e
                    },
                    getRealDataAttr: function(e) {
                        for (var t = function(e) {
                            return Object.keys(e).map(function(t) {
                                return [t, e[t]]
                            })
                        } (e), o = Array.isArray(t), i = 0, _iterator6 = o ? t: t[Symbol.iterator]();;) {
                            var n;
                            if (o) {
                                if (i >= t.length) break;
                                n = t[i++]
                            } else {
                                if (i = t.next(), i.done) break;
                                n = i.value
                            }
                            var s = n,
                                l = a(s, 2),
                                r = l[0],
                                d = l[1],
                                c = r.split(/(?=[A-Z])/).join('-').toLowerCase();
                            c !== r && (e[c] = d, delete e[r])
                        }
                        return e
                    },
                    getItemField: function(e, t, o) {
                        var a = e;
                        if ('string' != typeof t || e.hasOwnProperty(t)) return o ? this.escapeHTML(e[t]) : e[t];
                        for (var i = t.split('.'), n = i, s = Array.isArray(n), l = 0, _iterator7 = s ? n: n[Symbol.iterator]();;) {
                            var r;
                            if (s) {
                                if (l >= n.length) break;
                                r = n[l++]
                            } else {
                                if (l = n.next(), l.done) break;
                                r = l.value
                            }
                            var d = r;
                            a = a && a[d]
                        }
                        return o ? this.escapeHTML(a) : a
                    },
                    isIEBrowser: function() {
                        return - 1 !== navigator.userAgent.indexOf('MSIE ') || /Trident.*rv:11\./.test(navigator.userAgent)
                    },
                    findIndex: function(e, t) {
                        for (var o = e,
                                 a = Array.isArray(o), i = 0, _iterator8 = a ? o: o[Symbol.iterator]();;) {
                            var n;
                            if (a) {
                                if (i >= o.length) break;
                                n = o[i++]
                            } else {
                                if (i = o.next(), i.done) break;
                                n = i.value
                            }
                            var s = n;
                            if (JSON.stringify(s) === JSON.stringify(t)) return e.indexOf(s)
                        }
                        return - 1
                    }
                },
                d = {
                    height: void 0,
                    classes: 'table table-bordered table-hover',
                    theadClasses: '',
                    rowStyle: function() {
                        return {}
                    },
                    rowAttributes: function() {
                        return {}
                    },
                    undefinedText: '-',
                    locale: void 0,
                    sortable: !0,
                    sortClass: void 0,
                    silentSort: !0,
                    sortName: void 0,
                    sortOrder: 'asc',
                    sortStable: !1,
                    rememberOrder: !1,
                    customSort: void 0,
                    columns: [[]],
                    data: [],
                    url: void 0,
                    method: 'get',
                    cache: !0,
                    contentType: 'application/json',
                    dataType: 'json',
                    ajax: void 0,
                    ajaxOptions: {},
                    queryParams: function(e) {
                        return e
                    },
                    queryParamsType: 'limit',
                    responseHandler: function(e) {
                        return e
                    },
                    totalField: 'total',
                    dataField: 'rows',
                    pagination: !1,
                    onlyInfoPagination: !1,
                    paginationLoop: !0,
                    sidePagination: 'client',
                    totalRows: 0,
                    pageNumber: 1,
                    pageSize: 10,
                    pageList: [10, 25, 50, 100],
                    paginationHAlign: 'right',
                    paginationVAlign: 'bottom',
                    paginationDetailHAlign: 'left',
                    paginationPreText: '&lsaquo;',
                    paginationNextText: '&rsaquo;',
                    paginationSuccessivelySize: 5,
                    paginationPagesBySide: 1,
                    paginationUseIntermediate: !1,
                    search: !1,
                    searchOnEnterKey: !1,
                    strictSearch: !1,
                    trimOnSearch: !0,
                    searchAlign: 'right',
                    searchTimeOut: 500,
                    searchText: '',
                    customSearch: void 0,
                    showHeader: !0,
                    showFooter: !1,
                    footerStyle: function() {
                        return {}
                    },
                    showColumns: !1,
                    minimumCountColumns: 1,
                    showPaginationSwitch: !1,
                    showRefresh: !1,
                    showToggle: !1,
                    showFullscreen: !1,
                    smartDisplay: !0,
                    escape: !1,
                    idField: void 0,
                    selectItemName: 'btSelectItem',
                    clickToSelect: !1,
                    ignoreClickToSelectOn: function(e) {
                        var t = e.tagName;
                        return - 1 !== ['A', 'BUTTON'].indexOf(t)
                    },
                    singleSelect: !1,
                    checkboxHeader: !0,
                    maintainSelected: !1,
                    uniqueId: void 0,
                    cardView: !1,
                    detailView: !1,
                    detailFormatter: function() {
                        return ''
                    },
                    detailFilter: function() {
                        return ! 0
                    },
                    toolbar: void 0,
                    toolbarAlign: 'left',
                    buttonsToolbar: void 0,
                    buttonsAlign: 'right',
                    buttonsPrefix: l.classes.buttonsPrefix,
                    buttonsClass: l.classes.buttons,
                    icons: l.icons,
                    iconSize: void 0,
                    iconsPrefix: l.iconsPrefix,
                    onAll: function() {
                        return ! 1
                    },
                    onClickCell: function() {
                        return ! 1
                    },
                    onDblClickCell: function() {
                        return ! 1
                    },
                    onClickRow: function() {
                        return ! 1
                    },
                    onDblClickRow: function() {
                        return ! 1
                    },
                    onSort: function() {
                        return ! 1
                    },
                    onCheck: function() {
                        return ! 1
                    },
                    onUncheck: function() {
                        return ! 1
                    },
                    onCheckAll: function() {
                        return ! 1
                    },
                    onUncheckAll: function() {
                        return ! 1
                    },
                    onCheckSome: function() {
                        return ! 1
                    },
                    onUncheckSome: function() {
                        return ! 1
                    },
                    onLoadSuccess: function() {
                        return ! 1
                    },
                    onLoadError: function() {
                        return ! 1
                    },
                    onColumnSwitch: function() {
                        return ! 1
                    },
                    onPageChange: function() {
                        return ! 1
                    },
                    onSearch: function() {
                        return ! 1
                    },
                    onToggle: function() {
                        return ! 1
                    },
                    onPreBody: function() {
                        return ! 1
                    },
                    onPostBody: function() {
                        return ! 1
                    },
                    onPostHeader: function() {
                        return ! 1
                    },
                    onExpandRow: function() {
                        return ! 1
                    },
                    onCollapseRow: function() {
                        return ! 1
                    },
                    onRefreshOptions: function() {
                        return ! 1
                    },
                    onRefresh: function() {
                        return ! 1
                    },
                    onResetView: function() {
                        return ! 1
                    },
                    onScrollBody: function() {
                        return ! 1
                    }
                },
                c = {};
            c['en-US'] = c.en = {
                formatLoadingMessage: function() {
                    return 'Loading, please wait'
                },
                formatRecordsPerPage: function(e) {
                    return e + ' rows per page'
                },
                formatShowingRows: function(e, t, o) {
                    return 'Showing ' + e + ' to ' + t + ' of ' + o + ' rows'
                },
                formatDetailPagination: function(e) {
                    return 'Showing ' + e + ' rows'
                },
                formatSearch: function() {
                    return 'Search'
                },
                formatNoMatches: function() {
                    return 'No matching records found'
                },
                formatPaginationSwitch: function() {
                    return 'Hide/Show pagination'
                },
                formatRefresh: function() {
                    return 'Refresh'
                },
                formatToggle: function() {
                    return 'Toggle'
                },
                formatColumns: function() {
                    return 'Columns'
                },
                formatFullscreen: function() {
                    return 'Fullscreen'
                },
                formatAllRows: function() {
                    return 'All'
                }
            },
                s.extend(d, c['en-US']);
            var p = function() {
                function t(o, a) {
                    e(this, t),
                        this.options = a,
                        this.$el = s(o),
                        this.$el_ = this.$el.clone(),
                        this.timeoutId_ = 0,
                        this.timeoutFooter_ = 0,
                        this.init()
                }
                return o(t, [{
                    key: 'init',
                    value: function() {
                        this.initConstants(),
                            this.initLocale(),
                            this.initContainer(),
                            this.initTable(),
                            this.initHeader(),
                            this.initData(),
                            this.initHiddenRows(),
                            this.initFooter(),
                            this.initToolbar(),
                            this.initPagination(),
                            this.initBody(),
                            this.initSearchText(),
                            this.initServer()
                    }
                },
                    {
                        key: 'initConstants',
                        value: function() {
                            var e = this.options;
                            this.constants = l;
                            var t = e.buttonsPrefix ? e.buttonsPrefix + '-': '';
                            this.constants.buttonsClass = [e.buttonsPrefix, t + e.buttonsClass, r.sprintf(t + '%s', e.iconSize)].join(' ').trim()
                        }
                    },
                    {
                        key: 'initLocale',
                        value: function() {
                            if (this.options.locale) {
                                var e = s.fn.bootstrapTable.locales,
                                    t = this.options.locale.split(/-|_/);
                                t[0] = t[0].toLowerCase(),
                                t[1] && (t[1] = t[1].toUpperCase()),
                                    e[this.options.locale] ? s.extend(this.options, e[this.options.locale]) : e[t.join('-')] ? s.extend(this.options, e[t.join('-')]) : e[t[0]] && s.extend(this.options, e[t[0]])
                            }
                        }
                    },
                    {
                        key: 'initContainer',
                        value: function() {
                            var e = -1 === ['top', 'both'].indexOf(this.options.paginationVAlign) ? '': '<div class="fixed-table-pagination clearfix"></div>',
                                t = -1 === ['bottom', 'both'].indexOf(this.options.paginationVAlign) ? '': '<div class="fixed-table-pagination"></div>';
                            this.$container = s('\n        <div class="bootstrap-table">\n        <div class="fixed-table-toolbar"></div>\n        ' + e + '\n        <div class="fixed-table-container">\n        <div class="fixed-table-header"><table></table></div>\n        <div class="fixed-table-body">\n        <div class="fixed-table-loading">\n        <span class="loading-wrap">\n        <span class="loading-text">' + this.options.formatLoadingMessage() + '</span>\n        <span class="animation-wrap"><span class="animation-dot"></span></span>\n        </span>\n        </div>\n        </div>\n        <div class="fixed-table-footer"><table><thead><tr></tr></thead></table></div>\n        </div>\n        ' + t + '\n        </div>\n      '),
                                this.$container.insertAfter(this.$el),
                                this.$tableContainer = this.$container.find('.fixed-table-container'),
                                this.$tableHeader = this.$container.find('.fixed-table-header'),
                                this.$tableBody = this.$container.find('.fixed-table-body'),
                                this.$tableLoading = this.$container.find('.fixed-table-loading'),
                                this.$tableFooter = this.$container.find('.fixed-table-footer'),
                                this.$toolbar = this.options.buttonsToolbar ? s('body').find(this.options.buttonsToolbar) : this.$container.find('.fixed-table-toolbar'),
                                this.$pagination = this.$container.find('.fixed-table-pagination'),
                                this.$tableBody.append(this.$el),
                                this.$container.after('<div class="clearfix"></div>'),
                                this.$el.addClass(this.options.classes),
                                this.$tableLoading.addClass(this.options.classes),
                            this.options.height && (this.$tableContainer.addClass('fixed-height'), this.options.showFooter && this.$tableContainer.addClass('has-footer'), -1 !== this.options.classes.split(' ').indexOf('table-bordered') && (this.$tableBody.append('<div class="fixed-table-border"></div>'), this.$tableBorder = this.$tableBody.find('.fixed-table-border'), this.$tableLoading.addClass('fixed-table-border')))
                        }
                    },
                    {
                        key: 'initTable',
                        value: function() {
                            var e = this,
                                o = [],
                                a = [];
                            if (this.$header = this.$el.find('>thead'), this.$header.length ? this.options.theadClasses && this.$header.addClass(this.options.theadClasses) : this.$header = s('<thead class="' + this.options.theadClasses + '"></thead>').appendTo(this.$el), this.$header.find('tr').each(function(e, t) {
                                var a = [];
                                s(t).find('th').each(function(e, t) {
                                    'undefined' != typeof s(t).data('field') && s(t).data('field', '' + s(t).data('field')),
                                        a.push(s.extend({},
                                            {
                                                title: s(t).html(),
                                                class: s(t).attr('class'),
                                                titleTooltip: s(t).attr('title'),
                                                rowspan: s(t).attr('rowspan') ? +s(t).attr('rowspan') : void 0,
                                                colspan: s(t).attr('colspan') ? +s(t).attr('colspan') : void 0
                                            },
                                            s(t).data()))
                                }),
                                    o.push(a)
                            }), Array.isArray(this.options.columns[0]) || (this.options.columns = [this.options.columns]), this.options.columns = s.extend(!0, [], o, this.options.columns), this.columns = [], this.fieldsColumnsIndex = [], r.setFieldIndex(this.options.columns), this.options.columns.forEach(function(o, a) {
                                o.forEach(function(o, i) {
                                    var n = s.extend({},
                                        t.COLUMN_DEFAULTS, o);
                                    'undefined' != typeof n.fieldIndex && (e.columns[n.fieldIndex] = n, e.fieldsColumnsIndex[n.field] = n.fieldIndex),
                                        e.options.columns[a][i] = n
                                })
                            }), !this.options.data.length) {
                                var i = [];
                                this.$el.find('>tbody>tr').each(function(t, o) {
                                    var n = {};
                                    n._id = s(o).attr('id'),
                                        n._class = s(o).attr('class'),
                                        n._data = r.getRealDataAttr(s(o).data()),
                                        s(o).find('>td').each(function(o, a) {
                                            for (var l = +s(a).attr('colspan') || 1, d = +s(a).attr('rowspan') || 1, c = o; i[t] && i[t][c]; c++);
                                            for (var h = c; h < c + l; h++) for (var g = t; g < t + d; g++) i[g] || (i[g] = []),
                                                i[g][h] = !0;
                                            var p = e.columns[c].field;
                                            n[p] = s(a).html().trim(),
                                                n['_' + p + '_id'] = s(a).attr('id'),
                                                n['_' + p + '_class'] = s(a).attr('class'),
                                                n['_' + p + '_rowspan'] = s(a).attr('rowspan'),
                                                n['_' + p + '_colspan'] = s(a).attr('colspan'),
                                                n['_' + p + '_title'] = s(a).attr('title'),
                                                n['_' + p + '_data'] = r.getRealDataAttr(s(a).data())
                                        }),
                                        a.push(n)
                                }),
                                    this.options.data = a,
                                a.length && (this.fromHtml = !0)
                            }
                        }
                    },
                    {
                        key: 'initHeader',
                        value: function() {
                            var t = this,
                                e = {},
                                o = [];
                            this.header = {
                                fields: [],
                                styles: [],
                                classes: [],
                                formatters: [],
                                events: [],
                                sorters: [],
                                sortNames: [],
                                cellStyles: [],
                                searchables: []
                            },
                                this.options.columns.forEach(function(a, n) {
                                    o.push('<tr>'),
                                    0 === n && !t.options.cardView && t.options.detailView && o.push('<th class="detail" rowspan="' + t.options.columns.length + '">\n            <div class="fht-cell"></div>\n            </th>\n          '),
                                        a.forEach(function(a, i) {
                                            var s = '',
                                                l = '',
                                                d = '',
                                                c = '',
                                                p = r.sprintf(' class="%s"', a['class']),
                                                h = 'px',
                                                g = a.width;
                                            if (void 0 === a.width || t.options.cardView || 'string' != typeof a.width || -1 === a.width.indexOf('%') || (h = '%'), a.width && 'string' == typeof a.width && (g = a.width.replace('%', '').replace('px', '')), l = r.sprintf('text-align: %s; ', a.halign ? a.halign: a.align), d = r.sprintf('text-align: %s; ', a.align), c = r.sprintf('vertical-align: %s; ', a.valign), c += r.sprintf('width: %s; ', (a.checkbox || a.radio) && !g ? a.showSelectTitle ? void 0 : '36px': g ? g + h: void 0), 'undefined' != typeof a.fieldIndex) {
                                                if (t.header.fields[a.fieldIndex] = a.field, t.header.styles[a.fieldIndex] = d + c, t.header.classes[a.fieldIndex] = p, t.header.formatters[a.fieldIndex] = a.formatter, t.header.events[a.fieldIndex] = a.events, t.header.sorters[a.fieldIndex] = a.sorter, t.header.sortNames[a.fieldIndex] = a.sortName, t.header.cellStyles[a.fieldIndex] = a.cellStyle, t.header.searchables[a.fieldIndex] = a.searchable, !a.visible) return;
                                                if (t.options.cardView && !a.cardVisible) return;
                                                e[a.field] = a
                                            }
                                            o.push('<th' + r.sprintf(' title="%s"', a.titleTooltip), a.checkbox || a.radio ? r.sprintf(' class="bs-checkbox %s"', a['class'] || '') : p, r.sprintf(' style="%s"', l + c), r.sprintf(' rowspan="%s"', a.rowspan), r.sprintf(' colspan="%s"', a.colspan), r.sprintf(' data-field="%s"', a.field), 0 === i && 0 < n ? ' data-not-first-th': '', '>'),
                                                o.push(r.sprintf('<div class="th-inner %s">', t.options.sortable && a.sortable ? 'sortable both': '')),
                                                s = t.options.escape ? r.escapeHTML(a.title) : a.title;
                                            var u = s;
                                            a.checkbox && (s = '', !t.options.singleSelect && t.options.checkboxHeader && (s = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>'), t.header.stateField = a.field),
                                            a.radio && (s = '', t.header.stateField = a.field, t.options.singleSelect = !0),
                                            !s && a.showSelectTitle && (s += u),
                                                o.push(s),
                                                o.push('</div>'),
                                                o.push('<div class="fht-cell"></div>'),
                                                o.push('</div>'),
                                                o.push('</th>')
                                        }),
                                        o.push('</tr>')
                                }),
                                this.$header.html(o.join('')),
                                this.$header.find('th[data-field]').each(function(t, o) {
                                    s(o).data(e[s(o).data('field')])
                                }),
                                this.$container.off('click', '.th-inner').on('click', '.th-inner',
                                    function(o) {
                                        var e = s(o.currentTarget);
                                        return t.options.detailView && !e.parent().hasClass('bs-checkbox') && e.closest('.bootstrap-table')[0] !== t.$container[0] ? !1 : void(t.options.sortable && e.parent().data().sortable && t.onSort(o))
                                    }),
                                this.$header.children().children().off('keypress').on('keypress',
                                    function(o) {
                                        if (t.options.sortable && s(o.currentTarget).data().sortable) {
                                            var e = o.keyCode || o.which;
                                            13 === e && t.onSort(o)
                                        }
                                    }),
                                s(window).off('resize.bootstrap-table'),
                                !this.options.showHeader || this.options.cardView ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css('top', 0)) : (this.$header.show(), this.$tableHeader.show(), this.$tableLoading.css('top', this.$header.outerHeight() + 1), this.getCaret(), s(window).on('resize.bootstrap-table',
                                    function(o) {
                                        return t.resetWidth(o)
                                    })),
                                this.$selectAll = this.$header.find('[name="btSelectAll"]'),
                                this.$selectAll.off('click').on('click',
                                    function(e) {
                                        var o = e.currentTarget,
                                            a = s(o).prop('checked');
                                        t[a ? 'checkAll': 'uncheckAll'](),
                                            t.updateSelected()
                                    })
                        }
                    },
                    {
                        key: 'initFooter',
                        value: function() { ! this.options.showFooter || this.options.cardView ? this.$tableFooter.hide() : this.$tableFooter.show()
                        }
                    },
                    {
                        key: 'initData',
                        value: function(e, t) {
                            this.options.data = 'append' === t ? this.options.data.concat(e) : 'prepend' === t ? [].concat(e).concat(this.options.data) : e || this.options.data,
                                this.data = this.options.data,
                            'server' === this.options.sidePagination || this.initSort()
                        }
                    },
                    {
                        key: 'initSort',
                        value: function() {
                            var e = this,
                                t = this.options.sortName,
                                o = 'desc' === this.options.sortOrder ? -1 : 1,
                                i = this.header.fields.indexOf(this.options.sortName),
                                a = 0; - 1 !== i && (this.options.sortStable && this.data.forEach(function(e, t) {
                                e.hasOwnProperty('_position') || (e._position = t)
                            }), this.options.customSort ? r.calculateObjectValue(this.options, this.options.customSort, [this.options.sortName, this.options.sortOrder, this.data]) : this.data.sort(function(n, a) {
                                e.header.sortNames[i] && (t = e.header.sortNames[i]);
                                var s = r.getItemField(n, t, e.options.escape),
                                    l = r.getItemField(a, t, e.options.escape),
                                    d = r.calculateObjectValue(e.header, e.header.sorters[i], [s, l, n, a]);
                                return void 0 === d ? ((void 0 === s || null === s) && (s = ''), (void 0 === l || null === l) && (l = ''), e.options.sortStable && s === l && (s = n._position, l = a._position), r.isNumeric(s) && r.isNumeric(l)) ? (s = parseFloat(s), l = parseFloat(l), s < l ? -1 * o: s > l ? o: 0) : s === l ? 0 : ('string' != typeof s && (s = s.toString()), -1 === s.localeCompare(l) ? -1 * o: o) : e.options.sortStable && 0 === d ? o * (n._position - a._position) : o * d
                            }), void 0 !== this.options.sortClass && (clearTimeout(a), a = setTimeout(function() {
                                    e.$el.removeClass(e.options.sortClass);
                                    var t = e.$header.find('[data-field="' + e.options.sortName + '"]').index();
                                    e.$el.find('tr td:nth-child(' + (t + 1) + ')').addClass(e.options.sortClass)
                                },
                                250)))
                        }
                    },
                    {
                        key: 'onSort',
                        value: function(e) {
                            var t = e.type,
                                o = e.currentTarget,
                                a = 'keypress' === t ? s(o) : s(o).parent(),
                                i = this.$header.find('th').eq(a.index());
                            return this.$header.add(this.$header_).find('span.order').remove(),
                                this.options.sortName === a.data('field') ? this.options.sortOrder = 'asc' === this.options.sortOrder ? 'desc': 'asc': (this.options.sortName = a.data('field'), this.options.sortOrder = this.options.rememberOrder ? 'asc' === a.data('order') ? 'desc': 'asc': this.columns[this.fieldsColumnsIndex[a.data('field')]].order),
                                this.trigger('sort', this.options.sortName, this.options.sortOrder),
                                a.add(i).data('order', this.options.sortOrder),
                                this.getCaret(),
                                'server' === this.options.sidePagination ? void this.initServer(this.options.silentSort) : void(this.initSort(), this.initBody())
                        }
                    },
                    {
                        key: 'initToolbar',
                        value: function() {
                            var e = this,
                                t = this.options,
                                o = [],
                                a = 0,
                                i = void 0,
                                l = void 0,
                                d = 0;
                            this.$toolbar.find('.bs-bars').children().length && s('body').append(s(t.toolbar)),
                                this.$toolbar.html(''),
                            ('string' == typeof t.toolbar || 'object' === n(t.toolbar)) && s(r.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, t.toolbarAlign)).appendTo(this.$toolbar).append(s(t.toolbar)),
                                o = ['<div class="' + ['columns', 'columns-' + t.buttonsAlign, this.constants.classes.buttonsGroup, this.constants.classes.pull + '-' + t.buttonsAlign].join(' ') + '">'],
                            'string' == typeof t.icons && (t.icons = r.calculateObjectValue(null, t.icons)),
                            t.showPaginationSwitch && o.push('<button class="' + this.constants.buttonsClass + '" type="button" name="paginationSwitch"\n          aria-label="Pagination Switch" title="' + t.formatPaginationSwitch() + '">\n          ' + r.sprintf(this.constants.html.icon, t.iconsPrefix, t.icons.paginationSwitchDown) + '\n          </button>'),
                            t.showRefresh && o.push('<button class="' + this.constants.buttonsClass + '" type="button" name="refresh"\n          aria-label="Refresh" title="' + t.formatRefresh() + '">\n          ' + r.sprintf(this.constants.html.icon, t.iconsPrefix, t.icons.refresh) + '\n          </button>'),
                            t.showToggle && o.push('<button class="' + this.constants.buttonsClass + '" type="button" name="toggle"\n          aria-label="Toggle" title="' + t.formatToggle() + '">\n          ' + r.sprintf(this.constants.html.icon, t.iconsPrefix, t.icons.toggleOff) + '\n          </button>'),
                            t.showFullscreen && o.push('<button class="' + this.constants.buttonsClass + '" type="button" name="fullscreen"\n          aria-label="Fullscreen" title="' + t.formatFullscreen() + '">\n          ' + r.sprintf(this.constants.html.icon, t.iconsPrefix, t.icons.fullscreen) + '\n          </button>'),
                            t.showColumns && (o.push('<div class="keep-open ' + this.constants.classes.buttonsDropdown + '" title="' + t.formatColumns() + '">\n          <button class="' + this.constants.buttonsClass + ' dropdown-toggle" type="button" data-toggle="dropdown"\n          aria-label="Columns" title="' + t.formatFullscreen() + '">\n          ' + r.sprintf(this.constants.html.icon, t.iconsPrefix, t.icons.columns) + '\n          ' + this.constants.html.dropdownCaret + '\n          </button>\n          ' + this.constants.html.toobarDropdow[0]), this.columns.forEach(function(a, n) {
                                if (! (a.radio || a.checkbox) && (!t.cardView || a.cardVisible)) {
                                    var i = a.visible ? ' checked="checked"': '';
                                    a.switchable && (o.push(r.sprintf(e.constants.html.toobarDropdowItem, r.sprintf('<input type="checkbox" data-field="%s" value="%s"%s> <span>%s</span>', a.field, n, i, a.title))), d++)
                                }
                            }), o.push(this.constants.html.toobarDropdow[1], '</div>')),
                                o.push('</div>'),
                            (this.showToolbar || 2 < o.length) && this.$toolbar.append(o.join('')),
                            t.showPaginationSwitch && this.$toolbar.find('button[name="paginationSwitch"]').off('click').on('click',
                                function() {
                                    return e.togglePagination()
                                }),
                            t.showFullscreen && this.$toolbar.find('button[name="fullscreen"]').off('click').on('click',
                                function() {
                                    return e.toggleFullscreen()
                                }),
                            t.showRefresh && this.$toolbar.find('button[name="refresh"]').off('click').on('click',
                                function() {
                                    return e.refresh()
                                }),
                            t.showToggle && this.$toolbar.find('button[name="toggle"]').off('click').on('click',
                                function() {
                                    e.toggleView()
                                }),
                            t.showColumns && (i = this.$toolbar.find('.keep-open'), d <= t.minimumCountColumns && i.find('input').prop('disabled', !0), i.find('li, label').off('click').on('click',
                                function(t) {
                                    t.stopImmediatePropagation()
                                }), i.find('input').off('click').on('click',
                                function(t) {
                                    var o = t.currentTarget,
                                        a = s(o);
                                    e.toggleColumn(a.val(), a.prop('checked'), !1),
                                        e.trigger('column-switch', a.data('field'), a.prop('checked'))
                                })),
                            t.search && (o = [], o.push('<div class="' + this.constants.classes.pull + '-' + t.searchAlign + ' search ' + this.constants.classes.inputGroup + '">\n          <input class="' + this.constants.classes.input + r.sprintf(' input-%s', t.iconSize) + '"\n          type="text" placeholder="' + t.formatSearch() + '">\n          </div>'), this.$toolbar.append(o.join('')), l = this.$toolbar.find('.search input'), l.off('keyup drop blur').on('keyup drop blur',
                                function(o) {
                                    t.searchOnEnterKey && 13 !== o.keyCode || -1 !== [37, 38, 39, 40].indexOf(o.keyCode) || (clearTimeout(a), a = setTimeout(function() {
                                            e.onSearch(o)
                                        },
                                        t.searchTimeOut))
                                }), r.isIEBrowser() && l.off('mouseup').on('mouseup',
                                function(o) {
                                    clearTimeout(a),
                                        a = setTimeout(function() {
                                                e.onSearch(o)
                                            },
                                            t.searchTimeOut)
                                }))
                        }
                    },
                    {
                        key: 'onSearch',
                        value: function(e) {
                            var t = e.currentTarget,
                                o = e.firedByInitSearchText,
                                a = s(t).val().trim();
                            this.options.trimOnSearch && s(t).val() !== a && s(t).val(a),
                            a === this.searchText || (this.searchText = a, this.options.searchText = a, !o && (this.options.pageNumber = 1), this.initSearch(), o ? 'client' === this.options.sidePagination && this.updatePagination() : this.updatePagination(), this.trigger('search', a))
                        }
                    },
                    {
                        key: 'initSearch',
                        value: function() {
                            var e = this;
                            if ('server' !== this.options.sidePagination) {
                                if (this.options.customSearch) return void(this.data = r.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText]));
                                var t = this.searchText && (this.options.escape ? r.escapeHTML(this.searchText) : this.searchText).toLowerCase(),
                                    o = r.isEmptyObject(this.filterColumns) ? null: this.filterColumns;
                                this.data = o ? this.options.data.filter(function(e) {
                                    for (var t in o) if (Array.isArray(o[t]) && -1 === o[t].indexOf(e[t]) || !Array.isArray(o[t]) && e[t] !== o[t]) return ! 1;
                                    return ! 0
                                }) : this.options.data,
                                    this.data = t ? this.data.filter(function(o, a) {
                                        for (var c = 0; c < e.header.fields.length; c++) if (e.header.searchables[c]) {
                                            var i = r.isNumeric(e.header.fields[c]) ? parseInt(e.header.fields[c], 10) : e.header.fields[c],
                                                n = e.columns[e.fieldsColumnsIndex[i]],
                                                s = void 0;
                                            if ('string' == typeof i) {
                                                s = o;
                                                for (var l = i.split('.'), d = 0; d < l.length; d++) null !== s[l[d]] && (s = s[l[d]])
                                            } else s = o[i];
                                            if (n && n.searchFormatter && (s = r.calculateObjectValue(n, e.header.formatters[c], [s, o, a], s)), 'string' == typeof s || 'number' == typeof s) if (e.options.strictSearch) {
                                                if (('' + s).toLowerCase() === t) return ! 0;
                                            } else if ( - 1 !== ('' + s).toLowerCase().indexOf(t)) return ! 0
                                        }
                                        return ! 1
                                    }) : this.data
                            }
                        }
                    },
                    {
                        key: 'initPagination',
                        value: function() {
                            var e = Math.round,
                                t = this,
                                a = this.options;
                            if (!a.pagination) return void this.$pagination.hide();
                            this.$pagination.show();
                            var o = [],
                                n = !1,
                                s = void 0,
                                i = void 0,
                                l = void 0,
                                d = void 0,
                                c = void 0,
                                p = void 0,
                                h = void 0,
                                g = this.getData(),
                                u = a.pageList;
                            if ('server' !== a.sidePagination && (a.totalRows = g.length), this.totalPages = 0, a.totalRows) {
                                if (a.pageSize === a.formatAllRows()) a.pageSize = a.totalRows,
                                    n = !0;
                                else if (a.pageSize === a.totalRows) {
                                    var $ = 'string' == typeof a.pageList ? a.pageList.replace('[', '').replace(']', '').replace(/ /g, '').toLowerCase().split(',') : a.pageList; - 1 !== $.indexOf(a.formatAllRows().toLowerCase()) && (n = !0)
                                }
                                this.totalPages = ~~ ((a.totalRows - 1) / a.pageSize) + 1,
                                    a.totalPages = this.totalPages
                            }
                            0 < this.totalPages && a.pageNumber > this.totalPages && (a.pageNumber = this.totalPages),
                                this.pageFrom = (a.pageNumber - 1) * a.pageSize + 1,
                                this.pageTo = a.pageNumber * a.pageSize,
                            this.pageTo > a.totalRows && (this.pageTo = a.totalRows);
                            var f = a.onlyInfoPagination ? a.formatDetailPagination(a.totalRows) : a.formatShowingRows(this.pageFrom, this.pageTo, a.totalRows);
                            if (o.push('<div class="' + this.constants.classes.pull + '-' + a.paginationDetailHAlign + ' pagination-detail">\n        <span id="span'+this.options.id+'" data-totalrows="' + this.options.totalRows + '" class="pagination-info">\n        ' + f + '\n        </span>'), !a.onlyInfoPagination) {
                                o.push('<span class="page-list">');
                                var P = ['<span class="' + this.constants.classes.paginationDropdown + '">\n          <button class="' + this.constants.buttonsClass + ' dropdown-toggle" type="button" data-toggle="dropdown">\n          <span class="page-size">\n          ' + (n ? a.formatAllRows() : a.pageSize) + '\n          </span>\n          ' + this.constants.html.dropdownCaret + '\n          </button>\n          ' + this.constants.html.pageDropdown[0]];
                                if ('string' == typeof a.pageList) {
                                    var C = a.pageList.replace('[', '').replace(']', '').replace(/ /g, '').split(',');
                                    u = [];
                                    for (var b = C,
                                             m = Array.isArray(b), y = 0, _iterator9 = m ? b: b[Symbol.iterator]();;) {
                                        var w;
                                        if (m) {
                                            if (y >= b.length) break;
                                            w = b[y++]
                                        } else {
                                            if (y = b.next(), y.done) break;
                                            w = y.value
                                        }
                                        var k = w;
                                        u.push(k.toUpperCase() === a.formatAllRows().toUpperCase() || 'UNLIMITED' === k.toUpperCase() ? a.formatAllRows() : +k)
                                    }
                                }
                                u.forEach(function(e, o) {
                                    if (!a.smartDisplay || 0 === o || u[o - 1] < a.totalRows) {
                                        var i;
                                        i = n ? e === a.formatAllRows() ? t.constants.classes.dropdownActive: '': e === a.pageSize ? t.constants.classes.dropdownActive: '',
                                            P.push(r.sprintf(t.constants.html.pageDropdownItem, i, e))
                                    }
                                }),
                                    P.push(this.constants.html.pageDropdown[1] + '</span>'),
                                    o.push(a.formatRecordsPerPage(P.join(''))),
                                    o.push('</span></div>'),
                                    o.push('<div class="' + this.constants.classes.pull + '-' + a.paginationHAlign + ' pagination">', r.sprintf(this.constants.html.pagination[0], r.sprintf(' pagination-%s', a.iconSize)), r.sprintf(this.constants.html.paginationItem, ' page-pre', a.paginationPreText)),
                                    this.totalPages < a.paginationSuccessivelySize ? (i = 1, l = this.totalPages) : (i = a.pageNumber - a.paginationPagesBySide, l = i + 2 * a.paginationPagesBySide),
                                a.pageNumber < a.paginationSuccessivelySize - 1 && (l = a.paginationSuccessivelySize),
                                l > this.totalPages && (l = this.totalPages),
                                a.paginationSuccessivelySize > this.totalPages - i && (i = i - (a.paginationSuccessivelySize - (this.totalPages - i)) + 1),
                                1 > i && (i = 1),
                                l > this.totalPages && (l = this.totalPages);
                                var v = e(a.paginationPagesBySide / 2),
                                    x = function(e) {
                                        var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : '';
                                        return r.sprintf(t.constants.html.paginationItem, o + (e === a.pageNumber ? ' ' + t.constants.classes.paginationActive: ''), e)
                                    };
                                if (1 < i) {
                                    var T = a.paginationPagesBySide;
                                    for (T >= i && (T = i - 1), s = 1; s <= T; s++) o.push(x(s));
                                    i - 1 === T + 1 ? (s = i - 1, o.push(x(s))) : i - 1 > T && (i - 2 * a.paginationPagesBySide > a.paginationPagesBySide && a.paginationUseIntermediate ? (s = e((i - v) / 2 + v), o.push(x(s, ' page-intermediate'))) : o.push(r.sprintf(this.constants.html.paginationItem, ' page-first-separator disabled', '...')))
                                }
                                for (s = i; s <= l; s++) o.push(x(s));
                                if (this.totalPages > l) {
                                    var A = this.totalPages - (a.paginationPagesBySide - 1);
                                    for (l >= A && (A = l + 1), l + 1 === A - 1 ? (s = l + 1, o.push(x(s))) : A > l + 1 && (this.totalPages - l > 2 * a.paginationPagesBySide && a.paginationUseIntermediate ? (s = e((this.totalPages - v - l) / 2 + l), o.push(x(s, ' page-intermediate'))) : o.push(r.sprintf(this.constants.html.paginationItem, ' page-last-separator disabled', '...'))), s = A; s <= this.totalPages; s++) o.push(x(s))
                                }
                                o.push(r.sprintf(this.constants.html.paginationItem, ' page-next', a.paginationNextText)),
                                    o.push(this.constants.html.pagination[1], '</div>')
                            }
                            this.$pagination.html(o.join(''));
                            var S = -1 === ['bottom', 'both'].indexOf(a.paginationVAlign) ? '': ' ' + this.constants.classes.dropup;
                            this.$pagination.last().find('.page-list > span').addClass(S),
                            a.onlyInfoPagination || (d = this.$pagination.find('.page-list a'), c = this.$pagination.find('.page-pre'), p = this.$pagination.find('.page-next'), h = this.$pagination.find('.page-item').not('.page-next, .page-pre'), a.smartDisplay && (1 >= this.totalPages && this.$pagination.find('div.pagination').hide(), (2 > u.length || a.totalRows <= u[0]) && this.$pagination.find('span.page-list').hide(), this.$pagination[this.getData().length ? 'show': 'hide']()), !a.paginationLoop && (1 === a.pageNumber && c.addClass('disabled'), a.pageNumber === this.totalPages && p.addClass('disabled')), n && (a.pageSize = a.formatAllRows()), d.off('click').on('click',
                                function(o) {
                                    return t.onPageListChange(o)
                                }), c.off('click').on('click',
                                function(o) {
                                    return t.onPagePre(o)
                                }), p.off('click').on('click',
                                function(o) {
                                    return t.onPageNext(o)
                                }), h.off('click').on('click',
                                function(o) {
                                    return t.onPageNumber(o)
                                }))
                        }
                    },
                    {
                        key: 'updatePagination',
                        value: function(e) {
                            e && s(e.currentTarget).hasClass('disabled') || (!this.options.maintainSelected && this.resetRows(), this.initPagination(), 'server' === this.options.sidePagination ? this.initServer() : this.initBody(), this.trigger('page-change', this.options.pageNumber, this.options.pageSize))
                        }
                    },
                    {
                        key: 'onPageListChange',
                        value: function(e) {
                            e.preventDefault();
                            var t = s(e.currentTarget);
                            return t.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive),
                                this.options.pageSize = t.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +t.text(),
                                this.$toolbar.find('.page-size').text(this.options.pageSize),
                                this.updatePagination(e),
                                !1
                        }
                    },
                    {
                        key: 'onPagePre',
                        value: function(e) {
                            return e.preventDefault(),
                                0 == this.options.pageNumber - 1 ? this.options.pageNumber = this.options.totalPages: this.options.pageNumber--,
                                this.updatePagination(e),
                                !1
                        }
                    },
                    {
                        key: 'onPageNext',
                        value: function(e) {
                            return e.preventDefault(),
                                this.options.pageNumber + 1 > this.options.totalPages ? this.options.pageNumber = 1 : this.options.pageNumber++,
                                this.updatePagination(e),
                                !1
                        }
                    },
                    {
                        key: 'onPageNumber',
                        value: function(e) {
                            if (e.preventDefault(), this.options.pageNumber !== +s(e.currentTarget).text()) return this.options.pageNumber = +s(e.currentTarget).text(),
                                this.updatePagination(e),
                                !1
                        }
                    },
                    {
                        key: 'initRow',
                        value: function(e, t) {
                            var o = this,
                                i = [],
                                n = {},
                                s = [],
                                l = '',
                                d = {},
                                c = [];
                            if (! ( - 1 < r.findIndex(this.hiddenRows, e))) {
                                if (n = r.calculateObjectValue(this.options, this.options.rowStyle, [e, t], n), n && n.css) for (var p = function(e) {
                                    return Object.keys(e).map(function(t) {
                                        return [t, e[t]]
                                    })
                                } (n.css), h = Array.isArray(p), g = 0, _iterator10 = h ? p: p[Symbol.iterator]();;) {
                                    var u;
                                    if (h) {
                                        if (g >= p.length) break;
                                        u = p[g++]
                                    } else {
                                        if (g = p.next(), g.done) break;
                                        u = g.value
                                    }
                                    var f = u,
                                        b = a(f, 2),
                                        m = b[0],
                                        y = b[1];
                                    s.push(m + ': ' + y)
                                }
                                if (d = r.calculateObjectValue(this.options, this.options.rowAttributes, [e, t], d), d) for (var w = function(e) {
                                    return Object.keys(e).map(function(t) {
                                        return [t, e[t]]
                                    })
                                } (d), x = Array.isArray(w), S = 0, _iterator11 = x ? w: w[Symbol.iterator]();;) {
                                    var $;
                                    if (x) {
                                        if (S >= w.length) break;
                                        $ = w[S++]
                                    } else {
                                        if (S = w.next(), S.done) break;
                                        $ = S.value
                                    }
                                    var P = $,
                                        C = a(P, 2),
                                        T = C[0],
                                        A = C[1];
                                    c.push(T + '="' + r.escapeHTML(A) + '"')
                                }
                                if (e._data && !r.isEmptyObject(e._data)) for (var O = function(e) {
                                    return Object.keys(e).map(function(t) {
                                        return [t, e[t]]
                                    })
                                } (e._data), I = Array.isArray(O), R = 0, _iterator12 = I ? O: O[Symbol.iterator]();;) {
                                    var _;
                                    if (I) {
                                        if (R >= O.length) break;
                                        _ = O[R++]
                                    } else {
                                        if (R = O.next(), R.done) break;
                                        _ = R.value
                                    }
                                    var V = _,
                                        F = a(V, 2),
                                        B = F[0],
                                        k = F[1];
                                    if ('index' === B) return;
                                    l += ' data-' + B + '="' + k + '"'
                                }
                                return i.push('<tr', r.sprintf(' %s', c.length ? c.join(' ') : void 0), r.sprintf(' id="%s"', Array.isArray(e) ? void 0 : e._id), r.sprintf(' class="%s"', n.classes || (Array.isArray(e) ? void 0 : e._class)), ' data-index="' + t + '"', r.sprintf(' data-uniqueid="%s"', e[this.options.uniqueId]), r.sprintf('%s', l), '>'),
                                this.options.cardView && i.push('<td colspan="' + this.header.fields.length + '"><div class="card-views">'),
                                !this.options.cardView && this.options.detailView && (i.push('<td>'), r.calculateObjectValue(null, this.options.detailFilter, [t, e]) && i.push('\n            <a class="detail-icon" href="#">\n            ' + r.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen) + '\n            </a>\n          '), i.push('</td>')),
                                    this.header.fields.forEach(function(n, l) {
                                        var d = '',
                                            p = r.getItemField(e, n, o.options.escape),
                                            h = '',
                                            g = '',
                                            u = {},
                                            f = '',
                                            b = o.header.classes[l],
                                            m = '',
                                            y = '',
                                            w = '',
                                            k = '',
                                            v = '',
                                            x = o.columns[l];
                                        if ((!o.fromHtml || 'undefined' != typeof p || x.checkbox || x.radio) && x.visible && (!o.options.cardView || x.cardVisible)) {
                                            if (x.escape && (p = r.escapeHTML(p)), s.concat([o.header.styles[l]]).length && (m = ' style="' + s.concat([o.header.styles[l]]).join('; ') + '"'), e['_' + n + '_id'] && (f = r.sprintf(' id="%s"', e['_' + n + '_id'])), e['_' + n + '_class'] && (b = r.sprintf(' class="%s"', e['_' + n + '_class'])), e['_' + n + '_rowspan'] && (w = r.sprintf(' rowspan="%s"', e['_' + n + '_rowspan'])), e['_' + n + '_colspan'] && (k = r.sprintf(' colspan="%s"', e['_' + n + '_colspan'])), e['_' + n + '_title'] && (v = r.sprintf(' title="%s"', e['_' + n + '_title'])), u = r.calculateObjectValue(o.header, o.header.cellStyles[l], [p, e, t, n], u), u.classes && (b = ' class="' + u.classes + '"'), u.css) {
                                                for (var S = [], $ = function(e) {
                                                    return Object.keys(e).map(function(t) {
                                                        return [t, e[t]]
                                                    })
                                                } (u.css), P = Array.isArray($), C = 0, _iterator13 = P ? $: $[Symbol.iterator]();;) {
                                                    var T;
                                                    if (P) {
                                                        if (C >= $.length) break;
                                                        T = $[C++]
                                                    } else {
                                                        if (C = $.next(), C.done) break;
                                                        T = C.value
                                                    }
                                                    var A = T,
                                                        O = a(A, 2),
                                                        I = O[0],
                                                        R = O[1];
                                                    S.push(I + ': ' + R)
                                                }
                                                m = ' style="' + S.concat(o.header.styles[l]).join('; ') + '"'
                                            }
                                            if (h = r.calculateObjectValue(x, o.header.formatters[l], [p, e, t, n], p), e['_' + n + '_data'] && !r.isEmptyObject(e['_' + n + '_data'])) for (var _ = function(e) {
                                                return Object.keys(e).map(function(t) {
                                                    return [t, e[t]]
                                                })
                                            } (e['_' + n + '_data']), V = Array.isArray(_), F = 0, _iterator14 = V ? _: _[Symbol.iterator]();;) {
                                                var B;
                                                if (V) {
                                                    if (F >= _.length) break;
                                                    B = _[F++]
                                                } else {
                                                    if (F = _.next(), F.done) break;
                                                    B = F.value
                                                }
                                                var N = B,
                                                    j = a(N, 2),
                                                    H = j[0],
                                                    L = j[1];
                                                if ('index' === H) return;
                                                y += ' data-' + H + '="' + L + '"'
                                            }
                                            if (x.checkbox || x.radio) {
                                                g = x.checkbox ? 'checkbox': g,
                                                    g = x.radio ? 'radio': g;
                                                var D = x['class'] || '',
                                                    c = !0 === h || p || h && h.checked,
                                                    E = !x.checkboxEnabled || h && h.disabled;
                                                d = [o.options.cardView ? '<div class="card-view ' + D + '">': '<td class="bs-checkbox ' + D + '">', '<label>\n              <input\n              data-index="' + t + '"\n              name="' + o.options.selectItemName + '"\n              type="' + g + '"\n              ' + r.sprintf('value="%s"', e[o.options.idField]) + '\n              ' + r.sprintf('checked="%s"', c ? 'checked': void 0) + '\n              ' + r.sprintf('disabled="%s"', E ? 'disabled': void 0) + ' />\n              <span></span>\n              </label>', o.header.formatters[l] && 'string' == typeof h ? h: '', o.options.cardView ? '</div>': '</td>'].join(''),
                                                    e[o.header.stateField] = !0 === h || !!p || h && h.checked
                                            } else if (h = 'undefined' == typeof h || null === h ? o.options.undefinedText: h, o.options.cardView) {
                                                var U = o.options.showHeader ? '<span class="card-view-title"' + m + '>' + r.getFieldTitle(o.columns, n) + '</span>': '';
                                                d = '<div class="card-view">' + U + '<span class="card-view-value">' + h + '</span></div>',
                                                o.options.smartDisplay && '' === h && (d = '<div class="card-view"></div>')
                                            } else d = '<td' + f + b + m + y + w + k + v + '>' + h + '</td>';
                                            i.push(d)
                                        }
                                    }),
                                this.options.cardView && i.push('</div></td>'),
                                    i.push('</tr>'),
                                    i.join('')
                            }
                        }
                    },
                    {
                        key: 'initBody',
                        value: function(e) {
                            var t = this,
                                o = this.getData();
                            this.trigger('pre-body', o),
                                this.$body = this.$el.find('>tbody'),
                            this.$body.length || (this.$body = s('<tbody></tbody>').appendTo(this.$el)),
                            this.options.pagination && 'server' !== this.options.sidePagination || (this.pageFrom = 1, this.pageTo = o.length);
                            for (var n = s(document.createDocumentFragment()), l = !1, d = this.pageFrom - 1; d < this.pageTo; d++) {
                                var i = o[d],
                                    c = this.initRow(i, d, o, n);
                                l = l || !!c,
                                c && 'string' == typeof c && n.append(c)
                            }
                            l ? this.$body.html(n) : this.$body.html('<tr class="no-records-found">' + r.sprintf('<td colspan="%s">%s</td>', this.$header.find('th').length, this.options.formatNoMatches()) + '</tr>'),
                            e || this.scrollTo(0),
                                this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick',
                                    function(e) {
                                        var o = e.currentTarget,
                                            a = e.type,
                                            i = e.target,
                                            n = s(o),
                                            l = n.parent(),
                                            d = s(i).parents('.card-views').children(),
                                            c = s(i).parents('.card-view'),
                                            p = t.data[l.data('index')],
                                            h = t.options.cardView ? d.index(c) : n[0].cellIndex,
                                            g = t.getVisibleFields(),
                                            u = g[t.options.detailView && !t.options.cardView ? h - 1 : h],
                                            f = t.columns[t.fieldsColumnsIndex[u]],
                                            b = r.getItemField(p, u, t.options.escape);
                                        if (!n.find('.detail-icon').length && (t.trigger('click' === a ? 'click-cell': 'dbl-click-cell', u, b, p, n), t.trigger('click' === a ? 'click-row': 'dbl-click-row', p, l, u), 'click' === a && t.options.clickToSelect && f.clickToSelect && !r.calculateObjectValue(t.options, t.options.ignoreClickToSelectOn, [i]))) {
                                            var m = l.find(r.sprintf('[name="%s"]', t.options.selectItemName));
                                            m.length && m[0].click()
                                        }
                                    }),
                                this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click',
                                    function(a) {
                                        a.preventDefault();
                                        var e = s(a.currentTarget),
                                            i = e.parent().parent(),
                                            n = i.data('index'),
                                            l = o[n];
                                        if (i.next().is('tr.detail-view')) e.html(r.sprintf(t.constants.html.icon, t.options.iconsPrefix, t.options.icons.detailOpen)),
                                            t.trigger('collapse-row', n, l, i.next()),
                                            i.next().remove();
                                        else {
                                            e.html(r.sprintf(t.constants.html.icon, t.options.iconsPrefix, t.options.icons.detailClose)),
                                                i.after(r.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', i.children('td').length));
                                            var d = i.next().find('td'),
                                                c = r.calculateObjectValue(t.options, t.options.detailFormatter, [n, l, d], '');
                                            1 === d.length && d.append(c),
                                                t.trigger('expand-row', n, l, d)
                                        }
                                        return t.resetView(),
                                            !1
                                    }),
                                this.$selectItem = this.$body.find(r.sprintf('[name="%s"]', this.options.selectItemName)),
                                this.$selectItem.off('click').on('click',
                                    function(o) {
                                        o.stopImmediatePropagation();
                                        var e = s(o.currentTarget);
                                        t.check_(e.prop('checked'), e.data('index'))
                                    }),
                                this.header.events.forEach(function(e, o) {
                                    var i = e;
                                    if (i) {
                                        'string' == typeof i && (i = r.calculateObjectValue(null, i));
                                        var n = t.header.fields[o],
                                            l = t.getVisibleFields().indexOf(n);
                                        if ( - 1 !== l) {
                                            t.options.detailView && !t.options.cardView && (l += 1);
                                            for (var d = function() {
                                                    if (p) {
                                                        if (h >= c.length) return 'break';
                                                        g = c[h++]
                                                    } else {
                                                        if (h = c.next(), h.done) return 'break';
                                                        g = h.value
                                                    }
                                                    var e = g,
                                                        o = a(e, 2),
                                                        r = o[0],
                                                        i = o[1];
                                                    t.$body.find('>tr:not(.no-records-found)').each(function(e, o) {
                                                        var a = s(o),
                                                            d = a.find(t.options.cardView ? '.card-view': 'td').eq(l),
                                                            c = r.indexOf(' '),
                                                            p = r.substring(0, c),
                                                            h = r.substring(c + 1);
                                                        d.find(h).off(p).on(p,
                                                            function(o) {
                                                                var e = a.data('index'),
                                                                    s = t.data[e],
                                                                    l = s[n];
                                                                i.apply(t, [o, l, s, e])
                                                            })
                                                    })
                                                },
                                                     c = function(e) {
                                                         return Object.keys(e).map(function(t) {
                                                             return [t, e[t]]
                                                         })
                                                     } (i), p = Array.isArray(c), h = 0, _iterator15 = p ? c: c[Symbol.iterator]();;) {
                                                var g, u = d();
                                                if ('break' === u) break
                                            }
                                        }
                                    }
                                }),
                                this.updateSelected(),
                                this.resetView(),
                                this.trigger('post-body', o)
                        }
                    },
                    {
                        key: 'initServer',
                        value: function(e, t, o) {
                            var a = this,
                                i = {},
                                n = this.header.fields.indexOf(this.options.sortName),
                                l = {
                                    searchText: this.searchText,
                                    sortName: this.options.sortName,
                                    sortOrder: this.options.sortOrder
                                };
                            if ((this.header.sortNames[n] && (l.sortName = this.header.sortNames[n]), this.options.pagination && 'server' === this.options.sidePagination && (l.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows: this.options.pageSize, l.pageNumber = this.options.pageNumber), o || this.options.url || this.options.ajax) && ('limit' === this.options.queryParamsType && (l = {
                                search: l.searchText,
                                sort: l.sortName,
                                order: l.sortOrder
                            },
                            this.options.pagination && 'server' === this.options.sidePagination && (l.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1), l.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows: this.options.pageSize, 0 === l.limit && delete l.limit)), r.isEmptyObject(this.filterColumnsPartial) || (l.filter = JSON.stringify(this.filterColumnsPartial, null)), i = r.calculateObjectValue(this.options, this.options.queryParams, [l], i), s.extend(i, t || {}), !1 !== i)) {
                                e || this.showLoading();
                                var d = s.extend({},
                                    r.calculateObjectValue(null, this.options.ajaxOptions), {
                                        type: this.options.method,
                                        url: o || this.options.url,
                                        data: 'application/json' === this.options.contentType && 'post' === this.options.method ? JSON.stringify(i) : i,
                                        cache: this.options.cache,
                                        contentType: this.options.contentType,
                                        dataType: this.options.dataType,
                                        success: function(t) {
                                            var o = r.calculateObjectValue(a.options, a.options.responseHandler, [t], t);
                                            a.load(o),
                                                a.trigger('load-success', o),
                                            e || a.hideLoading()
                                        },
                                        error: function(t) {
                                            var o = [];
                                            'server' === a.options.sidePagination && (o = {},
                                                o[a.options.totalField] = 0, o[a.options.dataField] = []),
                                                a.load(o),
                                                a.trigger('load-error', t.status, t),
                                            e || a.$tableLoading.hide()
                                        }
                                    });
                                return this.options.ajax ? r.calculateObjectValue(this, this.options.ajax, [d], null) : (this._xhr && 4 !== this._xhr.readyState && this._xhr.abort(), this._xhr = s.ajax(d)),
                                    i
                            }
                        }
                    },
                    {
                        key: 'initSearchText',
                        value: function() {
                            if (this.options.search && (this.searchText = '', '' !== this.options.searchText)) {
                                var e = this.$toolbar.find('.search input');
                                e.val(this.options.searchText),
                                    this.onSearch({
                                        currentTarget: e,
                                        firedByInitSearchText: !0
                                    })
                            }
                        }
                    },
                    {
                        key: 'getCaret',
                        value: function() {
                            var e = this;
                            this.$header.find('th').each(function(t, o) {
                                s(o).find('.sortable').removeClass('desc asc').addClass(s(o).data('field') === e.options.sortName ? e.options.sortOrder: 'both')
                            })
                        }
                    },
                    {
                        key: 'updateSelected',
                        value: function() {
                            var e = this.$selectItem.filter(':enabled').length && this.$selectItem.filter(':enabled').length === this.$selectItem.filter(':enabled').filter(':checked').length;
                            this.$selectAll.add(this.$selectAll_).prop('checked', e),
                                this.$selectItem.each(function(e, t) {
                                    s(t).closest('tr')[s(t).prop('checked') ? 'addClass': 'removeClass']('selected')
                                })
                        }
                    },
                    {
                        key: 'updateRows',
                        value: function() {
                            var e = this;
                            this.$selectItem.each(function(t, o) {
                                e.data[s(o).data('index')][e.header.stateField] = s(o).prop('checked')
                            })
                        }
                    },
                    {
                        key: 'resetRows',
                        value: function() {
                            for (var e = this.data,
                                     t = Array.isArray(e), o = 0, _iterator16 = t ? e: e[Symbol.iterator]();;) {
                                var a;
                                if (t) {
                                    if (o >= e.length) break;
                                    a = e[o++]
                                } else {
                                    if (o = e.next(), o.done) break;
                                    a = o.value
                                }
                                var i = a;
                                this.$selectAll.prop('checked', !1),
                                    this.$selectItem.prop('checked', !1),
                                this.header.stateField && (i[this.header.stateField] = !1)
                            }
                            this.initHiddenRows()
                        }
                    },
                    {
                        key: 'trigger',
                        value: function(e) {
                            for (var o, a = e + '.bs.table',
                                     i = arguments.length,
                                     n = Array(1 < i ? i - 1 : 0), l = 1; l < i; l++) n[l - 1] = arguments[l]; (o = this.options)[t.EVENTS[a]].apply(o, n),
                                this.$el.trigger(s.Event(a), n),
                                this.options.onAll(a, n),
                                this.$el.trigger(s.Event('all.bs.table'), [a, n])
                        }
                    },
                    {
                        key: 'resetHeader',
                        value: function() {
                            var e = this;
                            clearTimeout(this.timeoutId_),
                                this.timeoutId_ = setTimeout(function() {
                                        return e.fitHeader()
                                    },
                                    this.$el.is(':hidden') ? 100 : 0)
                        }
                    },
                    {
                        key: 'fitHeader',
                        value: function() {
                            var e = this;
                            if (this.$el.is(':hidden')) return void(this.timeoutId_ = setTimeout(function() {
                                    return e.fitHeader()
                                },
                                100));
                            var t = this.$tableBody.get(0),
                                o = t.scrollWidth > t.clientWidth && t.scrollHeight > t.clientHeight + this.$header.outerHeight() ? r.getScrollBarWidth() : 0;
                            this.$el.css('margin-top', -this.$header.outerHeight());
                            var a = s(':focus');
                            if (0 < a.length) {
                                var c = a.parents('th');
                                if (0 < c.length) {
                                    var p = c.attr('data-field');
                                    if (void 0 !== p) {
                                        var h = this.$header.find('[data-field=\'' + p + '\']');
                                        0 < h.length && h.find(':input').addClass('focus-temp')
                                    }
                                }
                            }
                            this.$header_ = this.$header.clone(!0, !0),
                                this.$selectAll_ = this.$header_.find('[name="btSelectAll"]'),
                                this.$tableHeader.css('margin-right', o).find('table').css('width', this.$el.outerWidth()).html('').attr('class', this.$el.attr('class')).append(this.$header_),
                                this.$tableLoading.css('width', this.$el.outerWidth());
                            var i = s('.focus-temp:visible:eq(0)');
                            0 < i.length && (i.focus(), this.$header.find('.focus-temp').removeClass('focus-temp')),
                                this.$header.find('th[data-field]').each(function(t, o) {
                                    e.$header_.find(r.sprintf('th[data-field="%s"]', s(o).data('field'))).data(s(o).data())
                                });
                            for (var n = this.getVisibleFields(), l = this.$header_.find('th'), d = this.$body.find('>tr:first-child:not(.no-records-found)'); d.length && d.find('>td[colspan]:not([colspan="1"])').length;) d = d.next();
                            d.find('> *').each(function(t, o) {
                                var a = s(o),
                                    i = t;
                                if (e.options.detailView && !e.options.cardView) {
                                    if (0 === t) {
                                        var d = l.filter('.detail'),
                                            c = d.width() - d.find('.fht-cell').width();
                                        d.find('.fht-cell').width(a.innerWidth() - c)
                                    }
                                    i = t - 1
                                }
                                if ( - 1 !== i) {
                                    var p = e.$header_.find(r.sprintf('th[data-field="%s"]', n[i]));
                                    1 < p.length && (p = s(l[a[0].cellIndex]));
                                    var h = p.width() - p.find('.fht-cell').width();
                                    p.find('.fht-cell').width(a.innerWidth() - h)
                                }
                            }),
                                this.horizontalScroll(),
                                this.trigger('post-header')
                        }
                    },
                    {
                        key: 'resetFooter',
                        value: function() {
                            var e = this.getData(),
                                t = [];
                            if (this.options.showFooter && !this.options.cardView) { ! this.options.cardView && this.options.detailView && t.push('<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>');
                                for (var o = this.columns,
                                         i = Array.isArray(o), n = 0, _iterator17 = i ? o: o[Symbol.iterator]();;) {
                                    var s;
                                    if (i) {
                                        if (n >= o.length) break;
                                        s = o[n++]
                                    } else {
                                        if (n = o.next(), n.done) break;
                                        s = n.value
                                    }
                                    var l = s,
                                        d = '',
                                        c = '',
                                        p = [],
                                        h = {},
                                        g = r.sprintf(' class="%s"', l['class']);
                                    if (l.visible) {
                                        if (this.options.cardView && !l.cardVisible) return;
                                        if (d = r.sprintf('text-align: %s; ', l.falign ? l.falign: l.align), c = r.sprintf('vertical-align: %s; ', l.valign), h = r.calculateObjectValue(null, this.options.footerStyle, [l]), h && h.css) for (var u = function(e) {
                                            return Object.keys(e).map(function(t) {
                                                return [t, e[t]]
                                            })
                                        } (h.css), f = Array.isArray(u), b = 0, _iterator18 = f ? u: u[Symbol.iterator]();;) {
                                            var m;
                                            if (f) {
                                                if (b >= u.length) break;
                                                m = u[b++]
                                            } else {
                                                if (b = u.next(), b.done) break;
                                                m = b.value
                                            }
                                            var y = m,
                                                w = a(y, 2),
                                                k = w[0],
                                                v = w[1];
                                            p.push(k + ': ' + v)
                                        }
                                        h && h.classes && (g = r.sprintf(' class="%s"', l['class'] ? [l['class'], h.classes].join(' ') : h.classes)),
                                            t.push('<th', g, r.sprintf(' style="%s"', d + c + p.concat().join('; ')), '>'),
                                            t.push('<div class="th-inner">'),
                                            t.push(r.calculateObjectValue(l, l.footerFormatter, [e], '')),
                                            t.push('</div>'),
                                            t.push('<div class="fht-cell"></div>'),
                                            t.push('</div>'),
                                            t.push('</th>')
                                    }
                                }
                                this.$tableFooter.find('tr').html(t.join('')),
                                    this.$tableFooter.show(),
                                    this.fitFooter()
                            }
                        }
                    },
                    {
                        key: 'fitFooter',
                        value: function() {
                            var e = this;
                            if (this.$el.is(':hidden')) return void setTimeout(function() {
                                    return e.fitFooter()
                                },
                                100);
                            var t = this.$tableBody.get(0),
                                o = t.scrollWidth > t.clientWidth && t.scrollHeight > t.clientHeight + this.$header.outerHeight() ? r.getScrollBarWidth() : 0;
                            this.$tableFooter.css('margin-right', o).find('table').css('width', this.$el.outerWidth()).attr('class', this.$el.attr('class'));
                            for (var a = this.getVisibleFields(), n = this.$tableFooter.find('th'), i = this.$body.find('>tr:first-child:not(.no-records-found)'); i.length && i.find('>td[colspan]:not([colspan="1"])').length;) i = i.next();
                            i.find('> *').each(function(t, o) {
                                var a = s(o),
                                    i = t;
                                if (e.options.detailView && !e.options.cardView) {
                                    if (0 === t) {
                                        var l = n.filter('.detail'),
                                            r = l.width() - l.find('.fht-cell').width();
                                        l.find('.fht-cell').width(a.innerWidth() - r)
                                    }
                                    i = t - 1
                                }
                                if ( - 1 !== i) {
                                    var d = n.eq(t),
                                        c = d.width() - d.find('.fht-cell').width();
                                    d.find('.fht-cell').width(a.innerWidth() - c)
                                }
                            }),
                                this.horizontalScroll()
                        }
                    },
                    {
                        key: 'horizontalScroll',
                        value: function() {
                            var e = this;
                            this.trigger('scroll-body'),
                                this.$tableBody.off('scroll').on('scroll',
                                    function(t) {
                                        var o = t.currentTarget;
                                        e.options.showHeader && e.options.height && e.$tableHeader.scrollLeft(s(o).scrollLeft()),
                                        e.options.showFooter && !e.options.cardView && e.$tableFooter.scrollLeft(s(o).scrollLeft())
                                    })
                        }
                    },
                    {
                        key: 'toggleColumn',
                        value: function(e, t, o) {
                            if ( - 1 !== e && (this.columns[e].visible = t, this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
                                var a = this.$toolbar.find('.keep-open input').prop('disabled', !1);
                                o && a.filter(r.sprintf('[value="%s"]', e)).prop('checked', t),
                                a.filter(':checked').length <= this.options.minimumCountColumns && a.filter(':checked').prop('disabled', !0)
                            }
                        }
                    },
                    {
                        key: 'getVisibleFields',
                        value: function() {
                            for (var e = [], t = this.header.fields, o = Array.isArray(t), a = 0, _iterator19 = o ? t: t[Symbol.iterator]();;) {
                                var i;
                                if (o) {
                                    if (a >= t.length) break;
                                    i = t[a++]
                                } else {
                                    if (a = t.next(), a.done) break;
                                    i = a.value
                                }
                                var n = i,
                                    s = this.columns[this.fieldsColumnsIndex[n]];
                                s.visible && e.push(n)
                            }
                            return e
                        }
                    },
                    {
                        key: 'resetView',
                        value: function(e) {
                            var t = 0;
                            if (e && e.height && (this.options.height = e.height), this.$selectAll.prop('checked', 0 < this.$selectItem.length && this.$selectItem.length === this.$selectItem.filter(':checked').length), this.options.cardView) return this.$el.css('margin-top', '0'),
                                this.$tableContainer.css('padding-bottom', '0'),
                                void this.$tableFooter.hide();
                            if (this.options.showHeader && this.options.height ? (this.$tableHeader.show(), this.resetHeader(), t += this.$header.outerHeight(!0)) : (this.$tableHeader.hide(), this.trigger('post-header')), this.options.showFooter && (this.resetFooter(), this.options.height && (t += this.$tableFooter.outerHeight(!0))), this.options.height) {
                                var o = this.$toolbar.outerHeight(!0),
                                    a = this.$pagination.outerHeight(!0),
                                    i = this.options.height - o - a,
                                    n = this.$tableBody.find('table').outerHeight(!0);
                                this.$tableContainer.css('height', i + 'px'),
                                this.$tableBorder && this.$tableBorder.css('height', i - n - t - 1 + 'px')
                            }
                            this.getCaret(),
                                this.$tableContainer.css('padding-bottom', t + 'px'),
                                this.trigger('reset-view')
                        }
                    },
                    {
                        key: 'getData',
                        value: function(e) {
                            var t = this.options.data;
                            return (this.searchText || this.options.sortName || !r.isEmptyObject(this.filterColumns) || !r.isEmptyObject(this.filterColumnsPartial)) && (t = this.data),
                                e ? t.slice(this.pageFrom - 1, this.pageTo) : t
                        }
                    },
                    {
                        key: 'load',
                        value: function(e) {
                            var t = !1,
                                o = e;
                            this.options.pagination && 'server' === this.options.sidePagination && (this.options.totalRows = o[this.options.totalField]),
                                t = o.fixedScroll,
                                o = Array.isArray(o) ? o: o[this.options.dataField],
                                this.initData(o),
                                this.initSearch(),
                                this.initPagination(),
                                this.initBody(t)
                        }
                    },
                    {
                        key: 'append',
                        value: function(e) {
                            this.initData(e, 'append'),
                                this.initSearch(),
                                this.initPagination(),
                                this.initSort(),
                                this.initBody(!0)
                        }
                    },
                    {
                        key: 'prepend',
                        value: function(e) {
                            this.initData(e, 'prepend'),
                                this.initSearch(),
                                this.initPagination(),
                                this.initSort(),
                                this.initBody(!0)
                        }
                    },
                    {
                        key: 'remove',
                        value: function(e) {
                            var t = this.options.data.length,
                                o = void 0,
                                a = void 0;
                            if (e.hasOwnProperty('field') && e.hasOwnProperty('values')) {
                                for (o = t - 1; 0 <= o; o--)(a = this.options.data[o], !!a.hasOwnProperty(e.field)) && -1 !== e.values.indexOf(a[e.field]) && (this.options.data.splice(o, 1), 'server' === this.options.sidePagination && (this.options.totalRows -= 1));
                                t === this.options.data.length || (this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
                            }
                        }
                    },
                    {
                        key: 'removeAll',
                        value: function() {
                            0 < this.options.data.length && (this.options.data.splice(0, this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(!0))
                        }
                    },
                    {
                        key: 'getRowByUniqueId',
                        value: function(e) {
                            var t = this.options.uniqueId,
                                o = this.options.data.length,
                                a = e,
                                n = null,
                                s = void 0,
                                i = void 0,
                                l = void 0;
                            for (s = o - 1; 0 <= s; s--) {
                                if (i = this.options.data[s], i.hasOwnProperty(t)) l = i[t];
                                else if (i._data && i._data.hasOwnProperty(t)) l = i._data[t];
                                else continue;
                                if ('string' == typeof l ? a = a.toString() : 'number' == typeof l && ( + l === l && 0 == l % 1 ? a = parseInt(a) : l === +l && 0 !== l && (a = parseFloat(a))), l === a) {
                                    n = i;
                                    break
                                }
                            }
                            return n
                        }
                    },
                    {
                        key: 'removeByUniqueId',
                        value: function(e) {
                            var t = this.options.data.length,
                                o = this.getRowByUniqueId(e);
                            o && this.options.data.splice(this.options.data.indexOf(o), 1),
                            t === this.options.data.length || (this.initSearch(), this.initPagination(), this.initBody(!0))
                        }
                    },
                    {
                        key: 'updateByUniqueId',
                        value: function(e) {
                            for (var t = Array.isArray(e) ? e: [e], o = t, a = Array.isArray(o), i = 0, _iterator20 = a ? o: o[Symbol.iterator]();;) {
                                var n;
                                if (a) {
                                    if (i >= o.length) break;
                                    n = o[i++]
                                } else {
                                    if (i = o.next(), i.done) break;
                                    n = i.value
                                }
                                var l = n;
                                if (l.hasOwnProperty('id') && l.hasOwnProperty('row')) {
                                    var r = this.options.data.indexOf(this.getRowByUniqueId(l.id)); - 1 !== r && s.extend(this.options.data[r], l.row)
                                }
                            }
                            this.initSearch(),
                                this.initPagination(),
                                this.initSort(),
                                this.initBody(!0)
                        }
                    },
                    {
                        key: 'refreshColumnTitle',
                        value: function(e) {
                            if (e.hasOwnProperty('field') && e.hasOwnProperty('title') && (this.columns[this.fieldsColumnsIndex[e.field]].title = this.options.escape ? r.escapeHTML(e.title) : e.title, this.columns[this.fieldsColumnsIndex[e.field]].visible)) {
                                var t = void 0 === this.options.height ? this.$header: this.$tableHeader;
                                t.find('th[data-field]').each(function(t, o) {
                                    if (s(o).data('field') === e.field) return s(s(o).find('.th-inner')[0]).text(e.title),
                                        !1
                                })
                            }
                        }
                    },
                    {
                        key: 'insertRow',
                        value: function(e) {
                            e.hasOwnProperty('index') && e.hasOwnProperty('row') && (this.options.data.splice(e.index, 0, e.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
                        }
                    },
                    {
                        key: 'updateRow',
                        value: function(e) {
                            for (var t = Array.isArray(e) ? e: [e], o = t, a = Array.isArray(o), i = 0, _iterator21 = a ? o: o[Symbol.iterator]();;) {
                                var n;
                                if (a) {
                                    if (i >= o.length) break;
                                    n = o[i++]
                                } else {
                                    if (i = o.next(), i.done) break;
                                    n = i.value
                                }
                                var l = n;
                                l.hasOwnProperty('index') && l.hasOwnProperty('row') && s.extend(this.options.data[l.index], l.row)
                            }
                            this.initSearch(),
                                this.initPagination(),
                                this.initSort(),
                                this.initBody(!0)
                        }
                    },
                    {
                        key: 'initHiddenRows',
                        value: function() {
                            this.hiddenRows = []
                        }
                    },
                    {
                        key: 'showRow',
                        value: function(e) {
                            this.toggleRow(e, !0)
                        }
                    },
                    {
                        key: 'hideRow',
                        value: function(e) {
                            this.toggleRow(e, !1)
                        }
                    },
                    {
                        key: 'toggleRow',
                        value: function(e, t) {
                            var o;
                            if (e.hasOwnProperty('index') ? o = this.getData()[e.index] : e.hasOwnProperty('uniqueId') && (o = this.getRowByUniqueId(e.uniqueId)), !!o) {
                                var a = r.findIndex(this.hiddenRows, o);
                                t || -1 !== a ? t && -1 < a && this.hiddenRows.splice(a, 1) : this.hiddenRows.push(o),
                                    this.initBody(!0)
                            }
                        }
                    },
                    {
                        key: 'getHiddenRows',
                        value: function(e) {
                            if (e) return this.initHiddenRows(),
                                void this.initBody(!0);
                            for (var t = this.getData(), o = [], a = t, i = Array.isArray(a), n = 0, _iterator22 = i ? a: a[Symbol.iterator]();;) {
                                var s;
                                if (i) {
                                    if (n >= a.length) break;
                                    s = a[n++]
                                } else {
                                    if (n = a.next(), n.done) break;
                                    s = n.value
                                }
                                var l = s; - 1 !== this.hiddenRows.indexOf(l) && o.push(l)
                            }
                            return this.hiddenRows = o,
                                o
                        }
                    },
                    {
                        key: 'mergeCells',
                        value: function(e) {
                            var t = e.index,
                                o = this.getVisibleFields().indexOf(e.field),
                                a = e.rowspan || 1,
                                n = e.colspan || 1,
                                s = void 0,
                                i = void 0,
                                l = this.$body.find('>tr');
                            this.options.detailView && !this.options.cardView && (o += 1);
                            var r = l.eq(t).find('>td').eq(o);
                            if (! (0 > t || 0 > o || t >= this.data.length)) {
                                for (s = t; s < t + a; s++) for (i = o; i < o + n; i++) l.eq(s).find('>td').eq(i).hide();
                                r.attr('rowspan', a).attr('colspan', n).show()
                            }
                        }
                    },
                    {
                        key: 'updateCell',
                        value: function(e) {
                            e.hasOwnProperty('index') && e.hasOwnProperty('field') && e.hasOwnProperty('value') && (this.data[e.index][e.field] = e.value, !1 === e.reinit || (this.initSort(), this.initBody(!0)))
                        }
                    },
                    {
                        key: 'updateCellById',
                        value: function(e) {
                            var t = this;
                            if (e.hasOwnProperty('id') && e.hasOwnProperty('field') && e.hasOwnProperty('value')) {
                                var o = Array.isArray(e) ? e: [e];
                                o.forEach(function(e) {
                                    var o = e.id,
                                        a = e.field,
                                        i = e.value,
                                        n = t.options.data.indexOf(t.getRowByUniqueId(o)); - 1 === n || (t.data[n][a] = i)
                                }),
                                !1 === e.reinit || (this.initSort(), this.initBody(!0))
                            }
                        }
                    },
                    {
                        key: 'getOptions',
                        value: function() {
                            var e = JSON.parse(JSON.stringify(this.options));
                            return delete e.data,
                                e
                        }
                    },
                    {
                        key: 'getSelections',
                        value: function() {
                            var e = this;
                            return this.options.data.filter(function(t) {
                                return ! 0 === t[e.header.stateField]
                            })
                        }
                    },
                    {
                        key: 'getAllSelections',
                        value: function() {
                            var e = this;
                            return this.options.data.filter(function(t) {
                                return t[e.header.stateField]
                            })
                        }
                    },
                    {
                        key: 'checkAll',
                        value: function() {
                            this.checkAll_(!0)
                        }
                    },
                    {
                        key: 'uncheckAll',
                        value: function() {
                            this.checkAll_(!1)
                        }
                    },
                    {
                        key: 'checkInvert',
                        value: function() {
                            var e = this.$selectItem.filter(':enabled'),
                                t = e.filter(':checked');
                            e.each(function(e, t) {
                                s(t).prop('checked', !s(t).prop('checked'))
                            }),
                                this.updateRows(),
                                this.updateSelected(),
                                this.trigger('uncheck-some', t),
                                t = this.getSelections(),
                                this.trigger('check-some', t)
                        }
                    },
                    {
                        key: 'checkAll_',
                        value: function(e) {
                            var t;
                            e || (t = this.getSelections()),
                                this.$selectAll.add(this.$selectAll_).prop('checked', e),
                                this.$selectItem.filter(':enabled').prop('checked', e),
                                this.updateRows(),
                            e && (t = this.getSelections()),
                                this.trigger(e ? 'check-all': 'uncheck-all', t)
                        }
                    },
                    {
                        key: 'check',
                        value: function(e) {
                            this.check_(!0, e)
                        }
                    },
                    {
                        key: 'uncheck',
                        value: function(e) {
                            this.check_(!1, e)
                        }
                    },
                    {
                        key: 'check_',
                        value: function(e, t) {
                            var o = this.$selectItem.filter('[data-index="' + t + '"]'),
                                a = this.data[t];
                            if (o.is(':radio') || this.options.singleSelect) {
                                for (var i = this.options.data,
                                         n = Array.isArray(i), s = 0, _iterator23 = n ? i: i[Symbol.iterator]();;) {
                                    var l;
                                    if (n) {
                                        if (s >= i.length) break;
                                        l = i[s++]
                                    } else {
                                        if (s = i.next(), s.done) break;
                                        l = s.value
                                    }
                                    var d = l;
                                    d[this.header.stateField] = !1
                                }
                                this.$selectItem.filter(':checked').not(o).prop('checked', !1)
                            }
                            a[this.header.stateField] = e,
                                o.prop('checked', e),
                                this.updateSelected(),
                                this.trigger(e ? 'check': 'uncheck', this.data[t], o)
                        }
                    },
                    {
                        key: 'checkBy',
                        value: function(e) {
                            this.checkBy_(!0, e)
                        }
                    },
                    {
                        key: 'uncheckBy',
                        value: function(e) {
                            this.checkBy_(!1, e)
                        }
                    },
                    {
                        key: 'checkBy_',
                        value: function(e, t) {
                            var o = this;
                            if (t.hasOwnProperty('field') && t.hasOwnProperty('values')) {
                                var a = [];
                                this.options.data.forEach(function(n, s) {
                                    if (!n.hasOwnProperty(t.field)) return ! 1;
                                    if ( - 1 !== t.values.indexOf(n[t.field])) {
                                        var i = o.$selectItem.filter(':enabled').filter(r.sprintf('[data-index="%s"]', s)).prop('checked', e);
                                        n[o.header.stateField] = e,
                                            a.push(n),
                                            o.trigger(e ? 'check': 'uncheck', n, i)
                                    }
                                }),
                                    this.updateSelected(),
                                    this.trigger(e ? 'check-some': 'uncheck-some', a)
                            }
                        }
                    },
                    {
                        key: 'destroy',
                        value: function() {
                            this.$el.insertBefore(this.$container),
                                s(this.options.toolbar).insertBefore(this.$el),
                                this.$container.next().remove(),
                                this.$container.remove(),
                                this.$el.html(this.$el_.html()).css('margin-top', '0').attr('class', this.$el_.attr('class') || '')
                        }
                    },
                    {
                        key: 'showLoading',
                        value: function() {
                            this.$tableLoading.css('display', 'flex')
                        }
                    },
                    {
                        key: 'hideLoading',
                        value: function() {
                            this.$tableLoading.css('display', 'none')
                        }
                    },
                    {
                        key: 'togglePagination',
                        value: function() {
                            this.options.pagination = !this.options.pagination,
                                this.$toolbar.find('button[name="paginationSwitch"]').html(r.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.pagination ? this.options.icons.paginationSwitchDown: this.options.icons.paginationSwitchUp)),
                                this.updatePagination()
                        }
                    },
                    {
                        key: 'toggleFullscreen',
                        value: function() {
                            this.$el.closest('.bootstrap-table').toggleClass('fullscreen'),
                                this.resetView()
                        }
                    },
                    {
                        key: 'refresh',
                        value: function(e) {
                            e && e.url && (this.options.url = e.url),
                            e && e.pageNumber && (this.options.pageNumber = e.pageNumber),
                            e && e.pageSize && (this.options.pageSize = e.pageSize),
                                this.trigger('refresh', this.initServer(e && e.silent, e && e.query, e && e.url))
                        }
                    },
                    {
                        key: 'resetWidth',
                        value: function() {
                            this.options.showHeader && this.options.height && this.fitHeader(),
                            this.options.showFooter && !this.options.cardView && this.fitFooter()
                        }
                    },
                    {
                        key: 'showColumn',
                        value: function(e) {
                            this.toggleColumn(this.fieldsColumnsIndex[e], !0, !0)
                        }
                    },
                    {
                        key: 'hideColumn',
                        value: function(e) {
                            this.toggleColumn(this.fieldsColumnsIndex[e], !1, !0)
                        }
                    },
                    {
                        key: 'getHiddenColumns',
                        value: function() {
                            return this.columns.filter(function(e) {
                                var t = e.visible;
                                return ! t
                            })
                        }
                    },
                    {
                        key: 'getVisibleColumns',
                        value: function() {
                            return this.columns.filter(function(e) {
                                var t = e.visible;
                                return t
                            })
                        }
                    },
                    {
                        key: 'toggleAllColumns',
                        value: function(e) {
                            for (var t = this.columns,
                                     o = Array.isArray(t), a = 0, _iterator24 = o ? t: t[Symbol.iterator]();;) {
                                var i;
                                if (o) {
                                    if (a >= t.length) break;
                                    i = t[a++]
                                } else {
                                    if (a = t.next(), a.done) break;
                                    i = a.value
                                }
                                var n = i;
                                n.visible = e
                            }
                            if (this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns) {
                                var s = this.$toolbar.find('.keep-open input').prop('disabled', !1);
                                s.filter(':checked').length <= this.options.minimumCountColumns && s.filter(':checked').prop('disabled', !0)
                            }
                        }
                    },
                    {
                        key: 'showAllColumns',
                        value: function() {
                            this.toggleAllColumns(!0)
                        }
                    },
                    {
                        key: 'hideAllColumns',
                        value: function() {
                            this.toggleAllColumns(!1)
                        }
                    },
                    {
                        key: 'filterBy',
                        value: function(e) {
                            this.filterColumns = r.isEmptyObject(e) ? {}: e,
                                this.options.pageNumber = 1,
                                this.initSearch(),
                                this.updatePagination()
                        }
                    },
                    {
                        key: 'scrollTo',
                        value: function(e) {
                            if ('undefined' == typeof e) return this.$tableBody.scrollTop();
                            var t = e;
                            'string' == typeof e && 'bottom' === e && (t = this.$tableBody[0].scrollHeight),
                                this.$tableBody.scrollTop(t)
                        }
                    },
                    {
                        key: 'getScrollPosition',
                        value: function() {
                            return this.scrollTo()
                        }
                    },
                    {
                        key: 'selectPage',
                        value: function(e) {
                            0 < e && e <= this.options.totalPages && (this.options.pageNumber = e, this.updatePagination())
                        }
                    },
                    {
                        key: 'prevPage',
                        value: function() {
                            1 < this.options.pageNumber && (this.options.pageNumber--, this.updatePagination())
                        }
                    },
                    {
                        key: 'nextPage',
                        value: function() {
                            this.options.pageNumber < this.options.totalPages && (this.options.pageNumber++, this.updatePagination())
                        }
                    },
                    {
                        key: 'toggleView',
                        value: function() {
                            this.options.cardView = !this.options.cardView,
                                this.initHeader(),
                                this.$toolbar.find('button[name="toggle"]').html(r.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.cardView ? this.options.icons.toggleOn: this.options.icons.toggleOff)),
                                this.initBody(),
                                this.trigger('toggle', this.options.cardView)
                        }
                    },
                    {
                        key: 'refreshOptions',
                        value: function(e) {
                            r.compareObjects(this.options, e, !0) || (this.options = s.extend(this.options, e), this.trigger('refresh-options', this.options), this.destroy(), this.init())
                        }
                    },
                    {
                        key: 'resetSearch',
                        value: function(e) {
                            var t = this.$toolbar.find('.search input');
                            t.val(e || ''),
                                this.onSearch({
                                    currentTarget: t
                                })
                        }
                    },
                    {
                        key: 'expandRow_',
                        value: function(e, t) {
                            var o = this.$body.find(r.sprintf('> tr[data-index="%s"]', t));
                            o.next().is('tr.detail-view') === !e && o.find('> td > .detail-icon').click()
                        }
                    },
                    {
                        key: 'expandRow',
                        value: function(e) {
                            this.expandRow_(!0, e)
                        }
                    },
                    {
                        key: 'collapseRow',
                        value: function(e) {
                            this.expandRow_(!1, e)
                        }
                    },
                    {
                        key: 'expandAllRows',
                        value: function(e) {
                            var t = this;
                            if (e) {
                                var o = this.$body.find(r.sprintf('> tr[data-index="%s"]', 0)),
                                    a = null,
                                    n = !1,
                                    l = -1;
                                if (o.next().is('tr.detail-view') ? !o.next().next().is('tr.detail-view') && (o.next().find('.detail-icon').click(), n = !0) : (o.find('> td > .detail-icon').click(), n = !0), n) try {
                                    l = setInterval(function() {
                                            a = t.$body.find('tr.detail-view').last().find('.detail-icon'),
                                                0 < a.length ? a.click() : clearInterval(l)
                                        },
                                        1)
                                } catch(e) {
                                    clearInterval(l)
                                }
                            } else for (var d = this.$body.children(), c = 0; c < d.length; c++) this.expandRow_(!0, s(d[c]).data('index'))
                        }
                    },
                    {
                        key: 'collapseAllRows',
                        value: function(e) {
                            if (e) this.expandRow_(!1, 0);
                            else for (var t = this.$body.children(), o = 0; o < t.length; o++) this.expandRow_(!1, s(t[o]).data('index'))
                        }
                    },
                    {
                        key: 'updateFormatText',
                        value: function(e, t) {
                            this.options[r.sprintf('format%s', e)] && ('string' == typeof t ? this.options[r.sprintf('format%s', e)] = function() {
                                return t
                            }: 'function' == typeof t && (this.options[r.sprintf('format%s', e)] = t)),
                                this.initToolbar(),
                                this.initPagination(),
                                this.initBody()
                        }
                    }]),
                    t
            } ();
            p.DEFAULTS = d,
                p.LOCALES = c,
                p.COLUMN_DEFAULTS = {
                    radio: !1,
                    checkbox: !1,
                    checkboxEnabled: !0,
                    field: void 0,
                    title: void 0,
                    titleTooltip: void 0,
                    class: void 0,
                    align: void 0,
                    halign: void 0,
                    falign: void 0,
                    valign: void 0,
                    width: void 0,
                    sortable: !1,
                    order: 'asc',
                    visible: !0,
                    switchable: !0,
                    clickToSelect: !0,
                    formatter: void 0,
                    footerFormatter: void 0,
                    events: void 0,
                    sorter: void 0,
                    sortName: void 0,
                    cellStyle: void 0,
                    searchable: !0,
                    searchFormatter: !0,
                    cardVisible: !0,
                    escape: !1,
                    showSelectTitle: !1
                },
                p.EVENTS = {
                    "all.bs.table": 'onAll',
                    "click-cell.bs.table": 'onClickCell',
                    "dbl-click-cell.bs.table": 'onDblClickCell',
                    "click-row.bs.table": 'onClickRow',
                    "dbl-click-row.bs.table": 'onDblClickRow',
                    "sort.bs.table": 'onSort',
                    "check.bs.table": 'onCheck',
                    "uncheck.bs.table": 'onUncheck',
                    "check-all.bs.table": 'onCheckAll',
                    "uncheck-all.bs.table": 'onUncheckAll',
                    "check-some.bs.table": 'onCheckSome',
                    "uncheck-some.bs.table": 'onUncheckSome',
                    "load-success.bs.table": 'onLoadSuccess',
                    "load-error.bs.table": 'onLoadError',
                    "column-switch.bs.table": 'onColumnSwitch',
                    "page-change.bs.table": 'onPageChange',
                    "search.bs.table": 'onSearch',
                    "toggle.bs.table": 'onToggle',
                    "pre-body.bs.table": 'onPreBody',
                    "post-body.bs.table": 'onPostBody',
                    "post-header.bs.table": 'onPostHeader',
                    "expand-row.bs.table": 'onExpandRow',
                    "collapse-row.bs.table": 'onCollapseRow',
                    "refresh-options.bs.table": 'onRefreshOptions',
                    "reset-view.bs.table": 'onResetView',
                    "refresh.bs.table": 'onRefresh',
                    "scroll-body.bs.table": 'onScrollBody'
                };
            var h = ['getOptions', 'getSelections', 'getAllSelections', 'getData', 'load', 'append', 'prepend', 'remove', 'removeAll', 'insertRow', 'updateRow', 'updateCell', 'updateByUniqueId', 'removeByUniqueId', 'getRowByUniqueId', 'showRow', 'hideRow', 'getHiddenRows', 'mergeCells', 'refreshColumnTitle', 'checkAll', 'uncheckAll', 'checkInvert', 'check', 'uncheck', 'checkBy', 'uncheckBy', 'refresh', 'resetView', 'resetWidth', 'destroy', 'showLoading', 'hideLoading', 'showColumn', 'hideColumn', 'getHiddenColumns', 'getVisibleColumns', 'showAllColumns', 'hideAllColumns', 'filterBy', 'scrollTo', 'getScrollPosition', 'selectPage', 'prevPage', 'nextPage', 'togglePagination', 'toggleView', 'refreshOptions', 'resetSearch', 'expandRow', 'collapseRow', 'expandAllRows', 'collapseAllRows', 'updateFormatText', 'updateCellById'];
            s.BootstrapTable = p,
                s.fn.bootstrapTable = function(e) {
                    for (var t = arguments.length,
                             o = Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) o[a - 1] = arguments[a];
                    var i;
                    return this.each(function(t, a) {
                        var l = s(a).data('bootstrap.table'),
                            r = s.extend({},
                                p.DEFAULTS, s(a).data(), 'object' === ('undefined' == typeof e ? 'undefined': n(e)) && e);
                        if ('string' == typeof e) {
                            var d;
                            if ( - 1 === h.indexOf(e)) throw new Error('Unknown method: ' + e);
                            if (!l) return;
                            i = (d = l)[e].apply(d, o),
                            'destroy' === e && s(a).removeData('bootstrap.table')
                        }
                        l || s(a).data('bootstrap.table', l = new s.BootstrapTable(a, r))
                    }),
                        'undefined' == typeof i ? this: i
                },
                s.fn.bootstrapTable.Constructor = p,
                s.fn.bootstrapTable.defaults = p.DEFAULTS,
                s.fn.bootstrapTable.columnDefaults = p.COLUMN_DEFAULTS,
                s.fn.bootstrapTable.locales = p.LOCALES,
                s.fn.bootstrapTable.methods = h,
                s.fn.bootstrapTable.utils = r,
                s(function() {
                    s('[data-toggle="table"]').bootstrapTable()
                })
        })(jQuery)
    });