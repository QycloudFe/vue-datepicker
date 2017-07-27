<template>
<vue-datetime-picker ref:picker1 name="picker1"
                     :model="datetime1" type="datetime"
                      language="en-US"
                      datetime-format="YYYY-MM-DD HH:mm:ss"
                      date-update-fn="updateDate">
</vue-datetime-picker>
</template>
<script>
//var datetimePicker = require('../../index.js');

import datetimePicker from './datetime-picker';
   export default {
            components: {
                "vue-datetime-picker": datetimePicker
            },
            data() {
                return {
                    datetime1:new Date(),
                    startDatetime: null,
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
