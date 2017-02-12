global.QUERY =
    {
        "POST_QNA" : "INSERT INTO t_question(title, body, createAt, updatedAt) VALUES(?, ?, NOW(), NOW())",
        "POST_ANS" : "INSERT INTO t_answer(question_id, lawyer, body) VALUES(?, ?, ?)",
        "UPDATE_QNA" : "UPDATE t_question SET title=?, body=? WHERE id=?",
        "DELETE_QNA" : "DELETE FROM t_question WHERE id=?",
        "DELETE_ANS" : "DELETE FROM t_answer WHERE question_id=?",
        "LIST_QNA" : "SELECT * FROM t_question ORDER BY id DESC LIMIT ?, ?",
        "LIST_QNA_ALL" : "SELECT t.*, (SELECT lawyer FROM t_answer WHERE question_id=t.id LIMIT 0, 1) as lawyer FROM (SELECT id, title, body, createAt, updatedAt FROM t_question ORDER BY id DESC) as t",
        "ARTICLE_QNA" : "SELECT * FROM t_question WHERE id=?",
        "ARTICLE_ANS" : "SELECT lawyer, body FROM t_answer WHERE question_id=?",
        "GET_ID" : "SELECT (`AUTO_INCREMENT` - 1) AS id FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'TEST'  AND TABLE_NAME = 't_question'"
    }
