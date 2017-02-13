var validationChecker = require(UTIL_PATH + "/validationChecker");

function postQuestion(input, cb) {

    var async = require('async');

    async.waterfall([
        function(w_cb) {
            if(validationChecker.qnaForm(input) != true) {
                w_cb(RES_E400);
            }
            else {
                w_cb(null);
            }
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["POST_QNA"] + ";"  + QUERY["GET_ID"], [input.title, input.body], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][postQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            w_cb(null, result[1][0].id);
                        }
                    });
                }
            });
        },
        function(id, w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    async.each(input.answers, function(item, e_cb){
                          connection.query(QUERY["POST_ANS"] , [id, item.lawyer, item.body], function(err, result) {
                            if (err) {
                                logger.error("[service][POST_ANS][Err] " + err);
                                e_cb(RES_E500);
                            }
                            else {
                                e_cb();
                            }
                        });
                    },
                    function(err) {

                        connection.release();

                        if(err) {
                            w_cb(RES_E500);
                        }
                        else {
                            w_cb(null, id);
                        }
                    });
                }
            });
        },
        function(id, w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {

                    logger.debug(id);

                    connection.query(QUERY["ARTICLE_QNA"], [id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][postQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            logger.debug(result);
                            w_cb(null, result[0]);
                        }
                    });
                }
            });
        },
        function(article, w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["ARTICLE_ANS"], [article.id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][postQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            article.answers = result;

                            var cacheKey = "LIST*";
                            delWildcard(cacheKey, function() {
                                w_cb(null, article);
                            });
                        }
                    });
                }
            });
        }
    ],
    function(err, result) {
        if(err) {
            cb(err, null);
        }
        else {
            cb(RES_OK, result);
        }
    });
}

function getQuestionList(input, cb) {

    var async = require('async');

    async.waterfall([
        function(w_cb) {

            if(input.limit == null)
                input.limit = 16;

            if(!validationChecker.list(input)) {
                w_cb(RES_E400);
            }
            else {
                w_cb(null);
            }
        },
        function(w_cb) {
            var cacheKey = "LIST:" + input.offset + "_" + input.limit;
            redis.get(cacheKey, function (err, cacheInfo) {

                if (err) {
                    logger.error('[ERROR] redis error', err);
                    w_callback(RES_E500, null);
                }
                else {

                    if(cacheInfo == null) {
                        w_cb(null);
                    }
                    else {
                        logger.debug("CACHED");
                        w_cb(RES_OK, JSON.parse(cacheInfo));
                    }
                }
            });
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["LIST_QNA"], [parseInt(input.offset), parseInt(input.limit)], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][postQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            logger.debug("LIST" + result);
                            w_cb(null, result);
                        }
                    });
                }
            });
        },
        function(article, w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    logger.debug("id : " + article.id);

                    async.each(article, function(item, e_cb){
                          connection.query(QUERY["ARTICLE_ANS"] , [item.id], function(err, result) {
                            if (err) {
                                logger.error("[service][ARTICLE_ANS][Err] " + err);
                                e_cb(RES_E500);
                            }
                            else {
                                item.answers = result;
                                e_cb();
                            }
                        });
                    },
                    function(err) {
                        connection.release();
                        if(err) {
                            w_cb(RES_E500);
                        }
                        else {
                            if(article.length > 0) {
                                var cacheKey = "LIST:" + input.offset + "_" + input.limit;
                                redis.set(cacheKey, JSON.stringify(article));
                                redis.expire(cacheKey, 60 * 5);
                            }

                            w_cb(null, article);
                        }
                    });
                }
            });
        }
    ],
    function(err, result) {
        if(err && err != 200) {
            cb(err, null);
        }
        else {
            cb(RES_OK, result);
        }
    });
}

function getQuestion(id, input, cb) {
    var async = require('async');

    async.waterfall([
        function(w_cb) {
            if(id == null) {
                w_cb(RES_E400);
            }
            else {
                w_cb(null);
            }
        },
        function(w_cb) {
            var cacheKey = "ARTICLE:" + id;
            redis.get(cacheKey, function (err, cacheInfo) {

                if (err) {
                    logger.error('[ERROR] redis error', err);
                    w_callback(RES_E500, null);
                }
                else {

                    if(cacheInfo == null) {
                        w_cb(null);
                    }
                    else {
                        logger.debug("CACHED");
                        w_cb(RES_OK, JSON.parse(cacheInfo));
                    }
                }
            });
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {

                    connection.query(QUERY["ARTICLE_QNA"], [id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][getQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {

                            if(result[0] != null) {
                                w_cb(null, result[0]);
                            }
                            else {
                                w_cb(RES_E404);
                            }
                        }
                    });
                }
            });
        },
        function(article, w_cb) {
             pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["ARTICLE_ANS"], [article.id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][postQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            article.answers = result;

                            if(result[0] != null) {
                                var cacheKey = "ARTICLE:" + id;
                                redis.set(cacheKey, JSON.stringify(article));
                                redis.expire(cacheKey, 60 * 5);
                            }

                            w_cb(null, article);
                        }
                    });
                }
            });
        }
    ],
    function(err, result) {
        if(err && err != 200) {
            cb(err, null);
        }
        else {
            cb(RES_OK, result);
        }
    });
}

function modifyQuestion(id, input, cb) {

    var async = require('async');

    async.waterfall([
        function(w_cb) {
            if(validationChecker.qnaForm(input) != true) {
                w_cb(RES_E400);
            }
            else if(id == null) {
                w_cb(RES_E400);
            }
            else {
                w_cb(null);
            }
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {

                    connection.query(QUERY["ARTICLE_QNA"], [id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][ARTICLE_QNA][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {

                            if(result[0] != null) {
                                w_cb(null);
                            }
                            else {
                                w_cb(RES_E404);
                            }
                        }
                    });
                }
            });
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["UPDATE_QNA"], [input.title, input.body, id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][UPDATE_QNA][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            w_cb(null);
                        }
                    });
                }
            });
        },
        function(w_cb) {
             pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["DELETE_ANS"], [id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][DELETE_ANS][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            w_cb(null);
                        }
                    });
                }
            });
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    async.each(input.answers, function(item, e_cb){
                          connection.query(QUERY["POST_ANS"] , [id, item.lawyer, item.body], function(err, result) {
                            if (err) {
                                logger.error("[service][POST_ANS][Err] " + err);
                                e_cb(RES_E500);
                            }
                            else {
                                e_cb();
                            }
                        });
                    },
                    function(err) {

                        connection.release();

                        if(err) {
                            w_cb(RES_E500);
                        }
                        else {
                            w_cb(null, id);
                        }
                    });
                }
            });
        },
        function(id, w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["ARTICLE_QNA"], [id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][postQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            logger.debug(result);
                            w_cb(null, result[0]);
                        }
                    });
                }
            });
        },
        function(article, w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["ARTICLE_ANS"], [article.id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][postQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            article.answers = result;

                            var cacheKey = "LIST*";
                            delWildcard(cacheKey, function() {
                                cacheKey = "ARTICLE:" + article.id;
                                redis.del(cacheKey);
                                w_cb(null, article);
                            });
                        }
                    });
                }
            });
        }

    ],
    function(err, result) {
        if(err) {
            cb(err, null);
        }
        else {
            cb(RES_OK, result);
        }
    });
}

function deleteQuestion(id, cb) {
     var async = require('async');

    async.waterfall([
       function(w_cb) {
            if(id == null) {
                w_cb(RES_E400);
            }
            else {
                w_cb(null);
            }
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {

                    connection.query(QUERY["ARTICLE_QNA"], [id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][ARTICLE_QNA][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {

                            if(result[0] != null) {
                                w_cb(null);
                            }
                            else {
                                w_cb(RES_E404);
                            }
                        }
                    });
                }
            });
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["DELETE_ANS"] + ";" + QUERY["DELETE_QNA"], [id, id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][postQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            var cacheKey = "LIST*";
                            delWildcard(cacheKey, function() {
                                cacheKey = "ARTICLE:" + id;
                                redis.del(cacheKey);
                                w_cb(null);
                            });
                        }
                    });
                }
            });
        }
    ],
    function(err, result) {
        if(err) {
            cb(err, null);
        }
        else {
            cb(RES_204, result);
        }
    });
}

function export3rd(id, cb) {
     var async = require('async');

    async.waterfall([
        function(w_cb) {
            if(id == null) {
                w_cb(RES_E400);
            }
            else {
                w_cb(null);
            }
        },
        function(w_cb) {
            var cacheKey = "ARTICLE:" + id;
            redis.get(cacheKey, function (err, cacheInfo) {

                if (err) {
                    logger.error('[ERROR] redis error', err);
                    w_callback(RES_E500, null);
                }
                else {

                    if(cacheInfo == null) {
                        w_cb(null);
                    }
                    else {
                        logger.debug("CACHED");
                        w_cb(RES_OK, JSON.parse(cacheInfo));
                    }
                }
            });
        },
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {

                    connection.query(QUERY["ARTICLE_QNA"], [id], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][getQuestion][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {

                            if(result[0] != null) {
                                w_cb(null, result[0]);
                            }
                            else {
                                w_cb(RES_E404);
                            }
                        }
                    });
                }
            });
        },
        function(article, w_cb) {
            var netConnector = require(LIB_PATH + "/netConnector");
            var url = "https://k8qs29zhf7.execute-api.ap-northeast-2.amazonaws.com/dev/import?key=b5e9231e";

            delete article.createAt;
            delete article.updatedAt;

            netConnector.httpRequest(url, netConnector.POST, article, function(success, response) {
                if (success == false) {
                    logger.error('[ERROR] [sendRequest] ');
                    w_cb(RES_E500);
                }
                else {
                    logger.debug('[SUCCESS] [sendRequest]  ' +  response);

                    if(response != 204)
                        w_cb(response);
                    else
                        w_cb(null);
                }
            });
        }
    ],
    function(err, result) {
         if(err) {
            cb(err, null);
        }
        else {
            cb(RES_204, result);
        }
    });
}

function exportCsv(cb) {

    var async = require('async');

    async.waterfall([
        function(w_cb) {
            pool.getConnection(function(err, connection) {
                if(err) {
                    logger.error("[WARN] DB POOL'S CONNECTIONS EXCEED LIMIT");
                    cb(RES_E500);
                }
                else {
                    connection.query(QUERY["LIST_QNA_ALL"], function(err, result) {
                        connection.release();

                        if (err) {
                            logger.error("[service][LIST_QNA_ALL][Err] " + err);
                            w_cb(RES_E500);
                        }
                        else {
                            w_cb(null, result);
                        }
                    });
                }
            });
        },
        function(data, w_cb) {
            var csv = "\"질문 ID\", \"질문 제목\", \"질문 본문\", \"게시물 작성일\", \"게시물 작성일\", \"답변 변호사\"<br>";

            async.each(data, function(item, e_cb){
                csv += "\"" + item.id + "\", \"" + item.title + "\", \"" + item.body + "\", \"" + item.createAt + "\", \""  + item.updatedAt + "\", \"" + item.lawyer + "\"<br>";
                e_cb();
            },
            function(err) {
                if(err) {
                    w_cb(RES_E500);
                }
                else {
                    w_cb(null, csv);
                }
            });
        }
    ],
    function(err, result) {
         if(err) {
            cb(err, null);
        }
        else {
            cb(RES_204, result);
        }
    });
}

function delWildcard(key, callback) {

    var async = require('async');

    redis.keys(key, function(err, rows) {
        async.each(rows, function(row, callbackDelete) {
            redis.del(row, callbackDelete)
        }, callback)
    });
}

module.exports = {
    postQuestion : postQuestion,
    getQuestionList : getQuestionList,
    getQuestion : getQuestion,
    modifyQuestion : modifyQuestion,
    deleteQuestion : deleteQuestion,
    export3rd : export3rd,
    exportCsv : exportCsv
}
