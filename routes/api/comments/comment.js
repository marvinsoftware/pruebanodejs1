
//require('../../../db');
const comentarios = require('express').Router();

comentarios.get('/', (req, res)=>{

    
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

         
        conn.query('SELECT * FROM comments', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        });
    });
   
   
   

});

comentarios.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO  comments set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);

            res.send('Comment Creado');
        });
    });
      
});

comentarios.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE  FROM comments WHERE id = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Comment Eliminado');
        });
    });
   
});

comentarios.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE  comments set ? WHERE id = ?',[req.body,req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Comment Actualizado');
        });
    });
   
});


module.exports = comentarios;