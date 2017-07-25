<template>
<vue-datetime-picker ref:picker1 name="picker1"
                                  :model="datetime1" type="datetime"
                                  language="en-US"
                                  datetime-format="YYYY-MM-DD HH:mm:ss">
          </vue-datetime-picker>

</template>
<script>

import datetimePicker from './datetime-picker';
   export default {
            components: {
                "vue-datetime-picker": datetimePicker
            },
            data() {
                return {
                    datetime1: new Date(),
                    startDatetime: moment(),
                    endDatetime: null
                };
            },
            methods: {
                updateDate: function(datetime) {
                    this.result1 = datetime;
                }
            }

        };
</script>
