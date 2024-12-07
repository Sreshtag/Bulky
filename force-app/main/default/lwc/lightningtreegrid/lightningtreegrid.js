import { LightningElement } from 'lwc';
import {
    EXAMPLES_COLUMNS_DEFINITION_BASIC,
    EXAMPLES_DATA_BASIC,
} from './sampleData';



export default class Lightningtreegrid extends LightningElement {
    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;
    gridData = EXAMPLES_DATA_BASIC;
    
}