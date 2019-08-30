module.exports = [
    {
        name: "ADC ads1115",
        blocks: [
            'ads1115_begin',
            'ads1115_set_gain',
            'ads1115_read_adc_single',
            'ads1115_read_adc_differential',
            'ads1115_read_adc_differential_mV'
            // 'ads1115_read_adc_comparator',
            // 'ads1115_read_alert_status'
        ]
    }
];