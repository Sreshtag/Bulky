import { LightningElement,api } from 'lwc';

export default class Lightningtreegrid extends LightningElement {
    @api result
    gridColumns = [
        {
            type: 'text',
            fieldName: 'keyinJSON',
            label: 'Attribute',
            //initialWidth: 300,
        },
        {
            type: 'text',
            fieldName: 'valueinJSON',
            label: 'Value',
        }
    ];
    gridData


    parent = []
    
    connectedCallback() {
        this.Jsonparsed = [this.result]
        console.log("isArray JSON parsed " , this.Jsonparsed instanceof Array)
        console.log("Json going for processing",JSON.stringify(this.Jsonparsed))
        this.parent = this.processTree(this.Jsonparsed, this.parent)
        this.gridData = this.parent;
    }

    name = '123557'
    processTree(Jsonparsed, parent) {
        if(Jsonparsed instanceof Array){
            Jsonparsed.forEach(element => {
            let count = 1
            for (let key in element) {
                if( element[key]==null || element[key].length == 0){
                    parent.push({ name: this.name + '-' + String(count), keyinJSON: key, valueinJSON: "null" })
                    count += 1
                }
                else if (typeof element[key] != "object" && typeof element[key] != "array") {
                    parent.push({ name: this.name + '-' + String(count), keyinJSON: key, valueinJSON: element[key] })
                    count += 1
                }
                else {
                    let temp = this.name
                    this.name = this.name + '-' + String(count)
                    parent.push({ name: this.name, keyinJSON: key, _children: this.processTree(element[key], []) })
                    count += 1
                    this.name = temp
                }
            }
        });}
        return parent;
    }


}