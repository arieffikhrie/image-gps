trying to reading gps data using node v18

to run please add the jpg image in same folder as the code. It only accept `.jpg` extension

```bash
npm install
```

```bash
node index
```

this would output

```json
{
  GPSLatitudeRef: 'N',
  GPSLatitude: [ 43, 28, 1.76399999 ],
  GPSLongitudeRef: 'E',
  GPSLongitude: [ 11, 53, 7.42199999 ],
  GPSAltitudeRef: 0,
  GPSTimeStamp: [ 14, 28, 17.24 ],
  GPSSatellites: '06',
  GPSImgDirectionRef: '\x00',
  GPSMapDatum: 'WGS-84   ',
  GPSDateStamp: '2008:10:23'
}
{
  GPSLatitudeRef: 'N',
  GPSLatitude: [ 43, 28, 2.814 ],
  GPSLongitudeRef: 'E',
  GPSLongitude: [ 11, 53, 6.45599999 ],
  GPSAltitudeRef: 0,
  GPSTimeStamp: [ 14, 27, 7.24 ],
  GPSSatellites: '06',
  GPSImgDirectionRef: '\x00',
  GPSMapDatum: 'WGS-84   ',
  GPSDateStamp: '2008:10:23'
}
...
```
