import { LightningElement } from 'lwc';
import sobjectDescribe from '@salesforce/apex/sobjectDescribe.sobjectDescribe';
export default class SobjectDescribe extends LightningElement {
    sobject
    result
    onclickHandler(){
    sobjectDescribe({objectApiName :this.sobject}).then(result=>{
        this.result=result
        console.log(JSON.stringify(this.result))
    }).catch(error=>{
        console.log(error)
    })
    }
    changeHandler(event){
        this.sobject=event.target.value
    }
}