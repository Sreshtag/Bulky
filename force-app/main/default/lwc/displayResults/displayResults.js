import { LightningElement ,api} from 'lwc';

export default class DisplayResults extends LightningElement {
    @api results

    SuccessResults
    FailedResults
    ProcessedResults
    renderedCallback(){
        console.log(JSON.stringify(this.results))
    }
    
}