import { LightningElement } from 'lwc';
import getcustomlabels from '@salesforce/apex/sobjectDescribe.getCustomLabels'

export default class CustomLabels extends LightningElement {
    result
    data
    columns
    connectedCallback(){
        const columns=[{ label: 'Id', fieldName: 'Id' },
        { label: 'Name', fieldName: 'Name'},
        { label: 'Value', fieldName: 'Value'}]
        const data=[]
        getcustomlabels().then(result=>{
            this.result=JSON.parse(result).records
            Array.from(this.result).forEach(element => {
                data.push({Id:element.Id,Name:element.Name,Value:element.Value})
            });
            this.data=data
            this.columns=columns
        }).catch(error=>{console.log(error)})
    }
    renderedCallback(){
        console.log(JSON.stringify(this.data))
    }
    
}