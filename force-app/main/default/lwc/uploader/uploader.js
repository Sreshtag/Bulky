import { LightningElement } from 'lwc';
import createJob from '@salesforce/apex/createJob.createJob'
import getObjects from '@salesforce/apex/createJob.getObjects'
import jobStatus from '@salesforce/apex/jobStatus.jobStatus'
import getResults from '@salesforce/apex/jobStatus.getResults'

export default class Uploader extends LightningElement {
  requestState = true
  ResponseState = false
  col
  errortem = false
  JobId = ''
  upsert = false
  dataInTable
  columns
  sendString = ""
  operationInfo = { "operation": 'insert', "object": 'Account', "contentType": "CSV", "lineEnding": "CRLF" }
  customSettings=[]
  objects = []
  statusofJob
  
  
  connectedCallback() {
     this.getObjectData()
  }

  getObjectData(){
    return getObjects().then(result => {
      const objRecs = JSON.parse(result).records
      objRecs.forEach(object => {
        if (object.IsCustomSetting) {
          this.customSettings.push(object.QualifiedApiName)
        }
        else {
          this.objects.push({ label: object.QualifiedApiName, value: object.QualifiedApiName })
        }
        console.log("try block in connected callback")
      });
    }).catch(error => {
      console.log("error block in connected callback",error)
    })

  }

   get operations() {
     return [
       { label: 'Insert', value: 'insert' },
       { label: 'Update', value: 'update' },
       { label: 'Upsert', value: 'upsert' },
       { label: 'Delete', value: 'delete' },
     ];
   }

  get customSettings(){

  }

  handleupsert(event) {
    this.operationInfo.externalIdFieldName = event.target.value
  }

  changeHandler(event) {
    const {name,value} = event.target
    if(name == "operation"){
      this.operationInfo.operation = value
    }
    else if(name =="object"){
      this.operationInfo.object = value
    }
    else if(name =="Input") {
    const coloumns = []
    const data = []
    const arr = event.target.value.split('\n');
    this.col = arr[0].split("\t")
    this.sendString += this.col.join(",") + "\r\n"
    this.col.forEach(element => {
      coloumns.push({ label: element, fieldName: element, type: 'text' })
    });
    for (let i = 1; i < arr.length; i++) {
      const tableData = {}
      const linedata = arr[i].split("\t")
      this.sendString += linedata.join(",") + "\r\n"
      if (coloumns.length == linedata.length) {
        for (let j = 0; j < coloumns.length; j++) {
          tableData[coloumns[j].fieldName] = linedata[j]
        }
        data.push(tableData)
      }
    }
    this.dataInTable = data
    this.columns = coloumns
  }}
  handleOnclick(event) {
    event.preventDefault()
    createJob({ Body: this.sendString, operationInfo: JSON.stringify(this.operationInfo) }).then(result => {
      this.requestState = false
      this.ResponseState = true
      this.JobId = result
    }).catch(error => {
      console.log(error)
      this.errortem = true
    })
  }
  getJobStatus(){
    jobStatus({JobId: this.JobId}).then(result=>{this.statusofJob=result}).catch(error=>{console.log(error)})
  }
  Results
  getresult(){
    getResults({ JobId: this.JobId , State : this.statusofJob} ).then(result=>{
      this.Results = result
    }).catch(error=>{
      console.log(error)
    })
  }

}