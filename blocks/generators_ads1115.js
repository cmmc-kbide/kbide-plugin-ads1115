Blockly.JavaScript['ads1115_begin'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_addr = block.getFieldValue('ADDR');
    var code =
`
#EXTINC
#include <Adafruit_ADS1015.h>
#END

#VARIABLE
Adafruit_ADS1115 ${variable_instance}(${dropdown_addr});
#END

${variable_instance}.begin();
\n
`;

    return code;
};

Blockly.JavaScript['ads1115_set_gain'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_gain = block.getFieldValue('GAIN');
    var code = `#SETUP${variable_instance}.setGain(${dropdown_gain});#END`;
    return code;
};

Blockly.JavaScript['ads1115_read_adc_single'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var code = `${variable_instance}.readADC_SingleEnded(${dropdown_ch})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ads1115_read_adc_differential'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var code = `${variable_instance}.${dropdown_ch}()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ads1115_read_adc_differential_mV'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var code = `${variable_instance}.${dropdown_ch}() * 0.1875F`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['ads1115_read_adc_comparator'] = function (block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_ch = block.getFieldValue('CHANNEL');
    var number_thresshold = block.getFieldValue('THRESSHOLD');
    var code = `#SETUP${variable_instance}.startComparator_SingleEnded(${dropdown_ch}, ${number_thresshold});#END${variable_instance}.getLastConversionResults()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ads1115_read_alert_status'] = function (block) {
    var number_alrt = block.getFieldValue('ALRT');
    var code = `digitalRead(${number_alrt})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};