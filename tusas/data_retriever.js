const hs_ring1 = require('./data/hs_ring1.json');
const hs_ring2 = require('./data/hs_ring2.json');
const ring1_order = ['1100', '1030', '1050', '960', '950', '810', 'B4', 'B5', '170', '210', '610', '280', 'G1', '210_2',
    '170_2', 'B5_2', 'B4_2', '810_2', '950_2', '960_2', '1050_2', '1030_2', '1100_2'];
const ring2_order = ['G1', '210', '170', 'B5', '40', '320', '710', '960', '1050', '961', '910', '202', '850', '200',
    '410', '420', '170_2',  '210_2', 'G1_2'];
const NEXT_BUS_LIMIT = 3;

export function getNextTime(currentLoc, goalLoc) {
    let time = [];
    // get current time
    var now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    console.log(hour, min);

    // find correct column
    var column_name = "";
    if (ring1_order.includes(currentLoc)) {
        for(let i = 0; i < ring1_order.length; i++) {
            if(column_name !== "" && ring1_order[i].split('_')[0] === goalLoc) {
                break;
            }
            if(ring1_order[i].split('_')[0] === currentLoc) {
                column_name = ring1_order[i];
            }
        }
    } else {
        console.log("Location is not defined.");
        return [false, time];
    }

    // find the next 3 closest time
    const times = hs_ring1[column_name];
    for(const idx in times) {
        if(time.length >= NEXT_BUS_LIMIT) {
            break;
        }
        const [hr, mn, _] = times[idx].split(':');
        if(Number(hr) >= Number(hour)) {
            time.push(hr + ":" + mn);
        }
        else if(Number(hr) === Number(hour) && Number(mn) > Number(min)) {
            time.push(hr + ":" + mn);
        }
    }

    // no time left
    if(time.length === 0) {
        return [false, time];
    }
    return [true, time];
}

// console.log(getNextTime("1050", "1100"));