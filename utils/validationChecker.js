function validationChecker() {
}

validationChecker.qnaForm = function(input) {

    if(input.title == null | input.body == null)
        return false;

    if(input.title.length < 10  || input.title.length > 50)
        return false;

    if(input.body.length < 20 || input.title.length > 400)
        return false;

    return true;
}

validationChecker.list = function(input) {
    if(input.limit == null || input.offset == null)
        return false;

    if(input.limit < 0)
        return false;

    return true;
}

module.exports = validationChecker;
