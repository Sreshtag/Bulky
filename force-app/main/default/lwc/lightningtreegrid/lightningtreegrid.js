import { LightningElement } from 'lwc';
import {
    EXAMPLES_COLUMNS_DEFINITION_BASIC,
    EXAMPLES_DATA_BASIC,
} from './sampleData';



export default class Lightningtreegrid extends LightningElement {
    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;
    gridData = EXAMPLES_DATA_BASIC;


    parent = []
    name = "1234"


    actionOverrides = {
        name: '123557-1',
        keyinJSON: 'actionOverrides',
        _children: [
            {
                name: '123557-1-1',
                keyinJSON: 'formFactor',
                valueinJSON: 'LARGE'

            },
            {
                name: '123557-1-2',
                keyinJSON: 'name',
                valueinJSON: 'View'
            },
            {
                name: '123557-1-3',
                keyinJSON: 'pageId',
                valueinJSON: '0M0dM000002NsV2SAK'
            }
        ],
    }

    connectedCallback() {
        this.processTree(this.Jsonparsed, this.parent)
    }
    Jsonparsed = [{
        "actionOverrides": [
            {
                "formFactor": "LARGE",
                "isAvailableInTouch": false,
                "name": "View",
                "pageId": [{
                    "formFactor": "LARGE",
                    "isAvailableInTouch": false,
                    "name": "View",
                    "pageId": "0M0dM000002NsV2SAK"
                }]
            }
        ],
        "activateable": false,
        "associateEntityType": true,
        "associateParentEntity": false,
    }]
    name='123557'
    level=0
    processTree(Jsonparsed, parent) {
        Jsonparsed.forEach(element => {
            let count=1
            for (let key in element) {
                if (typeof element[key] != "object" && typeof element[key] != "array") {
                    parent.push({ name: this.name+'-'+String(count), keyinJSON: key, valueinJSON: element[key] })
                    count+=1
                }
                else{
                    parent.push({ name:  this.name+'-'+String(count), keyinJSON: key, _children: this.processTree(element[key], [])})
                }
            }
        });
        console.log(JSON.stringify(parent))
        return parent;
        
    }


}