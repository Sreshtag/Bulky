public with sharing class jobStatus {
    @AuraEnabled
    public static string jobStatus(String JobId){
        try {
            Http h= new Http();
            HttpRequest req = new HttpRequest();
            HttpResponse res = new HttpResponse();
            req.setMethod('GET');
            req.setEndpoint('callout:BulkyNamed'+'/services/data/v61.0/jobs/ingest/'+JobId);
            req.setHeader('Content-Type', 'application/json');
            res= h.send(req);
			Map<String, Object> m =   (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
            String state=(String) m.get('state');
            return state;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static Map<String,String> getResults(String JobId, String State){
        Map<String,String> Results = new Map<String,String>();
        try {
            Http h= new Http();
            HttpRequest req = new HttpRequest();
            HttpResponse res = new HttpResponse();
            req.setMethod('GET');
            req.setEndpoint('callout:BulkyNamed'+'/services/data/v61.0/jobs/ingest/'+JobId+'/successfulResults');
            res= h.send(req);
            Results.put('successfulResults',res.getBody());
            req.setEndpoint('callout:BulkyNamed'+'/services/data/v61.0/jobs/ingest/'+JobId+'/failedResults');
            res= h.send(req);
            Results.put('failedResults',res.getBody());
            req.setEndpoint('callout:BulkyNamed'+'/services/data/v61.0/jobs/ingest/'+JobId+'/unprocessedrecords');
            res= h.send(req);
            Results.put('unprocessedrecords',res.getBody());
            system.debug('Results from Function call'+Results);
            return Results;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}