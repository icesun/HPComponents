<?php
    $config = array(
        'lti_keys'=>array(
            'YOUR_CLIENT_KEY'=>'YOUR_CLIENT_SECRET'

        ),
        'use_db' => true,        
        'db_meta'=>array(
            'dbengine'=>'MySQL',
            'charset'=>'utf8',

            'hostname'=>'localhost',
            'username'=>'YOUR_DB_USERNAME',
            'password'=>'YOUR_DB_PASSWORD',
            'database'=>'YOUR_DB_NAME',
        ),
        'authenticator' => 'verify_LTI_JWT',
        'jwt_key' => 'JWT_SECRET',

    );
?>
