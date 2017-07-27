<template>
<vue-datetime-picker ref:picker1 name="picker1"
<<<<<<< HEAD
<<<<<<< HEAD
                     :model="datetime1" type="datetime"
                      language="en-US"
                      datetime-format="YYYY-MM-DD HH:mm:ss"
                      date-update-fn="updateDate">
</vue-datetime-picker>
</template>
<script>
//var datetimePicker = require('../../index.js');
=======
=======
>>>>>>> 3d941c467ac46b273f6b244b3ba8d8d88635dc12
                                  :model="datetime1" type="datetime"
                                  language="en-US"
                                  datetime-format="YYYY-MM-DD HH:mm:ss">
          </vue-datetime-picker>

</template>
<script>

<<<<<<< HEAD
>>>>>>> 449e95597c09954f6d1bdf3d8682b4b3142a92d0
=======
>>>>>>> 3d941c467ac46b273f6b244b3ba8d8d88635dc12
import datetimePicker from './datetime-picker';
   export default {
            components: {
                "vue-datetime-picker": datetimePicker
            },
            data() {
                return {
<<<<<<< HEAD
<<<<<<< HEAD
                    datetime1:new Date(),
                    startDatetime: null,
=======
                    datetime1: new Date(),
                    startDatetime: moment(),
>>>>>>> 449e95597c09954f6d1bdf3d8682b4b3142a92d0
=======
                    datetime1: new Date(),
                    startDatetime: moment(),
>>>>>>> 3d941c467ac46b273f6b244b3ba8d8d88635dc12
                    endDatetime: null
                };
            },
            methods: {
                updateDate: function(datetime) {
<<<<<<< HEAD
<<<<<<< HEAD
                                  this.datetime1 = datetime;
                              }
=======
                    this.result1 = datetime;
                }
>>>>>>> 449e95597c09954f6d1bdf3d8682b4b3142a92d0
=======
                    this.result1 = datetime;
                }
>>>>>>> 3d941c467ac46b273f6b244b3ba8d8d88635dc12
            }

        };
</script>
