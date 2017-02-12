var express = require('express');
var router = express.Router();
var service = require(SERVICE_PATH + "/service");

router.get("/", function(req, res) {
    res.render("index");
});

router.post("/qna", function(req, res) {
    service.postQuestion(req.body, function(code, result){
        logger.debug("code : " + code);
        res.json(result);
    });
});

router.get("/qna", function(req, res) {
     service.getQuestionList(req.query, function(code, result){
        logger.debug("result : " + result);
        res.json(result);
    });
});

router.get("/qna/:id", function(req, res) {
     service.getQuestion(req.params.id, req.query, function(code, result){
        logger.debug("result : " + result);
        res.json(result);
    });
});

router.put("/qna/:id", function(req, res) {
     service.modifyQuestion(req.params.id, req.body, function(code, result){
        logger.debug("code : " + code);
        logger.debug("result : " + result);
        res.json(result);
    });
});

router.delete("/qna/:id", function(req, res) {
     service.deleteQuestion(req.params.id, function(code, result){
        logger.debug("code : " + code);
        logger.debug("result : " + result);
        res.json(result);
    });
});

router.post("/qna/:id/export", function(req, res) {
    service.export3rd(req.params.id, function(code, result){
        logger.debug("code : " + code);
        res.json(result);
    });
});

router.get("/qna.csv", function(req, res) {
     service.exportCsv(function(code, result){
        logger.debug("result : " + result);
        res.send(result);
    });
});

module.exports = router;