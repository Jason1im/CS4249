      
var roomArr = [
    { name: 'Room AC1 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC2 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC3 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC4 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC5 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC6 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC7 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC8 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC9 ', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC10', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC11', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC12', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC13', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC14', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC15', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC16', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC17', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC18', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC19', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room AC20', faciltype: 'Conference Room', location: 'Building A' },
    { name: 'Room BC1 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC2 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC3 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC4 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC5 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC6 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC7 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC8 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC9 ', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC10', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC11', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC12', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC13', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC14', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC15', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC16', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC17', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC18', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC19', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room BC20', faciltype: 'Conference Room', location: 'Building B' },
    { name: 'Room CC1 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC2 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC3 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC4 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC5 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC6 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC7 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC8 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC9 ', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC10', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC11', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC12', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC13', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC14', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC15', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC16', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC17', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC18', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC19', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room CC20', faciltype: 'Conference Room', location: 'Building C' },
    { name: 'Room AM1 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM2 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM3 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM4 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM5 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM6 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM7 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM8 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM9 ', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM10', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM11', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM12', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM13', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM14', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM15', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM16', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM17', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM18', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM19', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room AM20', faciltype: 'Music Room', location: 'Building A' },
    { name: 'Room BM1 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM2 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM3 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM4 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM5 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM6 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM7 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM8 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM9 ', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM10', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM11', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM12', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM13', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM14', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM15', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM16', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM17', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM18', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM19', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room BM20', faciltype: 'Music Room', location: 'Building B' },
    { name: 'Room CM1 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM2 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM3 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM4 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM5 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM6 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM7 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM8 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM9 ', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM10', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM11', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM12', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM13', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM14', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM15', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM16', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM17', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM18', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM19', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room CM20', faciltype: 'Music Room', location: 'Building C' },
    { name: 'Room AO1 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO2 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO3 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO4 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO5 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO6 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO7 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO8 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO9 ', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO10', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO11', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO12', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO13', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO14', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO15', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO16', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO17', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO18', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO19', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room AO20', faciltype: 'Open Space', location: 'Building A' },
    { name: 'Room BO1 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO2 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO3 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO4 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO5 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO6 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO7 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO8 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO9 ', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO10', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO11', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO12', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO13', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO14', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO15', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO16', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO17', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO18', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO19', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room BO20', faciltype: 'Open Space', location: 'Building B' },
    { name: 'Room CO1 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO2 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO3 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO4 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO5 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO6 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO7 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO8 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO9 ', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO10', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO11', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO12', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO13', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO14', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO15', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO16', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO17', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO18', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO19', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room CO20', faciltype: 'Open Space', location: 'Building C' },
    { name: 'Room AP1 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP2 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP3 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP4 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP5 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP6 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP7 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP8 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP9 ', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP10', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP11', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP12', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP13', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP14', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP15', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP16', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP17', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP18', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP19', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room AP20', faciltype: 'Practice Room', location: 'Building A' },
    { name: 'Room BP1 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP2 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP3 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP4 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP5 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP6 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP7 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP8 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP9 ', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP10', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP11', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP12', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP13', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP14', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP15', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP16', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP17', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP18', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP19', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room BP20', faciltype: 'Practice Room', location: 'Building B' },
    { name: 'Room CP1 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP2 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP3 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP4 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP5 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP6 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP7 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP8 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP9 ', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP10', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP11', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP12', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP13', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP14', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP15', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP16', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP17', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP18', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP19', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room CP20', faciltype: 'Practice Room', location: 'Building C' },
    { name: 'Room AS1', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS2', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS3', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS4', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS5', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS6', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS7', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS8', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS9', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS10', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS11', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS12', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS13', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS14', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS15', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS16', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS17', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS18', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS19', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room AS20', faciltype: 'Study Room', location: 'Building A' },
    { name: 'Room BS1', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS2 ', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS3 ', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS4 ', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS5 ', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS6 ', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS7 ', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS8 ', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS9 ', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS10', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS11', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS12', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS13', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS14', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS15', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS16', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS17', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS18', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS19', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room BS20', faciltype: 'Study Room', location: 'Building B' },
    { name: 'Room CS1 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS2 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS3 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS4 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS5 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS6 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS7 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS8 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS9 ', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS10', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS11', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS12', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS13', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS14', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS15', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS16', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS17', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS18', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS19', faciltype: 'Study Room', location: 'Building C' },
    { name: 'Room CS20', faciltype: 'Study Room', location: 'Building C' }

];

for(var i=0; i<roomArr.length; i++) {
    roomArr[i].id = roomArr[i].name.replace(/ /g, '');
}

function createRooms() {
    var containerid ='#Room-options';
    for (var i=0; i<roomArr.length; i++) {
        var input = document.createElement('input');  // CREATE CHECK BOX.
        input.setAttribute('id', roomArr[i].id);
        input.setAttribute('location', roomArr[i].location);
        input.setAttribute('type', 'checkbox');
        input.setAttribute('faciltype', roomArr[i].faciltype);
        input.setAttribute('name', roomArr[i].name); 

        input.classList.add('custom-control-input');
        input.classList.add('parent-Room-options');   
        input.classList.add('location-'+ roomArr[i].location.replace(/ /g, ''));
        input.classList.add('faciltype-'+roomArr[i].faciltype.replace(/ /g, ''));

        var label = document.createElement('label');  // CREATE LABEL.
        label.setAttribute('for', roomArr[i].id);
        label.className += "custom-control-label";

        var optiondiv = document.createElement('div');
        optiondiv.className = optiondiv.className + "custom-control custom-checkbox location-"+roomArr[i].location.replace(/ /g, '')
        optiondiv.classList.add('faciltype-'+roomArr[i].faciltype.replace(/ /g, ''));
        
        // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
        label.appendChild(document.createTextNode(roomArr[i].name));

        // APPEND THE NEWLY CREATED CHECKBOX AND LABEL TO THE <p> ELEMENT.
        $(optiondiv).append(input);
        $(optiondiv).append(label);
        $(containerid).append(optiondiv);

        // roomArr[i].value = ';
        document.getElementById( roomArr[i].id).focus();
    }
}


function createRoomsList() {
    var containerid ='#Room-options';
    for (var i=0; i<roomArr.length; i++) {
        var option = document.createElement('option');  // CREATE CHECK BOX.
        option.setAttribute('id', roomArr[i].id);
        option.setAttribute('location', roomArr[i].location);
        option.setAttribute('type', 'checkbox');
        option.setAttribute('faciltype', roomArr[i].faciltype);
        option.setAttribute('name', roomArr[i].name); 

        // option.classList.add('custom-control-option');
        // option.classList.add('parent-Room-options');   
        option.classList.add('location-'+ roomArr[i].location.replace(/ /g, ''));
        option.classList.add('faciltype-'+roomArr[i].faciltype.replace(/ /g, ''));

        // var label = document.createElement('label');  // CREATE LABEL.
        // label.setAttribute('for', roomArr[i].id);
        // label.className += "custom-control-label";

        // var optiondiv = document.createElement('div');
        // optiondiv.className = optiondiv.className + "custom-control custom-checkbox location-"+roomArr[i].location.replace(/ /g, '')
        // optiondiv.classList.add('faciltype-'+roomArr[i].faciltype.replace(/ /g, ''));
        
        // // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
        option.appendChild(document.createTextNode(roomArr[i].name));

        // // APPEND THE NEWLY CREATED CHECKBOX AND LABEL TO THE <p> ELEMENT.
        $(containerid).append(option);


        console.log(option.className)

        // roomArr[i].value = ';
        document.getElementById( roomArr[i].id).focus();
    }

}