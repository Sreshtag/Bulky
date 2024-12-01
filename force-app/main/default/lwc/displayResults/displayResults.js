import { LightningElement ,api} from 'lwc';

export default class DisplayResults extends LightningElement {
    @api results
    successfulResults
    failedResults
    unprocessedrecords
    renderedCallback(){
        if(this.results!=undefined){
            
        }
    }
}