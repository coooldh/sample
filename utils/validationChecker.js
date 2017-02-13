function validationChecker() {
}

validationChecker.qnaForm = function(input) {
    console.log(input);
    console.log("here1");
    if(input.title == null | input.body == null)
        return false;

    console.log("here2");
    if(input.title.length < 10  || input.title.length > 50)
        return false;


    console.log("here3");
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
