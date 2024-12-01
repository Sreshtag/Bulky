public with sharing class sobjectDescribe {
    @AuraEnabled
    public static String sobjectDescribe(String objectApiName) {
        Http h= new Http();
        HttpRequest req = new HttpRequest();
        HttpResponse res = new HttpResponse();
        req.setMethod('GET');
        req.setEndpoint('callout:BulkyNamed'+'/services/data/v61.0/sobjects/'+objectApiName+'/describe/');
        req.setHeader('Content-Type', 'application/json');
        res= h.send(req);
        return res.getBody();
    }
    @AuraEnabled
    public static String getCustomLabels() {
        Http h= new Http();
        HttpRequest req = new HttpRequest();
        HttpResponse res = new HttpResponse();
        req.setMethod('GET');
        req.setEndpoint('callout:BulkyNamed'+'/services/data/v61.0//tooling/query/?q=Select+Id,Name,Value+from+CustomLabel');
        res= h.send(req);
        return res.getBody();
    }
}