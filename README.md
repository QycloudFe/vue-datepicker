# vue-datepicker



A Vue.js component implementing the datetime picker control using the [Eonasdan's bootstrap datetime picker plugin](https://github.com/Eonasdan/bootstrap-datetimepicker).
(修改自https://github.com/Haixing-Hu/vue-datetime-picker)
# 改动如下：
- 图标改为iconfont
- vue1.0改为vue2.0,体现在datetime-picker.vue文件和index.js文件
- 去掉bootstrap.js，对bootstrap.css进行瘦身







# Requirements

- [Vue.js](https://github.com/yyx990803/vue) `^2.1.10`
- [moment](https://github.com/moment/moment/) `^2.9.0`
- [moment-timezone](https://github.com/moment/moment-timezone/) `^0.4.0`
- [Eonasdan's bootstrap datetime picker](https://github.com/Eonasdan/bootstrap-datetimepicker) `^4.17.37`
- [vue-i18n-plugin](https://github.com/Haixing-Hu/vue-i18n) `^0.2.2` This is optional.


# Usage

The HTML snippets are as follows:

```html
<div class="form-horizontal">
  <div class="form-group">
    <label for="picker1" class="col-sm-3 control-label">
      A default datetime picker:
    </label>
    <div class="col-sm-5">
    <vue-datetime-picker ref:picker1 name="picker1"
                                      :model="datetime1" type="datetime"
                                      language="en-US"
                                      datetime-format="YYYY-MM-DD HH:mm:ss"
                                      date-update-fn="updateDate">
              </vue-datetime-picker>
    </div>
  
  </div>

</div>
```

The Javascript snippets are as follows:

```javascript
var Vue = require("vue");

var vm = new Vue({
  el: "#app",
  components: {
    "vue-datetime-picker": require("vue-datepicker")
  },
  data: {
    result1: null,
    startDatetime: null,
    endDatetime: null
  },
  methods: {
    updateDate: function(datetime) {
                       this.result1 = datetime;
                   }
  }
});
```

# Component Properties

## `model`



The model bind to the control, which must be a two way binding variable.
双向绑定变量，结果就是这个控件的值

Note that the value of the model must be either a `null` value, or a
[moment](https://github.com/moment/moment/) object. If the model is set to
`null`, the input box of the datetime picker control will set to empty,
indicating no datetime was selected; also, if the input box of the datetime
picker control is set to empty (that is, the user delete the text in the input
box of the datetime picker control), the value of the model will be set to
`null` instead of an empty string; if the user does select a datetime, the
value of the model will be set to the [moment](https://github.com/moment/moment/)
object representing the date, without any timezone information.
注意，模型的值必须是null值，也可以是moment对象。如果模型被设置为空,日期选择器控件的输入框
将设置为空，表示没有选择日期时间；另外，如果日期时间选择器控件的输入框中设置为空（
即用户删除的日期选择器控件的输入框的文本），模型的值将被设置为null，而不是空字符串；
如果用户选择一个日期，模型的值将被设置为矩表示日期，没有任何时区信息。

## `type`
选择的日期类型

The optional type of the datetime picker control. Available values are

- `"datetime"`: Indicating that the control is a datetime picker,
- `"date"`: Indicating that the control is a date picker (without time picker),
- `"time"`: Indicating that the control is a time picker (without date picker).

The default value of this property is `"datetime"`.

## `language`

The optional code of language used by the [moment](https://github.com/moment/moment/)
library.

If it is not set, and the [vue-i18n](https://github.com/Haixing-Hu/vue-i18n)
plugin is used, the component will use the language code `$language` provided
by the [vue-i18n](https://github.com/Haixing-Hu/vue-i18n) plugin; otherwise, the
component will use the default value `"en-US"`.

The supported languages are exactly the same as the supported languages of the
[moment](https://github.com/moment/moment/) library. In order to use the
supported language, you must also include the corresponding i18n js file of
the [moment](https://github.com/moment/moment/) library in your HTML file.
A convenient way is to include the `moment-with-locales.min.js`.

Note that the language code passed to this property could be a locale code
consists of a language code and a country code, e.g., `"en-US"`. The component
will automatically convert the locale code to the language code supported by
the [moment](https://github.com/moment/moment/) library. Since some languages
have different variants in different country or region, e.g., `"zh-CN"` for the
simplified Chinese and `"zh-TW"` for the traditional Chinese, it's recommended
to use the locale code in the form of `"[language]-[country]"`.

## `datetimeFormat`
日期显示的格式

The optional format of the datetime this component should display, which
must be a valid datetime format of the [moment](https://github.com/moment/moment/)
library.

This property only works when the `type` property is set to `"datetime"`. Default
value of this property is `"YYYY-MM-DD HH:mm:ss"`.

## `dateFormat`

The optional format of the date this component should display, which
must be a valid date format of the [moment](https://github.com/moment/moment/)
library.

This property only works when the `type` property is set to `"date"`. Default
value of this property is `"YYYY-MM-DD"`.

## `timeFormat`

The optional format of the time this component should display, which
must be a valid time format of the [moment](https://github.com/moment/moment/)
library.

This property only works when the `type` property is set to `"time"`. Default
value of this property is `"HH:mm:ss"`.

## `name`

The optional name of the selection control.

## `onChange`

The optional event handler triggered when the value of the datetime picker
was changed. If this parameter is presented and is not `null`, it must be a
function which accept one argument: the new date time selected by the picker,
which is a [moment](https://github.com/moment/moment/) object.
## `dateUpdateFn`
该属性用于父组件向子组件也就是datetime-picker传递一个方法，
该方法定义在父组件中，用于子组件更新父组件的属性值

# API

## `control`

This property is a reference to the JQuery selection of datetime control. It
could be used to call the APIs of the
[Eonasdan's bootstrap datetime picker](https://github.com/Eonasdan/bootstrap-datetimepicker).
For example, `picker.control.minDate(val)` will set the minimum allowed datetime
of the picker to the specified value, where `picker` is the reference to the
`vue-datetime-picker` component.

# Localization

This component could use the [vue-i18n](https://github.com/Haixing-Hu/vue-i18n)
plugin to localize the tooltips of the datetime picker control.

In order to localize this component, the localization files provided to the
[vue-i18n](https://github.com/Haixing-Hu/vue-i18n) plugin must provide the
following localization messages:

```json
{
  "datetime_picker": {
    "today": "Go to today",
    "clear": "Clear selection",
    "close": "Close the picker",
    "selectMonth": "Select Month",
    "prevMonth": "Previous Month",
    "nextMonth": "Next Month",
    "selectYear": "Select Year",
    "prevYear": "Previous Year",
    "nextYear": "Next Year",
    "selectDecade": "Select Decade",
    "prevDecade": "Previous Decade",
    "nextDecade": "Next Decade",
    "prevCentury": "Previous Century",
    "nextCentury": "Next Century",
    "pickHour": "Pick Hour",
    "incrementHour": "Increment Hour",
    "decrementHour": "Decrement Hour",
    "pickMinute": "Pick Minute",
    "incrementMinute": "Increment Minute",
    "decrementMinute": "Decrement Minute",
    "pickSecond": "Pick Second",
    "incrementSecond": "Increment Second",
    "decrementSecond": "Decrement Second",
    "togglePeriod": "Toggle Period",
    "selectTime": "Select Time"
  }
}
```

If no [vue-i18n](https://github.com/Haixing-Hu/vue-i18n) is used, or the
localization file of the plugin does not provide the above localization messages,
the default English messages will be used.

Some localization files could be found in the `src/i18n` directory.




# License

[The MIT License](http://opensource.org/licenses/MIT)
