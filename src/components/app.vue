<template>
<vue-datetime-picker ref:picker1 name="picker1"
                     :model="datetime1" type="datetime"
                     language="zh-CN"
                     datetime-format="YYYY年MM月DD日"
                     date-update-fn="updateDate"
                     :start-datetime="startDatetime"
                     :end-datetime="endDatetime">
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
                     endDatetime: null
                };
            },
        methods: {
                updateDate: function(datetime) {
                       this.datetime1 = datetime;
                }

            }

        };
</script>
