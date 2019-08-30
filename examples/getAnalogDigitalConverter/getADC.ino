#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <Adafruit_ADS1015.h>

Adafruit_ADS1115 adc1(0x48);

void setup()
{
  adc1.setGain(GAIN_TWOTHIRDS);
  Serial.begin(115200);
  adc1.begin();
}
void loop()
{
  Serial.print(((String("ADC0: ")+String((adc1.readADC_SingleEnded(0))))));
  Serial.print(((String(" ADC1: ")+String((adc1.readADC_SingleEnded(1))))));
  Serial.print(((String(" ADC2: ")+String((adc1.readADC_SingleEnded(2 ))))));
  Serial.println(((String(" ADC3: ")+String((adc1.readADC_SingleEnded(3))))));
  delay(250);
}
