<template>
<vue-datetime-picker ref:picker1 :name="name"
                                 :model="datetime1"
                                 :type="type"
                                 :language="language"
                                 :datetime-format="datetimeFormat"
                                 date-update-fn="update-date"
                                 :start-datetime="startDatetime"
                                 :end-datetime="endDatetime"
                                 @update-date="updateDate">
</vue-datetime-picker>
</template>
<script>

 var datetimePicker = require('../../index.js');

 //import datetimePicker from './datetime-picker';
  export default {
        components: {
                "vue-datetime-picker": datetimePicker
              },
        data() {
                 return {
                     datetime1:new Date(),
                     startDatetime: "2017-08-30 05:23:23",
                     endDatetime: null,
                     type: 'datetime',
                     name: 'picker1',
                     language: 'zh-CN',
                     datetimeFormat: 'YYYY年MM月DD日'
                };
            },
        methods: {
                updateDate: function(datetime) {
                       this.datetime1 = datetime;
                }

            }

        };
</script>
