<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>ReactJS + RESTful + JWT + PHP(LTI Support)</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

         <?php
        	require_once('./config.php');
        	require_once('./lib/lti.php');
            require_once('./lib/jwt_helper.php');

        	$lti = new Lti($config,true);

            if(!$lti->is_valid()) {
                echo("LTI Not Valid");
        		die();
        	}

            /* Transfer lti information to client */
            $lti_vars = $lti->calldata();

            /* Create JWT Token */
            $jwt_token = array();
            $jwt_token['resource_link_id'] = $lti->lti_id();
            $jwt_token['user_id'] = $lti->user_id();
            $jwt_token['course_id'] = $lti_vars['context_id'];
            $jwt_encode_token = JWT::encode($jwt_token, $config['jwt_key']);

        ?>
    </head>
    <body>
    <script type="text/javascript">
        $LTI_VARS = <?php echo json_encode($lti_vars); ?>;
        $JWT_TOKEN = <?php echo json_encode($jwt_encode_token); ?>;

	</script>
    <div id="app"></div>
    <script type="text/javascript" src="./build/bundle.js"></script>
    </body>
</html>
